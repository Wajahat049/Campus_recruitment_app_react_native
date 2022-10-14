import * as React from 'react';
import { View, Text, ScrollView, TouchableHighlight, Alert, FlatList, ToastAndroid } from 'react-native';
import { useState, useEffect } from 'react';
import database from "@react-native-firebase/database";
import { DataTable, Provider, Paragraph, Dialog, Portal, Button } from 'react-native-paper';
import { connect } from "react-redux"






function CompaniesInfo(props) {
  const [theelement, settheelement] = useState({})
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const [refresh, setRefresh] = useState(false);
  const [info, setinfo] = useState([]);


  const deleteInfo = (uid) => {
    Alert.alert(
      "Delete Company",
      "Are you sure you want to delete this Company data?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK", onPress: () => database().ref('/Companies/' + uid).remove().then(hideDialog(),
            setRefresh(!refresh)
          )
        }
      ]
    );



  }

  global.DATA = []

  useEffect(() => {
    console.log("USER", props.User)

    var keyss = []
    database().ref('/Companies').once("value").then(snapshot => {
      var result = snapshot.val();
      console.log("result", result)
      var keys = Object.entries(result)
      for (var i = 0; i < keys.length; i++) {
        var value = keys[i][1]
        value.uid = keys[i][0]
        keyss.push(value)
      }
      setinfo(keyss)
      console.log("keyss", keyss)
    })

  }, [])






  const onpressFunc = (element) => {
    settheelement(element)
    showDialog()

  }

  // const Apply = (element) => {
  //   database().ref('/Companies/' + element + "/Requests/").push({
  //     Name: props.Student.Name,
  //     Email: props.Student.Name,
  //     // jobTile: props.Student.Name,
  //     // jobExperience: props.Student.Name,
  //     // jobSalary: props.Student.Name,
  //     // jobDescription: props.Student.Name,
  //   })
  //   hideDialog()
  //   ToastAndroid.show("Applied successfully",ToastAndroid.SHORT)

  // }

  const renderingItem = (element, index) => {
    console.log("element", element.item)
    return (
      <TouchableHighlight style={{ backgroundColor: "white" }} key={index} onPress={() => onpressFunc(element.item)}>
        <View>
          <DataTable.Row style={{ padding: 20, borderColor: "#00b8e6", borderWidth: 1 }}>
            <DataTable.Cell > <Text style={{ color: "#00b8e6", }}> {element.item.Name} </Text> </DataTable.Cell>
            <DataTable.Cell > <Text style={{ color: "#00b8e6" }}> {element.item.email} </Text> </DataTable.Cell>
            <DataTable.Cell > <Text style={{ color: "#00b8e6", }}> {element.item.location} </Text> </DataTable.Cell>
          </DataTable.Row>

          <Portal>
            <Dialog style={{ backgroundColor: "white" }} visible={visible} onDismiss={hideDialog}>
              <Dialog.Title style={{ fontSize: 25, fontWeight: "bold", color: "#00b8e6" }}>Company Information</Dialog.Title>
              <Dialog.Content >
                <Paragraph style={{ fontSize: 16, color: "gray", fontWeight: "bold", }}>Company Name : <Text style={{ color: "gray" }}> {theelement.Name} </Text> </Paragraph>
                <Paragraph style={{ fontSize: 16, color: "gray", fontWeight: "bold", }}>Email : <Text style={{ color: "gray" }}> {theelement.email} </Text> </Paragraph>
                <Paragraph style={{ fontSize: 16, color: "gray", fontWeight: "bold", }}>Location : <Text style={{ color: "gray" }}> {theelement.location} </Text> </Paragraph>
                <Paragraph style={{ fontSize: 16, color: "gray", fontWeight: "bold", }}>Contact No. : <Text style={{ color: "gray" }}> {theelement.phone} </Text> </Paragraph>
                <Paragraph style={{ fontSize: 16, color: "gray", fontWeight: "bold", }}>Web Link : <Text style={{ color: "gray" }}> {theelement.webLink} </Text> </Paragraph>
                <Paragraph style={{ fontSize: 16, color: "gray", fontWeight: "bold", }}>Description : <Text style={{ color: "gray" }}> {theelement.companyDescription} </Text> </Paragraph>
              </Dialog.Content>

              <Dialog.Actions style={{ justifyContent: "space-around", marginBottom: 20 }} >
                {props.User == "Admin" ?
                  <Button color='white' style={{ backgroundColor: "#00b8e6", }} mode="outlined" onPress={() => deleteInfo(theelement.uid)}>
                    Delete
                  </Button>
                  : null
                }
                {/* {props.User != "Admin" ?
                  <Button color='white' style={{ backgroundColor: "#00b8e6", }} mode="outlined" onPress={() => Apply(theelement.uid)}>
                    Apply
                  </Button>
                  : null
                } */}
                <Button color='white' style={{ backgroundColor: "#00b8e6", }} mode="outlined" onPress={hideDialog}>
                  Close
                </Button>

              </Dialog.Actions>
            </Dialog>
          </Portal>
        </View>


      </TouchableHighlight>


    )
  }
  return (
    <Provider>
      <DataTable>
        <DataTable.Header style={{ backgroundColor: "#00b8e6", borderColor: "#00b8e6", borderWidth: 2, }}>
          <DataTable.Title> <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}> COMPANY </Text> </DataTable.Title>
          <DataTable.Title > <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}> EMAIL </Text></DataTable.Title>
          <DataTable.Title > <Text style={{ color: "white", fontWeight: "bold", fontSize: 14 }}> LOCATION </Text></DataTable.Title>
        </DataTable.Header>

        <FlatList
          data={info}
          renderItem={renderingItem}
          keyExtractor={element => element.email}

        />
      </DataTable>

    </Provider>
  )
}

function mapStateToProps(state) {
  return {
    User: state.User,
    Student: state.Student
  }
}



export default connect(mapStateToProps)(CompaniesInfo);


import * as React from 'react';
import { View, Text, ScrollView, TouchableHighlight, Alert, FlatList } from 'react-native';
// import {SearchBar,Icon} from "react-native-elements";
import { useState, useEffect } from 'react';
import database from "@react-native-firebase/database";
import { DataTable, Provider, Paragraph, Dialog, Portal, Button } from 'react-native-paper';
import { connect } from "react-redux"






function CompaniesInfo(props) {
  const [theelement, settheelement] = useState({})
  const [visible, setVisible] = React.useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  const [info, setinfo] = useState([]);


  const deleteInfo = (uid) => {
    Alert.alert(
      "Delete Student",
      "Are you sure you want to delete this Company data?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => database().ref('/Companies/' + uid).remove().then(hideDialog()) }
      ]
    );



  }

  global.DATA = []

  useEffect(() => {

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

  const Apply = (element) => {
    var email = props.Student.Email
    var splitEmail = email.split("@")
    database().ref('/Companies/' + element + "/Requests/" + splitEmail[0]).update(props.Student)
    hideDialog()

    // database().ref('/Companies/Job_Hiring').push(element)

  }

  const renderingItem = (element, index) => {
    console.log("element", element.item.Name)
    return (
      <>
        <TouchableHighlight style={{ backgroundColor: "#00b8e6" }} key={index} onPress={() => onpressFunc(element.item)}>
          <View>
            <DataTable.Row style={{padding: 20, borderColor: "white", borderWidth: 1}}>
              <DataTable.Cell >{element.item.Name}</DataTable.Cell>
              <DataTable.Cell >{element.item.job}</DataTable.Cell>
              <DataTable.Cell >{element.item.description}</DataTable.Cell>

            </DataTable.Row>

            <Portal>
              <Dialog style={{ backgroundColor: "white" }} visible={visible} onDismiss={hideDialog}>
                <Dialog.Title style={{ fontSize: 25, fontWeight: "bold", color: "#00b8e6" }}>Company Information</Dialog.Title>
                <Dialog.Content >
                  <Paragraph style={{ fontSize: 16, color: "#00b8e6" }}>Company Name : <Text style={{ fontWeight: "bold", color: "#00b8e6" }}> {theelement.Name} </Text> </Paragraph>
                  <Paragraph style={{ fontSize: 16, color: "#00b8e6" }}>Email : <Text style={{ fontWeight: "bold", color: "#00b8e6" }}> {theelement.email} </Text> </Paragraph>
                  <Paragraph style={{ fontSize: 16, color: "#00b8e6" }}>Job : <Text style={{ fontWeight: "bold", color: "#00b8e6" }}> {theelement.job} </Text> </Paragraph>
                  <Paragraph style={{ fontSize: 16, color: "#00b8e6" }}>Experience : <Text style={{ fontWeight: "bold", color: "#00b8e6" }}> {theelement.experience} </Text> </Paragraph>
                  <Paragraph style={{ fontSize: 16, color: "#00b8e6" }}>Salary : <Text style={{ fontWeight: "bold", color: "#00b8e6" }}> {theelement.salary} </Text> </Paragraph>
                  <Paragraph style={{ fontSize: 16, color: "#00b8e6" }}>Description : <Text style={{ fontWeight: "bold", color: "#00b8e6" }}> {theelement.description} </Text> </Paragraph>
                </Dialog.Content>

                <Dialog.Actions style={{ justifyContent: "space-around", marginBottom: 20 }} >
                  <Button color='white' style={{ backgroundColor: "#00b8e6", }} mode="outlined" onPress={() => deleteInfo(theelement.uid)}>
                    Delete
                  </Button>
                  <Button color='white' style={{ backgroundColor: "#00b8e6", }} mode="outlined" onPress={() => Apply(theelement.uid)}>
                    Apply
                  </Button>
                  <Button color='white' style={{ backgroundColor: "#00b8e6", }} mode="outlined" onPress={hideDialog}>
                    Close
                  </Button>

                </Dialog.Actions>
              </Dialog>
            </Portal>
          </View>


        </TouchableHighlight>
      </>

    )
  }
  return (
    <Provider>
      <DataTable>
        <DataTable.Header style={{ backgroundColor: "#00a3cc", borderColor: "#00a3cc", borderWidth: 2, }}>
          <DataTable.Title >COMPANY</DataTable.Title>
          <DataTable.Title >JOB</DataTable.Title>
          <DataTable.Title >DESCRIPTION</DataTable.Title>
        </DataTable.Header>

        <FlatList
          data={info}
          renderItem={renderingItem}
          keyExtractor={element => element.Email}

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


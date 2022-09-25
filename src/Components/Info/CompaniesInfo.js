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
    console.log("USER",props.User)

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
        <TouchableHighlight style={{ backgroundColor: "white" }} key={index} onPress={() => onpressFunc(element.item)}>
          <View>
            <DataTable.Row style={{padding: 20, borderColor: "#00b8e6", borderWidth: 1}}>
              <DataTable.Cell > <Text style={{color: "#00b8e6",}}> {element.item.Name} </Text> </DataTable.Cell>
              <DataTable.Cell > <Text style={{color: "#00b8e6"}}> {element.item.job} </Text> </DataTable.Cell>
              <DataTable.Cell > <Text style={{color: "#00b8e6",}}> {element.item.description} </Text> </DataTable.Cell>
            </DataTable.Row>

            <Portal> 
              <Dialog style={{ backgroundColor: "white" }} visible={visible} onDismiss={hideDialog}>
                <Dialog.Title style={{ fontSize: 25, fontWeight: "bold", color: "#00b8e6" }}>Company Information</Dialog.Title>
                <Dialog.Content >
                  <Paragraph style={{ fontSize: 16, color: "gray" }}>Company Name : <Text style={{ fontWeight: "bold", color: "gray" }}> {theelement.Name} </Text> </Paragraph>
                  <Paragraph style={{ fontSize: 16, color: "gray" }}>Email : <Text style={{ fontWeight: "bold", color: "gray" }}> {theelement.email} </Text> </Paragraph>
                  <Paragraph style={{ fontSize: 16, color: "gray" }}>Job : <Text style={{ fontWeight: "bold", color: "gray" }}> {theelement.job} </Text> </Paragraph>
                  <Paragraph style={{ fontSize: 16, color: "gray" }}>Experience : <Text style={{ fontWeight: "bold", color: "gray" }}> {theelement.experience} </Text> </Paragraph>
                  <Paragraph style={{ fontSize: 16, color: "gray" }}>Salary : <Text style={{ fontWeight: "bold", color: "gray" }}> {theelement.salary} </Text> </Paragraph>
                  <Paragraph style={{ fontSize: 16, color: "gray" }}>Description : <Text style={{ fontWeight: "bold", color: "gray" }}> {theelement.description} </Text> </Paragraph>
                </Dialog.Content>

                <Dialog.Actions style={{ justifyContent: "space-around", marginBottom: 20 }} >
                  {props.User=="Admin"?
                  <Button color='white' style={{ backgroundColor: "#00b8e6", }} mode="outlined" onPress={() => deleteInfo(theelement.uid)}>
                    Delete
                  </Button>
                    :null
                  }
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
    

    )
  }
  return (
    <Provider>
      <DataTable>
        <DataTable.Header style={{ backgroundColor: "#00b8e6", borderColor: "#00b8e6", borderWidth: 2, }}>
          <DataTable.Title> <Text style={{color: "white", fontWeight: "bold", fontSize: 14}}> COMPANY </Text> </DataTable.Title>
          <DataTable.Title > <Text style={{color: "white", fontWeight: "bold", fontSize: 14}}> JOB </Text></DataTable.Title>
          <DataTable.Title > <Text style={{color: "white", fontWeight: "bold", fontSize: 14}}> DESCRIPTION </Text></DataTable.Title>
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


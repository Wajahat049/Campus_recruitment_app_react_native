import * as React from 'react';
import { View, Text, ScrollView, TouchableHighlight, Alert,FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import database from "@react-native-firebase/database";
import { connect } from "react-redux"
import { DataTable, Provider, Paragraph, Dialog, Portal, Button } from 'react-native-paper';




function StudentsInfo(props) {
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const [theelement, settheelement] = useState({})
  const hideDialog = () => setVisible(false);
  const [info, setinfo] = useState([]);

  const deleteInfo = (uid) => {
    Alert.alert(
      "Delete Student",
      "Are you sure you want to delete this student data?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { text: "OK", onPress: () => database().ref('/Student/' + uid).remove().then(hideDialog()) }
      ]
    );



  }

  global.DATA = []
  var keyss = []

  useEffect(()=>{

  database().ref('/Students').once("value").then(snapshot => {
    var result = snapshot.val();
    var keys = Object.entries(result)
    for (var i = 0; i < keys.length; i++) {
      var value = keys[i][1]
      value.uid = keys[i][0]
      keyss.push(value)
    }
  },[])

    setinfo(keyss)
  })

  const Hire = (element) => {
  var email=props.Company.email
  var splitEmail=email.split("@")
    database().ref('/Student/' + element+"/Offers/"+splitEmail[0]).update(props.Company)
    hideDialog()

  }

  const onpressFunc = (element) => {
    settheelement(element)
    showDialog()

  }

  const renderingItem = (element) => {

    return (

      <TouchableHighlight style={{ backgroundColor: "white" }} key={element.index} onPress={() => onpressFunc(element.item)}>
        <View>
          <DataTable.Row style={{padding: 20, borderColor: "#00b8e6", borderWidth: 1}}>
            <DataTable.Cell  > <Text style={{color: "#00b8e6",}}> {element.item.Name} </Text> </DataTable.Cell>
            <DataTable.Cell > <Text style={{color: "#00b8e6",}}> {element.item.Age} </Text> </DataTable.Cell>
            <DataTable.Cell > <Text style={{color: "#00b8e6",}}> {element.item.Qualification} </Text> </DataTable.Cell>
          </DataTable.Row>

          <Portal >
            <Dialog style={{ backgroundColor: "white" }} visible={visible} onDismiss={hideDialog} >
              <Dialog.Title style={{ fontSize: 25, fontWeight: "bold", color: "#00b8e6" }}>Student Information</Dialog.Title>
              <Dialog.Content >
                <Paragraph style={{ fontSize: 16, color: "gray" }}>Name : <Text style={{ fontWeight: "bold", color: "gray" }}>  {theelement.Name} </Text> </Paragraph>
                <Paragraph style={{ fontSize: 16, color: "gray" }}>Email : <Text style={{ fontWeight: "bold", color: "gray" }}>  {theelement.Email} </Text> </Paragraph>
                <Paragraph style={{ fontSize: 16, color: "gray" }}>Age : <Text style={{ fontWeight: "bold", color: "gray" }}> {theelement.Age} </Text> </Paragraph>
                <Paragraph style={{ fontSize: 16, color: "gray" }}>Qualification :  <Text style={{ fontWeight: "bold", color: "gray" }}> {theelement.Qualification} </Text> </Paragraph>
                <Paragraph style={{ fontSize: 16, color: "gray" }}>Field : <Text style={{ fontWeight: "bold", color: "gray" }}>  {theelement.Field} </Text> </Paragraph>
              </Dialog.Content>

              <Dialog.Actions style={{ justifyContent: "space-around", marginBottom: 20  }} >
                {props.User == "Admin" ?
                  <Button color='white' style={{ backgroundColor: "#00b8e6", }} mode="outlined" onPress={() => deleteInfo(theelement.uid)}>
                    Delete
                  </Button> : <View></View>}

                <Button color='white' style={{ backgroundColor: "#00b8e6", }} mode="outlined" onPress={() =>  Hire(theelement.uid) }>
                  Hire
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
          <DataTable.Title> <Text style={{color: "white", fontWeight: "bold", fontSize: 16}}> Name </Text> </DataTable.Title>
          <DataTable.Title > <Text style={{color: "white", fontWeight: "bold", fontSize: 16}}> Age </Text> </DataTable.Title>
          <DataTable.Title > <Text style={{color: "white", fontWeight: "bold", fontSize: 16}}> Qualification </Text> </DataTable.Title>
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
    Company:state.Company
  }
}



export default connect(mapStateToProps)(StudentsInfo);


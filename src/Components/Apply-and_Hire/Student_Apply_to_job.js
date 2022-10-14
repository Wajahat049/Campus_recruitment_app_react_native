import * as React from 'react';
import { View, Text, ScrollView, TouchableHighlight, Alert, FlatList, ToastAndroid } from 'react-native';
import { useState, useEffect } from 'react';
import database from "@react-native-firebase/database";
import { connect } from "react-redux"
import { Button } from 'react-native-paper';




function Student_apply_to_job(props) {

  const [info, setinfo] = useState([]);
  const [refresh, setRefresh] = useState(false);

  var email = props.Company.email
  console.log(props.Company.email, "email")
  var emailSplit = email.split("@")


  useEffect(() => {

    database().ref(`/Companies/${emailSplit[0]}gmail/Requests`).once("value").then(snapshot => {
      console.log("snapshot.val()", snapshot.val())
      var key = snapshot.val()
      if (key != null) {
        setinfo(Object.values(key))
      console.log("Student Request => ", Object.values(key))
      }
    }
    )

  }, [])

  const Accept = () => {
    ToastAndroid.show("Offer Accepted", ToastAndroid.SHORT)
  }

  const Refuse = (uid) => {
    Alert.alert(
      "Delete Offer",
      "Are you sure you want to delete this Offer?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "OK", onPress: () => database().ref('/Companies/' + uid.split("@")+'gmail/Requests').remove().then(
            setRefresh(!refresh)
          )
        }
      ]
    );



  }


  return (
    <>
      <FlatList
        data={info}
        renderItem={(ele) => {
          if (ele != []) {
            return (
              <>
                <View key={ele.index} style={{ borderColor: "#00b8e6", borderWidth: 3, padding: 10, margin: 10 }}>
                  <Text style={{ fontSize: 16, color: "black", margin: 3 }}>Student Name : <Text style={{ fontWeight: "bold" }}> {ele.item.Name} </Text> </Text>
                  <Text style={{ fontSize: 16, color: "black", margin: 3 }}>Email : <Text style={{ fontWeight: "bold" }}> {ele.item.Email} </Text> </Text>
                  <Text style={{ fontSize: 16, color: "black", margin: 3 }}>Job : <Text style={{ fontWeight: "bold" }}> {ele.item.jobTitle} </Text> </Text>
                  <Text style={{ fontSize: 16, color: "black", margin: 3 }}>Experience : <Text style={{ fontWeight: "bold" }}> {ele.item.jobExperience} </Text> </Text>
                  <Text style={{ fontSize: 16, color: "black", margin: 3 }}>Salary : <Text style={{ fontWeight: "bold" }}> {ele.item.jobSalary} </Text> </Text>
                  <Text style={{ fontSize: 16, marginBottom: 10, color: "black", margin: 3 }}>Description :  <Text style={{ fontWeight: "bold" }}> {ele.item.jobDescription} </Text> </Text>
                  <View style={{ justifyContent: "space-between" }}>
                    <Button onPress={() => Accept()} color='white' style={{ margin: 5, backgroundColor: "#00b8e6", }} >Accept</Button>
                    <Button onPress={() => Refuse(ele.item.Email)} color='white' style={{ margin: 5, backgroundColor: "#00b8e6", }} >Refuse</Button>
                  </View>
                </View>
              </>
            )
          }
          else {
            return (
              <View style={{ backgroundColor: "'#00b8e6'" }}>
                <Text style={{ fontSize: 20, color: "white" }}>No Job Requests</Text>
              </View>
            )
          }


        }}
        keyExtractor={element => element.Email}

      />
    </>
  );


}




function mapStateToProps(state) {
  return {
    Company: state.Company
  }
}



export default connect(mapStateToProps)(Student_apply_to_job)

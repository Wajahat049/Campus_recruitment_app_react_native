import * as React from 'react';
import { View, Text, ScrollView, TouchableHighlight, Alert, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import database from "@react-native-firebase/database";
import { connect } from "react-redux"
import { Button } from 'react-native-paper';




function Company_hire_student(props) {

  const [info, setinfo] = useState([]);
  var email = props.Student.Email
  var emailSplit = email.split("@")

  useEffect(() => {


    database().ref(`/Students/${emailSplit[0]}gmail/Offers`).once("value").then(snapshot => {
      console.log("snapshot.val()", snapshot.val())

      var key = snapshot.val()
      if (key != {}) {
        setinfo(Object.values(key))
      }
    }
    )
  }, [])

  return (
    <>
      <FlatList
        style={{ backgroundColor: "white" }}
        data={info}
        renderItem={(ele) => {
          if (ele != []) {
            return (
              <>
                <View key={ele.index} style={{ borderColor: "#00b8e6", borderWidth: 3, padding: 10, margin: 10 }}>
                  <Text style={{ fontSize: 16, color: "black", margin: 3}}>Company Name : <Text style={{ fontWeight: "bold" }}> {ele.item.Name} </Text> </Text>
                  <Text style={{ fontSize: 16, color: "black", margin: 3}}>Email : <Text style={{ fontWeight: "bold" }}> {ele.item.Email} </Text> </Text>
                  <Text style={{ fontSize: 16, color: "black", margin: 3}}>Job : <Text style={{ fontWeight: "bold" }}> {ele.item.job} </Text> </Text>
                  <Text style={{ fontSize: 16, color: "black", margin: 3}}>Experience : <Text style={{ fontWeight: "bold" }}> {ele.item.experience} </Text> </Text>
                  <Text style={{ fontSize: 16, color: "black", margin: 3}}>Salary : <Text style={{ fontWeight: "bold" }}> {ele.item.salary} </Text> </Text>
                  <Text style={{ fontSize: 16, marginBottom: 10, color: "black", margin: 3 }}>Description :  <Text style={{ fontWeight: "bold" }}> {ele.item.description} </Text> </Text>
                  <View style={{ justifyContent: "space-between" }}>
                    <Button color='white' style={{ margin: 5, backgroundColor: "#00b8e6", }} >Accept</Button>
                    <Button color='white' style={{ margin: 5, backgroundColor: "#00b8e6", }} >Refuse</Button>
                  </View>
                </View>
              </>
            )
          }
          else {
            return (
              <View style={{ backgroundColor: "'#00b8e6'" }}>
                <Text style={{ fontSize: 20, color: "white" }}>No Job Offers</Text>
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
    Student: state.Student
  }
}



export default connect(mapStateToProps)(Company_hire_student)

import * as React from 'react';
import { View, Text, ScrollView, TouchableHighlight, Alert, FlatList, ToastAndroid } from 'react-native';
import { useState, useEffect } from 'react';
import database from "@react-native-firebase/database";
import { connect } from "react-redux"
import { Button } from 'react-native-paper';




function AllJobs(props) {

  const [info, setinfo] = useState([]);


  useEffect(() => {

    database().ref(`/Jobs`).once("value").then(snapshot => {
      var key = snapshot.val()
      if (key != null) {
        setinfo(Object.values(key))
      console.log("All jobs show => ", Object.values(key))
      }
    }
    )

  }, [])

  const Apply = (element) => {
    console.log("ELEMENT APPLY FOR STUDENT", element)
    database().ref('/Companies/' + element.uid + "/Requests/").push({
      Name: props.Student.Name,
      Email: props.Student.Email,
      jobTitle: element.jobTitle,
      jobExperience: element.jobExperience,
      jobSalary: element.jobSalary,
      jobDescription: element.jobDescription,
    })
    ToastAndroid.show("Applied successfully",ToastAndroid.SHORT)

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
                  <Text style={{ fontSize: 16, color: "black", margin: 3 }}> Job Title : <Text style={{ fontWeight: "bold" }}> {ele.item.jobTitle} </Text> </Text>
                  <Text style={{ fontSize: 16, color: "black", margin: 3 }}> Timings : <Text style={{ fontWeight: "bold" }}> {ele.item.jobTiming} </Text> </Text>
                  <Text style={{ fontSize: 16, color: "black", margin: 3 }}> Job Type : <Text style={{ fontWeight: "bold" }}> {ele.item.jobType} </Text> </Text>
                  <Text style={{ fontSize: 16, color: "black", margin: 3 }}> Description : <Text style={{ fontWeight: "bold" }}> {ele.item.jobDescription} </Text> </Text>
                  <Text style={{ fontSize: 16, color: "black", margin: 3 }}>Experience : <Text style={{ fontWeight: "bold" }}> {ele.item.jobExperience} </Text> </Text>
                  <Text style={{ fontSize: 16, color: "black", margin: 3 }}>Salary : <Text style={{ fontWeight: "bold" }}> {ele.item.jobSalary} </Text> </Text>
                  <Text style={{ fontSize: 16, marginBottom: 10, color: "black", margin: 3 }}>Technologies :  <Text style={{ fontWeight: "bold" }}> {ele.item.jobTechnologies} </Text> </Text>
                  <View style={{ justifyContent: "space-between" }}>
                    <Button onPress={() => Apply(ele.item)} color='white' style={{ margin: 5, backgroundColor: "#00b8e6", }} >Apply</Button>
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
    Student: state.Student
  }
}



export default connect(mapStateToProps)(AllJobs)

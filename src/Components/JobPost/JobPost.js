


import React, { useState, useEffect } from 'react';
import {
  View, Text, Button, TextInput, Alert, StyleSheet,
  Image,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
import { connect } from "react-redux"
import { ScrollView, } from 'react-native-gesture-handler';
import database from "@react-native-firebase/database";

function JobPost(props) {

  // states
  const [jobTitle, setJobTitle] = useState("")
  const [jobDescription, setJobDescription] = useState("")
  const [jobExperience, setJobExperience] = useState("")
  const [jobSalary, setJobSalary] = useState("")
  const [jobType, setJobType] = useState("")
  const [jobTiming, setJobTiming] = useState("")
  const [jobTechnologies, setJobTechnologies] = useState("")

  const postJob = () => {

    var email = props.Company.email
    var splitEmail = email.split("@")

    database().ref(`/Jobs`).push().set({
      uid: splitEmail + "gmail",
      jobTitle,
      jobDescription,
      jobExperience,
      jobSalary,
      jobType,
      jobTiming,
      jobTechnologies
    })
      .then(
        ToastAndroid.show("Job post successfully", ToastAndroid.SHORT),
        setJobDescription(""),
        setJobExperience(""),
        setJobSalary(""),
        setJobTechnologies(""),
        setJobTitle(""),
        setJobTiming(""),
        setJobType(""),
      );
  }

  return (

    <ScrollView style={{ backgroundColor: "white", paddingBottom: 30 }}>

      <Image style={{ width: "50%", height: 200, alignSelf: "center", }} source={require("../../Images/jobPostImg.png")} />

      <View>
        <Text style={{ fontSize: 50, color: '#00b8e6', fontWeight: 'bold', textAlign: "center" }}>JOB POST</Text>
      </View>

      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "90%", margin: 20 }}>
        <TextInput onChangeText={(e) => setJobTitle(e)} placeholder="JobTitle" />
      </View>
      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "90%", margin: 20 }}>
        <TextInput onChangeText={(e) => setJobDescription(e)} placeholder="Job Description" />
      </View>
      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "90%", margin: 20 }}>
        <TextInput onChangeText={(e) => setJobExperience(e)} placeholder="Experience" />
      </View>
      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "90%", margin: 20 }}>
        <TextInput onChangeText={(e) => setJobSalary(e)} placeholder="Salary" />
      </View>
      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "90%", margin: 20 }}>
        <TextInput onChangeText={(e) => setJobType(e)} placeholder="Job Type" />
      </View>
      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "90%", margin: 20 }}>
        <TextInput onChangeText={(e) => setJobTiming(e)} placeholder="Timings" />
      </View>
      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "90%", margin: 20, }}>
        <TextInput onChangeText={(e) => setJobTechnologies(e)} placeholder="Technologies" />
      </View>
      <View style={{ margin: 20, width: 110, marginBottom: 50, }}>
        <Button color="#00b8e6" onPress={() => postJob()} title="Submit"></Button>
      </View>

    </ScrollView>
  );
}

function mapStateToProps(state) {
  return {
    Company: state.Company
  }
}




export default connect(mapStateToProps, null)(JobPost)

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.36,
    shadowRadius: 6.68,

    elevation: 11,
    width: "90%",
    height: 70,
    margin: 15,
    borderColor: '#00b8e6',
    borderWidth: 3,
    backgroundColor: '#00b8e6',
    color: '#00b8e6',
    borderRadius: 5,
    flexDirection: "row"
  },
  cardImg: {
    width: 70,
    height: 70,
    marginTop: -5,
    marginLeft: 10
  },
  cardText: {
    textAlign: "center",
    marginTop: 20,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2
  }
})


// jobTitle, jobDescription, jobExperience, jobSalary, jobType, jobTiming, jobTechnologies
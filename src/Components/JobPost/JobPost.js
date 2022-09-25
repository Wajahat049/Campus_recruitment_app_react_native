


import * as React from 'react';
import {
  View, Text, Button, TextInput, Alert, StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { connect } from "react-redux"
import { ScrollView } from 'react-native-gesture-handler';


function JobPost(props) {


  return (

    <ScrollView style={{ backgroundColor: "white", paddingBottom: 30 }}>

      <Image style={{width:"50%",height:50,alignSelf:"center"}} source={{uri:("https://img.freepik.com/free-vector/job-vacancy-background-with-chair-flat-style_23-2147875408.jpg?w=360&t=st=1664126092~exp=1664126692~hmac=e0ce24b1ec0772afd8f242b33fa0ab6addc42b135edcf0d36c6599d389fce04d")}}/>

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


// jobTile, jobDescription, jobExperience, jobSalary, jobType, jobTiming, jobTechnologies
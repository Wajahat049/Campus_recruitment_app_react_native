
import * as React from 'react';
import {
  View, Text, Button, TextInput, Alert, StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { connect } from "react-redux"
import { changeisstudent } from "../../Store/action/index";
import { ScrollView } from 'react-native-gesture-handler';


function Students(props) {

  const LogOut = () => {
    props.changeisstudent({})
    props.navigation.navigate("Home")
  }


  return (

    <ScrollView style={{ backgroundColor: "white", paddingBottom: 30 }}>

      <View style={{ alignItems: 'center', justifyContent: 'center', }}>
        <Image source={require("../../Images/studentDashboard.png")} style={{ height: 300, width: "100%", marginTop: -20}} />

        <View>
          <Text style={{
            fontSize: 30, color: '#00b8e6', fontWeight: 'bold', marginBottom: 20,
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: { width: -1, height: 1 },
            textShadowRadius: 2,
          marginTop: -30
          }}>STUDENT DASHBOARD</Text>
        </View>

        <TouchableOpacity style={styles.card} onPress={() => props.navigation.navigate("StudentProfile")} >
          <Image source={require("../../Images/student-profile.png")} style={styles.cardImg} />
          <Text style={styles.cardText}>
            Student Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => props.navigation.navigate("CompaniesInfo")} >
          <Image source={require("../../Images/company-info.png")} style={{ width: 70, height: 50, margin: 5 }} />
          <Text style={styles.cardText}>
            Company Information
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => props.navigation.navigate("AllJobs")} >
          <Image source={require("../../Images/company-hire.png")} style={styles.cardImg} />
          <Text style={styles.cardText}>
            All Jobs
          </Text>
        </TouchableOpacity>

        <View style={{ marginTop: 10, width: 150, marginBottom: 20 }}>
          <Button color="#00b8e6" style={{ fontSize: 30 }} onPress={() => Alert.alert(
            "Delete Student",
            "Are you sure you want to Log out?",
            [
              {
                text: "Cancel",
                style: "cancel"
              },
              { text: "OK", onPress: () => LogOut() }
            ]
          )} title="Log out"></Button>
        </View>

      </View>

    </ScrollView>
  );
}

function mapStateToProps(state) {
  return {
    Student: state.Student
  }
}


function mapDispatchToProps(dispatch) {
  return {
    changeisstudent: (Student) => dispatch(changeisstudent(Student))

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Students)

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
    marginLeft: 13,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2
  }
})
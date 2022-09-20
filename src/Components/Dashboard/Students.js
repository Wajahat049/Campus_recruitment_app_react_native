
import * as React from 'react';
import {
  View, Text, Button, TextInput, Alert, StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import { connect } from "react-redux"
import { changeisstudent } from "../../Store/action/index"

function Students(props) {

  const LogOut = () => {
    props.changeisstudent({})
    props.navigation.navigate("Studenttoggle")
  }


  return (

    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: "white", paddingBottom: 30 }}>

      <Image source={require("../../Images/studentDashboard.png")} style={{ height: 200, width: "100%", marginTop: 5 }} />

      <View>
        <Text style={{
          fontSize: 30, color: '#00b8e6', fontWeight: 'bold', marginBottom: 30,
          textShadowColor: 'rgba(0, 0, 0, 0.75)',
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 2
        }}>STUDENT DASHBOARD</Text>
      </View>

      <TouchableOpacity style={styles.card} onPress={() => props.navigation.navigate("StudentProfile")} >
        <Image source={require("../../Images/student-profile.png")} style={styles.cardImg} />
        <Text style={styles.cardText}>
          Student Profile
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => props.navigation.navigate("CompaniesInfo")} >
        <Image source={require("../../Images/company-info.png")} style={{ width: 70, height: 60, margin: 10 }} />
        <Text style={styles.cardText}>
          Company Information
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => props.navigation.navigate("CompanyHire")} >
        <Image source={require("../../Images/student-profile.png")} style={styles.cardImg} />
        <Text style={styles.cardText}>
          Company Hiring
        </Text>
      </TouchableOpacity>

      <View style={{ marginTop: 10, width: 150 }}>
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
    height: 80,
    margin: 15,
    borderColor: '#00b8e6',
    borderWidth: 3,
    backgroundColor: '#00b8e6',
    color: '#00b8e6',
    borderRadius: 5,
    flexDirection: "row"
  },
  cardImg: {
    width: 80,
    height: 80,
    marginTop: -5,
    marginLeft: 10
  },
  cardText: {
    textAlign: "center",
    marginTop: 25,
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2
  }
})
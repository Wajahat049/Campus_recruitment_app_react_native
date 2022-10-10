import * as React from 'react';
import {
  View, Text, Button, TextInput, Alert,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { changeiscompany } from "../../Store/action/index"
import { connect } from "react-redux"
import { ScrollView } from 'react-native-gesture-handler';

function Companies(props) {

  const LogOut = () => {
    props.changeiscompany({})
    props.navigation.navigate("Companytoggle")
  }

  return (
    <ScrollView style={{backgroundColor: "white", paddingBottom: 30}}>
      <View style={{ alignItems: 'center', justifyContent: 'center',  }}>

        <Image source={require("../../Images/studentDashboard.png")} style={{ height: 300, width: "100%", marginTop: -20}} />
        <Text style={{
          fontSize: 30, color: '#00b8e6', fontWeight: 'bold', marginBottom: 20,
          textShadowColor: 'rgba(0, 0, 0, 0.75)',
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 2,
          marginTop: -30
        }}>COMPANY DASHBOARD</Text>

        <TouchableOpacity style={styles.card} onPress={() => props.navigation.navigate("CompaniesProfile")} >
          <Image source={require("../../Images/company-profile.png")} style={{ width: 50, height: 50, margin: 5, marginLeft: 25 }} />
          <Text style={styles.cardText}>
            Company Profile
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => props.navigation.navigate("StudentsInfo")} >
          <Image source={require("../../Images/student-profile.png")} style={styles.cardImg} />
          <Text style={styles.cardText}>
            Student Information
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => props.navigation.navigate("StudentRequest")} >
          <Image source={require("../../Images/company-info.png")} style={{ width: 70, height: 50, margin: 10 }} />
          <Text style={styles.cardText}>
            Job Requests
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => props.navigation.navigate("JobPost")} >
          <Image source={require("../../Images/jobPost.png")} style={{ width: 60, height: 50, marginLeft: 20, margin: 5 }} />
          <Text style={[styles.cardText]}>
            Post Job 
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

      </View >
    </ScrollView>
  );
}

function mapStateToProps(state) {
  return {
    Company: state.Company
  }
}


function mapDispatchToProps(dispatch) {
  return {
    changeiscompany: (Company) => dispatch(changeiscompany(Company))

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Companies)

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
    marginLeft: 15,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2
  }
})

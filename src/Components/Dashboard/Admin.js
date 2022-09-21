import React from 'react';
import { View, Text, ImageBackground,  Button, Alert,
  StyleSheet,
  Image,
  TouchableOpacity } from 'react-native';
import { connect } from "react-redux"
import { changeisuser } from "../../Store/action/index"


const Admin = (props) => {
  const LogOut = () => {
    props.changeisuser({})
    props.navigation.navigate("AdminToggle")
  }

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: "white", paddingBottom: 150 }}>

      <Image source={require("../../Images/studentDashboard.png")} style={{ height: 200, width: "100%", marginTop: 30 }} />

      <View>
        <Text style={{
          fontSize: 32, color: '#00b8e6', fontWeight: 'bold', marginBottom: 50,
          textShadowColor: 'rgba(0, 0, 0, 0.75)',
          textShadowOffset: { width: -1, height: 1 },
          textShadowRadius: 2
        }}>ADMIN DASHBOARD</Text>
      </View>

      <TouchableOpacity style={styles.card} onPress={() => props.navigation.navigate("CompaniesInfo")} >
        <Image source={require("../../Images/company-profile.png")} style={{ width: 60, height: 50, margin: 14 }} />
        <Text style={styles.cardText}>
          Companies Information
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => props.navigation.navigate("StudentsInfo")} >
        <Image source={require("../../Images/student-profile.png")} style={styles.cardImg} />
        <Text style={styles.cardText}>
          Students Information
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

    </View >
  )

}

function mapStateToProps(state) {
  return {
    User: state.User
  }
}


function mapDispatchToProps(dispatch) {
  return {
    changeisuser: (Admin) => dispatch(changeisuser(Admin))

  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Admin)


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
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 2
  }
})

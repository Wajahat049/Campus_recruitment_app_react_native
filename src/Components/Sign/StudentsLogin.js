
import React,{ useEffect, useState } from 'react';
import { View, Text, Button, TextInput,Image,ToastAndroid } from 'react-native';
import database from "@react-native-firebase/database";
import {changeisstudent} from "../../Store/action/index"
import {connect } from "react-redux"
// import Students from "../Dashboard/Students"


function StudentsLogin(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [allstudents,setAllstudents]=useState([])


  const verify=()=>{
    var id = email.split("@")
    database().ref('/Students/'+id[0]+"gmail").once("value").then(snapshot=>{
      if(snapshot.exists()){
            if(pass==snapshot.val().Pass){
              ToastAndroid.show("Successfully Login",ToastAndroid.SHORT)
              props.changeisstudent(snapshot.val())
              props.navigation.navigate("Students")
            }
            else{
              ToastAndroid.show("Wrong password",ToastAndroid.SHORT)
            }
        }
        else{
          ToastAndroid.show("Please Signup first",ToastAndroid.SHORT) 
        }
})
}

 
    return(
     
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <View style={{width:"100%"}}>
        <Image style={{width:"60%",height:200,alignSelf:"center"}} source={require("../../Images/log-in.png")}/>
      </View>
      <View>
        <Text style={{ fontSize: 50, color: '#00b8e6', fontWeight: 'bold' }}>Student Login</Text>
      </View>
      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 20 }}>
        <TextInput value={email} onChangeText={(e) => setEmail(e)} placeholder="Email" />
      </View>
      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 20 }}>
        <TextInput secureTextEntry={true} value={pass} onChangeText={(e) => setPass(e)} placeholder="Password" />
      </View>
      <View style={{ margin: 20, width: 110}}>
        <Button color="#00b8e6" onPress={()=>verify()}  title="Login"></Button>
      </View>
            
      </View>
    )
}


function mapStateToProps(state) {
  return {
      Student:state.Student
  }
}


function mapDispatchToProps(dispatch) {
  return {
    changeisstudent:(Student)=>dispatch(changeisstudent(Student))

  }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(StudentsLogin)

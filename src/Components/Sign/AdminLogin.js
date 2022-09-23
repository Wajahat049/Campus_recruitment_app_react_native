
import React,{ useState,useEffect } from 'react';
import { View, Text, Button, TextInput,Image,ToastAndroid } from 'react-native';
import database from "@react-native-firebase/database";
// import AsyncStorage from '@react-native-async-storage/async-storage'
import {connect } from "react-redux"
import {changeisuser} from "../../Store/action/index"
import Admin from "../Dashboard/Admin"



function AdminLogin(props) {

  const [name, setName] = useState("");
    const [pass, setPass] = useState("");

  // console.log("jajsdj")

  // useEffect(()=>{
  //   // console.log("DATA",database().ref("/Admin/user").once("value"))
  //   database().ref('/Admin/user').once('value').then(snapshot => {
  //     const check=snapshot.val()
  //     console.log("AD",snapshot.val())
  //   }).catch((err)=>{
  //     console.log("ERR",err)
  //   })
  // },[])

  const verify=()=>{
    database().ref('/Admin/user').once('value').then(snapshot => {
    const check=snapshot.val()
    console.log("AD",check)
    if(check.name===name && check.pass===pass){
      ToastAndroid.show("You are the Admin",ToastAndroid.SHORT)
      props.changeisuser("Admin")
      props.navigation.navigate("Admin")
    }
    else{
      ToastAndroid.show("Wrong name or password",ToastAndroid.SHORT)
    }
})}

    
    return(
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <View style={{width:"100%"}}>
        <Image style={{width:"60%",height:200,alignSelf:"center"}} source={require("../../Images/log-in.png")}/>
      </View>
      <View>
        <Text style={{ fontSize: 50, color: '#00b8e6', fontWeight: 'bold' }}>Login</Text>
      </View>
      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 20 }}>
        <TextInput value={name} onChangeText={(e) => setName(e)} placeholder="Name" />
      </View>
      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 20 }}>
        <TextInput secureTextEntry={true} value={pass} onChangeText={(e) => setPass(e)} placeholder="Password" />
      </View>
      <View style={{ margin: 20, width: 110}}>
        <Button color="#00b8e6" onPress={()=>verify()}  title="Login"></Button>
      </View>
      </View>
    )}


function mapStateToProps(state) {
  return {
      User:state.User
  }
}


function mapDispatchToProps(dispatch) {
  return {
    changeisuser:(User)=>dispatch(changeisuser(User))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogin)

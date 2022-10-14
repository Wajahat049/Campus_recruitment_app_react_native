

import * as React from 'react';
import { View, Text, Button, TextInput,Image,ScrollView } from 'react-native';
import database from "@react-native-firebase/database";
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


function StudentsSignUp(props) {
  const Type="Student"
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const [Qualification, setQuali] = useState("");
  const [Field, setField] = useState("");
  const [Age, setAge] = useState("");

  const save_data=()=>{
    var emailSplit=Email.split("@")

    database().ref(`/Students/${emailSplit[0]}`).update({Name, Email , Pass ,Qualification, Field, Age})
    
  props.navigation.navigate("StudentsLogin")
  }
  
  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center',paddingBottom:"20%"}}>
      <View style={{width:"100%"}}>
        <Image style={{width:"60%",height:200,alignSelf:"center"}} source={require("../../Images/sign-up.png")}/>
      </View>
      <View>
        <Text style={{ fontSize: 50, color: '#00b8e6', fontWeight: 'bold',marginBottom:10 }}>SignUp</Text>
      </View>
      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 5 }}>
        <TextInput value={Name} onChangeText={(e) => setName(e)} placeholder="Name" />
      </View>
      <View style={{borderWidth:3,borderColor:"#00b8e6",width:"80%", margin:5}}>
        <TextInput value={Email} keyboardType={"email-address"} onChangeText={(e)=>setEmail(e)} placeholder="Email"/>
      </View>
      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 5 }}>
        <TextInput secureTextEntry={true} value={pass} onChangeText={(e) => setPass(e)} placeholder="Password" />
      </View>
      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 5 }}>
        <TextInput value={Qualification} onChangeText={(e) => setQuali(e)} placeholder="Qualification" />
      </View>
      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 5 }}>
        <TextInput  value={Field} onChangeText={(e) => setField(e)} placeholder="Field" />
      </View>
      <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 5 }}>
        <TextInput  value={Age} keyboardType={"numeric"} onChangeText={(e) => setAge(e)} placeholder="Age" />
      </View>
    <View>
      <View style={{marginTop:10, width:150}}>
      <Button  color = "#00b8e6" style={{fontSize:30}} onPress={()=>save_data()} title="Signup"></Button>
      </View>
    </View>
    
    </ScrollView>
  );
}

export default StudentsSignUp;
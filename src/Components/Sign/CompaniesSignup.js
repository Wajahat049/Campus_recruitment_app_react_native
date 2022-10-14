import * as React from 'react';
import { View, Text, Button, TextInput,Image,ScrollView } from 'react-native';
import database from "@react-native-firebase/database";
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'


function CompaniesSignUp(props) {
  const Type = "Company"
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [company, setCompany] = useState("");
  const [contact, setContact] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");

  const save_data = () => {
    var emailSplit=email.split("@")

    database().ref(`/Companies/${emailSplit[0]}`).update({ Name, email, pass, contact, location, description, website })
    
  props.navigation.navigate("CompaniesLogin")

  }

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center',paddingBottom:"20%"}}>
    <View style={{width:"100%"}}>
      <Image style={{width:"60%",height:200,alignSelf:"center"}} source={require("../../Images/sign-up.png")}/>
    </View>
        <View>
          <Text style={{ fontSize: 40, color: '#00b8e6', fontWeight: 'bold', bottom:11 }}>SignUp</Text>
        </View>
        <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 5 }}>
          <TextInput value={Name} onChangeText={(e) => setName(e)} placeholder="Company Name" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 5 }}>
          <TextInput value={email} keyboardType={"email-address"} onChangeText={(e) => setEmail(e)} placeholder="Email" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 5 }}>
          <TextInput secureTextEntry={true} value={pass} onChangeText={(e) => setPass(e)} placeholder="Password" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 5 }}>
          <TextInput keyboardType="phone-pad" value={contact} onChangeText={(e) => setContact(e)} placeholder="Contact" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 5 }}>
          <TextInput value={description} onChangeText={(e) => setDescription(e)} placeholder="Job Description" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 5 }}>
          <TextInput value={location} onChangeText={(e) => setLocation(e)} placeholder="Location" />
        </View>
        <View style={{ borderWidth: 3, borderColor: "#00b8e6", width: "80%", margin: 5 }}>
          <TextInput keyboardType="url" value={website} onChangeText={(e) => setWebsite(e)} placeholder="Website" />
        </View>
        <View>
          <View style={{ width: 150 }}>
            <Button color="#00b8e6" style={{ fontSize: 30 }} onPress={() => save_data()} title="Signup"></Button>
          </View>
        </View>

      </ScrollView>
  );
}

export default CompaniesSignUp;

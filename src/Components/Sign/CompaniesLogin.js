
import React,{ useState } from 'react';
import { View, Text, Button, TextInput,Image,ToastAndroid } from 'react-native';
import database from "@react-native-firebase/database";
import {changeiscompany} from "../../Store/action/index"
import {connect } from "react-redux"
import Companies from "../Dashboard/Companies"
import { useEffect } from 'react';



function CompaniesLogin({navigation},props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [allcompanies,setAllcompanies]=useState({})



  const verify=()=>{
    var id = email.split("@")
    database().ref('/Companies/'+id[0]+"gmail").once("value").then(snapshot=>{
      if(snapshot.exists()){
            if(pass==snapshot.val().pass){
              ToastAndroid.show("Successfully Login",ToastAndroid.SHORT)
              props.changeiscompany(snapshot.val())
              navigation.navigate("Companies")
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
// if(props.Company.Name==undefined){
    return(
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <View style={{width:"100%"}}>
        <Image style={{width:"60%",height:200,alignSelf:"center"}} source={require("../../Images/log-in.png")}/>
      </View>
      <View>
        <Text style={{ fontSize: 50, color: '#00b8e6', fontWeight: 'bold' }}>Login</Text>
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
    )}

    // else{
    //   return(
    //   <Companies navigation={props.navigation}></Companies>
    //   )
    // }
// }
 
    
function mapStateToProps(state) {
  return {
      Company:state.Company
  }
}


function mapDispatchToProps(dispatch) {
  return {
    changeiscompany:(Company)=>dispatch(changeiscompany(Company))

  }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(CompaniesLogin)

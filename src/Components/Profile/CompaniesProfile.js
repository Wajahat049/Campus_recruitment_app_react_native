import { Image, Button, Text, View, StyleSheet } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import { connect } from "react-redux"



function Profile(props) {

    return (

        <View style={{ backgroundColor: "white", paddingBottom: 200 }}>
            <View style={[styles.triangleCorner]} />
            <Image source={require("../../Images/companyProfile-avatar.png")} style={{ width: "60%", height: 220, marginLeft: 70, marginTop: -180, }} />
            <Text style={{ color: '#00b8e6', fontSize: 32, fontWeight: 'bold', textAlign: "center" }}> {(props.Company.Name)} </Text>
            <Text style={{ color: '#00b8e6', fontSize: 22, fontWeight: 'bold', margin: 3, textAlign: "center" }}> {(props.Company.email)} </Text>

            <View style={{ backgroundColor: "#00b8e6", marginTop: 20, paddingBottom: 100,borderTopRightRadius:20,borderTopLeftRadius:20,paddingRight:50,paddingLeft:10}}>
                <View style={{margin: 5,  marginTop: 20,flexDirection:"row"}}>
                <Image style={{width:40,height:40,marginRight:10,marginTop:15}} source={{uri:("https://cdn-icons-png.flaticon.com/512/1162/1162281.png?w=360&t=st=1664094574~exp=1664095174~hmac=47a80ca2dca0c555b6d62ac582b0332428449e611a8476f394e36dc416c338a3")}}/> 
                <Text style={{color: 'white', fontSize: 18,fontWeight:"bold"}}>{props.Company.companyDescription}</Text>
                </View>
                <View style={{margin: 5,  marginTop: 10,flexDirection:"row"}}>
                <Image style={{width:40,height:40,marginRight:10}} source={{uri:("https://cdn-icons-png.flaticon.com/512/1253/1253355.png?w=360&t=st=1664095110~exp=1664095710~hmac=6c088542eae643ffd851569ca7d47eb6e783b9c6ab2e7c387ed22e064aabaecd")}}/> 
                <Text style={{color: 'white', fontSize: 18,fontWeight:"bold"}}>{props.Company.webLink}</Text>
                </View>
                <View style={{margin: 5,  marginTop: 10,flexDirection:"row"}}>
                <Image style={{width:40,height:40,marginRight:10}} source={{uri:("https://cdn-icons-png.flaticon.com/512/1257/1257309.png?w=360&t=st=1664095339~exp=1664095939~hmac=1dbdb9ba0f94ffd60f6e61b22d4d4653d7806c71a9c735b56a7ee971fbc3ff63")}}/> 
                <Text style={{color: 'white', fontSize: 18,fontWeight:"bold",marginTop:5}}>{props.Company.phone}</Text>
                </View>
                <View style={{margin: 5,  marginTop: 10,flexDirection:"row"}}>
                <Image style={{width:40,height:40,marginRight:10}} source={{uri:("https://cdn-icons-png.flaticon.com/512/1257/1257388.png?w=360&t=st=1664095465~exp=1664096065~hmac=37483c00f7fe4fdbc47b78c7e5536b8f812287764eb0e6389ed8d06bbdab436d")}}/> 
                <Text style={{color: 'white', fontSize: 18,fontWeight:"bold",marginTop:5}}>{props.Company.location}</Text>
                </View>
                {/* <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', margin: 5, marginLeft: 15}}>Position : {(props.Company.job)}</Text>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', margin: 5, marginLeft: 15}}>Salary :  {(props.Company.salary)}</Text>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', margin: 5, marginLeft: 15 }}>Experience : {(props.Company.experience)}</Text>
                <Text style={{ color: 'white', fontSize: 22, margin: 5, fontWeight: "bold", marginLeft: 15 }}>Description :  {(props.Company.description)} </Text>  */}
            </View>
        </View>
    );
}
function mapStateToProps(state) {
    return {
        Company: state.Company
    }
}




export default connect(mapStateToProps)(Profile)


const styles = StyleSheet.create({
    triangleCorner: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderRightWidth: 650,
        borderTopWidth: 250,
        borderRightColor: "transparent",
        borderTopColor: "#00b8e6",
    },
});
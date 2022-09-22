import { Image, Button, Text, View, StyleSheet } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import { connect } from "react-redux"



function Profile(props) {

    return (

        <View style={{ backgroundColor: "white", paddingBottom: 200 }}>
            <View style={[styles.triangleCorner]} />
            <Image source={require("../../Images/companyProfile-avatar.png")} style={{ width: "60%", height: 220, marginLeft: 70, marginTop: -150, }} />
            <Text style={{ color: '#00b8e6', fontSize: 32, fontWeight: 'bold', textAlign: "center" }}> {(props.Company.Name)} </Text>
            <Text style={{ color: '#00b8e6', fontSize: 22, fontWeight: 'bold', margin: 3, textAlign: "center" }}> {(props.Company.email)} </Text>

            <View style={{ backgroundColor: "#00b8e6", marginTop: 35, paddingBottom: 100}}>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', margin: 5, marginLeft: 15, marginTop: 20}}>Description : {(props.Company.companyDescrip)}</Text>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', margin: 5, marginLeft: 15}}>Website Link :  {(props.Company.webLink)}</Text>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', margin: 5, marginLeft: 15 }}>Contact Number : {(props.Company.phone)}</Text>
                <Text style={{ color: 'white', fontSize: 22, margin: 5, fontWeight: "bold", marginLeft: 15 }}>Location :  {(props.Company.location)} </Text> 

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
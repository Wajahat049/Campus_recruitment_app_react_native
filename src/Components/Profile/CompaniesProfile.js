import { Image, Button, Text, View, StyleSheet } from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import { connect } from "react-redux"



function Profile(props) {

    return (

        <View style={{ backgroundColor: "white", paddingBottom: 200 }}>
            <View style={[styles.triangleCorner]} />
            <Image source={require("../../Images/companyProfile-avatar.png")} style={{ width: "60%", height: 220, marginLeft: 70, marginTop: -150, zIndex: 99 }} />
            <Text style={{ color: '#00b8e6', fontSize: 32, fontWeight: 'bold', textAlign: "center" }}> {(props.Company.Name)} </Text>
            <Text style={{ color: '#00b8e6', fontSize: 22, fontWeight: 'bold', margin: 3, textAlign: "center" }}> {(props.Company.email)} </Text>

            <View style={{ flexDirection: "row", backgroundColor: "#00b8e6", marginTop: 25, }}>
                <Text style={{ color: 'white', fontSize: 22, margin: 15, marginLeft: 35 }}>Company : </Text>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', margin: 15, marginLeft: 5, }}>{(props.Company.company)}</Text>
            </View>


            <View style={{ flexDirection: "row", }}>
                <Text style={{ color: '#00b8e6', fontSize: 22, fontWeight: 'bold', margin: 25, borderRightWidth: 3, borderColor: "#00b8e6" }}> {(props.Company.job)}</Text>
                <Text style={{ color: '#00b8e6', fontSize: 22, fontWeight: 'bold', margin: 25, borderRightWidth: 3, borderColor: "#00b8e6" }}> {(props.Company.salary)}</Text>
                <Text style={{ color: '#00b8e6', fontSize: 22, fontWeight: 'bold', margin: 25 }}>{(props.Company.experience)}</Text>
            </View>


            <Text style={{ color: '#00b8e6', fontSize: 22, margin: 3, marginLeft: 10}}>Description : <Text style={{fontWeight: "bold"}}> {(props.Company.description)} </Text> </Text>

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
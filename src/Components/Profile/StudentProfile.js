import {
    Image, Button, Text, View,
    StyleSheet
} from 'react-native';
import * as React from 'react';
import { useState } from 'react';
import { connect } from "react-redux"
import Students from '../Dashboard/Students';


function Profile(props) {
    console.log("student profle", props.Student)

    return (

        <View style={{ backgroundColor: "white", paddingBottom: 200 }}>
            <View style={[styles.triangleCorner]} />
            <Image source={require("../../Images/studentProfile-avatar.png")} style={{ width: "60%", height: 220, marginLeft: 70, marginTop: -150 }} />
            <Text style={{ color: '#00b8e6', fontSize: 32, fontWeight: 'bold', textAlign: "center" }}> {(props.Student.Name)}</Text>
            <Text style={{ color: '#00b8e6', fontSize: 22, fontWeight: 'bold', margin: 3, textAlign: "center" }}> {(props.Student.Email)}</Text>

            <View style={{ flexDirection: "row", backgroundColor: "#00b8e6", marginTop: 25, }}>
                <Text style={{ color: 'white', fontSize: 22, margin: 15, marginLeft: 35 }}>Degree : </Text>
                <Text style={{ color: 'white', fontSize: 22, fontWeight: 'bold', margin: 15, marginLeft: 5, }}>{(props.Student.Qualification)}</Text>
            </View>


            <View style={{ flexDirection: "row", }}>
                <Text style={{ color: '#00b8e6', fontSize: 22, fontWeight: 'bold', margin: 25, borderRightWidth: 3, borderColor: "#00b8e6" }}> {(props.Student.Field)}</Text>
                <Text style={{ color: '#00b8e6', fontSize: 22, fontWeight: 'bold', margin: 25, borderRightWidth: 3, borderColor: "#00b8e6" }}> {(props.Student.Age)}</Text>
                <Text style={{ color: '#00b8e6', fontSize: 22, fontWeight: 'bold', margin: 25 }}>Address</Text>
            </View>

        </View>
    );
}

function mapStateToProps(state) {
    return {
        Student: state.Student
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

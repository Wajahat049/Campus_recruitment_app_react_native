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


            <View style={{ backgroundColor: "#00b8e6", marginTop: 20, paddingBottom: 100, borderTopRightRadius: 20, borderTopLeftRadius: 20, paddingRight: 50, paddingLeft: 10 }}>
                <View style={{ margin: 5, marginTop: 20, flexDirection: "row" }}>
                    <Image style={{ width: 40, height: 40, marginRight: 15, }} source={{ uri: ("https://cdn-icons-png.flaticon.com/512/4011/4011160.png") }} />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: "bold", marginTop: 8 }}>{(props.Student.Qualification)}</Text>
                </View>
                <View style={{ margin: 5, marginTop: 10, flexDirection: "row" }}>
                    <Image style={{ width: 40, height: 40, marginRight: 15 }} source={{ uri: ("https://cdn-icons-png.flaticon.com/512/2966/2966773.png") }} />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: "bold", marginTop: 8 }}>{(props.Student.Field)}</Text>
                </View>
                <View style={{ margin: 5, marginTop: 10, flexDirection: "row" }}>
                    <Image style={{ width: 40, height: 40, marginRight: 15 }} source={{ uri: ("https://cdn-icons-png.flaticon.com/512/1257/1257309.png?w=360&t=st=1664095339~exp=1664095939~hmac=1dbdb9ba0f94ffd60f6e61b22d4d4653d7806c71a9c735b56a7ee971fbc3ff63") }} />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: "bold", marginTop: 8 }}>03112536783</Text>
                </View>
                <View style={{ margin: 5, marginTop: 10, flexDirection: "row" }}>
                    <Image style={{ width: 40, height: 40, marginRight: 15 }} source={{ uri: ("https://cdn-icons-png.flaticon.com/512/5670/5670791.png") }} />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: "bold", marginTop: 8 }}>{(props.Student.Age)}</Text>
                </View>
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

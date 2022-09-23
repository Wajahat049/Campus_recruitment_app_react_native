import React from "react";
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity,Pressable } from "react-native";

const Home = (props) => {
    return(
  <View style={styles.container}>
    <ImageBackground source={{ uri: "https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-recruitment-looking-for-a-bull-poster-background-image_200940.jpg"}} style={styles.image}>
    <Text style={{color:'white', fontWeight: 'bold', fontSize:55, textAlign:'center', bottom:'18%',textShadowColor:"deepskyblue",textShadowRadius:25}}>Campus Recruitment System</Text>
    <TouchableOpacity style={{borderColor: "#00b8e6", borderWidth: 3, width: 150, borderRadius: 10, marginLeft: 100, marginBottom: 15}} onPress={()=>props.navigation.navigate("AdminToggle")}>
    <Text style={styles.text}>Admin</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{borderColor: "#00b8e6", borderWidth: 3, width: 160, borderRadius: 10, marginLeft: 95, marginBottom: 15}} onPress={()=>props.navigation.navigate("Studenttoggle")}>
    <Text  style={styles.text}>Student</Text>
    </TouchableOpacity>
    <TouchableOpacity style={{borderColor: "#00b8e6", borderWidth: 3, width: 200, borderRadius: 10, marginLeft: 75, marginBottom: 20}} onPress={()=>props.navigation.navigate("Companytoggle")}>
    <Text  style={styles.text}>Company</Text>
    </TouchableOpacity>
    </ImageBackground>
  </View>
  )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    height:'102%',
    width:'100%'
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    // marginTop:'0.5%',
    // bottom:30,
    textShadowColor:"#00b8e6",
    textShadowRadius: 20,
    

  }
});

export default Home;

import React from "react";
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity,Pressable } from "react-native";

const Home = (props) => {
    return(
  <View style={styles.container}>
    <ImageBackground source={{ uri: "https://png.pngtree.com/thumb_back/fw800/back_our/20190621/ourmid/pngtree-recruitment-looking-for-a-bull-poster-background-image_200940.jpg"}} style={styles.image}>
    <Text style={{color:'white', fontWeight: 'bold', fontSize:55, textAlign:'center', bottom:'16%',textShadowColor:"deepskyblue",textShadowRadius:25}}>Campus Recruitment System</Text>
    <TouchableOpacity onPress={()=>props.navigation.navigate("AdminToggle")}>
    <Text  style={styles.text}>Admin</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>props.navigation.navigate("Studenttoggle")}>
    <Text  style={styles.text}>Student</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>props.navigation.navigate("Companytoggle")}>
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
    color: "#00b8e6",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    // marginTop:'1.5%',
    // bottom:60,
    textShadowColor:"#131414",
    textShadowRadius:20,
    

  }
});

export default Home;

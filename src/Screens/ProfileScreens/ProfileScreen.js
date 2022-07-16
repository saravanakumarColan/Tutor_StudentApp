import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  View_Spacing,
  fontSize,
  LG_BG_THEME,
} from "../../Assets/Constant/fontsAndColors";
import Header from "../../Components/Header";
import RoundButton from "../../Components/RoundButton";
import Icon from "react-native-vector-icons/AntDesign";
import {List, Chip,Divider} from 'react-native-paper';
import { icons } from "../../Assets/icons";
import CustomTextInput from "../../Components/CustomTextInput";
import Button from "../../Components/Button";

function ProfileScreen(props) {
  return (
    <View style={styles.Container}>
      <Header {...props}/>
      <Image
          source={require("../../Assets/icons/teacher.jpg")}
          style={{ width: "100%", height: 250 }}
          resizeMode={"cover"}
        />
        
            <TouchableOpacity
      style={{ backgroundColor: "#fff" }}
      onPress={() => props.navigation.navigate("MyProfile")}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <Image
          source={{
            uri: "https://ui-avatars.com/api/?length=1&background=2F79EB&color=fff&name=saravana",
          }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 50,
            right: 2,
          }}
        />


      </View>
    </TouchableOpacity>
    <Divider/>
    <View style={{ flex:0.5}}>
    <View style={styles.sub_container}>
        <CustomTextInput image={icons.lock} placeholder={"Name"} name = {'Name'} />
      </View>
      <View style={styles.sub_container}>
        <CustomTextInput image={icons.lock} placeholder={"Mail ID"} name = {'Mail ID'} />
      </View>
      <View style={[styles.sub_container,{marginBottom:10}]}>
        <CustomTextInput image={icons.lock} placeholder={"Country"} name = {'Country'} />
      </View>
      <Button
       textStyle={{
                color: "#ffffff",
                fontSize: fontSize.Large,
                letterSpacing: 2,
                
       } } 
       onPress={()=>props.navigation.dispatch(StackActions.replace("BottomTab"))}
       name={"save"} />
    </View>
   
  
  </View>
  )
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  imageStyle: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  sub_container: {  justifyContent: "center", alignItems: "center" },
});

export default ProfileScreen
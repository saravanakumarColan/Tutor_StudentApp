import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image,Platform } from "react-native";
import { Appbar } from 'react-native-paper';
import {
  View_Spacing,
  fontSize,
  LG_BG_THEME,
} from "../Assets/Constant/fontsAndColors";
function Header(props) {
  let {title} = props
  return (
    <Appbar style={styles.container}>
      <TouchableOpacity onPress={()=>{props.navigation.openDrawer()}}>
      <Image
        source={require("../Assets/icons/Auth/profile.png")}
        tintColor={"#147AD6"}
        style={styles.imageStyle}
      />
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
  
           <Image
        source={require("../Assets/icons/Auth/profile.png")}
        tintColor={"#147AD6"}
        style={styles.imageStyle}
      />
    </Appbar>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: "#ffff",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor:'grey',
    borderBottomWidth:1,
    marginBottom:5,
    alignItems:'center'
    
    
  },
  imageStyle: {
    height: 25,
    width: 25,
    marginHorizontal: 20,
  },
  sub_container: { 
    flex: 0.1,
     justifyContent: "center",
      alignItems: "center" 
    },
    headerText:{
      color: LG_BG_THEME.App_Text_Blue,
      fontSize: fontSize.Medium,
      marginTop: 5,
    },
});

export default Header;

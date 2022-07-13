import React from "react";
import { View, Text, TextInput,Image } from "react-native";
import {
    View_Spacing,
    Basic_Viewdimension,
    fontSize,
    LG_BG_THEME,
    fontFamily
  } from "../Assets/Constant/fontsAndColors";
function CustomTextInput(props) {
  const{image,name}=props
  return (
    <View style={{}}>
     
      <Text
            style={{
              color: LG_BG_THEME.App_Text_Header,
              fontSize: fontSize.Small,
              marginTop: 5,
              fontFamily:fontFamily.Poppins_Medium
            }}
          >
            {name}
          </Text>
      <View
        style={{
        flexDirection: "row",
        borderColor:'#127aae',
        width:'80%',
        paddingVertical:10,
        marginVertical:5,
        borderWidth:1,
          borderRadius:Basic_Viewdimension.VD_BorderRadius
        }}
      >
   
      
          <TextInput
          {...props}
           style={{ flex: 1,fontSize:20,paddingLeft:10 }} />
      </View>
    </View>
  );
}

export default CustomTextInput;

import React from "react";
import { View, Text, TextInput,Image } from "react-native";
import { View_Spacing,Basic_Viewdimension } from "../Assets/Constant/fontsAndColors";

function InputText(props) {
  const{image}=props
  return (
    <View style={{ flex: 1, flexDirection: "row",  }}>
      <View style={{ flex: 0.1 }} />
      <View
        style={{
          flex: 0.8,
          flexDirection: "row",
        borderColor:'#127aae',
        borderWidth:1,
          height: View_Spacing.VS_W5,
          borderRadius:Basic_Viewdimension.VD_BorderRadius
        }}
      >
        <View style={{ flex: 0.15,justifyContent:'center',alignItems:'center' }}>
          <Image style={{height:View_Spacing.VS_W3,width:View_Spacing.VS_W3,resizeMode:'contain'}} source={image} />
        </View>
        <View style={{ flex: 0.85, padding: 5 }}>
          <TextInput
          {...props}
           style={{ flex: 1,fontSize:20 ,padding:0}} />
        </View>
      </View>
      <View style={{ flex: 0.1 }} />
    </View>
  );
}

export default InputText;

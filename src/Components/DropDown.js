import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import {
  View_Spacing,
  Basic_Viewdimension,
  LG_BG_THEME,fontSize
} from "../Assets/Constant/fontsAndColors";
import { icons } from "../Assets/icons";

function DropDown() {
  return (
    <TouchableOpacity style={style.container}>
      <View style={style.Sub_container}>
        <Text style={{fontSize:fontSize.Small,color:LG_BG_THEME.App_Text_Inactive}}>{"Choose Subject"}</Text>
      </View>

      <View
        style={{ flex: 0.1, justifyContent: "center", alignItems: "center" }}
      >
        <Image source={icons.downArrow} style={style.Img_container} />
      </View>
    </TouchableOpacity>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    height: View_Spacing.VS_W5,
    borderRadius: Basic_Viewdimension.VD_BorderWidth,
    borderWidth: 1,
    flexDirection: "row",
    borderRadius: Basic_Viewdimension.VD_BorderRadius,
    borderColor: LG_BG_THEME.App_Border,
    shadowOffset: { width: 10, height: 10 },
   

  },
  Sub_container: {
    flex: 0.9,
    justifyContent: "center",
    paddingLeft: 5,
  },
  Img_container: {
    height: Basic_Viewdimension.Img_height,
    width: Basic_Viewdimension.Img_width,
    resizeMode: "contain",
    tintColor: "#807e7e",
  },
});

export default DropDown;

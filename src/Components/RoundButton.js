import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import {
  View_Spacing,
  Basic_Viewdimension,
  fontSize,
  LG_BG_THEME,
} from "../Assets/Constant/fontsAndColors";
import LinearGradient from "react-native-linear-gradient";
import Icon from "react-native-vector-icons/AntDesign";

function RoundButton(props) {
  const { imagename, onPress, cwidth, cheight, cborderRadius, buttonname } = props;
  return (
    <View style={{justifyContent:'center',alignItems:'center'}}>
      <View
        style={{
          flexDirection: "row",
          width: cwidth,
          height: cheight,
          borderRadius: cborderRadius,
        }}
      >
        <LinearGradient
          colors={["#10719E", "#199ECF", "#20C6F9"]}
          start={{ x: 0.1, y: 1 }}
          end={{ x: 0.8, y: 0.9 }}
          style={{
            flex: 1,
            flexDirection: "row",
            borderRadius: cborderRadius,
            //height: View_Spacing.VS_W5,
            //borderRadius: Basic_Viewdimension.VD_BorderRadius,
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Icon name={imagename} size={22} color={LG_BG_THEME.WHITE_THEME} />
          </View>
        </LinearGradient>
      </View>
      <Text
        style={{
          color: LG_BG_THEME.App_Text_Blue,
          fontSize: fontSize.verySmall,
          marginTop:5
        }}
      >
        {buttonname}
      </Text>
    </View>
  );
}

export default RoundButton;

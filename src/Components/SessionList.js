import { View, Text ,TouchableOpacity} from "react-native";
import React from "react";
import {
  View_Spacing,
  Basic_Viewdimension,
  fontSize,
  LG_BG_THEME,
} from "../Assets/Constant/fontsAndColors";
import LinearGradient from "react-native-linear-gradient";
function SessionList() {
  return (
    <TouchableOpacity
      style={{
        height: View_Spacing.VS_W15,
        borderWidth: 1,
        borderColor: LG_BG_THEME.App_Border,
        borderRadius: Basic_Viewdimension.VD_BorderRadius,
        flexDirection: "row",
        backgroundColor: "#ffffff",
      
      }}
    >
      <View style={{ flex: 0.6, justifyContent: "center", paddingLeft: 10 }}>
        <Text
          style={{
            fontSize: fontSize.Large,
            color: LG_BG_THEME.App_Text_Blue,
            letterSpacing: 2,
            fontWeight: "300",
            fontFamily: "Poppins-Medium",
          }}
        >
          {"Subject"}
        </Text>

        <Text
          style={{
            fontSize: fontSize.Medium,
            color: LG_BG_THEME.App_Text_Inactive,
            fontFamily: "Poppins-Medium",
            letterSpacing: 1,
            fontWeight:'300'
          }}
        >
          {"Science"}
        </Text>

        <View style={{ height: View_Spacing.VS_W1 }} />
        <Text
          style={{
            fontSize: fontSize.Large,
            color: LG_BG_THEME.App_Text_Blue,
            fontFamily: "Poppins-Medium",
            fontWeight: "300",
            letterSpacing: 2,
          }}
        >
          {"Type of Work"}
        </Text>
        <Text
          style={{
            fontSize: fontSize.Medium,
            color: LG_BG_THEME.App_Text_Inactive,
            fontFamily: "Poppins-Medium",
            letterSpacing: 1,
            fontWeight:'300'
          }}
        >
          {"Science"}
        </Text>
      </View>
      <View style={{ flex: 0.4 }}>
        <LinearGradient
          colors={["#10719E", "#199ECF", "#20C6F9"]}
          start={{ x: 0.1, y: 1 }}
          end={{ x: 0.8, y: 0.9 }}
          style={{
            flex: 0.4,
            backgroundColor: "#000",
            width: "80%",
            borderBottomLeftRadius: Basic_Viewdimension.VD_BorderRadius,
            borderBottomRightRadius: Basic_Viewdimension.VD_BorderRadius,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: fontSize.Medium,
              color: LG_BG_THEME.App_Text_White,
            }}
          >
            {"$ 320.00"}
          </Text>
        </LinearGradient>
        <View
          style={{
            flex: 0.6,

            justifyContent: "center",
            alignItems: "center",
            width: "80%",
          }}
        >
          <Text
            style={{
              fontSize: fontSize.Medium,
              color: LG_BG_THEME.App_Text_Blue,
              fontFamily: "Poppins-Medium",
            }}
          >
            {"Due Date"}
          </Text>
          <Text style={{ fontSize: fontSize.Small , fontFamily: "Poppins-Medium",letterSpacing:2,color:LG_BG_THEME.App_Text_Inactive}}>{"15 Mar 2022"}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default SessionList;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import HomeContainer from "../../../Components/HomeContainer";
import DropDown from "../../../Components/DropDown";
import {
  View_Spacing,
  Basic_Viewdimension,
  LG_BG_THEME,
  fontSize,
} from "../../../Assets/Constant/fontsAndColors";
import LinearGradient from "react-native-linear-gradient";
import Header from "../../../Components/Header";

function NewSessionScreen() {
  return (
    <>
     
      <View style={{ flex: 0.1, padding: 10 }}>
        <View style={{ height: View_Spacing.VS_W5 }} />
        <DropDown />
        <View style={{ height: View_Spacing.VS_W5 }} />
        <DropDown />
        <View style={{ height: View_Spacing.VS_W5 }} />
        <DropDown />
        <View style={{ height: View_Spacing.VS_W5 }} />
        <View
          style={{
            flex: 0.1,
            flexDirection: "row",
            height: View_Spacing.VS_W5,
          }}
        >
          <View style={{ flex: 0.4, justifyContent: "center" }}>
            <Text
              style={{
                fontSize: fontSize.Medium,
                color: LG_BG_THEME.App_Text_Blue,
              }}
            >
              {"Budget"}
            </Text>
          </View>
          <View
            style={{
              flex: 0.6,
              flexDirection: "row",
              borderRadius: Basic_Viewdimension.VD_BorderRadius,
              borderWidth: 1,
              borderColor: LG_BG_THEME.App_Text_Blue,
            }}
          >
            <View
              style={{
                flex: 0.7,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TextInput
                keyboardType="numeric"
                style={{ height: View_Spacing.VS_W4 }}
                placeholder="00.00"
              />
            </View>
            <View style={{ flex: 0.3, borderLeftWidth: 1 }}></View>
          </View>
        </View>
        <View style={{ height: View_Spacing.VS_W5 }} />
        <View
          style={{
            flex: 1,
            height: View_Spacing.VS_W15,
            borderRadius: Basic_Viewdimension.VD_BorderRadius,
            borderWidth: 1,
            borderColor: LG_BG_THEME.App_Text_Blue,
            padding: 10,
          }}
        >
          <TextInput multiline={true} placeholder="Description" />
        </View>
        <View style={{ height: View_Spacing.VS_W2 }} />
        <LinearGradient
          colors={["#10719E", "#199ECF", "#20C6F9"]}
          start={{ x: 0.1, y: 1 }}
          end={{ x: 0.8, y: 0.9 }}
          style={{
            flex: 1,
            flexDirection: "row",

            height: View_Spacing.VS_W4,
            borderRadius: Basic_Viewdimension.VD_BorderRadius,
          }}
        >
          <TouchableOpacity
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{
                fontSize: fontSize.Medium,
                fontWeight: "300",
                letterSpacing: 2,
                color: "#fff",
              }}
            >
              {"SUBMIT"}
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </>
  );
}

export default NewSessionScreen;

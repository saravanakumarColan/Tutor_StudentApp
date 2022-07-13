import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

import DropDown from "../../../Components/DropDown";
import {
  View_Spacing,
  Basic_Viewdimension,
  LG_BG_THEME,
  fontSize,
} from "../../../Assets/Constant/fontsAndColors";
import LinearGradient from "react-native-linear-gradient";
import SessionList from "../../../Components/SessionList";
import HomeContainer from "../../../Components/HomeContainer";
import Header from "../../../Components/Header";
function ActiveSessionScreen(props) {
  return (
    <HomeContainer>
       <Header />
     <View style={{height:View_Spacing.VS_W5}} />
      <View style={{ padding: 8 }}>
        <View style={{ flex: 0.1, flexDirection: "row" }}>
          <View style={{ flex: 0.3, paddingLeft: 5 }}>
            <TouchableOpacity onPress={() => props.navigation.navigate("FindTutorScreen")}
              style={{
                flex: 1,
                flexDirection: "row",
                borderWidth: 1,
                borderColor: LG_BG_THEME.App_Border,
                height: View_Spacing.VS_W4,
                borderRadius: Basic_Viewdimension.VD_BorderRadius,
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: fontSize.Small,
                    color: LG_BG_THEME.App_Text_Inactive,
                  }}
                >
                  {"New Session"}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.05 }} />
          <View style={{ flex: 0.3, paddingLeft: 5 }}>
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
                onPress={() => props.navigation.navigate("ActiveSessionScreen")}
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: fontSize.Small,
                    color: LG_BG_THEME.WHITE_THEME,
                  }}
                >
                  {"Active Session"}
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <View style={{ flex: 0.05 }} />
          <View style={{ flex: 0.3, paddingRight: 5 }}>
          <View
              style={{
                flex: 1,
                flexDirection: "row",
                borderWidth: 1,
                borderColor: LG_BG_THEME.App_Border,
                height: View_Spacing.VS_W4,
                borderRadius: Basic_Viewdimension.VD_BorderRadius,
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: fontSize.Small }}>
                  {"Past Session"}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ height: View_Spacing.VS_W5 }} />
        <SessionList />
        <View style={{ height: View_Spacing.VS_W5 }} />
        <SessionList />
        <View style={{ height: View_Spacing.VS_W5 }} />
        <SessionList />
        <View style={{ height: View_Spacing.VS_W5 }} />
        <SessionList />
      </View>
    </HomeContainer>
  );
}
export default ActiveSessionScreen;

import { View, Text, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import {
  View_Spacing,
  Basic_Viewdimension,
  fontSize,
} from "../Assets/Constant/fontsAndColors";
import LinearGradient from "react-native-linear-gradient";
function Button(props) {
  const{name,onPress}=props
  return (
    <View style={{ flex: 1, flexDirection: "row" }}>
      <View style={{ flex: 0.1 }} />
      <Pressable
        onPress={onPress}
        style={{
          flex: 0.8,
          flexDirection: "row",
        }}
      >
        <LinearGradient
          colors={["#10719E", "#199ECF", "#20C6F9"]}
          start={{ x: 0.1, y: 1 }}
          end={{ x: 0.8, y: 0.9 }}
          style={{
            flex: 1,
            flexDirection: "row",

            height: View_Spacing.VS_W5,
            borderRadius: Basic_Viewdimension.VD_BorderRadius,
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{
                color: "#ffffff",
                fontSize: fontSize.Large,
                letterSpacing: 2,
              }}
            >
              {name}
            </Text>
          </View>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

export default Button;

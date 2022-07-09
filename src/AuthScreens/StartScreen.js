import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import HomeContainer from "../Components/HomeContainer";
import {
  View_Spacing,
  fontSize,
  LG_BG_THEME,
} from "../Assets/Constant/fontsAndColors";
import Button from "../Components/Button";
import { icons } from "../Assets/icons";
import InputText from "../Components/InputText";
function StartScreen() {
  

  
  return (
    <HomeContainer>
      {/* image */}

      <View style={{ height: View_Spacing.VS_W20, backgroundColor: "red" }} />
      {/* Label */}

      <Text
          style={{
            fontSize: fontSize.ExtraLarge,
            color: LG_BG_THEME.App_Text_Blue,
          }}
        >
          {"Let's get Started"}
        </Text>

      

      {/* Textinput */}
      
      

      <Button  name="Sign up"/>
    </HomeContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  imageStyle: {
    resizeMode: "cover",
    width: "100%",
    height: "100%",
  },
  sub_container: { flex: 0.1, justifyContent: "center", alignItems: "center" },
});
export default StartScreen;

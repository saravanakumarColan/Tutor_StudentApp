/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  StyleSheet,
  Alert,
  BackHandler,
  Image,
  Text,
  PermissionsAndroid,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useTheme, useIsFocused } from "@react-navigation/native";
import InputText from "../Components/InputText";
import HomeComtainer from "../Components/HomeContainer";
import { View_Spacing, fontSize,LG_BG_THEME } from "../Assets/Constant/fontsAndColors";
import Button from "../Components/Button";
import { icons } from "../Assets/icons";

function LoginScreen(props) {
  const { colors } = useTheme();
  const [isSignUp, setIsSignUp] = useState(false);
  const [userLoc, setUserLoc] = useState({
    lat: "",
    long: "",
    error: "",
    country: "",
  });
  const [countryCode, setCountryCode] = useState("");
  React.useEffect(() => {}, []);

  React.useEffect(() => {
    const backAction = () => {
      console.log("==>", isSignUp);
      if (isSignUp) {
        setIsSignUp(false);
        return true;
      }
      if (props.navigation.isFocused()) {
        Alert.alert(
          "Hold on!",
          "Are you sure you want to close the application?",
          [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel",
            },
            { text: "YES", onPress: () => BackHandler.exitApp() },
          ]
        );
        return true;
      }
    };
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, [isSignUp]);

  return (
    <HomeComtainer>
      {/* image */}

      <View style={{ height: View_Spacing.VS_W20, backgroundColor: "red" }} />
      {/* Label */}

      <View style={styles.sub_container}>
        <View style={{ height: View_Spacing.VS_W3 }} />
        <Text style={{ fontSize: fontSize.ExtraLarge ,color:LG_BG_THEME.App_Text_Blue}}>{"Sign In"}</Text>
      </View>

      <View style={{ height: View_Spacing.VS_W8 }} />

      {/* Textinput */}
      <View style={styles.sub_container}>
        <InputText image={icons.profile} placeholder={"Username"} />
      </View>
      <View style={{ height: View_Spacing.VS_W4 }} />
      <View style={styles.sub_container}>
        <InputText image={icons.lock} placeholder={"Password"} />
      </View>

      <View style={{ height: View_Spacing.VS_W2 }} />

      <TouchableOpacity
        style={{
          flex: 0.1,
          justifyContent: "center",
          alignItems: "flex-end",
          paddingRight: View_Spacing.VS_W4,
        }}
      >
        <Text style={{ fontSize: fontSize.Medium ,color:LG_BG_THEME.App_Text_Blue}}>{"Forgot Password?"}</Text>
      </TouchableOpacity>

      <View style={{ height: View_Spacing.VS_W9 }} />

      <Button />
    </HomeComtainer>
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
export default LoginScreen;

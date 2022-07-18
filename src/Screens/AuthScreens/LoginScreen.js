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
import InputText from "../../Components/InputText";
import HomeComtainer from "../../Components/HomeContainer";
import Button from "../../Components/Button";
import { icons } from "../../Assets/icons";

import { StackActions,} from "@react-navigation/native";
import { View_Spacing,fontSize,LG_BG_THEME ,height} from "../../Assets/Constant/fontsAndColors";

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
      <View style={{ flex: 1, height: (height / 100) * 30 ,}}>
      <Image
        style={{ height: "100%", width: "100%", resizeMode: "contain", }}
        source={require("../../Assets/images/login.png")}
      />
 </View>
      {/* Label */}

      <View style={styles.sub_container}>
        <View style={{ height: View_Spacing.VS_W3 }} />
        <Text style={{ fontSize: fontSize.ExtraLarge ,color:LG_BG_THEME.App_Text_Blue}}>{"Sign In"}</Text>
      </View>

      <View style={{ height: View_Spacing.VS_W5 }} />

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

      <Button
       textStyle={{
                color: "#ffffff",
                fontSize: fontSize.Large,
                letterSpacing: 2,
       } } 
       onPress={()=>props.navigation.dispatch(StackActions.replace("BottomTab"))}
       name={"LOGIN"} />
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
  sub_container: { flex: 0.1, justifyContent: "center", alignItems: "center" ,},
});
export default LoginScreen;

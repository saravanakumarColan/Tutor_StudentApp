import React from "react";
import { View, Text, StyleSheet, TouchableOpacity ,Image} from "react-native";
import HomeContainer from "../../Components/HomeContainer";
import {
  View_Spacing,
  fontSize,
  LG_BG_THEME,
} from "../../Assets/Constant/fontsAndColors";
import Button from "../../Components/Button";
import { icons } from "../../Assets/icons";
import Header from "../../Components/Header";
import InputText from "../../Components/InputText";

function SignupScreen(props) {
  const [reg_Details, setRegister] = React.useState({
    firstname: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const placeholder={
    firstname:"Enter First Name" ,
    lastName:'Last Name',
    email:'Email',
    password:'Password',
    confirmPassword:'Confirm Password'
  }
  return (
    <HomeContainer>
      {/* image */}
      <Header {...props} back={true} />
      <Image
        style={{ height: "35%", width: "100%", resizeMode: "contain" ,}}
        source={require("../../Assets/images/register.png")}
      />
      
      {/* Label */}

      <View style={styles.sub_container}>
        <View style={{ height: View_Spacing.VS_W3 }} />
        <Text
          style={{
            fontSize: fontSize.ExtraLarge,
            color: LG_BG_THEME.App_Text_Blue,
          }}
        >
          {"REGISTER"}
        </Text>
      </View>

      

      {/* Textinput */}
      {Object.keys(reg_Details).map((e,i) => {
        return (
          <>
            <View style={{ height: View_Spacing.VS_W4 }} />
            <View style={styles.sub_container}>
              <InputText 
              placeholder={placeholder[e]}
               image={icons.profile}  />
            </View>
          </>
        );
      })}

      <View style={{ height: View_Spacing.VS_W3 }} />

      <Button textStyle={{
                color: "#ffffff",
                fontSize: fontSize.Large,
                letterSpacing: 2,
       } } name="SUBMIT"/>
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
export default SignupScreen;

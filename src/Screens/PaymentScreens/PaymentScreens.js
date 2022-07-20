import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import Header from "../../Components/Header";
import HomeContainer from "../../Components/HomeContainer";
import InputText from "../../Components/InputText";
import {
  LG_BG_THEME,
  Basic_Viewdimension,
  View_Spacing,
  fontSize,
} from "../../Assets/Constant/fontsAndColors";
import { icons } from "../../Assets/icons";
import Button from "../../Components/Button";

const PaymentScreens = (props) => {
  return (
    <HomeContainer>
      <Header title={"Payment"} {...props} back={true} />
      <View style={{ flex: 0.2, padding: 9 }}>
        <View style={{ height: View_Spacing.VS_W2 }} />
        <View
          style={{ flex: 0.1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            style={{
              height: View_Spacing.VS_W8,
              width: View_Spacing.VS_W8,
              resizeMode: "contain",
            }}
            source={require("../../Assets/images/paypal.png")}
          />
        </View>
        <View style={{ height: View_Spacing.VS_W2 }} />
        <View style={{ flex: 0.1, padding: 10 }}>
          <View
            style={{ borderBottomWidth: 0.5, borderBottomColor: "#b0b0b0" }}
          />
        </View>
        <View style={{ height: View_Spacing.VS_W2 }} />
        <View
          style={{ flex: 0.1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              fontSize: fontSize.ExtraLarge,
              color: LG_BG_THEME.App_Text_Blue,
            }}
          >
            {"Link a Card"}
          </Text>
        </View>
        <View style={{ height: View_Spacing.VS_W3 }} />
        <TextInput placeholder="First name" style={styles.Text_Input} />
        <View style={{ height: View_Spacing.VS_W2 }} />
        <TextInput placeholder="Last name" style={styles.Text_Input} />
        <View style={{ height: View_Spacing.VS_W2 }} />
        <TouchableOpacity
          onPress={() => alert("Card Type")}
          style={{ flex: 1 }}
        >
          <View style={styles.Faq_Sub_Container}>
            <Text
              style={{
                fontSize: fontSize.Small,
                color: LG_BG_THEME.App_Text_Inactive,
              }}
            >
              {"Card Type"}
            </Text>
            <Image
              source={icons.downArrow}
              style={{
                height: View_Spacing.VS_W2,
                width: View_Spacing.VS_W2,
                resizeMode: "contain",
                tintColor: LG_BG_THEME.App_Text_Inactive,
              }}
            />
          </View>
        </TouchableOpacity>
        <View style={{ height: View_Spacing.VS_W2 }} />
        <TextInput
          placeholder="Debit or Credit Card Number"
          style={styles.Text_Input}
        />
      </View>
      <View style={{ height: View_Spacing.VS_W2 }} />
      <View style={{ flex: 0.2, flexDirection: "row", alignItems: "center" }}>
        <View style={{ width: View_Spacing.VS_W2 }} />
        <Text
          style={{
            fontSize: fontSize.Medium,
            color: LG_BG_THEME.App_Text_Inactive,
          }}
        >
          {"Expiry Date"}
        </Text>
        <View style={{ width: View_Spacing.VS_W2 }} />
        <TouchableOpacity onPress={() => alert("date")} style={{ flex: 0.25 }}>
          <View style={styles.Faq_Sub_Container}>
            <Text
              style={{
                fontSize: fontSize.Small,
                color: LG_BG_THEME.App_Text_Inactive,
              }}
            >
              {"01"}
            </Text>
            <Image
              source={icons.downArrow}
              style={{
                height: View_Spacing.VS_W1,
                width: View_Spacing.VS_W1,
                resizeMode: "contain",
                tintColor: LG_BG_THEME.App_Text_Inactive,
              }}
            />
          </View>
        </TouchableOpacity>
        <View style={{ width: View_Spacing.VS_W2 }} />
        <TouchableOpacity onPress={() => alert("date")} style={{ flex: 0.35 }}>
          <View style={styles.Faq_Sub_Container}>
            <Text
              style={{
                fontSize: fontSize.Small,
                color: LG_BG_THEME.App_Text_Inactive,
              }}
            >
              {"2022"}
            </Text>
            <Image
              source={icons.downArrow}
              style={{
                height: View_Spacing.VS_W1,
                width: View_Spacing.VS_W1,
                resizeMode: "contain",
                tintColor: LG_BG_THEME.App_Text_Inactive,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ height: View_Spacing.VS_W2 }} />
      <View
        style={{
          flex: 0.2,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 9,
        }}
      >
        <TextInput
          placeholder="Security Code"
          style={{
            paddingLeft: 5,
            height: View_Spacing.VS_W5,
            width: "80%",

            borderRadius: Basic_Viewdimension.VD_BorderRadius,
            borderWidth: 1,
            borderColor: LG_BG_THEME.App_Text_Blue,
          }}
        />
        <Image
          style={{
            height: View_Spacing.VS_W5,
            width: View_Spacing.VS_W5,
            resizeMode: "contain",
            right: 5,
          }}
          source={require("../../Assets/images/cvv.png")}
        />
      </View>
      <View style={{ flex: 0.2, left: 10 }}>
        <Text
          style={{
            fontSize: fontSize.Small,
            color: LG_BG_THEME.App_Text_Inactive,
          }}
        >
          {"(The last three digits on the back of your card)"}
        </Text>
      </View>
      <View style={{ height: View_Spacing.VS_W3 }} />
      <Button
        onPress={() => alert("Link card")}
        textStyle={{
          color: "#fff",
          fontSize: fontSize.Large,
          letterSpacing: 2,
        }}
        name={"Link Card"}
      />
    </HomeContainer>
  );
};

export default PaymentScreens;
const styles = StyleSheet.create({
  Faq_Sub_Container: {
    height: View_Spacing.VS_W5,
    borderColor: LG_BG_THEME.App_Text_Blue,
    borderRadius: Basic_Viewdimension.VD_BorderRadius,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: View_Spacing.VS_W2,
    paddingLeft: 4,
  },
  Text_Input: {
    paddingLeft: 5,
    height: View_Spacing.VS_W5,
    width: "100%",

    borderRadius: Basic_Viewdimension.VD_BorderRadius,
    borderWidth: 1,
    borderColor: LG_BG_THEME.App_Text_Blue,
  },
});

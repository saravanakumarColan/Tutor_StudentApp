import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import LinearGradient from "react-native-linear-gradient";
import HomeContainer from "../../Components/HomeContainer";

import {
  View_Spacing,
  Basic_Viewdimension,
  LG_BG_THEME,
  fontSize,
} from "../../Assets/Constant/fontsAndColors";
import Header from "../../Components/Header";
import { icons } from "../../Assets/icons";
import InputText from "../../Components/InputText";
import Button from "../../Components/Button";

export default function EmailScreens(props) {
  const height = Dimensions.get("screen").height;

  const Email = props.route.params
console.log("Email==>",Email.eamil)
  return (
    <HomeContainer>
      {Email?.email==="email"? (
        <>
          <Header title={"E Mail"} back={true} {...props} />
          <View style={{ flex: 1, padding: 8 }}>
            <View style={{ height: View_Spacing.VS_W5 }} />
            <View
              style={{
                flex: 0.2,
                flexDirection: "row",
                height: View_Spacing.VS_W5,
              }}
            >
              <View
                style={{
                  flex: 0.2,

                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={icons.profile}
                  style={{
                    height: View_Spacing.VS_W4,
                    width: View_Spacing.VS_W4,
                    resizeMode: "contain",
                  }}
                />
              </View>
              <View style={{ flex: 0.8, justifyContent: "space-around" }}>
                <Text
                  style={{
                    fontSize: fontSize.Medium,
                    color: LG_BG_THEME.App_Text_Blue,
                  }}
                >
                  {"Linnea Josep"}
                </Text>
                <Text
                  style={{
                    fontSize: fontSize.Small,
                    color: LG_BG_THEME.App_Text_Inactive,
                  }}
                >
                  {"Lorem ipsum"}
                </Text>
              </View>
            </View>
            <View style={{ height: View_Spacing.VS_W3 }} />
            <Text
              style={{
                fontSize: fontSize.Small,
                color: LG_BG_THEME.App_Text_Inactive,
              }}
            >
              {"Subject"}
            </Text>
            <View style={{ height: View_Spacing.VS_W1 }} />
            <TextInput
              style={{
                height: View_Spacing.VS_W5,
                width: "100%",

                borderRadius: Basic_Viewdimension.VD_BorderRadius,
                borderWidth: 1,
                borderColor: LG_BG_THEME.App_Text_Blue,
              }}
            />
            <View style={{ height: View_Spacing.VS_W3 }} />
            <Text
              style={{
                fontSize: fontSize.Small,
                color: LG_BG_THEME.App_Text_Inactive,
              }}
            >
              {"Message"}
            </Text>
            <View style={{ height: View_Spacing.VS_W1 }} />
            <View
              style={{
                height: (height / 100) * 40,
                width: "100%",
                borderWidth: 0.5,
                borderColor: LG_BG_THEME.App_Text_Blue,
                borderRadius: Basic_Viewdimension.VD_BorderRadius,
                padding: 10,

                elevation: 2,
              }}
            >
              <TextInput
                multiline={true}
                style={{
                  flex: 1,
                }}
              />
            </View>
            <View style={{ height: View_Spacing.VS_W3 }} />
            <Button
              onPress={() => alert("send")}
              textStyle={{ color: "#fff", fontSize: fontSize.Large }}
              name={"Send"}
            />
          </View>
        </>
      ) : (
        <>
          <Header title={"FAQs"} back={true} {...props} />
          <View style={{ height: View_Spacing.VS_W5 }} />
          <TouchableOpacity style={{ flex: 1, padding: 20 }}>
            <View
              style={styles.Faq_Sub_Container}
            >
              <Text
                style={{
                  fontSize: fontSize.Medium,
                  color: LG_BG_THEME.App_Text_Blue,
                }}
              >
                {"01."}
                {"  "}
                {"Lorem harish"}
              </Text>
              <Image
                source={icons.add}
                style={{
                  height: View_Spacing.VS_W1,
                  width: View_Spacing.VS_W1,
                  resizeMode: "contain",
                }}
              />
            </View>
          </TouchableOpacity>
          <View style={{ height: View_Spacing.VS_W1 }} />
          <TouchableOpacity style={{ flex: 1, padding: 20 }}>
            <View
              style={styles.Faq_Sub_Container}
            >
              <Text
                style={{
                  fontSize: fontSize.Medium,
                  color: LG_BG_THEME.App_Text_Blue,
                }}
              >
                {"01."}
                {"  "}
                {"Lorem harish"}
              </Text>
              <Image
                source={icons.add}
                style={{
                  height: View_Spacing.VS_W1,
                  width: View_Spacing.VS_W1,
                  resizeMode: "contain",
                }}
              />
            </View>
          </TouchableOpacity>
          <View style={{ height: View_Spacing.VS_W1 }} />
          <TouchableOpacity style={{ flex: 1, padding: 20 }}>
            <View
              style={styles.Faq_Sub_Container}
            >
              <Text
                style={{
                  fontSize: fontSize.Medium,
                  color: LG_BG_THEME.App_Text_Blue,
                }}
              >
                {"01."}
                {"  "}
                {"Lorem harish"}
              </Text>
              <Image
                source={icons.add}
                style={{
                  height: View_Spacing.VS_W1,
                  width: View_Spacing.VS_W1,
                  resizeMode: "contain",
                }}
              />
            </View>
          </TouchableOpacity>
        </>
      )}
    </HomeContainer>
  );
}

const styles = StyleSheet.create({
    Faq_Sub_Container:{
        height: View_Spacing.VS_W6,
        borderColor: LG_BG_THEME.App_Text_Blue,
        borderRadius: Basic_Viewdimension.VD_BorderRadius,
        borderWidth: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: View_Spacing.VS_W2,
      }
});

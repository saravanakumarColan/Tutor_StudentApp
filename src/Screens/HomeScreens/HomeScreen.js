import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import {
  View_Spacing,
  fontSize,
  LG_BG_THEME,
} from "../../Assets/Constant/fontsAndColors";
import Header from "../../Components/Header";
import RoundButton from "../../Components/RoundButton";
import Icon from "react-native-vector-icons/AntDesign";
import {List, Chip,Divider} from 'react-native-paper';

function HomeScreen(props) {
  return (
    <View style={styles.Container}>
      <Header {...props}/>
      <Image
          source={require("../../Assets/icons/teacher.jpg")}
          style={{ width: "100%", height: 250 }}
          resizeMode={"cover"}
        />
      <TouchableOpacity
        style={{ backgroundColor: "#fff" }}
        onPress={() => props.navigation.navigate("MyProfile")}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 10,
          }}
        >
          <Image
            source={{
              uri: "https://ui-avatars.com/api/?length=1&background=2F79EB&color=fff&name=saravana",
            }}
            style={{
              width: 80,
              height: 80,
              borderRadius: 50,
              right: 2,
            }}
          />

          <View style={{ flexDirection: "column", justifyContent: "center" }}>
            <Text
              style={{
                color: LG_BG_THEME.App_Text_Blue,
                fontSize: 16,
                textAlign: "left",
                fontFamily: "Poppins-SemiBold",
                lineHeight: 20,
                paddingTop: 5,
              }}
            >
              {"Full name"}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <Divider/>
      <View style={{ flexDirection:'row',flex:0.3}}>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              color: LG_BG_THEME.App_Text_Blue,
              fontSize: fontSize.Medium,
              marginTop: 5,
            }}
          >
            {"Promos"}
          </Text>
          <Icon name={"check"} size={22} color={LG_BG_THEME.App_RED_1} />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              color: LG_BG_THEME.App_Text_Blue,
              fontSize: fontSize.Medium,
              marginTop: 5,
            }}
          >
            {"Giveaways"}
          </Text>
          <Icon name={"check"} size={22} color={LG_BG_THEME.App_RED_1} />
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text
            style={{
              color: LG_BG_THEME.App_Text_Blue,
              fontSize: fontSize.Medium,
              marginTop: 5,
            }}
          >
            {"FAQ'S"}
          </Text>
          <Icon name={"check"} size={22} color={LG_BG_THEME.App_RED_1} />
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end",
          paddingHorizontal: 10,
        }}
      >
        <RoundButton
          buttonname={"Active Session"}
          imagename={"check"}
          cborderRadius={60 / 2}
          cwidth={60}
          cheight={60}
          onPress={() => {
            props.navigation.navigate("ActiveSessionScreen");
          }}
          name={"LOGIN"}
        />
        <RoundButton
          buttonname={"New Session"}
          imagename={"plus"}
          cborderRadius={80 / 2}
          cwidth={80}
          cheight={80}
          onPress={() => {
            props.navigation.navigate("FindTutorScreen");
          }}
          name={"LOGIN"}
        />
        <RoundButton
          buttonname={"Past Session"}
          imagename={"back"}
          cborderRadius={60 / 2}
          cwidth={60}
          cheight={60}
          onPress={() => {
            props.navigation.navigate("PastSessionScreen");
          }}
          name={"LOGIN"}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
});

export default HomeScreen;

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import {
  View_Spacing,
  fontSize,
  LG_BG_THEME,
} from "../../Assets/Constant/fontsAndColors";
import Header from "../../Components/Header";
import RoundButton from "../../Components/RoundButton";
import Icon from "react-native-vector-icons/AntDesign";
import { List, Chip, Divider } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";

function SettingScreen(props) {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "Notification",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Limit response per Request",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Legal info",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Privacy Policy",
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        title: "About Us",
      },
  ];
  const renderItem = ({ item }) => (

      <View style={{justifyContent:'space-around' }}>
        <Text
          style={{
            color: LG_BG_THEME.App_Border,
            fontSize: 14,
            fontFamily: "Poppins-Medium",
            lineHeight: 20,
            paddingVertical:20
          }}
        >
          {item.title}
        </Text>

        <Divider/>

      </View>
  );
  return (
    <View style={styles.Container}>
      <Header title={"Settings"} back = {true} {...props} />
      <ScrollView style={styles.Container}>
        <View style={{ justifyContent: "center",paddingHorizontal:20 }}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  headerText: {
    color: LG_BG_THEME.App_Text_Blue,
    fontSize: fontSize.Medium,
    marginTop: 5,
  },
  SubText: {
    color: LG_BG_THEME.LIGHTGREY_THEME,
    fontSize: fontSize.Small,
    marginTop: 5,
  },
});

export default SettingScreen;

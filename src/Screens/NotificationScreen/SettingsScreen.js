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
  const [isPrivacy , setIsPricacy]=  React.useState(false)
  const [isAboutUs , setIsAboutUs]=  React.useState(false)

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
  const _onPress = (title)=>{
    if(title==='Privacy Policy'){
      setIsPricacy(!isPrivacy)
    } else if (title==='About Us'){
      setIsAboutUs(!isAboutUs)
    }
  }
  const renderItem = ({ item }) => (
      <TouchableOpacity onPress={()=>{_onPress(item.title)}}>
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
      </TouchableOpacity>
  );
  return (
    <View style={styles.Container}>
      <Header title={isPrivacy?"Privacy Policy": isAboutUs ? 'About Us':"Settings"} back = {true} {...props} />
      <ScrollView style={styles.Container}>
      {isAboutUs &&
        <View style={{ justifyContent: "center",paddingHorizontal:20 }}>
        <Image
          source={require("../../Assets/icons/teacher.jpg")}
          style={{ width: "100%", height: 250 }}
          resizeMode={"cover"}
        />
          <Text
          style={{
            color: LG_BG_THEME.App_Border,
            fontSize: 14,
            fontFamily: "Poppins-SemiBold",
            lineHeight: 20,
            paddingVertical:10,
            textAlign:'center'
            
          }}
        >
          {'Why TUTORY ?'}
        </Text>
        <Text
          style={{
            color: '#000',
            fontSize: 14,
            fontFamily: "Poppins-Regular",
            lineHeight: 20,
          }}
        >
          {'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'}
        </Text>
          </View>
      
      }
      {!isPrivacy && !isAboutUs &&
        <View style={{ justifyContent: "center",paddingHorizontal:20 }}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      }
        {isPrivacy &&
          <View style={{ justifyContent: "center",paddingHorizontal:20 }}>
          <Text
          style={{
            color: LG_BG_THEME.App_Border,
            fontSize: 14,
            fontFamily: "Poppins-SemiBold",
            lineHeight: 20,
            paddingVertical:10
          }}
        >
          {'Lorem Ipsum'}
        </Text>
        <Text
          style={{
            color: '#000',
            fontSize: 14,
            fontFamily: "Poppins-Regular",
            lineHeight: 20,
          }}
        >
          {'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'}
        </Text>
          </View>
        }
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

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

function ComplaintsList(props) {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];
  const renderItem = ({ item }) => (
       <View>
               <View
          style={{
            // justifyContent: "center",
            alignItems: "center",
            paddingVertical: 10,
            flexDirection:'row'
          }}
        >
          <Image
            source={{
              uri: "https://ui-avatars.com/api/?length=1&background=2F79EB&color=fff&name=saravana",
            }}
            style={{
              width: 45,
              height: 45,
              borderRadius: 45,
            }}
          />
          <View style={{flex:1}}>
          <Text
          style={{
            color: LG_BG_THEME.App_Border,
            fontSize: 14,
            fontFamily: "Poppins-SemiBold",
            lineHeight: 20,
            paddingTop: 5,
            marginLeft:5

          }}
        >
          {"Lorem Ipsum"}
        </Text>
            
          </View>
        
        <Image
            source={require('../../Assets/icons/block.png')}
            style={{
              width: 15,
              height: 15,
              marginRight:5
            }}
          />
                      <Text
          style={{
            color: LG_BG_THEME.App_Border,
            fontSize: 10,
            fontFamily: "Poppins-Regular",
            lineHeight: 20,
            paddingTop: 5,
          }}
        >
          {"Blocked"}
        </Text>
      </View>

      <View style={styles.shadowContainerStyle}>
        <Text
          style={{
            color: "grey",
            fontSize: 14,
            fontFamily: "Poppins-SemiBold",
            lineHeight: 20,
            paddingTop: 5,
          }}
        >
          {"Description"}
        </Text>
        <Text
          style={{
            color: "grey",
            fontSize: 14,
            fontFamily: "Poppins-Regular",
            // paddingTop: 2,
            paddingVertical:10,
            
            
          }}
        >
          {"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}
        </Text>
       
        <Divider/>

      </View>
      </View>
  );
  return (
    <View style={styles.Container}>
      <Header title={"Complaints"} {...props} />
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


 shadowContainerStyle: {
  backgroundColor: '#fff',
  marginHorizontal:5,
  borderRadius: 10,
  padding: 10,
  shadowColor: '#000000',
  shadowOffset: {
    width: 0,
    height: 3
  },
  shadowRadius: 5,
  shadowOpacity: 0.4,
    justifyContent:'space-around'
  },
  
});

export default ComplaintsList;

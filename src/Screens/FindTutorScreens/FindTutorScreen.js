import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Button from '../../Components/Button';
import LinearGradient from 'react-native-linear-gradient';
import HomeContainer from '../../Components/HomeContainer';
import NewSessionScreen from './Session/NewSessionScreen';
import { View_Spacing ,Basic_Viewdimension,LG_BG_THEME, fontSize} from '../../Assets/Constant/fontsAndColors';
View_Spacing
function FindTutorScreen() {
  return (
  <HomeContainer>
     <View style={{height:View_Spacing.VS_W5}} />
    <View style={{flex:0.1,flexDirection:'row'}}>
      <View style={{flex:0.3,paddingLeft:5}}>
    <LinearGradient
          colors={["#10719E", "#199ECF", "#20C6F9"]}
          start={{ x: 0.1, y: 1 }}
          end={{ x: 0.8, y: 0.9 }}
          style={{
            flex: 1,
            flexDirection: "row",

            height: View_Spacing.VS_W4,
            borderRadius: Basic_Viewdimension.VD_BorderRadius,
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{fontSize:fontSize.Small,color:'#fff'}}
            >
            {"New Session"}
            </Text>
          </View>
        </LinearGradient>
        </View>
        <View style={{flex:0.05}} />
        <View style={{flex:0.3,paddingLeft:5}}>
    <LinearGradient
          colors={["#10719E", "#199ECF", "#20C6F9"]}
          start={{ x: 0.1, y: 1 }}
          end={{ x: 0.8, y: 0.9 }}
          style={{
            flex: 1,
            flexDirection: "row",

            height: View_Spacing.VS_W4,
            borderRadius: Basic_Viewdimension.VD_BorderRadius,
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{fontSize:fontSize.Small,color:LG_BG_THEME.App_Text_Inactive}} 
            >
           {"Active Session"}
            </Text>
          </View>
        </LinearGradient>
        </View>
        <View style={{flex:0.05}} />
        <View style={{flex:0.3,paddingRight:5}}>
    <LinearGradient
          colors={["#10719E", "#199ECF", "#20C6F9"]}
          start={{ x: 0.1, y: 1 }}
          end={{ x: 0.8, y: 0.9 }}
          style={{
            flex: 1,
            flexDirection: "row",

            height: View_Spacing.VS_W4,
            borderRadius: Basic_Viewdimension.VD_BorderRadius,
          }}
        >
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text
              style={{fontSize:fontSize.Small}} 
            >
            {"Past Session"}
            </Text>
          </View>
        </LinearGradient>
        </View>
      
    </View>
    
    <NewSessionScreen />
  </HomeContainer>
  )
}

export default FindTutorScreen
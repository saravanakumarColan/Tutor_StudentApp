import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import HomeContainer from '../../../Components/HomeContainer';
import DropDown from '../../../Components/DropDown';
import { View_Spacing } from '../../../Assets/Constant/fontsAndColors';
View_Spacing
function NewSessionScreen() {
  return (
  <HomeContainer>
    
    <View style={{flex:0.1,padding:10}}>
    <View style={{height:View_Spacing.VS_W5}} />
    <DropDown />
   <View style={{height:View_Spacing.VS_W5}} />
   <DropDown />
   <View style={{height:View_Spacing.VS_W5}} />
   <DropDown />
    </View>
   
  </HomeContainer>
  )
}

export default NewSessionScreen
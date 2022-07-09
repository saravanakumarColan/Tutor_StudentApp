import React from 'react'
import {View } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
KeyboardAwareScrollView
function HomeContainer(props) {
  return (
  <View style={{flex:1}}>
    <KeyboardAwareScrollView>
    {props.children}
    </KeyboardAwareScrollView>
  </View>
  )
}

export default HomeContainer
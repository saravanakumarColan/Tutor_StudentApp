import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
// import {useTheme} from '@react-navigation/native';
import {
  View_Spacing,
  fontSize,
  LG_BG_THEME,
} from "../Assets/Constant/fontsAndColors";
export default ActivityLoading = () => {
  // const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={LG_BG_THEME.App_Text_Blue} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

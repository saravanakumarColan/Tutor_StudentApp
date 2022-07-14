import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
// import {useTheme} from '@react-navigation/native';

export default ActivityLoading = () => {
  // const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={'blue'} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

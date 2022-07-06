/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {
  View,
  StyleSheet,
  Alert,
  BackHandler,
  Image,
  Text,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useTheme,useIsFocused} from '@react-navigation/native';
function LoginScreen(props) {
  const {colors} = useTheme();
  const [isSignUp, setIsSignUp] = useState(false);
  const [userLoc,setUserLoc] = useState({
    lat:'',
    long:'',
    error:'',
    country:''
  })
  const [countryCode,setCountryCode] =useState("");
  React.useEffect(()=>{
  
},[])

  React.useEffect(() => {
    const backAction = () => {
       console.log('==>',isSignUp)
      if (isSignUp) {
        setIsSignUp(false);
        return true;
      }
      if(props.navigation.isFocused()){
        Alert.alert(
          'Hold on!',
          'Are you sure you want to close the application?',
          [
            {
              text: 'Cancel',
              onPress: () => null,
              style: 'cancel',
            },
            {text: 'YES', onPress: () => BackHandler.exitApp()},
          ],
        );
        return true;
      }
    };
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [isSignUp]);

 

  return (
    <View style={styles.container}>
       <Text>LoginScreen</Text>
    </View>
  );
          }
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#ffff',
  },
  imageStyle: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});
export default LoginScreen;

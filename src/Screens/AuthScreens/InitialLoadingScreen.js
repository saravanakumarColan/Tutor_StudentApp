/* eslint-disable prettier/prettier */
import React, {useState, useMemo, useEffect} from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Platform,
  Text,
  Linking,
  TouchableOpacity,
  Dimensions,
  Image
} from 'react-native';
import ActivityLoading from '../../Components/ActivityLoading';
import {StackActions} from '@react-navigation/native';
// import {Icon} from '../../Components/Icon';
import SplashScreen from 'react-native-splash-screen';
import {useDispatch, useSelector} from 'react-redux';
// import DeviceInfo from 'react-native-device-info';
// import Modal from 'react-native-modal';
// import ButtonComponent from '../../Components/ButtonComponent';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
// import {Divider} from 'react-native-paper';

function InitialLoadingScreen(props) {
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const [isUpdate, setUpdate] = useState(false);

  // const ForceUpdateResponse = useSelector(state => state?.forceUpdateReducer);
  React.useEffect(() => {
    getUser();
    SplashScreen.hide();
  }, []);
  const getUser = async () => {
    // let isValidUser = await global.functions.isValidUser();
    // console.log('isValidUser', isValidUser);
    // if (isValidUser) {
    //   props.navigation.dispatch(StackActions.replace('BottomTab'));
    // } else {
    //   props.navigation.dispatch(StackActions.replace('AuthStack'));
    // }
    setTimeout(()=>{
      props.navigation.dispatch(StackActions.replace('AuthStack'));
    
    }, 2000); 


  };
  
  
  
  return (
    <View style={styles.contentContainStyle}>

      <View style={styles.imageContainer}>
        <Image source={require('../../Assets/icons/logo.png')} style={[styles.imageStyle]} />
      </View>
      <ActivityLoading />
 
    </View>
  );
}
const styles = StyleSheet.create({
  contentContainStyle: {
    flex: 1,
    backgroundColor: '#fbfbfb',
  },
  imageStyle: {
    resizeMode: 'contain',
    height: 155,
    width: 155,
  },
  imageContainer: {
    flex: 0.9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    //backgroundColor: '#fff',
  },
});
export default InitialLoadingScreen;

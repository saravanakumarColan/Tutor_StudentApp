import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Image, StyleSheet} from 'react-native';
import * as React from 'react';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import FastImage from 'react-native-fast-image';

import {My_Home_Tab, My_club_Tab} from '../RootNavigation'
import ChatScreen from '../ChatScreens/ChatScreen';
import ProfileScreen from '../ProfileScreens/ProfileScreen';
const Tab = createBottomTabNavigator();
// import ProfileScreen from "../Screens/ProfileScreen";
export const CustomTab = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      ScreenOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: colors.sublabelTextColor,
        showLabel: true,
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          borderTopWidth: 1,
          
        },
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={My_Home_Tab}
        options={{
          tabBarStyle: {height: 50, paddingBottom: 5},
          tabBarLabelStyle: {fontFamily: 'Poppins-SemiBold'},
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              {/* <View
                style={
                  focused
                    ? {
                        backgroundColor: colors.primary,
                        height: 2,
                        width: 40,
                        borderRadius: 2,
                        // top: -3,
                        // marginBottom:5

                      }
                    : null
                }
              /> */}
              <Icon
                name="home"
                size={22}
                color={focused ? colors.primary : colors.sublabelTextColor}
              />
              {/* <FastImage
                resizeMode={'contain'}
                tintColor={focused ? colors.primary : colors.sublabelTextColor}
                style={{width: 21, height: 21}}
                source={require('../Assets/icons/home-button.png')}
              /> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Club"
        component={My_club_Tab}
        options={{
          tabBarStyle: {height: 50, paddingBottom: 5},
          tabBarLabelStyle: {fontFamily: 'Poppins-SemiBold'},
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              {/* <View
                style={
                  focused
                    ? {
                        backgroundColor: colors.primary,
                        height: 2,
                        width: 40,
                        borderRadius: 2,
                        // top: -5,
                        marginBottom:7
                      }
                    : null
                }
              /> */}
              <Icon
                name="home"
                size={22}
                color={focused ? colors.primary : colors.sublabelTextColor}
              />
              {/* <FastImage
                resizeMode={'contain'}
                tintColor={focused ? colors.primary : colors.sublabelTextColor}
                style={{width: 21, height: 21}}
                source={require('../Assets/clubhome.png')}
              /> */}
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarStyle: {height: 50, paddingBottom: 5},
          headerShown: false,
          tabBarLabelStyle: {fontFamily: 'Poppins-SemiBold'},
          tabBarIcon: ({color, size, focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <View
                style={
                  focused
                    ? {
                        backgroundColor: colors.primary,
                        height: 2,
                        width: 40,
                        borderRadius: 2,
                        top: -3,
                      }
                    : null
                }
              />
              <Icon
                name="account-balance-wallet"
                size={22}
                color={focused ? colors.primary : colors.sublabelTextColor}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size, focused}) => (
            <View>
              <Icon
                name="forum"
                size={25}
                color={focused ? colors.primary : colors.sublabelTextColor}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  circle: {
    marginBottom: 20,
    backgroundColor: '#fff',
    width: 70,
    height: 70,

    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 15,
    marginBottom: 30,
  },
  Innercircle: {
    elevation: 10,
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 15,
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImgStyle: {
    width: 25,
    tintColor: '#fff',
    height: 25,
    resizeMode: 'contain',
  },
});

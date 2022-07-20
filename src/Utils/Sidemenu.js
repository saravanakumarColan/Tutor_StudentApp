import * as React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Platform,
} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Icon} from '../Components/Icon';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StackActions, useIsFocused} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  backgroundColor,
  left,
  marginRight,
  paddingRight,
  right,
} from 'styled-system';
import {List, Chip,Divider} from 'react-native-paper';
const primaryColor = '#3a3a3a';

let authCredentialListener = null;

const SideMenu = props => {
  const dispatch = useDispatch();
  const loginResponse = useSelector(state => state?.loginreducer);
  const userListResponse = useSelector(state => state?.profilePreviewReducer);
  const [emailLogin, setEmailLogin] = React.useState(false);
  const [disabled, setDisabled] = React.useState(true);
  const isFocused = useIsFocused();
  const editProfileResponse = useSelector(state => state?.EditProfileReducer);
  const [isSupportView, setIsSupportView] = React.useState(false);

  React.useEffect(() => {

  }, []);
  
  const _LogoutTriggr = () => {
    // const isSignedIn = async () => await GoogleSignin.isSignedIn();
    // if (isSignedIn) {
    //   GoogleSignin.revokeAccess();
    //   GoogleSignin.signOut();
    // }
    setDisabled(false);
    global.functions.logoutUser();
    dispatch(global.actions.logoutCall());
    setTimeout(() => {
      props.navigation.dispatch(StackActions.replace('AuthStack'));
    }, 1000);
  };





  const forgotPassword = Email => {
    // console.log('Email==>', Email);
    // if (global.functions.ValidateEmail(Email)) {
    //   auth()
    //     .sendPasswordResetEmail(Email)
    //     .then(function (user) {
    //       alert(
    //         'We have sent a verification link to your email address, please check your email and follow the instructions.',
    //       );
    //     })
    //     .catch(function (e) {
    //       console.log(e);
    //     });
    // } else {
    //   global.functions.ShowAlert(
    //     'Please Enter Valid Email',
    //     global.const.warning,
    //   );
    // }
  };
  return (
    <View
      style={{
        flex: 1,
        borderwidth: 1,
        borderColor: '#3a3a3a',
        borderRadius: 50,
      }}
      {...props}>
      <DrawerContentScrollView {...props}>
        <TouchableOpacity
          style={{backgroundColor: '#fff'}}
          onPress={() => props.navigation.navigate('MyProfile')}>
          <View style={styles.Container}>
            <View
              style={{
                //paddingLeft: 20,
                //paddingTop: 20,
                flexDirection: 'row',
                // right: "12%"
              }}>
              <Image
                source={{
                  uri: 
                  'https://ui-avatars.com/api/?length=1&background=2F79EB&color=fff&name=saravana'
                     
                }}
                style={{
                  width: 55,
                  height: 55,
                  borderRadius: 50,
                  right: 2,
                }}
              />

              <View style={{flexDirection: 'column', justifyContent: 'center'}}>
                <Text
                  style={{
                    color: '#000',
                    fontSize: 16,
                    paddingLeft: 2,
                    textAlign: 'left',
                    fontFamily: 'Poppins-Medium',
                    marginHorizontal: 5,
                    lineHeight: 20,
                  }}>
                  {'Full name'}
                </Text>
                <Text
                  style={{
                    color: '#147AD6',
                    fontSize: 10,
                    paddingLeft: 2,
                    textAlign: 'left',
                    fontFamily: 'Poppins-Medium',
                    marginHorizontal: 5,
                    lineHeight: 16,
                  }}>
                  {'Email id'}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <Divider />

        <View
          style={{
            backgroundColor: '#fff',
            flex: 0.8,
          }}>
          <View style={{paddingLeft: 4}}>
            {/* <DrawerItem
              ScreenOptions={{
                activeTintColor: colors.primary,
                inactiveTintColor: colors.sublabelTextColor,
                showLabel: true,
                headerShown: false,
              }}
              icon={({color, size, focused}) => (
                <MaterialCommunityIcons
                  name="home"
                  color={color}
                  size={size}
                  // color={colors.primary}
                  color={focused ? colors.primary : colors.sublabelTextColor}
                />
              )}
              label="Home"
              labelStyle={styles.labelTextStyle}
              onPress={() =>
                props.navigation.dispatch(StackActions.replace('BottomTab'))
              }
              inactiveTintColor="red"
            /> */}
            <List.Section>
              {/* <List.Subheader>Custom description</List.Subheader> */}
              <List.Item
                onPress={() =>
                  props.navigation.dispatch(StackActions.replace('BottomTab'))
                }
                left={() => (
                  // <MaterialCommunityIcons
                  //   name="home"
                  //   color={"#000"}
                  //   size={24}
                  //   style={{ alignSelf: "center", paddingHorizontal: 5 }}
                  // />
                  <View
                    style={{
                      borderwidth: 0.2,
                      height: 36,
                      width: 36,
                      borderRadius: 18,
                      backgroundColor: 'rgba(242, 242, 247, 255)',
                      alignSelf: 'center',
                      justifyContent: 'center',
                      marginRight: 3,
                    }}>
                    <Image
                      source={require('../Assets/icons/Auth/profile.png')}
                      tintColor={'#147AD6'}
                      style={{
                        height: 18,
                        width: 18,
                        // borderRadius: 30,
                        // marginTop: 15,
                        marginHorizontal: 5,
                        alignSelf: 'center',
                      }}
                    />
                  </View>
                )}
                right={props => (
                  <List.Icon
                    {...props}
                    icon="chevron-right"
                    style={{
                      paddingLeft: 15,
                    }}
                  />
                )}
                title="My Account"
                titleStyle={{
                  color: '#000',
                  fontWeigt: '400',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 13,
                  lineHeight: 18,
                }}
                description={({}) => (
                  <View>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: 'rgb(72,72,74)',
                        fontWeigt: '300',
                        fontFamily: 'Poppins-Regular',
                        fontSize: 10,
                        lineHeight: 15,
                      }}>
                      {/* Access to */}
                      My Account & Details
                    </Text>
                  </View>
                )}
              />
              <Divider style={{}} />

           
              <List.Item
                onPress={() => {
                  props.navigation.navigate('PaymentScreens')
                 
                }}
                left={() => (
                  <View
                    style={{
                      borderwidth: 0.2,
                      height: 36,
                      width: 36,
                      borderRadius: 18,
                      backgroundColor: 'rgba(242, 242, 247, 255)',
                      alignSelf: 'center',
                      justifyContent: 'center',
                      marginRight: 3,
                    }}>
                    <Image
                      source={require('../Assets/icons/Auth/profile.png')}
                      tintColor={'#147AD6'}
                      style={{
                        height: 18,
                        width: 18,
                        // borderRadius: 30,
                        // marginTop: 15,
                        marginHorizontal: 5,
                        alignSelf: 'center',
                      }}
                    />
                  </View>
                )}
                right={props => <List.Icon {...props} icon="chevron-right" />}
                title="Payments"
                titleStyle={{
                  color: '#000',
                  fontWeigt: '400',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 13,
                  lineHeight: 18,
                }}
                description={({}) => (
                  <View style={[styles.container, styles.column]}>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: 'rgb(72,72,74)',
                        fontWeigt: '300',
                        fontFamily: 'Poppins-Regular',
                        fontSize: 10,
                        lineHeight: 15,
                      }}>
                      Payment setup and manage{' '}
                    </Text>
                  </View>
                )}
              />


              <Divider style={{}} />
              <List.Item
                onPress={() => props.navigation.navigate('SettingScreen')}
                left={() => (
                  <View
                    style={{
                      borderwidth: 0.2,
                      height: 36,
                      width: 36,
                      borderRadius: 18,
                      backgroundColor: 'rgba(242, 242, 247, 255)',
                      alignSelf: 'center',
                      justifyContent: 'center',
                      marginRight: 3,
                    }}>
                    <Image
                      source={require('../Assets/icons/Auth/profile.png')}
                      tintColor={'#147AD6'}
                      style={{
                        height: 18,
                        width: 18,
                        // borderRadius: 30,
                        // marginTop: 15,
                        marginHorizontal: 5,
                        alignSelf: 'center',
                      }}
                    />
                  </View>
                )}
                right={props => <List.Icon {...props} icon="chevron-right" />}
                title="Settings"
                titleStyle={{
                  color: '#000',
                  fontWeigt: '400',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 13,
                  lineHeight: 18,
                }}
                description={({}) => (
                  <View style={[styles.container, styles.column]}>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: 'rgb(72,72,74)',
                        fontWeigt: '300',
                        fontFamily: 'Poppins-Regular',
                        fontSize: 10,
                        lineHeight: 15,
                      }}>
                      Manage the application
                    </Text>
                  </View>
                )}
              />
            </List.Section>
            <Divider style={{}} />
            <List.Item
              // onPress={alert("Are you sure you want to delete your account")}
              onPress={() => setIsSupportView(!isSupportView)}
              left={() => (
                <View
                  style={{
                    borderwidth: 0.2,
                    height: 36,
                    width: 36,
                    borderRadius: 18,
                    backgroundColor: 'rgba(242, 242, 247, 255)',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    marginRight: 3,
                  }}>
                  <Image
                      source={require('../Assets/icons/Auth/profile.png')}
                    tintColor={'#147AD6'}
                    style={{
                      height: 18,
                      width: 18,
                      // borderRadius: 30,
                      // marginTop: 15,
                      marginHorizontal: 5,
                      alignSelf: 'center',
                    }}
                  />
                </View>
              )}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              title="Support"
              titleStyle={{
                color: '#000',
                fontWeigt: '400',
                fontFamily: 'Poppins-Medium',
                fontSize: 13,
                lineHeight: 18,
              }}
              description={({}) => (
                <View style={[styles.container, styles.column]}>
                  <Text
                    numberOfLines={1}
                    style={{
                      color: 'rgb(72,72,74)',
                      fontWeigt: '300',
                      fontFamily: 'Poppins-Regular',
                      fontSize: 10,
                      lineHeight: 15,
                    }}>
                    Support and contact us{' '}
                  </Text>
                </View>
              )}
            />
            {isSupportView && 
            <><Divider /><List.Item
                // onPress={alert("Are you sure you want to delete your account")}
                onPress={() => props.navigation.navigate('AccountDeletion')}
                left={() => (
                  <View
                    style={{
                      borderwidth: 0.2,
                      height: 36,
                      width: 36,
                      borderRadius: 18,
                      //backgroundColor: 'rgba(242, 242, 247, 255)',
                      alignSelf: 'center',
                      justifyContent: 'center',
                      marginRight: 3,
                    }}>

                  </View>
                )}
                title="Live Chat"
                titleStyle={{
                  color: '#000',
                  fontWeigt: '400',
                  fontFamily: 'Poppins-Medium',
                  fontSize: 13,
                  lineHeight: 18,
                }} /><Divider /><List.Item
                  // onPress={alert("Are you sure you want to delete your account")}
                  onPress={() => props.navigation.navigate('EmailScreens',{
                    email: "faq",
                  })}
                  left={() => (
                    <View
                      style={{
                        borderwidth: 0.2,
                        height: 36,
                        width: 36,
                        borderRadius: 18,
                        //backgroundColor: 'rgba(242, 242, 247, 255)',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        marginRight: 3,
                      }}>

                    </View>
                  )}
                  title="FAQs"
                  titleStyle={{
                    color: '#000',
                    fontWeigt: '400',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 13,
                    lineHeight: 18,
                  }} /><Divider /><List.Item
                  // onPress={alert("Are you sure you want to delete your account")}
                  onPress={() => props.navigation.navigate('EmailScreens',{
                    email: "email",
                  })}
                  left={() => (
                    <View
                      style={{
                        borderwidth: 0.2,
                        height: 36,
                        width: 36,
                        borderRadius: 18,
                        //backgroundColor: 'rgba(242, 242, 247, 255)',
                        alignSelf: 'center',
                        justifyContent: 'center',
                        marginRight: 3,
                      }}>

                    </View>
                  )}
                  title="E Mail"
                  titleStyle={{
                    color: '#000',
                    fontWeigt: '400',
                    fontFamily: 'Poppins-Medium',
                    fontSize: 13,
                    lineHeight: 18,
                  }} /></>
            }
            <Divider />
            <List.Item
              onPress={disabled ? () => _LogoutTriggr() : null}
              left={() => (
                <View
                  style={{
                    borderwidth: 0.2,
                    height: 36,
                    width: 36,
                    borderRadius: 18,
                    backgroundColor: 'rgba(242, 242, 247, 255)',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    marginRight: 3,
                  }}>
                  <Image
                      source={require('../Assets/icons/Auth/profile.png')}
                    tintColor={'#147AD6'}
                    style={{
                      height: 18,
                      width: 18,
                      marginHorizontal: 5,
                      alignSelf: 'center',
                    }}
                  />
                </View>
              )}
              right={props => <List.Icon {...props} icon="chevron-right" />}
              title="Logout"
              titleStyle={{
                color: '#000',
                fontWeigt: '400',
                fontFamily: 'Poppins-Medium',
                fontSize: 13,
              }}
              description={({}) => (
                <View style={[styles.container, styles.column]}>
                  <Text
                    numberOfLines={1}
                    style={{
                      color: 'rgb(72,72,74)',
                      fontWeigt: '300',
                      fontFamily: 'Poppins-Regular',
                      fontSize: 10,
                      lineHeight: 15,
                    }}>
                    Logout of the mobile app
                  </Text>
                </View>
              )}
            />

            {/* <DrawerItem
              icon={({ color, size, focused }) => (
                <Icon
                  icon={'notification'}
                  style={[{ resizeMode: 'contain', height: 20, width: 25 }]}
                  tintColor={color}
                />
              )}
              label="Notifications"
              labelStyle={styles.labelTextStyle}
              onPress={() => props.navigation.navigate('NotificationScreen')}
              inactiveTintColor="#324345"
            /> */}

            {/* <Divider />

            {emailLogin ? (
              <DrawerItem
                icon={({ color, size }) => (
                  <Icon
                    icon={'password'}
                    style={[{ resizeMode: 'contain', height: 25, width: 25 }]}
                    tintColor={color}
                  />
                )}
                label="Change Password"
                labelStyle={styles.labelTextStyle}
                inactiveTintColor="#324345"
                onPress={() =>
                  forgotPassword(userListResponse.Response?.user_details?.email_id)
                }
              />
            ) : null}
            <Divider /> */}

            {/* <DrawerItem
              icon={({ color, size }) => (
                <Icon
                  icon={'logout'}
                  tintColor={color}
                  style={[{ resizeMode: 'contain', height: 20, width: 25 }]}
                />
              )}

              label="Delete Account"
              labelStyle={[styles.labelTextStyle]}
              inactiveTintColor="#324345"
              disabled={disabled}
              onPress={disabled ? () => _AppleAccountDelete() : null}
            />
            <Divider /> */}

            {/* <Divider style={{ marginHorizontal: 10 }} /> */}
          </View>
          <Divider />
        </View>
        <View style={{padding: 20}}>
          <Text
            style={{
              color: '#000',
              // textAlign: 'center',
              paddingTop: '5%',
              fontSize: 12,
              fontFamily: 'Poppins-Medium',
              // margin:1
            }}>
            {'1.0'}
          </Text>
          <Text
            style={{
              color: '#324345',
              // textAlign: 'center',
              color: '#147AD6',
              fontSize: 12,
              paddingVertical: 5,
            }}
            onPress={() => {
              //setPrivacyPolicy(!privacyPolicy)
              props.navigation.navigate('WebViewScreen', {
                WebViewLink:
                  'https://app.termly.io/document/privacy-policy/64a6dc6d-fed6-414d-b591-b625f32973ca',
                isarticle: true,
                terms: ' ',
              });
            }}>
            {'privacy_Policy'}
          </Text>
          <Text
            style={{
              color: '#324345',
              // textAlign: 'center',
              color: '#147AD6',
              fontSize: 12,
              // margin:1
            }}
            onPress={() => {
              //setPrivacyPolicy(!privacyPolicy)
              props.navigation.navigate('WebViewScreen', {
                WebViewLink: 'https://kridasport.com/legal',
                isarticle: true,
                terms: ' ',
              });
            }}>
            {'privacyPolicyterms'}
          </Text>
          {/* <Text
          style={{
            color: '#324345',
            // textAlign: 'center',
            color: '#147AD6',
            fontSize: 12,
            // margin:1
            paddingVertical: 5

          }}
          onPress={() => {
            //setPrivacyPolicy(!privacyPolicy)
            props.navigation.navigate('WebViewScreen', {
              WebViewLink: 'https://kridasport.com/how-to',
              isarticle: true,
              terms: " "
            });
          }}
        >
          {global.const.kridaGuids}
        </Text> */}
          {/* <Text
          style={{
            color: '#324345',
            // textAlign: 'center',
            color: '#147AD6',
            fontSize: 12,
            // margin:1
            marginTop:5

          }}
          onPress={() => {
            //setPrivacyPolicy(!privacyPolicy)
            props.navigation.navigate('WebViewScreen', {
              WebViewLink: 'https://kridasport.com/known-issues/',
              isarticle: true,
              terms: " "
            });
          }}
        >
          {global.const.KridaKnownIssues}
        </Text> */}
        </View>
      </DrawerContentScrollView>
      {/* <Divider /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  labelTextStyle: {
    color: '#000',
    right: 20,
  },
  Container: {
    flex: 0.2,
    //flexDirection: 'row',
    //alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: 'center',
    width: '100%',
    // height: 140,
    elevation: 0.05,
    borderWidth: 0.1,
    borderColor: '#fff',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    borderRadius: 5,
    // backgroundColor: '#f5faff',
  },
});

export default SideMenu;

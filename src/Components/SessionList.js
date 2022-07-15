import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import {
  View_Spacing,
  Basic_Viewdimension,
  fontSize,
  LG_BG_THEME,
} from "../Assets/Constant/fontsAndColors";
import LinearGradient from "react-native-linear-gradient";
import { icons } from "../Assets/icons";

function SessionList(props) {
  const { Complete ,tutor} = props;
  return (
    <TouchableOpacity
      style={{
        borderWidth: 1,
        borderColor: LG_BG_THEME.App_Border,
        borderRadius: Basic_Viewdimension.VD_BorderRadius,

        backgroundColor: "#ffffff",
      }}
    >
      <View
        style={{ flexDirection: "row", flex: 1, height: View_Spacing.VS_W15 }}
      >
        <View style={{ flex: 0.7, justifyContent: "center", paddingLeft: 10 }}>
          <View style={{ flex: 0.5, flexDirection: "row" }}>
            <View style={{ flex: 0.5 }}>
              <Text
                style={{
                  fontSize: fontSize.Medium,
                  color: LG_BG_THEME.App_Text_Blue,

                  fontWeight: "300",
                  fontFamily: "Poppins-Medium",
                }}
              >
                {"Subject"}
              </Text>

              <Text
                style={{
                  fontSize: fontSize.Small,
                  color: LG_BG_THEME.App_Text_Inactive,
                  fontFamily: "Poppins-Medium",
                  letterSpacing: 1,
                  fontWeight: "300",
                }}
              >
                {"Science"}
              </Text>
            </View>
            {Complete && (
              <View style={{ flex: 0.5, alignItems: "center" }}>
                <Text
                  style={{
                    fontSize: fontSize.Small,
                    color: "green",
                    fontFamily: "Poppins-Regular",
                    letterSpacing: 1,
                    fontWeight: "400",
                  }}
                >
                  Completed
                </Text>
              </View>
            )}
          </View>
          <View style={{ height: View_Spacing.VS_W1 }} />
          <Text
            style={{
              fontSize: fontSize.Medium,
              color: LG_BG_THEME.App_Text_Blue,
              fontFamily: "Poppins-Medium",
              fontWeight: "300",
            }}
          >
            {"Type of Work"}
          </Text>
          <Text
            style={{
              fontSize: fontSize.Small,
              color: LG_BG_THEME.App_Text_Inactive,
              fontFamily: "Poppins-Medium",
              letterSpacing: 1,
              fontWeight: "300",
            }}
          >
            {"Science"}
          </Text>
        </View>
        <View style={{ flex: 0.3 }}>
          <LinearGradient
            colors={["#10719E", "#199ECF", "#20C6F9"]}
            start={{ x: 0.1, y: 1 }}
            end={{ x: 0.8, y: 0.9 }}
            style={{
              flex: 0.4,
              backgroundColor: "#000",
              width: "70%",
              borderBottomLeftRadius: Basic_Viewdimension.VD_BorderRadius,
              borderBottomRightRadius: Basic_Viewdimension.VD_BorderRadius,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: fontSize.Small,
                color: LG_BG_THEME.App_Text_White,
              }}
            >
              {"$ 320.00"}
            </Text>
          </LinearGradient>
          <View
            style={{
              flex: 0.6,

              justifyContent: "center",
              alignItems: "center",
              width: "80%",
            }}
          >
            <Text
              style={{
                fontSize: fontSize.Small,
                color: LG_BG_THEME.App_Text_Blue,
                fontFamily: "Poppins-Medium",
              }}
            >
              {"Due Date"}
            </Text>
            <Text
              style={{
                fontSize: fontSize.verySmall_50,
                fontFamily: "Poppins-Medium",
                letterSpacing: 2,
                color: LG_BG_THEME.App_Text_Inactive,
              }}
            >
              {"15 Mar 2022"}
            </Text>
          </View>
        </View>
      </View>{
        tutor&&
      <>
      <View style={{flex:0.1,padding:10}}>
      <View style={{ borderBottomWidth: 0.3, borderBottomColor: "#b0b0b0" }} />
      </View>
      <View style={{ flex: 0.1, flexDirection: "row",paddingLeft:View_Spacing.VS_W1 }}>
        <View style={{ flex: 0.4 }}>
          <Text style={{
              fontSize: fontSize.verySmall,
              color: LG_BG_THEME.App_Text_Blue,
              fontFamily: "Poppins-Medium",
            }}>{"Tutor"}</Text>
        </View>
        <View style={{ flex: 0.3, flexDirection: "row",}}>
          <Image
            source={icons.warning}
            style={{
              height: View_Spacing.VS_W1_5,
              width: View_Spacing.VS_W2,
              resizeMode: "contain",
            }}
          />
          <Text
            style={{
              fontSize: fontSize.verySmall_50,
              color: LG_BG_THEME.App_Text_Inactive,
              fontFamily: "Poppins-Medium",
            }}
          >
            {"Report Abuse"}
          </Text>
        </View>
        <View style={{ flex: 0.3 ,flexDirection:'row'}}>

        <Image
          source={icons.block}
          style={{
            height: View_Spacing.VS_W1_5,
            width: View_Spacing.VS_W2,
            resizeMode: "contain",
          }}
        />
        <Text
          style={{
            fontSize: fontSize.verySmall_50,
            color: LG_BG_THEME.App_Text_Inactive,
            fontFamily: "Poppins-Medium",
          }}
        >
          {"Block a Tutor"}
        </Text>
        </View>
        
      </View>

      <View style={{flex:0.4,flexDirection:'row',paddingTop:View_Spacing.VS_W2,paddingLeft:View_Spacing.VS_W1}}>
          <View style={{flex:0.2,backgroundColor:'red',borderRadius:View_Spacing.VS_W15,}}></View>
          <View style={{flex:0.8,left:View_Spacing.VS_W2}}>
          <Text
          style={{
            fontSize: fontSize.Small,
            color: LG_BG_THEME.App_Text_Blue,
            fontFamily: "Poppins-Regular",
          }}
        >
          {"Emma Logan"}
        </Text>
        <View style={{flex:0.1,flexDirection:'row',alignItems:'center',width:"30%",justifyContent:'space-around'}}>
<Text style={{
            fontSize: fontSize.verySmall_50,
            color: LG_BG_THEME.App_Text_Blue,
            fontFamily: "Poppins-Regular",
          }}>{"3.2"}</Text>
<Image source={icons.star} style={{height:10,width:10,resizeMode:'contain',tintColor:LG_BG_THEME.App_Text_Blue}}/>
<Image source={icons.star} style={{height:10,width:10,resizeMode:'contain',tintColor:LG_BG_THEME.App_Text_Blue}}/>
<Image source={icons.star} style={{height:10,width:10,resizeMode:'contain',tintColor:'#b0b0b0'}}/>
<Image source={icons.star} style={{height:10,width:10,resizeMode:'contain',tintColor:'#b0b0b0'}}/>

<Image source={icons.star} style={{height:10,width:10,resizeMode:'contain',tintColor:'#b0b0b0'}}/>
        </View>
        <Text  style={{
            fontSize: fontSize.verySmall_50,
            color: LG_BG_THEME.App_Inactive,
            fontFamily: "Poppins-Medium",
          }}>
          {"Some examples of descriptive text include: The sunset filled the entire sky with the deep color of rubies, setting the clouds ablaze. "}
        </Text>
          </View>

        </View>

        <View style={{flex:0.1,padding:10}}>
      <View style={{ borderBottomWidth: 0.3, borderBottomColor: "#b0b0b0" }} />
      </View>
<View style={{flex:0.1,flexDirection:'row'}}>
  <View style={{flex:0.35, paddingLeft:View_Spacing.VS_W2}}>
      <Text style={{
            fontSize: fontSize.Small,
            color: LG_BG_THEME.App_Text_Blue,
            fontFamily: "Poppins-Medium",
          }}>{"Study materials"}</Text>
          </View>
          <View style={{flex:0.65,}}>
      <Text style={{
            fontSize: fontSize.Small,
            color: LG_BG_THEME.App_Text_Inactive,
            fontFamily: "Poppins-Medium",
          }}>{"Science"}</Text>
          </View>
          </View>
          <View style={{height:View_Spacing.VS_W1}}/>
          <View style={{flex:0.1,flexDirection:'row',width:'50%',justifyContent:'space-around', paddingLeft:View_Spacing.VS_W2}}>
            <Image source={icons.pdf} style={{height:40,width:40,resizeMode:'contain'}} />
            <Image source={icons.pdf} style={{height:40,width:40,resizeMode:'contain'}} />
            <Image source={icons.pdf} style={{height:40,width:40,resizeMode:'contain'}} />
          </View>
          <View style={{height:View_Spacing.VS_W2}} />
          <View style={{flex:0.1,flexDirection:'row', paddingLeft:View_Spacing.VS_W2}}>
  <View style={{flex:0.35,}}>
      <Text style={{
            fontSize: fontSize.Small,
            color: LG_BG_THEME.App_Text_Blue,
            fontFamily: "Poppins-Medium",
          }}>{"Study materials"}</Text>
          </View>
          <View style={{flex:0.65,}}>
      <Text style={{
            fontSize: fontSize.Small,
            color: LG_BG_THEME.App_Text_Inactive,
            fontFamily: "Poppins-Medium",
          }}>{"Science"}</Text>
          </View>
          </View>
          <View style={{height:View_Spacing.VS_W1}}/>
          <View style={{flex:0.1,flexDirection:'row',width:'50%',justifyContent:'space-around', paddingLeft:View_Spacing.VS_W2}}>
            <Image source={icons.doc} style={{height:40,width:40,resizeMode:'contain'}} />
            <Image source={icons.doc} style={{height:40,width:40,resizeMode:'contain'}} />
            <Image source={icons.pdf} style={{height:40,width:40,resizeMode:'contain'}} />
          </View>
          <View style={{flex:0.1,padding:10}}>
      <View style={{ borderBottomWidth: 0.3, borderBottomColor: "#b0b0b0" }} />
      </View>

      <Text style={{
            fontSize: fontSize.Small,
            color: LG_BG_THEME.App_Text_Blue,
            fontFamily: "Poppins-Medium",
            paddingLeft:View_Spacing.VS_W2
          }}>{"Description"}</Text>
           <Text style={{
            fontSize: fontSize.verySmall_50,
            color: LG_BG_THEME.App_Text_Inactive,
            fontFamily: "Poppins-Medium",
            paddingLeft:View_Spacing.VS_W2
          }}>{"Loadn sdfjsdjfsdfk sjdfskjf sdfjhskdfk"}</Text>

          <View style={{height:View_Spacing.VS_W2}} /></>}
    </TouchableOpacity>
  );
}

export default SessionList;

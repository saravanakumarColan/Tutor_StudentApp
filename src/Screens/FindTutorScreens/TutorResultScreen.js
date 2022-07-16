import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import {
  View_Spacing,
  fontSize,
  LG_BG_THEME,
} from "../../Assets/Constant/fontsAndColors";
import Header from "../../Components/Header";
import RoundButton from "../../Components/RoundButton";
import Icon from "react-native-vector-icons/AntDesign";
import { List, Chip, Divider } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";

function TutorResultScreen(props) {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];
  const renderItem = ({ item }) => (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
      }}
    >
      <View
        style={{
          width: 190,
          height: 160,
          overflow: "hidden",
          borderRadius: 10,marginVertical:5
        }}
      >
        <View
          style={{
            width: 40,
            height: 30,
            overflow: "hidden",
            borderRadius: 10,
          }}
        ></View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            paddingVertical: 10,
            backgroundColor: "#199ECF",
            overflow: "hidden",
            borderTopStartRadius:10,
            borderTopEndRadius:10

          }}
        >
          <View style={{ flexDirection: "column", justifyContent: "center",marginTop:15 }}>
            <Text
              style={{
                color: "#fff",
                fontSize: 14,
                textAlign: "center",
                fontFamily: "Poppins-SemiBold",
                lineHeight: 20,
                paddingTop: 5,
              }}
            >
              {"Full name"}
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 14,
                textAlign: "center",
                fontFamily: "Poppins-Medium",
                paddingTop: 2,
              }}
            >
              {"English"}
            </Text>
            <View
              style={{
                height: 0.4,
                backgroundColor: "#fff",
                width: 150,
                marginTop: 5,
              }}
            />
          </View>
        </View>
        <View
          style={{ flex: 1, flexDirection: "row", backgroundColor: "#199ECF" }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Icon name={"home"} size={22} color={LG_BG_THEME.WHITE_THEME} />
            <Text
              style={{
                color: "#fff",
                fontSize: fontSize.verySmall,
                marginTop: 5,
              }}
            >
              {"20"}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Icon name={"home"} size={22} color={LG_BG_THEME.WHITE_THEME} />
            <Text
              style={{
                color: "#fff",
                fontSize: fontSize.verySmall,
                marginTop: 5,
              }}
            >
              {"20"}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Icon name={"home"} size={22} color={LG_BG_THEME.WHITE_THEME} />
            <Text
              style={{
                color: "#fff",
                fontSize: fontSize.verySmall,
                marginTop: 5,
              }}
            >
              {"20"}
            </Text>
          </View>
        </View>
        {/* </LinearGradient> */}
      </View>
      <View
        style={{
          position: "absolute",
          left: 75,
          top: -1,
        }}
      >
        <Image
          source={{
            uri: "https://ui-avatars.com/api/?length=1&background=2F79EB&color=fff&name=saravana",
          }}
          style={{
            width: 60,
            height: 60,
            borderRadius: 50,
            borderWidth: 1,
            borderColor: "#fff",
          }}
        />
      </View>
    </View>
  );
  return (
    <View style={styles.Container}>
      <Header title={"Find a Tutor"} {...props} />
      <ScrollView style={styles.Container}>
        <Image
          source={require("../../Assets/icons/teacher.jpg")}
          style={{ width: "100%", height: 250 }}
          resizeMode={"cover"}
        />
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <View>
            <Text style={styles.headerText}>{"Subject"}</Text>
            <Text style={styles.SubText}>{"English"}</Text>
          </View>
          <View>
            <Text style={styles.headerText}>{"Type of Work"}</Text>
            <Text style={styles.SubText}>{"HomeWork"}</Text>
          </View>
        </View>
        <View style={{ paddingHorizontal: 60, marginTop: 5 }}>
          <Text style={styles.headerText}>{"Description"}</Text>
          <Text style={styles.SubText}>
            {
              "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          </Text>
        </View>

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <FlatList
            data={DATA}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: "#ffff",
  },
  headerText: {
    color: LG_BG_THEME.App_Text_Blue,
    fontSize: fontSize.Medium,
    marginTop: 5,
  },
  SubText: {
    color: LG_BG_THEME.LIGHTGREY_THEME,
    fontSize: fontSize.Small,
    marginTop: 5,
  },
});

export default TutorResultScreen;

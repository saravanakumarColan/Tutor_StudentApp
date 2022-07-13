import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

function Header(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={()=>{props.navigation.openDrawer()}}>
      <Image
        source={require("../Assets/icons/Auth/profile.png")}
        tintColor={"#147AD6"}
        style={styles.imageStyle     
        }
      />
      </TouchableOpacity>
  
           <Image
        source={require("../Assets/icons/Auth/profile.png")}
        tintColor={"#147AD6"}
        style={styles.imageStyle     
        }
      />
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 0.1,
      backgroundColor: "#ffff",
      flexDirection:'row',
      justifyContent:'space-between'
    },
    imageStyle: {
        height: 25,
        width: 25,
        marginHorizontal:20
    },
    sub_container: { flex: 0.1, justifyContent: "center", alignItems: "center" },
  });

export default Header;

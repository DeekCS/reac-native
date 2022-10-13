import React from "react";
import { Text, View, SafeAreaView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header = ({ title, navigation, route }) => {
  // console.log(
  //   navigation.getState().routes[0],
  //   "//////////////////////////////"
  // );
  // console.log(route.name, "header name");
  return (
    <View>
      <Ionicons name="star" size={50} color={"#000"} />
      <Text>{title}ssss</Text>
    </View>
  );
};

export default Header;

import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Subtitle = ({ children }) => {
  return (
    <View style={subtitleContainer}>
      <Text style={subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;
const { subtitle, subtitleContainer } = StyleSheet.create({
  subtitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "#c73030",
  },
  subtitleContainer: {
    borderBottomColor: "#c73030",
    borderBottomWidth: 2,
    padding: 6,
    margin: 4,
    marginHorizontal: 12,
    marginVertical: 4,
  },
});

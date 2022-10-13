import React from "react";
import { Text, View, StyleSheet } from "react-native";

const MealDetailsComponent = ({
  duration,
  affordability,
  complexity,
  style,
  textStyle,
}) => {
  return (
    <View style={[details, style]}>
      <Text style={[detailItem, textStyle]}>{duration}m</Text>
      <Text style={[detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

export default MealDetailsComponent;

const { details, detailItem } = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 8,
    fontSize: 16,
  },
});

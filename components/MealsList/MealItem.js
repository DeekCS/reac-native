import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Text,
  View,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import MealDetails from "../MealDetails";
const MealItem = ({
  id,
  title,
  imageUrl,
  duration,
  affordability,
  complexity,
}) => {
  const navigate = useNavigation();
  function pressHandler() {
    navigate.navigate("MealDetail", {
      mealId: id,
    });
  }

  return (
    <View style={mealItem}>
      <Pressable onPress={pressHandler}>
        <View style={innerContainer}>
          <Image source={{ uri: imageUrl }} style={image} />
          <Text style={titleStyle}>{title}</Text>
        </View>
        <MealDetails
          duration={duration}
          affordability={affordability}
          complexity={complexity}
        />
      </Pressable>
    </View>
  );
};

export default MealItem;

const { details, image, titleStyle, detailItem, mealItem, innerContainer } =
  StyleSheet.create({
    mealItem: {
      margin: 16,
      borderRadius: 8,
      overflow: Platform.OS === "android" ? "hidden" : "visible",
      backgroundColor: "#fff",
      shadowColor: "black",
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 8,
      elevation: 4,
    },
    image: {
      width: "100%",
      height: 200,
    },
    titleStyle: {
      fontWeight: "bold",
      fontSize: 18,
      textAlign: "center",
      margin: 8,
    },
    innerContainer: {
      flex: 1,
      padding: 16,
      justifyContent: "center",
    },
  });

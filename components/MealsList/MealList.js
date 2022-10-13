import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import MealItem from "./MealItem";

const MealList = ({ items }) => {
  function renderMealItem(itemData) {
    const { id, title, duration, complexity, affordability, imageUrl } =
      itemData.item;
    const mealItemProps = {
      id,
      title,
      duration,
      complexity,
      affordability,
      imageUrl,
    };
    return <MealItem {...mealItemProps} />;
  }

  return (
    <View style={container}>
      <Text>MealsOverViewScreen</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealList;

const { container } = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

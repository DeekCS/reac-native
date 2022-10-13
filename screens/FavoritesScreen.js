import React, { useContext } from "react";
import { Text, StyleSheet, View } from "react-native";
import MealList from "../components/MealsList/MealList";
// import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
const FavoritesScreen = () => {
  // const favorites =
  const favoriteMealIds = useSelector((state) => state.favoritesMeals.ids);
  // const context = useContext(FavoritesContext);
  const favorites = MEALS.filter((meal) => favoriteMealIds.includes(meal.id));
  if (favorites.length === 0 || !favorites) {
    return (
      <View style={styles.content}>
        <Text style={styles.text}>
          No favorites meals found. Start adding some!
        </Text>
      </View>
    );
  }
  return <MealList items={favorites} />;
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    textAlign: "center",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

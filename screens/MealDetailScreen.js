import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  Text,
  Platform,
  Image,
  ScrollView,
  Button,
} from "react-native";
import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetailsComponent from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../store/redux/favorites";

const MealDetailScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  // const favoriteMealCtx = useContext(FavoritesContext);
  const { mealId } = route.params;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId); //this is how you get the meal data from the dummy data
  const favoritesMealsIds = useSelector((state) => state.favoritesMeals.ids);
  const mealIsFavorite = favoritesMealsIds.includes(mealId); //this is how you get the meal data from the dummy data
  function handlerButtonPressHandler() {
    return alert("Marked as favorite!");
  }
  const changeFavoriteStatus = () => {
    if (mealIsFavorite) {
      dispatch(removeFavorite(mealId));
    } else {
      dispatch(addFavorite(mealId));
    }
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton
          onPress={handlerButtonPressHandler}
          icon={"ios-star"}
          color={"#c73030"}
        />
      ),
    });
  }, [navigation, handlerButtonPressHandler]);

  return (
    <ScrollView style={root}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={image} />
      <IconButton
        onPress={changeFavoriteStatus}
        icon={mealIsFavorite ? "ios-star" : "ios-star-outline"}
        size={50}
        color={"#c73030"}
      />
      <Text style={titleStyle}>{selectedMeal.title}</Text>
      <MealDetailsComponent
        duration={selectedMeal.duration}
        affordability={selectedMeal.affordability}
        complexity={selectedMeal.complexity}
        textStyle={detailText}
      />
      <View style={listOuterContainer}>
        <View style={listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} textStyle={detailText} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} textStyle={detailText} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;
const {
  image,
  titleStyle,
  detailText,
  listContainer,
  listOuterContainer,
  root,
} = StyleSheet.create({
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
  root: {
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: 350,
  },
  titleStyle: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    color: "#c73030",
    textAlign: "center",
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
  },
  detailText: {
    color: "#131111",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
    color: "#131111",
  },
  subtitleContainer: {
    borderBottomColor: "#131111",
    borderBottomWidth: 2,
    padding: 6,
    margin: 4,
    marginHorizontal: 24,
    marginVertical: 4,
  },
  listContainer: {
    width: "80%",
  },
  listOuterContainer: {
    alignItems: "center",
  },
});

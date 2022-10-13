import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealList from "../components/MealsList/MealList";

//in nested screens, you can use the useRoute hook to get the params passed from the previous screen
const MealsOverViewScreen = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0 //this is how you filter the meals based on the category id
  );

  useLayoutEffect(() => {
    const categoryTitles = CATEGORIES.find(
      (cat) => cat.id === categoryId
    ).title;
    navigation.setOptions({ title: categoryTitles }); //this is how you set the title of the screen
  }, [navigation, categoryId]);

  return <MealList items={displayedMeals} />;
};

export default MealsOverViewScreen;

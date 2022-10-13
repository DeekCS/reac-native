import React from "react";
import { Button, Text } from "react-native";
import Header from "../Header";
import CategoriesScreen from "../../screens/CategoriesScreen";
import MealsOverViewScreen from "../../screens/MealsOverViewScreen";
import MealDetailScreen from "../../screens/MealDetailScreen";
import FavoritesScreen from "../../screens/FavoritesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        animation: "slide_from_right",
        gestureEnabled: true,
        headerBackButtonMenuEnabled: false,
        headerShown: false,
        headerStyle: {
          backgroundColor: "#351401",
        },
        headerTintColor: "#fff",
        sceneContainerStyle: {
          backgroundColor: "rgba(53,20,1,0.49)",
        },
      }}
    >
      {/*Stack Screen allows you to navigate between screens*/}
      <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} />
      <Stack.Screen
        name="MealsOverViewScreen"
        component={MealsOverViewScreen}
        options={({ route }) => ({
          title: "1",
        })}
      />
      <Stack.Screen
        name="MealDetail"
        component={MealDetailScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="#000"
            />
          ),
          title: "Meal Details",
        }}
      />
      <Stack.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          headerRight: () => (
            <Button
              onPress={() => alert("This is a button!")}
              title="Info"
              color="#000"
            />
          ),
          title: "Favorites Screen",
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;

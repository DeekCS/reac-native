import React from "react";
import { Text } from "react-native";
import Footer from "../Footer";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigator from "../StackNavigator/StackNavigator";
import Header from "../Header";

const TabsNavigator = () => {
  const Tab = createBottomTabNavigator();

  const screens = [
    {
      title: "Home",
      onPress: "CategoriesScreen",
    },
    {
      title: "Favorites",
      onPress: "FavoritesScreen",
    },
  ];
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#eb1064",
        headerTintColor: "#fff",
        sceneContainerStyle: {
          backgroundColor: "rgba(53,20,1,0.49)",
        },
      }}
      tabBar={(props) => <Footer {...props} screens={screens} />}
    >
      <Tab.Screen
        name="Home"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
          header: (props) => <Header {...props} title={"All"} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabsNavigator;

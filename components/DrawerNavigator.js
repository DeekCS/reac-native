import React from "react";
import { Text } from "react-native";
import DrawerMenu from "./Drawer";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TabsNavigator from "./TabsNavigator/TabsNavigator";
const DrawerNavigator = () => {
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
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      useLegacyImplementation
      screenOptions={{
        // headerStyle: {
        //   backgroundColor: "#351401",
        // },
        // headerTintColor: "#fff",
        // sceneContainerStyle: {
        //   backgroundColor: "rgba(53,20,1,0.49)",
        // },
        // drawerContentStyle: {
        //   backgroundColor: "#351401",
        // },
        // drawerInactiveTintColor: "#fff",
        // drawerActiveTintColor: "rgb(255,255,255)",
        // drawerActiveBackgroundColor: "rgba(236,175,145,0.49)",

        headerShown: false,
      }}
      drawerContent={(props) => <DrawerMenu {...props} screens={screens} />}
      drawerStyle={{
        backgroundColor: "#351401",
      }}
    >
      <Drawer.Screen
        name="BottomTabNavigator"
        component={TabsNavigator}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

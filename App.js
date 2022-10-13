import { StyleSheet } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./components/DrawerNavigator";
import { FavoritesProvider } from "./store/context/favorites-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        {/*<FavoritesProvider>*/}
        <DrawerNavigator />
        {/*</FavoritesProvider>*/}
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

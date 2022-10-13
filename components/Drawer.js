import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

const DrawerMenu = ({ navigation, screens }) => {
  return (
    <View style={styles.container}>
      {screens.map((screen) => (
        <Button
          key={screen.title}
          title={screen.title}
          onPress={() => {
            navigation.navigate(screen.onPress);
          }}
        />
      ))}
    </View>
  );
};

export default DrawerMenu;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    marginVertical: 10,
    height: "100%",
  },
});

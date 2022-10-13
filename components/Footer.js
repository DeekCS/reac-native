import React from "react";
import { Button, Text, View, StyleSheet } from "react-native";

const Footer = ({ navigation, title, onPress, screens }) => {
  function pressHandler() {}
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

export default Footer;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

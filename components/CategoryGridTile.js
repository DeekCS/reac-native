import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";

function CategoryGridTile({ title, color, onPress }) {
  const navigation = useNavigation(); // This is a hook that allows you to navigate between screens
  return (
    <View style={[styles.gridItems, { backgroundColor: color }]}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.buttons,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={styles.innerContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItems: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "#f5f5f5",
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  buttons: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default CategoryGridTile;

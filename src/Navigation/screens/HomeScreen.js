import React from "react";
import { StyleSheet, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function HomeScreen() {
  return (
    <LinearGradient
      // The start and end props control the direction of the gradient.
      // Here, we want it to start from the top (`x: 0.5, y: 0`) and go
      // downwards towards bottom (`x: 0.5, y: 1`).
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      colors={["#FFF", "rgba(233, 234, 205, 0.00)"]}
      style={styles.container}>
      <Text>Home Screen</Text>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HomeScreen;

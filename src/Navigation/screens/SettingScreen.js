import React from "react";
import { StyleSheet, Text, TextIput } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

function SettingScreen() {
  return (
    <LinearGradient
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      colors={["#FFF", "rgba(233, 234, 205, 0.00)"]}
      style={styles.container}>
      <Text>Setting Screen</Text>
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

export default SettingScreen;

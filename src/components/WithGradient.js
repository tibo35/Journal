// withGradient.js

import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export const withGradient = (Component) => (props) =>
  (
    <LinearGradient
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      colors={["#add8e6", "#00008b"]}
      style={styles.container}>
      <Component {...props} />
    </LinearGradient>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

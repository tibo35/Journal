import * as React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MainContainer from "../journalN/src/Navigation/MainContainer";

function App() {
  return (
    <LinearGradient
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      colors={["#FFF", "rgba(233, 234, 205, 0.00)"]}
      style={styles.container}>
      <MainContainer />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

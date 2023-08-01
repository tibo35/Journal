import React from "react";
import { StyleSheet, Image } from "react-native";

function AddBtn() {
  return (
    <Image source={require("../../assets/AddIcon.png")} style={styles.button} />
  );
}

const styles = StyleSheet.create({
  button: {
    width: 90, // you can adjust these dimensions as needed
    height: 80,
  },
});

export default AddBtn;

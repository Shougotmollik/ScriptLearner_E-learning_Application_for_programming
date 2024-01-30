import { Platform, StyleSheet, Text, View } from "react-native";
import React from "react";
import LoginScreen from "./Apps/Screens/LoginScreen";

const App = () => {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
});

import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../shared/Colors";
import { FontAwesome6 } from "@expo/vector-icons";

export default function Login() {
  return (
    <View>
      <Image
        source={require("../assets/images/4826435.jpg")}
        style={styles.loginImage}
      />
      <View>
        <Text style={styles.welcomeText}>Welcome To Script Learner</Text>
        <Text style={styles.lsText}>Login/SignUp</Text>
      </View>
      <View style={styles.btnContainer}>
        <FontAwesome6 name="google" size={24} color="white" />
        <Text style={styles.btnText}>Sign In with Google</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    height: 300,
    width: 400,
  },
  welcomeText: {
    fontSize: 47,
    textAlign: "center",
    fontWeight: "500",
    color: "#1a237e",
    padding: 10,
  },
  lsText: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 20,
    color: "#1a237e",
    marginTop: 25,
  },
  btnContainer: {
    backgroundColor: Colors.primary,
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
    margin: 35,
    borderRadius: 15,
  },
  btnText: {
    color: "#e8eaf6",
    fontWeight: "bold",
  },
});

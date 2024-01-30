import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";

const LoginScreen = () => {
  return (
    <View>
      <Image
        source={require("../../assets/images/login.jpg")}
        style={styles.loginImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.textOne}>Welcome To</Text>
        <Text style={styles.textTwo}>Script Learner</Text>
        <Text style={styles.textThree}>
          Learn programming to make life easier
        </Text>
        {/* Button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            console.log("sign in clicked");
          }}
        >
          <Text style={styles.btnText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            console.log("Clicked create Account");
          }}
        >
          <Text style={styles.textFour}>Create New Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginImage: {
    height: 350,
    width: "100%",
    objectFit: "cover",
  },
  textContainer: {
    padding: 20,
  },
  textOne: {
    fontSize: 40,
    fontWeight: "400",
  },
  textTwo: {
    fontSize: 50,
    fontWeight: "500",
    color: Colors.primary,
  },
  textThree: {
    fontSize: 20,
    paddingTop: 10,
    color: Colors.grey,
  },
  button: {
    backgroundColor: Colors.primary,
    padding: 16,
    marginTop: 80,
    borderRadius: 100,
  },
  btnText: {
    color: Colors.white,
    textAlign: "center",
    fontSize: 20,
  },
  textFour: {
    fontSize: 20,
    color: Colors.primary,
    textAlign: "center",
    marginTop: 10,
  },
});

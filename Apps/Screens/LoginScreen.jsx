import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import Colors from "../Utils/Colors";
import { client } from "../Utils/kindeConfig";
import { AuthContext } from "../../App";

const LoginScreen = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const handleSignUp = async () => {
    const token = await client.register();
    if (token) {
      console.log("Authenticate succesfully");
      setAuth(true);
      // User was authenticated
    }
  };

  const handleSignIn = async () => {
    const token = await client.login();
    if (token) {
      setAuth(true);
      console.log("Authenticate succesfully");
      // User was authenticated
    }
  };

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
        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.btnText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSignUp}>
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

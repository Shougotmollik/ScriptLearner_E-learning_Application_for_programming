import { Button, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { client } from "../Utils/kindeConfig";
import { AuthContext } from "../../App";

const HomeScreen = () => {
  const { auth, setAuth } = useContext(AuthContext);
  const handleLogout = async () => {
    const loggedOut = await client.logout();
    if (loggedOut) {
      setAuth(false);
      // User was logged out
    }
  };
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Log Out" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

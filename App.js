import { Platform, StyleSheet, Text, View } from "react-native";
import React, { createContext, useEffect, useState } from "react";
import LoginScreen from "./Apps/Screens/LoginScreen";
import { client } from "./Apps/Utils/kindeConfig";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigations from "./Apps/Navigations/TabNavigations";

export const AuthContext = createContext();
const App = () => {
  const [auth, setAuth] = useState(false);
  const checkAuthenticate = async () => {
    // Using `isAuthenticated` to check if the user is authenticated or not
    if (await client.isAuthenticated) {
      const userProfile = await client.getUserDetails();
      setAuth(true);
      // Need to implement, e.g: call an api, etc...
    } else {
      setAuth(false);
      // Need to implement, e.g: redirect user to sign in, etc..
    }
  };

  useEffect(() => {
    checkAuthenticate();
  }, [auth]);
  return (
    <View style={styles.container}>
      <AuthContext.Provider
        value={{
          auth,
          setAuth,
        }}
      >
        {/* <LoginScreen /> */}
        <NavigationContainer>
          {auth ? <TabNavigations /> : <LoginScreen />}
        </NavigationContainer>
      </AuthContext.Provider>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 35 : 0,
  },
});

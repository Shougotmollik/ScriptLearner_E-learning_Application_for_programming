import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import MyCourseScreen from "../Screens/MyCourseScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import Colors from "../Utils/Colors";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
export default function TabNavigations() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={18} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text
              style={{
                color: color,
                fontSize: 12,
                marginBottom: 5,
              }}
            >
              Home
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="MyCourse"
        component={MyCourseScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-sharp" size={18} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text
              style={{
                color: color,
                fontSize: 12,
                marginBottom: 5,
              }}
            >
              My Course
            </Text>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle-sharp" size={22} color={color} />
          ),
          tabBarLabel: ({ color }) => (
            <Text
              style={{
                color: color,
                fontSize: 12,
                marginBottom: 5,
              }}
            >
              Profile
            </Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

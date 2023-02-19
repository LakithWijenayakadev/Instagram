import React from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from "../styles/Colors";

// Tab Screens
import Feed from './Feed';
import Search from './Search';
import Profile from './Profile';
import AddPost from './AddPost';
import Videos from './Videos';

const Tab = createBottomTabNavigator();


function HomeTab(): JSX.Element {

  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Feed"
        options={{
          tabBarLabel: 'Feed',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home-filled" color={COLORS.black} size={30} />
          ),
        }}
        component={Feed} />

      <Tab.Screen name="Search"
        options={{
          tabBarLabel: 'Search',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Octicons name="search" color={COLORS.black} size={size} />
          ),
        }}
        component={Search} />

      <Tab.Screen name="AddPost"
        options={{
          tabBarLabel: 'AddPost',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="plus-square-o" color={COLORS.black} size={size} />
          ),
        }}
        component={AddPost} />

      <Tab.Screen name="Videos"
        options={{
          tabBarLabel: 'Videos',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="play-box-multiple-outline" color={COLORS.black} size={size} />
          ),
        }}
        component={Videos} />

      <Tab.Screen name="Profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-person-circle" color={COLORS.black} size={size} />
          ),
        }}
        component={Profile} />

    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

});

export default HomeTab;
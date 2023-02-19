import React, { useEffect, useState } from 'react'
import { Dimensions, Text, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme, DarkTheme, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Screens
import HomeTab from './src/screens/HomeTab';
import { Provider } from 'react-redux';
import store from './store/store';
import COLORS from './src/styles/Colors';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const window = Dimensions.get('window');
console.disableYellowBox = true;


// Stack Navigator

const createAppStack = () =>

  <Provider store={store}>
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="LandingScreen" >

      <Stack.Screen name="HomeTab" component={HomeTab} />

    </Stack.Navigator>
  </Provider>


const App = () => {

  return (

    <NavigationContainer theme={DefaultTheme}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Provider store={store}>
        <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName="Auth"
        // drawerStyle={{ width: (window.width) * 0.75}}
        >
          <Drawer.Screen
            options={() => {

              return {
                swipeEnabled: false,
              };
            }}
            key="1" name="Auth" children={createAppStack} />
        </Drawer.Navigator>
      </Provider>
    </NavigationContainer>

  );

}

export default App;
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Onload from './Onload';
import Webview from './Webview';

const Stack = createNativeStackNavigator();



export default function App() {
  // Platform.OS === "android" && StatusBar.setBackgroundColor("transparent");
  // Platform.OS === "android" && StatusBar.setTranslucent(true);
  return (


    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='Onload' component={Onload} />
        <Stack.Screen name='Webview' component={Webview} />
      </Stack.Navigator>
      <StatusBar style='light' />
    </NavigationContainer>
  )
}


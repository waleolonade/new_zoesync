import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Onload from './Onload';
import Webview from './Webview';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='Onload' component={Onload} />
        <Stack.Screen name='Webview' component={Webview} />
      </Stack.Navigator>
      
    </NavigationContainer>
  )
}
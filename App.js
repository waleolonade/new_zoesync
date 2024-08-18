import React from "react";
import Webview from "./Webview";
import Onload from "./Onload";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();



export default function App() {
  return(
    <NavigationContainer >
      <Stack.Navigator screenOptions={ {headerShown:false} } initialRouteName="Onload" >
        <Stack.Screen name="Onload" component={Onload} />
        <Stack.Screen name="Webview" component={Webview} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Onload from './Onload';
import Webview from './Webview';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
<<<<<<< HEAD
   <View style={{flex:1}} > 
   
     <WebView
    source={{uri:'https://zoesync.com.ng/login'}}
    javaScriptEnabled={true}
    domStorageEnabled={true}
    startInLoadingState={true}
     
    ref={webviewRef}
  onNavigationStateChange={navState => {
    setCanGoBack(navState.canGoBack)
    setCanGoFront(navState.canGoForward)
    setCurrentView(navState.url)
  }} />
  <View style={styles.btcon} >
    <TouchableOpacity onPress={back} style={styles.btn} >
      <Text style={{ color: 'white'}} >
      Back
      </Text>
    </TouchableOpacity>
    
  </View>
</View>
  
  );
}

const styles = StyleSheet.create({
  btcon:{
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: hs(10),
    // margininset-block-end: 10,
    inset-block-start:vs(760)
  },
  btn:{
    paddingVertical: vs(12),
    paddingHorizontal:hs(15),
    backgroundColor: 'green',
    borderRadius: 5,
  
   

  }
})
=======
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name='Onload' component={Onload} />
        <Stack.Screen name='Webview' component={Webview} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
>>>>>>> 070f2f50516c3fb733e770dffecd19e915a7bdaa

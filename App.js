import React from "react";
import Webview from "./Webview";
import Onload from "./Onload";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();



export default function App() {
<<<<<<< HEAD
  

  const [ canGoBack, setCanGoBack ] = useState(false)
  const [ canGOFront, setCanGoFront ] = useState(false)
  const [currentView,setCurrentView ] = useState('') ;

  const webviewRef = useRef(null)

  back = () => {
    if (webviewRef.current) webviewRef.current.goBack()
  }
  
  front = () => {
    if (webviewRef.current) webviewRef.current.goForward()
  }



  return (
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
    {/* <TouchableOpacity onPress={front} style={styles.ntn} >
      <Text>
        loremhbxagdycgydcggcygeygcygcygreygyrcbrb
      </Text>
    </TouchableOpacity> */}
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
    // marginBottom: 10,
    top:vs(760)
  },
  btn:{
    paddingVertical: vs(12),
    paddingHorizontal:hs(15),
    backgroundColor: 'green',
    borderRadius: 5,
  
   

  }
})
=======
  return(
    <NavigationContainer >
      <Stack.Navigator screenOptions={ {headerShown:false} } initialRouteName="Onload" >
        <Stack.Screen name="Onload" component={Onload} />
        <Stack.Screen name="Webview" component={Webview} />
    </Stack.Navigator>
    </NavigationContainer>
  )
}
>>>>>>> 35bceae0b3d9b21dfc4a2ce3131e34fc182d93ae

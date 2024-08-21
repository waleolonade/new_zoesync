import React, { useEffect, useRef, useState } from "react";
import { Alert, BackHandler, StyleSheet, Text, ToastAndroid, TouchableOpacity, View } from 'react-native';
import WebView from 'react-native-webview';
import { hs, vs } from './Metrics';


const Webview = ()=>{

  ToastAndroid

const [ canGoBack, setCanGoBack ] = useState(false)
const [ canGOFront, setCanGoFront ] = useState(false)
const [currentView,setCurrentView ] = useState('') ;

const webviewRef = useRef(null)

back = () => {
  if (webviewRef.current) webviewRef.current.goBack()
}

front = () => {
  if (webviewRef.current) webviewRef.current.goForward()
};


useEffect(() => {
  const backAction = () => {
    // ToastAndroid.show("Exiting the app", ToastAndroid.SHORT);
    // BackHandler.exitApp();
    Alert.alert('You want to exit App ?', 'if no, press cancel', [
      {
        text: 'Cancel',
        onPress: ()=> null,
        style: 'cancel'
      },
      {
        text: 'Yes',
        onPress:()=> BackHandler.exitApp()
      }
    ] )
    return true;
  };

  const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

 return () => backHandler.remove(); // Cleanup the backHandler on component unmount
}, []);

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

</View>
</View>
);

}

export default Webview

const styles = StyleSheet.create({
btcon:{
position: 'absolute',
display: 'flex',
flexDirection: 'row',
justifyContent: 'space-between',
paddingHorizontal: hs(10),
// marginBottom: 10,
bottom:vs(2)
},
btn:{
paddingVertical: vs(10),
paddingHorizontal:hs(18),
backgroundColor: 'green',
borderRadius: 5,



}
})

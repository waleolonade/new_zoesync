import React from "react";
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import WebView from 'react-native-webview';
import { hs, vs } from './Metrics';


const Webview = ()=>{

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

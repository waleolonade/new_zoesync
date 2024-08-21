import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { hs, ms, vs } from './Metrics';

export default function Onload({navigation}) {

    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    // useEffect( ()=>{
    //     // simulate URL load
    //     const fetchedData = async()=>{
    //         try{
    //             setTimeout(async()=>{
    //                 const res = await fetch('https://zoesync.com.ng/login');
    //                 if(!res.ok){
    //                     throw new Error('Network request fails, please check your internet connection')
    //                 } 
    //                 const result = ()=> navigation.navigate('Webview')
    //                 setData(result);
    //                 setIsLoading(false);
    //             }, 2000  )
    //         } catch (error) {
    //             setError(error)
    //             setIsLoading(false);
    //         }
    //     }
    //     fetchedData()
    // }, [] )

    // useEffect( ()=>{
    //     const time = setTimeout( ()=>{
    //         navigation.navigate('Webview')
    //     }, 2000 ) 
    //     // clearTimeout(time)
    // }, [] )
    
  return (
    <View style={styles.container} >
        <View style={styles.leftCont} >  
            <Text style={styles.zoe} >
                ZOE
            </Text>
        </View>
        <View style={styles.rightCont} >
            <Text style={styles.sync} >
                SYNC
            </Text>
            
        </View>
        <Text style={styles.isL} > loading...... </Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        height: vs(812),
        width:hs(375),
        // backgroundColor: 'green'
        flex:1,
        flexDirection:'row'
    },
    logo:{
        marginHorizontal:'auto',
        marginVertical:'auto',
        color: 'white',
        fontSize: ms(30),
        fontWeight: '700'
    },
    leftCont:{
        backgroundColor:'#57dd57',
        height:'100%',
        width:'50%'
    },
    rightCont:{
        backgroundColor:'#61f661',
        height:'100%',
        width:'50%'
    },
    zoe:{
        marginVertical:'auto',
        textAlign:'right',
        fontSize:ms(45),
        color:'black',
        fontWeight:'800',
        borderBottomWidth:8,
        
    },
    sync:{
        marginVertical:'auto',
        fontSize:ms(40),
        color:'white',
        borderTopWidth:8,
        borderColor:'black',
        fontWeight:'700'
    },
    isL:{
        position:'absolute',
        bottom:0,
        // backgroundColor:'yellow',
        fontSize:ms(18),
        marginHorizontal:'40%'
    }
})
import React, { useState,useEffect } from 'react'
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList, TouchableOpacity,Platform, Alert, PermissionsAndroid, ScrollView} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { dimensions, Mycolors } from '../utility/Mycolors';
import {  useSelector, useDispatch } from 'react-redux';
import {setNetInfos} from '../redux/actions/latLongAction';

export default function MyNetinfo() {
 const dispatch =  useDispatch();
    useEffect(() => {
    netinformation()
},[])

    const netinformation=()=>{
        NetInfo.fetch().then(state => {
            // console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            dispatch(setNetInfos(state.isConnected)) 
          });
    }

    return (
        
        <View style={{position:'absolute',top:60,width:'90%',height:70,backgroundColor:Mycolors.ORANGE,borderRadius:10,alignSelf:'center',alignItems:'center',flexDirection:'row',paddingHorizontal:15}}>
        <View style={{width:50,height:50,justifyContent:'center',borderRadius:25,borderColor:Mycolors.GrayColor,borderWidth:3,borderStyle: 'dotted'}}>
        <Image source={require('../assets/chanda.png')} style={{ width: 22, height: 22, alignSelf: 'center' }}></Image>
        </View>
        <View style={{marginLeft:15}}>
        <Text style={{color:Mycolors.GrayColor,fontWeight:'bold',fontSize:18}}>You are offline!</Text>
        <Text style={{fontSize:12,color:Mycolors.GrayColor,top:6}}>Go online to start accepting jobs.</Text>
        </View> 
        </View>
       
    )
}

import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DrawerNav from './DrawerNav';
import AuthNav from './AuthNav'
import Splash from './Splash';
import {View ,StyleSheet,ActivityIndicator,SafeAreaView,ImageBackground ,Text, Platform} from 'react-native';
import {  useSelector, useDispatch } from 'react-redux';
import { setLoading,saveUserResult} from '../redux/actions/user_action';
// import messaging from '@react-native-firebase/messaging';
import {setNotificationData,setNotify,setDeviceToken} from '../redux/actions/latLongAction';
// import firestore from '@react-native-firebase/firestore'
import SplashScreen from 'react-native-splash-screen'

    const MainNav =() => {
     const [showSplash , setShowSplash ]  = useState(true);
    const dispatch =  useDispatch();
    const isSignedIn  = useSelector(state => state.user.user_details)
     const getAllValues = async() => {
        const user = await AsyncStorage.getItem("kinengo");
         SplashScreen.hide();
         setShowSplash(false);
        dispatch(saveUserResult(JSON.parse(user)))
    }
    useEffect(()=> {  
        // gettoken()
        const timeout = setTimeout(async () => {
            getAllValues();
              },3000);  
    },[]);

    // const gettoken = () => {
    //     messaging().getToken().then((token) => {
    //         // adddata(token)
    //       dispatch(setDeviceToken(token))
    //       console.log('Device token is:==>>',token)
    //    });
    //     };


    if(showSplash){
        return <Splash /> 
    }
   

    return (
        isSignedIn ?
        (
            <DrawerNav />
        )
    :
        (
         
             <AuthNav />
            
         
        )
    )
}
export default MainNav ;
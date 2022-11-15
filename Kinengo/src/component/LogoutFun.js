import React, { Component, useEffect, useState } from 'react';
import { Alert, Text, Image,StatusBar, ScrollView, SafeAreaView, Platform, TextInput, View, StyleSheet, TouchableOpacity, ActivityIndicator, Keyboard, Dimensions, FlatList ,BackHandler} from 'react-native';
import { DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer ,StackActions,CommonActions} from '@react-navigation/native';
import { Mycolors } from '../utility/Mycolors';
import {  useSelector, useDispatch } from 'react-redux';
import {onLogoutUser} from '../redux/actions/user_action';
import {baseUrl,driver_logout,requestPostApi,requestGetApi} from '../WebApi/Service'
import Loader from '../WebApi/Loader';

 
export const LogoutDriver= async()=>{
    console.log('stp1')
        const dispatch =  useDispatch();
        const userdetaile  = useSelector(state => state.user.user_details)
        const{responseJson,err}  = await requestGetApi(driver_logout,'','GET',userdetaile.token) 
        if(err==null){
             if(responseJson.status){
                console.log('stp2')
               AsyncStorage.clear(); 
               dispatch(onLogoutUser())
             }else{
            // Toast.show(responseJson.message);
             }
         }else{
           Alert.alert(err)
              }
     }

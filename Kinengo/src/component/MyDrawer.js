import React, { Component, useState } from 'react';
import { Alert, Text, Image,StatusBar, ScrollView, SafeAreaView, Platform, TextInput, View, StyleSheet, TouchableOpacity, ActivityIndicator, Keyboard, Dimensions, FlatList ,BackHandler} from 'react-native';
import { DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer ,StackActions,CommonActions} from '@react-navigation/native';
import { Mycolors,dimensions } from '../utility/Mycolors';
import {  useSelector, useDispatch } from 'react-redux';
import {onLogoutUser} from '../redux/actions/user_action';
import {baseUrl,booking_ride_status,booking_cancel_ride,driver_logout,driver_ride_details,booking_verify_ride,driver_current_location,requestPostApi,requestGetApi} from '../WebApi/Service'
import Loader from '../WebApi/Loader';
import MyAlert from './MyAlert';
import LinearGradient from 'react-native-linear-gradient'

const MyView=(props)=>{
  return(
    <>
   <TouchableOpacity style={{width:'100%',flexDirection:'row',alignItems:'center',marginTop:15,borderColor:'transparent',borderWidth:0,borderRadius:25}}onPress={props.touch}>
    <Image source={props.img} style={props.imgstyle}></Image>
    <Text style={{color:Mycolors.TEXT_COLOR,fontSize:13,marginLeft:'13%'}}>{props.name}</Text>
   </TouchableOpacity>
   </>
  );
}

 const MyDrawer =(props)=> {
  const dispatch =  useDispatch();
   const [name,setname]=useState('John Dev.')
   const person_Image = "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
   const userdetaile  = useSelector(state => state.user.user_details)
   const [loder, setLoder] = useState(false)
   const [My_Alert, setMy_Alert] = useState(false)
   const [alert_sms, setalert_sms] = useState('')

   const resetStacks=(page)=>{
    props.navigation.reset({
      index: 0,
      routes: [{name: page}],
    });
   }

   const logoutDriver=async()=>{
          AsyncStorage.clear(); 
          dispatch(onLogoutUser())
  //   setLoder(true)
  //  const{responseJson,err}  = await requestGetApi(driver_logout,'','GET',userdetaile.token) 
  //  setLoder(false)
  //  if(err==null){
  //       if(responseJson.status){
  //         AsyncStorage.clear(); 
  //         dispatch(onLogoutUser())
  //       }else{
  //         Toast.show(responseJson.message);
  //       }
  //   }else{
  //     Alert.alert(err)
  //   }
    
  }
  

    return (
      <SafeAreaView style={{flex:1,}}>
         <LinearGradient
          colors={['rgba(255, 255, 255, 0.97)', 'rgba(255, 250, 234, 0.97)']}
          style={{flex: 1,height:dimensions.SCREEN_HEIGHT,}}
         >
<ScrollView style={{flex:1, paddingLeft:30,paddingVertical:10,paddingRight:10}}> 

<View style={{width:25,height:25,justifyContent:'center',alignSelf:'flex-start',right:10}}>
  <TouchableOpacity onPress={()=>{props.navigation.closeDrawer()}}>
    <Image source={require('../assets/ArrowLeft.png')} style={{width:22,height:22,alignSelf:'center'}}></Image>
  </TouchableOpacity>
</View>

<View style={{flexDirection:'row',alignItems:'center',marginTop:40}}>
<View style={{width:60,height:60,borderRadius:30,justifyContent:'center',borderColor:Mycolors.BG_COLOR,borderWidth:3}}>
<Image source={{ uri: person_Image }} style={{width:'100%',height:'100%',alignSelf:'center',borderRadius:30}}></Image>
</View>
<View style={{marginLeft:10}}>
<Text style={{color:Mycolors.BG_COLOR,fontSize:15,top:-5,fontWeight:'600'}}>{name}</Text>
</View>
</View>

<View style={{width:'100%',alignSelf:'center',marginTop:30,}}>

 <MyView name="Home" touch={()=>{props.navigation.navigate('Home')}} img={require('../assets/HouseGray.png')} imgstyle={{width:18,height:18,left:15}}/>        
 <MyView name="My Booking and orders" touch={()=>{}} img={require('../assets/Users.png')} imgstyle={{width:18,height:18,left:15}}/>        
 <MyView name="Terms and Conditions" touch={()=>{}} img={require('../assets/FileText.png')} imgstyle={{width:18,height:18,left:15}}/>        
 <MyView name="Privacy Policy" touch={()=>{}} img={require('../assets/Note.png')} imgstyle={{width:18,height:18,left:15}}/>        

</View>


</ScrollView>

<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',position:'absolute',bottom:30,width:'100%',paddingHorizontal:20}}>
<TouchableOpacity style={{flexDirection:'row',alignItems:'center'}} onPress={()=>{
  setalert_sms('Are you sure want to logout?')
  setMy_Alert(true)
}}>
<Image source={require('../assets/Power.png')} style={{width:18,height:18}}></Image>
<Text style={{marginLeft:8,color:Mycolors.TEXT_COLOR,fontSize:13}}>Logout</Text>
</TouchableOpacity>
<View>
  <Text style={{marginLeft:8,color:Mycolors.TEXT_COLOR,fontSize:13}}>App Ver:- 1.0.0</Text>
</View>

</View>

{My_Alert ? <MyAlert sms={alert_sms} sms2={'Logout'} okPress={()=>{ logoutDriver() }} canclePress={()=>{setMy_Alert(false)}}/> : null }

{loder ? <Loader /> : null }
</LinearGradient>
      </SafeAreaView>
    );
    
  }

  export default MyDrawer

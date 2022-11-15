import React, { Component, useEffect, useState } from 'react';
import {SafeAreaView,Image,ImageBackground,ScrollView,StatusBar,useColorScheme,View,StyleSheet,Text, Alert} from 'react-native';
import { dimensions, Mycolors, } from '../../utility/Mycolors';
import MyButtons from '../../component/MyButtons';
import {  useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';



//import PAVESDK, { PaveSDKClassic } from "react-native-pave-module";

const Welcome = (props) => {
   const [myImg,setMyimg]=useState([
    require('../../assets/images/welcome/w1.jpg'),
    require('../../assets/images/welcome/w2.jpg'),
    require('../../assets/images/welcome/w3.jpg'),
    require('../../assets/images/welcome/w4.jpg'),
   ])
   const [index,setIndex]=useState('1')
   
    const ChangeImages = () => {
      if (index >= 4) {
        setIndex(1);
      } else {
        setIndex(index + 1); 
      }
    };
    useEffect(() => {
      setTimeout(() => {
        ChangeImages();
      }, 4000); 
     
    }, [index]);
  

    return(
      <View style={{}}>

      <ImageBackground source={myImg[index-1]}style={{width:'100%',height:'100%'}}resizeMode='cover'>
      <View style={{position:'absolute',bottom:20,width:'100%',backgroundColor:'transparent'}}>
 <MyButtons title="Continue with Facebook" height={46} width={'90%'} borderRadius={5} alignSelf="center" press={()=>{}} marginHorizontal={20} 
 titlecolor={Mycolors.BG_COLOR} backgroundColor={Mycolors.BLUE} img ={require('../../assets/fb.png')} imgtop={10} imgleft={10} imgheight={28} imgwidth={28}/>
 <MyButtons title="Continue with Google" height={46} width={'90%'} borderRadius={5} alignSelf="center" press={()=>{}} marginHorizontal={20} 
 titlecolor={Mycolors.BG_COLOR} backgroundColor={Mycolors.SKY_BLUE} img ={require('../../assets/google.png')} imgtop={10} imgleft={10} imgheight={28} imgwidth={28}/>
 <MyButtons title="Continue with KinenGo" height={46} width={'90%'} borderRadius={5} alignSelf="center" press={()=>{props.navigation.navigate('Login')}} marginHorizontal={20} 
 titlecolor={Mycolors.TEXT_COLOR} backgroundColor={Mycolors.BG_COLOR} img ={require('../../assets/K_DOT.png')} imgtop={10} imgleft={10} imgheight={28} imgwidth={28}/>
       
       <View style={{ 
        width:'100%',
        alignSelf: 'center',
        marginTop:10
                   }}>
          <Text style={{color:Mycolors.White,fontSize:13,textAlign:'center'}}>By Proceeding you agree with the</Text>
          <View style={{ 
                      flexDirection: 'row',
                      justifyContent: 'center',
                      marginVertical: 5,
                      }}>
          <Text style={{color:Mycolors.White,fontSize:13,textDecorationLine:'underline'}}>Terms of use</Text>
          <Text style={{color:Mycolors.White,fontSize:13}}> and </Text>
          <Text style={{color:Mycolors.White,fontSize:13,textDecorationLine:'underline'}}>Privacy Policy</Text>
     </View>
        </View> 
        </View>
       </ImageBackground>
           </View>
     );
  }
  export default Welcome

import React, { Component } from 'react';
import {View,Image,Text, ImageBackground,StyleSheet,Animated,Easing,SafeAreaView, Alert,Dimensions} from 'react-native';
import { dimensions } from '../utility/Mycolors';
const Splash = (props) => {

     return(
    <View style={styles.container}>
   
      <Image
        source={require('../assets/images/splash-bg.jpg')}
        style={StyleSheet.absoluteFill}
        width="100%"
        height="100%"
      />
      <View style={styles.mainView}>
        <Image
          resizeMode="contain"
          source={require('../assets/images/sp1.png')}
          style={styles.logoOneStyle}
        />
        <Image
          resizeMode="contain"
          source={require('../assets/images/sp2.png')}
          style={styles.logoTwoStyle}
        />
      </View>
    </View>
        
     );
  }
const styles = StyleSheet.create({

  container: {
    backgroundColor:'#000',
    flex:1
  },
  mainView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoOneStyle: {
    width: dimensions.SCREEN_WIDTH / 3,
    height: dimensions.SCREEN_WIDTH / 3,
  },
  logoTwoStyle: {
    width: dimensions.SCREEN_WIDTH / 1.2,
    height: 100,
  },
});
export default Splash
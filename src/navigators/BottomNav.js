import React from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeStack from './HomeStack';
import WeelStack from './WeelStack';
import ProfileStack from './ProfileStack';

import { Mycolors } from '../utility/Mycolors';

const BottomNav = ({userToken}) => {
  //variables
  const Tab = createBottomTabNavigator();
  const screenOptions = {
    showLabel: false,
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: styles.navigatorStyle,
  };
  return (
    <Tab.Navigator 
    backBehavior="none" 
    screenOptions={screenOptions}>
      <Tab.Screen
        name={'HomeStack'}
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabStyle}>
           { focused
             ? <Image source={require('../assets/Houseyellow.png')}  style={{width:21,height:21}} />
             : <Image source={require('../assets/HouseGray.png')}  style={{width:21,height:21}} />           
           } 
           <Text style={{color: focused ? Mycolors.ORANGE : Mycolors.GrayColor,fontWeight:'bold'}}>Home</Text>
            </View>
          ),
        }}
      />
     
      <Tab.Screen
        name={'WeelStack'}
        component={WeelStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabStyle}>
              <View
                style={{
                  position: 'absolute',
                  top: -50,
                 // borderWidth: 2,
                 // borderBottomWidth:2,
                  borderRadius: 100, 
                 // borderLeftWidth:2,
                 // borderColor: Mycolors.GrayColor,
                // borderBottomColor:Mycolors.TEXT_COLOR,
                backgroundColor:Mycolors.BG_COLOR,
            //     shadowColor:  Mycolors.TEXT_COLOR,
            // shadowOffset: {
            //   width:0.2,
            //   height:0.5
            // }, 
         
            // shadowOpacity: 0.25,
            // justifyContent: 'center',
            // elevation: 2
                }}>
           <Image source={require('../assets/weel.png')}  style={{width:100,height:100}} />
              </View>
              {/* <View style={{width: '5%'}} /> */}
            </View>
          ),
        }}
      />
    

      <Tab.Screen
        name={'ProfileStack'}
        component={ProfileStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.tabStyle}>
              {focused
              ? <Image source={require('../assets/UserYellow.png')}  style={{width:21,height:21}} />
              : <Image source={require('../assets/UserGray.png')}  style={{width:21,height:21}} />
              }
    <Text style={{color: focused ? Mycolors.ORANGE : Mycolors.GrayColor,fontWeight:'bold'}}>Profile</Text>

            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  navigatorStyle: {
    borderTopWidth: 0,
    backgroundColor:Mycolors.BG_COLOR,
          shadowColor:  Mycolors.TEXT_COLOR,
            shadowOffset: {
              width:0,
              height:3
            }, 
            shadowRadius: 5,
            shadowOpacity: 1.0,
            justifyContent: 'center',
            elevation: 5
  },
  tabStyle: {
    alignItems: 'center',
  },
  
});
export default BottomNav
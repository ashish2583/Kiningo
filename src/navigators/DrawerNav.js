import React, { useEffect } from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView} from 'react-native';
import BottomNav from './BottomNav'
import WeelStack from './WeelStack';
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import MyDrawer from '../component/MyDrawer';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { dimensions } from '../utility/Mycolors';








const DrawerNav = (props) => {
  const Drawer = createDrawerNavigator();
     return(
      <Drawer.Navigator 
      initialRouteName="HomeStack"
      headerMode={null}
      screenOptions={{ headerShown: false ,drawerWidth:dimensions.SCREEN_WIDTH}}
      drawerWidth={dimensions.SCREEN_WIDTH}
      drawerContent={(props) => <MyDrawer {...props} />}
      >
      <Drawer.Screen name="BottomNav" component={BottomNav} 
      options={{
        drawerLabel: () => null,
        title: null,
        drawerIcon: () => null
        }}
      />
      {/* <Drawer.Screen name="WeelStack" component={WeelStack} /> */}
    </Drawer.Navigator>
     );
  }


export default DrawerNav

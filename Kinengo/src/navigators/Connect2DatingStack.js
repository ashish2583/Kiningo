import React, { useEffect, useState } from  'react' ;
import { createNativeStackNavigator} from '@react-navigation/native-stack'


import DatingHome from '../pages/Connect2/Dating/DatingHome';
import DatingSelection from '../pages/Connect2/Dating/DatingSelection';
import DatingMessages from '../pages/Connect2/Dating/DatingMessages';
import DatingChat from '../pages/Connect2/Dating/DatingChat';

const Connect2DatingStack=(props)=>{
   
    const Stack = createNativeStackNavigator();

    return(
       
           <Stack.Navigator
            screenOptions={{ headerShown:false,}}
             >
            <Stack.Screen component = {DatingHome} name="DatingHome" />
            <Stack.Screen component = {DatingSelection} name="DatingSelection" />
            <Stack.Screen component = {DatingMessages} name="DatingMessages" />
            <Stack.Screen component = {DatingChat} name="DatingChat" />
            

        </Stack.Navigator>

)
}




export default Connect2DatingStack
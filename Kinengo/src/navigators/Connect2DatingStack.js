import React, { useEffect, useState } from  'react' ;
import { createNativeStackNavigator} from '@react-navigation/native-stack'


import DatingHome from '../pages/Connect2/Dating/DatingHome';
import DatingSelection from '../pages/Connect2/Dating/DatingSelection';
const Connect2DatingStack=(props)=>{
   
    const Stack = createNativeStackNavigator();

    return(
       
           <Stack.Navigator
            screenOptions={{ headerShown:false,}}
             >
            <Stack.Screen component = {DatingHome} name="DatingHome" />
            <Stack.Screen component = {DatingSelection} name="DatingSelection" />
            

        </Stack.Navigator>

)
}




export default Connect2DatingStack
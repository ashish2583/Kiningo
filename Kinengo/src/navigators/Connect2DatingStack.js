import React, { useEffect, useState } from  'react' ;
import { createNativeStackNavigator} from '@react-navigation/native-stack'


import DatingHome from '../pages/Connect2/Dating/DatingHome';
const Connect2DatingStack=(props)=>{
   
    const Stack = createNativeStackNavigator();

    return(
       
           <Stack.Navigator
            screenOptions={{ headerShown:false,}}
             >
            <Stack.Screen component = {DatingHome} name="DatingHome" />
            

        </Stack.Navigator>

)
}




export default Connect2DatingStack
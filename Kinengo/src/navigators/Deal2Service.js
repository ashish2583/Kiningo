import React, { useEffect, useState } from  'react' ;
import { createNativeStackNavigator} from '@react-navigation/native-stack'


import ServiceHome from '../pages/Deal2/Service/ServiceHome';

const Connect2DatingStack=(props)=>{
   
    const Stack = createNativeStackNavigator();

    return(
       
           <Stack.Navigator
            screenOptions={{ headerShown:false,}}
             >
            <Stack.Screen component = {ServiceHome} name="ServiceHome" />
            

        </Stack.Navigator>

)
}




export default Connect2DatingStack
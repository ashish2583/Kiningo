import React, { useEffect, useState } from  'react' ;
import { createNativeStackNavigator} from '@react-navigation/native-stack'


import FashionHome from '../pages/Creation2/Fashion/FashionHome';

const Deal2Learning=(props)=>{
   
    const Stack = createNativeStackNavigator();

    return(
       
           <Stack.Navigator
            screenOptions={{ headerShown:false,}}
             >
            <Stack.Screen component = {FashionHome} name="FashionHome" />
            

        </Stack.Navigator>

)
}




export default Deal2Learning
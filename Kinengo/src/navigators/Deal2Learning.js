import React, { useEffect, useState } from  'react' ;
import { createNativeStackNavigator} from '@react-navigation/native-stack'


import LearningHome from '../pages/Deal2/Learning/LearningHome';

const Deal2Learning=(props)=>{
   
    const Stack = createNativeStackNavigator();

    return(
       
           <Stack.Navigator
            screenOptions={{ headerShown:false,}}
             >
            <Stack.Screen component = {LearningHome} name="LearningHome" />
            

        </Stack.Navigator>

)
}




export default Deal2Learning
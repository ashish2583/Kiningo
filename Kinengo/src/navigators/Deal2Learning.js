import React, { useEffect, useState } from  'react' ;
import { createNativeStackNavigator} from '@react-navigation/native-stack'


import LearningHome from '../pages/Deal2/Learning/LearningHome';
import LearningCentersList from '../pages/Deal2/Learning/LearningCentersList';

const Deal2Learning=(props)=>{
   
    const Stack = createNativeStackNavigator();

    return(
       
           <Stack.Navigator
            screenOptions={{ headerShown:false,}}
             >
            <Stack.Screen component = {LearningHome} name="LearningHome" />
            <Stack.Screen component = {LearningCentersList} name="LearningCentersList" />
            

        </Stack.Navigator>

)
}




export default Deal2Learning
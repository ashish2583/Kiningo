import React, { useEffect, useState } from  'react' ;
import { createNativeStackNavigator} from '@react-navigation/native-stack'


import LearningHome from '../pages/Deal2/Learning/LearningHome';
import LearningCentersList from '../pages/Deal2/Learning/LearningCentersList';
import LearningTeachersList from '../pages/Deal2/Learning/LearningTeachersList';

const Deal2Learning=(props)=>{
   
    const Stack = createNativeStackNavigator();

    return(
       
           <Stack.Navigator
            screenOptions={{ headerShown:false,}}
             >
            <Stack.Screen component = {LearningHome} name="LearningHome" />
            <Stack.Screen component = {LearningCentersList} name="LearningCentersList" />
            <Stack.Screen component = {LearningTeachersList} name="LearningTeachersList" />
            

        </Stack.Navigator>

)
}




export default Deal2Learning
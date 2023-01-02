import React, { useEffect, useState } from  'react' ;
import { createNativeStackNavigator} from '@react-navigation/native-stack'


import LearningHome from '../pages/Deal2/Learning/LearningHome';
import LearningCentersList from '../pages/Deal2/Learning/LearningCentersList';
import LearningTeachersList from '../pages/Deal2/Learning/LearningTeachersList';
import LearningOnineStudyClasses from '../pages/Deal2/Learning/LearningOnineStudyClasses';
import LearningClassDetails from '../pages/Deal2/Learning/LearningClassDetails';

const Deal2Learning=(props)=>{
   
    const Stack = createNativeStackNavigator();

    return(
       
           <Stack.Navigator
            screenOptions={{ headerShown:false,}}
             >
            <Stack.Screen component = {LearningHome} name="LearningHome" />
            <Stack.Screen component = {LearningCentersList} name="LearningCentersList" />
            <Stack.Screen component = {LearningTeachersList} name="LearningTeachersList" />
            <Stack.Screen component = {LearningOnineStudyClasses} name="LearningOnineStudyClasses" />
            <Stack.Screen component = {LearningClassDetails} name="LearningClassDetails" />
            

        </Stack.Navigator>

)
}




export default Deal2Learning
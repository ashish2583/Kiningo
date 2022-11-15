import React, { useEffect, useState } from  'react' ;
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Repair from '../pages/Deal/ServiceDemands/Repair';
import AddService from '../pages/Deal/ServiceDemands/AddService';



const ServiceStack=(props)=>{
   
    const Stack = createNativeStackNavigator();

    return(
       
           <Stack.Navigator
            screenOptions={{ headerShown:false,}}
             >
            <Stack.Screen component = {Repair} name="Repair" />
            <Stack.Screen component = {AddService} name="AddService" />

        </Stack.Navigator>

)
}




export default ServiceStack
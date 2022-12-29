import React, { useEffect, useState } from  'react' ;
import { createNativeStackNavigator} from '@react-navigation/native-stack'


import ServiceHome from '../pages/Deal2/Service/ServiceHome';
import ServiceProductList from '../pages/Deal2/Service/ServiceProductList';
import ServiceProductDetail from '../pages/Deal2/Service/ServiceProductDetail';

const Connect2DatingStack=(props)=>{
   
    const Stack = createNativeStackNavigator();

    return(
       
           <Stack.Navigator
            screenOptions={{ headerShown:false,}}
             >
            <Stack.Screen component = {ServiceHome} name="ServiceHome" />
            <Stack.Screen component = {ServiceProductList} name="ServiceProductList" />
            <Stack.Screen component = {ServiceProductDetail} name="ServiceProductDetail" />
            

        </Stack.Navigator>

)
}




export default Connect2DatingStack
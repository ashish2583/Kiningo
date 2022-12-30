import React, { useEffect, useState } from  'react' ;
import { createNativeStackNavigator} from '@react-navigation/native-stack'


import ServiceHome from '../pages/Deal2/Service/ServiceHome';
import ServiceProductList from '../pages/Deal2/Service/ServiceProductList';
import ServiceProductDetail from '../pages/Deal2/Service/ServiceProductDetail';
import ServiceMessages from '../pages/Deal2/Service/ServiceMessages';
import ServiceCategories from '../pages/Deal2/Service/ServiceCategories';

const Connect2DatingStack=(props)=>{
   
    const Stack = createNativeStackNavigator();

    return(
       
           <Stack.Navigator
            screenOptions={{ headerShown:false,}}
             >
            <Stack.Screen component = {ServiceHome} name="ServiceHome" />
            <Stack.Screen component = {ServiceProductList} name="ServiceProductList" />
            <Stack.Screen component = {ServiceProductDetail} name="ServiceProductDetail" />
            <Stack.Screen component = {ServiceMessages} name="ServiceMessages" />
            <Stack.Screen component = {ServiceCategories} name="ServiceCategories" />
            

        </Stack.Navigator>

)
}




export default Connect2DatingStack
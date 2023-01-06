import React, { useEffect, useState } from  'react' ;
import { createNativeStackNavigator} from '@react-navigation/native-stack'


import FashionHome from '../pages/Creation2/Fashion/FashionHome';
import FashionPost from '../pages/Creation2/Fashion/FashionPost';
import FashionUpload from '../pages/Creation2/Fashion/FashionUpload';

const Deal2Learning=(props)=>{
   
    const Stack = createNativeStackNavigator();

    return(
       
           <Stack.Navigator
            screenOptions={{ headerShown:false,}}
             >
            <Stack.Screen component = {FashionHome} name="FashionHome" />
            <Stack.Screen component = {FashionPost} name="FashionPost" />
            <Stack.Screen component = {FashionUpload} name="FashionUpload" />
            

        </Stack.Navigator>

)
}




export default Deal2Learning
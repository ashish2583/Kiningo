import React, { useEffect, useState } from  'react' ;
import { createNativeStackNavigator} from '@react-navigation/native-stack'


import Shop from '../pages/Shop/Shop';
import ShopEat from '../pages/Shop/ShopEat/ShopEat';
import FoodDetails from '../pages/Shop/ShopEat/FoodDetails';
import ShopMyOrder from '../pages/Shop/ShopEat/ShopMyOrder';
import ShopReview from '../pages/Shop/ShopEat/ShopReview';
import ShopPayment from '../pages/Shop/ShopEat/ShopPayment';
const ShopEatStack=(props)=>{
   
    const Stack = createNativeStackNavigator();

    return(
       
           <Stack.Navigator
            screenOptions={{ headerShown:false,}}
             >
            <Stack.Screen component = {ShopEat} name="ShopEat" />
            <Stack.Screen component = {FoodDetails} name="FoodDetails" />
            <Stack.Screen component = {ShopMyOrder} name="ShopMyOrder" />
            <Stack.Screen component = {ShopReview} name="ShopReview" />
            <Stack.Screen component = {ShopPayment} name="ShopPayment" />
            <Stack.Screen component = {Shop} name="Shop" />
            

        </Stack.Navigator>

)
}




export default ShopEatStack
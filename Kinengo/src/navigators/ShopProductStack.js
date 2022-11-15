import React, { useEffect, useState } from  'react' ;
import { createNativeStackNavigator} from '@react-navigation/native-stack'


import Shop from '../pages/Shop/Shop';
import ShopProduct from '../pages/Shop/ShopProduct/ShopProduct';
import FoodDetails from '../pages/Shop/ShopProduct/FoodDetails';
import ShopProductDetails from '../pages/Shop/ShopProduct/ShopProductDetails';
import ShopMyOrder from '../pages/Shop/ShopProduct/ShopMyOrder';
import ShopReview from '../pages/Shop/ShopProduct/ShopReview';
import ShopPayment from '../pages/Shop/ShopProduct/ShopPayment';
import ShopProdCart from '../pages/Shop/ShopProduct/ShopProdCart';
const ShopProductStack=(props)=>{
   
    const Stack = createNativeStackNavigator();

    return(
       
           <Stack.Navigator
            screenOptions={{ headerShown:false,}}
             >
            <Stack.Screen component = {ShopProduct} name="ShopProduct" />
            <Stack.Screen component = {FoodDetails} name="FoodDetails" />
            <Stack.Screen component = {ShopProductDetails} name="ShopProductDetails" />
            <Stack.Screen component = {ShopMyOrder} name="ShopMyOrder" />
            <Stack.Screen component = {ShopReview} name="ShopReview" />
            <Stack.Screen component = {ShopPayment} name="ShopPayment" />
            <Stack.Screen component = {ShopProdCart} name="ShopProdCart" />
            <Stack.Screen component = {Shop} name="Shop" />
            

        </Stack.Navigator>

)
}




export default ShopProductStack
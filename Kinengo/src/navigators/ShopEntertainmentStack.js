import React, { useEffect, useState } from  'react' ;
import { createNativeStackNavigator} from '@react-navigation/native-stack'


import Shop from '../pages/Shop/Shop';
import ShopEntertainment from '../pages/Shop/ShopEntertainment/ShopEntertainment';
import ShopEntPlaceDetails from '../pages/Shop/ShopEntertainment/ShopEntPlaceDetails';
import ShopEntPurchasedTickets from '../pages/Shop/ShopEntertainment/ShopEntPurchasedTickets';
import ShopEntReview from '../pages/Shop/ShopEntertainment/ShopEntReview';
import ShopEntPayment from '../pages/Shop/ShopEntertainment/ShopEntPayment';
const ShopEatStack=(props)=>{
   
    const Stack = createNativeStackNavigator();

    return(
       
           <Stack.Navigator
            screenOptions={{ headerShown:false,}}
             >
            <Stack.Screen component = {ShopEntertainment} name="ShopEntertainment" />
            <Stack.Screen component = {ShopEntPlaceDetails} name="PlaceDetails" />
            <Stack.Screen component = {ShopEntReview} name="ShopEntReview" />
            <Stack.Screen component = {ShopEntPayment} name="ShopEntPayment" />
            <Stack.Screen component = {ShopEntPurchasedTickets} name="ShopEntPurchasedTickets" />
            <Stack.Screen component = {Shop} name="Shop" />
            

        </Stack.Navigator>

)
}




export default ShopEatStack
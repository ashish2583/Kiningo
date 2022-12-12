import React, { useEffect, useState } from  'react' ;
import { createNativeStackNavigator} from '@react-navigation/native-stack'


import PeopleHome from '../pages/Connect2/People/PeopleHome';
import PeopleComments from '../pages/Connect2/People/PeopleComments';
import PeopleChat from '../pages/Connect2/People/PeopleChat';
import PeopleFollowers from '../pages/Connect2/People/PeopleFollowers';
import PeopleMessages from '../pages/Connect2/People/PeopleMessages';
import PeopleCreatePost from '../pages/Connect2/People/PeopleCreatePost';
import PeopleProfileScreen from '../pages/Connect2/People/PeopleProfileScreen';
import PeopleSaved from '../pages/Connect2/People/PeopleSaved';
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
            <Stack.Screen component = {PeopleHome} name="PeopleHome" />
            <Stack.Screen component = {PeopleComments} name="PeopleComments" />
            <Stack.Screen component = {PeopleChat} name="PeopleChat" />
            <Stack.Screen component = {PeopleFollowers} name="PeopleFollowers" />
            <Stack.Screen component = {PeopleMessages} name="PeopleMessages" />
            <Stack.Screen component = {PeopleCreatePost} name="PeopleCreatePost" />
            <Stack.Screen component = {PeopleProfileScreen} name="PeopleProfileScreen" />
            <Stack.Screen component = {PeopleSaved} name="PeopleSaved" />
            

        </Stack.Navigator>

)
}




export default ShopEatStack
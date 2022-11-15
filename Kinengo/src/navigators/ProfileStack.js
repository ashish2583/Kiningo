import React, { useEffect, useState } from  'react' ;
 import { createNativeStackNavigator} from '@react-navigation/native-stack'
import Myprofile from '../pages/MyProfile/Myprofile';
import EditProfile from '../pages/MyProfile/EditProfile';



const ProfileStack=(props)=>{
   
    const Stack = createNativeStackNavigator();


    return(
       
     
           <Stack.Navigator
            screenOptions={{ headerShown:false,}}
             >
            <Stack.Screen component = {Myprofile} name="Myprofile" />
            <Stack.Screen component = {EditProfile} name="EditProfile" />
          
        </Stack.Navigator>

)
}




export default ProfileStack
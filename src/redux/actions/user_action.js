import * as types  from '../types';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const SignUp = (name, email, password) => dispatch =>
    new Promise((resolve ,reject) =>{
        dispatch({
            type: types.LOADING,
            isLoading:true
        });
        let formdata = new FormData();
        formdata.append("name",name);
        formdata.append("email",email);
        formdata.append("password",password);
        // Axios.post(urls.base_url+urls.register,formdata)
        // .then(response => {
        //                       dispatch({
        //                                 type: types.LOADING,
        //                                 isLoading:false
        //                             });
        //                             if(response.data.status){
        //                                AsyncStorage.setItem("user",JSON.stringify(response.data.data));
        //                             //    AsyncStorage.setItem("token",JSON.stringify(response.data.token));
                                      
        //                                  dispatch({
        //                                     type:types.SAVE_USER_RESULTS,
        //                                     user:response.data.data
        //                                        })
        //                                        dispatch({
        //                                         type:types.TOKEN,
        //                                         user:response.data.token
        //                                     })
        //                             }
        //                             resolve(response)
        //                         })
        //                             .catch(error => {
        //                                 dispatch({
        //                                     type: types.LOADING,
        //                                     isLoading:false
        //                                 });
        //                                 reject(error)
        //                             })
      
 })

 
    export const myProfile = (token) => dispatch =>
    new Promise((resolve ,reject) =>{
        dispatch({
            type: types.LOADING,
            isLoading:true
        });
        // fetch(urls.base_url+urls.my_profile, {
        //     method: 'get',
        //      headers: {
        //       'Content-Type': 'multipart/form-data',
        //       'Accept':'application/json',
        //       'Authorization': 'Bearer '+ token
        //     },
        //   }).then((responseJson) => responseJson.json())
        //         .then((responseJson) => {
        //                       dispatch({
        //                                 type: types.LOADING,
        //                                 isLoading:false
        //                             });
        //                             resolve(responseJson)
        //                         })
        //                             .catch(error => {
        //                                 console.log("error",error);
        //                                 dispatch({
        //                                     type: types.LOADING,
        //                                     isLoading:false
        //                                 });
        //                                 reject(error)
        //                             })
    
    })

export const onLogoutUser = () => {
    return {
        type:types.LOGOUT_USER,
        user:null
    }
}

export const saveUserResult = (user) => {

    return {
        type:types.SAVE_USER_RESULTS,
        user:user
    }
}
export const saveCorporateUserResult = (data) => {

    return {
        type:types.SAVE_CORP_USER_RESULTS,
        corp_user:data
    }
}
export const saveUserToken = (token) => {

    return {
        type:types.TOKEN,
        user:token
    }
}

export const setLoading = (lodings) => {
    return {
        type:types.LOADING,
        isLoading:lodings
    }
}

export const setUserType = (data) => {
    return {
        type:types.USERTYPE,
        user_type:data
    }
}

export const setNoOfCar = (data) => {
    return {
        type:types.NOOFCAR,
        no_of_car:data
    }
}

export const setSelectedCarTab = (data) => {
    return {
        type:types.SELECTEDCARTAB,
        selected_car_tab:data
    }
}

export const setVenderDetail = (data) => {
    return {
        type:types.VERDERDETAILS,
        venderDeatil:data
    }
}
export const setDashBoardData = (data) => {
    return {
        type:types.DASHDATA,
        dash_data:data
    }
}



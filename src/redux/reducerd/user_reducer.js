import * as types  from '../types';

const initialState = {

    user_details:null,
    token:null,
    user_type:0,
    no_of_car:'',
    no_of_drv:'',
    selected_drv_tab:1,
    selected_car_tab:1,
    drv_id:'',
    venderDeatil:'',
    corp_user:null,
    dashdata:''
}


export default (state = initialState ,action) => {

    switch(action.type){

        case types.SAVE_USER_RESULTS :
            let user_details_action = action.user;
            if(user_details_action !== null){
                console.log("user detaisl1111",user_details_action);
                return{
                    ...state ,
                    user_details : {...user_details_action},
                }
            }else{
                console.log("user detais  null ",user_details_action);
                return{
                    ...state ,
                    user_details : null,
                }
            }

          
        case types.LOGOUT_USER :
            return {
                ...state,
                user_details :action.user
            }
        case types.TOKEN :
            return {
                ...state,
                token :action.user
            }
        case types.USERTYPE :
            return {
                ...state,
                user_type :action.user_type
            }
        case types.NOOFCAR :
            return {
                ...state,
                no_of_car :action.no_of_car
            }
        case types.NOOFDRV :
            return {
                ...state,
                no_of_drv :action.no_of_drv
            }
         case types.SELECTEDDRVTAB :
            return {
                ...state,
                selected_drv_tab :action.selected_drv_tab
            }
        case types.DASHDATA :
                return {
                    ...state,
                    dashdata :action.dash_data
                }
        case types.SELECTEDCARTAB :
            return {
                ...state,
                selected_car_tab :action.selected_car_tab
            }
        case types.DRVID :
                return {
                    ...state,
                    drv_id :action.drv_id
                }
        case types.VERDERDETAILS :
                    return {
                        ...state,
                        venderDeatil :action.venderDeatil
                    }
        case types.SAVE_CORP_USER_RESULTS :
                    return {
                        ...state,
                        corp_user :action.corp_user
                    }

           default :
           return state;
   

    }




}



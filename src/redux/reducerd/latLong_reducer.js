import * as types  from '../types';

const initialState = {

    curentAdderss:'',
    startAddress:'',
    destnationAddress:'',
    curentPosition:'',
    startPosition:'',
    destnationPosition:'',
    netinfos:true,
    devicetoken:'',
    notify:false,
    notificationdata:'',
    messagecount:0,
    bidamount:''
}


export default (state = initialState ,action) => {

    switch(action.type){

        case types.CURRENTADD :
           return{
               ...state ,
               curentAdderss : action.curentAdderss,
           }
           case types.STARTADD :
            return{
                ...state ,
                startAddress : action.startAddress,
            }
            case types.DESTNATIONADD :
           return{
               ...state ,
               destnationAddress : action.destnationAddress,
           }
           case types.CURRENTPOS :
           return{
               ...state ,
               curentPosition : action.curentPosition,
           }
           case types.STARTPOS :
           return{
               ...state ,
               startPosition : action.startPosition,
           }
           case types.DESTNATIONPOS :
           return{
               ...state ,
               destnationPosition : action.destnationPosition,
           }
           case types.NETINFOS : 
           return{
               ...state ,
               netinfos : action.netinfos,
           }
           case types.NOTIFY :
           return{
               ...state ,
               notify : action.notify,
           }
           case types.NOTIFICATIONDATA :
           return{
               ...state ,
               notificationdata : action.notificationdata,
           }
           case types.DEVICETOKEN :
           return{
               ...state ,
               devicetoken : action.devicetoken,
           }
           case types.MESSAGECOUNT :
            return{
                ...state ,
                messagecount : action.messagecount,
            }
            case types.BIDAMOUNT :
                return{
                    ...state ,
                    bidamount : action.bidamount,
                }
           default :
           return state;

    }

}



import * as types  from '../types';
import { Platform } from 'react-native';

export const setCurentAdderss = (data) => {
    return {
        type:types.CURRENTADD,
        curentAdderss:data
    }
}
export const setStartAddress = (data) => {
    return {
        type:types.STARTADD,
        startAddress:data
    }
}
export const setDestnationAddress = (data) => {
    return {
        type:types.DESTNATIONADD,
        destnationAddress:data
    }
}
export const setCurentPosition = (data) => {
    return {
        type:types.CURRENTPOS,
        curentPosition:data
    }
}
export const setStartPosition = (data) => {
    return {
        type:types.STARTPOS,
        startPosition:data
    }
} 
export const setDestnationPosition = (data) => {
    return {
        type:types.DESTNATIONPOS,
        destnationPosition:data
    }
}
export const setNetInfos = (data) => {
    return {
        type:types.NETINFOS,
        netinfos:data
    }
}
export const setNotify = (data) => {
    return {
        type:types.NOTIFY,
        notify:data
    }
}

export const setNotificationData = (data) => {
    return {
        type:types.NOTIFICATIONDATA,
        notificationdata:data
    }
}

export const setMessageCount = (data) => {
    return {
        type:types.MESSAGECOUNT,
        messagecount:data
    }
}
export const setDeviceToken = (data) => {
    return {
        type:types.DEVICETOKEN,
        devicetoken:data
    }
}
export const setBidAmount = (data) => {
    return {
        type:types.BIDAMOUNT,
        bidamount:data
    }
}

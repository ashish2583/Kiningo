import React from 'react'
import { View, Text,Image, TouchableOpacity } from 'react-native'
import { Mycolors } from '../utility/Mycolors'
import LinearGradient from 'react-native-linear-gradient'
const MyButtons = (props) => {
    return (
       
      
        <TouchableOpacity style={{
            borderRadius:props.borderRadius ? props.borderRadius : 0,
            borderColor:props.borderColor ? props.borderColor:'transparent',
            borderWidth:props.borderWidth ? props.borderWidth :0,
            marginVertical:props.marginVertical ? props.marginVertical : 5,
            width:props.width ? props.width:'100%',
            backgroundColor:props.backgroundColor ? props.backgroundColor : Mycolors.ORANGE,
            padding:props.padding ? props.padding :0,
            alignSelf:props.alignSelf ? props.alignSelf :'auto',
            marginHorizontal:props.marginHorizontal ? props.marginHorizontal : 0,
            height:props.height ? props.height : 'auto',
            right:props.right ? props.right : 'auto',
            overflow:'hidden',
            // shadowColor:  Mycolors.ORANGE,
            // shadowOffset: {
            //   width:3,
            //   height:3
            // }, 
            // shadowRadius: 5,
            // shadowOpacity: 1.0,
            // justifyContent: 'center',
            // elevation: 5

            }} onPress={props.press ? props.press : ()=>{}}>
        <LinearGradient
          colors={props.hLinearColor ? props.hLinearColor : [props.backgroundColor, props.backgroundColor ]}
          style={{width:'100%',height:props.height ? props.height : 'auto',alignItems: 'center',
          justifyContent: 'center'}}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
         >
            {props.title ?
                <Text style={{
                    color:props.titlecolor ? props.titlecolor : Mycolors.TEXT_COLOR,
                    textAlign:"center",
                    fontWeight: props.fontWeight ? props.fontWeight : "bold",
                    top:props.top ? props.top :0,
                    fontSize:props.fontSize ? props.fontSize : 14
                }}>{props.title}</Text>
            : null }
            {props.img ?
            <TouchableOpacity style={{
                position: props.imgposition ?  props.imgposition  :'absolute',
                top:props.imgtop ? props.imgtop : 'auto',
                bottom : props.imgbottom ? props.imgbottom : 'auto',
                left : props.imgleft ? props.imgleft : 'auto',
                right:props.imgright ? props.imgright : 'auto',
                height :props.imgheight  ? props.imgheight : 10,
                width: props.imgwidth ? props.imgwidth : 10,
                justifyContent:'center',
            }} onPress={props.imgpress ? props.imgpress : ()=>{}}>
          <Image source={props.img =='left' ? require('../assets/arrow.png') : props.img =='right' ?  require('../assets/rightArrow.png') : props.img} style={{width:'100%',height:'100%',alignSelf:'center'}}></Image>
            </TouchableOpacity>
             : null
            }

 </LinearGradient>
        </TouchableOpacity>
       
    )
}

export default MyButtons

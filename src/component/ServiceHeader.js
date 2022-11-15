import React from 'react'
import { View, Text,TouchableOpacity,Image,TextInput,Keyboard ,StyleSheet} from 'react-native'
import { Mycolors } from '../utility/Mycolors'


const ServiceHeader = (props) => {
    return (
  
   <View style={{width:'100%',height: props.press2 ? 110 : 80,borderBottomLeftRadius:20,borderBottomRightRadius:20,backgroundColor:Mycolors.ServiceHeader}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',width:'90%',alignItems:'center',alignSelf:'center',top:25}}>
       <TouchableOpacity onPress={props.press1}>
        <Image source={require('../assets/left_arrow.png')} style={{width:25,height:25}}></Image>
       </TouchableOpacity>
       <Text style={{color:Mycolors.BG_COLOR,fontSize:16,textAlign:'center',fontWeight:'500'}}>{props.title}</Text>
       
       <Text></Text>
        </View>
   {props.press2 ?
       <View style={{width:'90%',alignSelf:'center',marginTop:55}}>
       <TextInput
              style={styles.input}
              maxLength={ props.multiline ? 1000 : 40}
              value={props.serchValue}  
             autoCapitalize={props.autoCapitalize}
             numberOfLines={1}
            //   onFocus={() =>  props.onFocus ?  props.onFocus() :  setState({isFocus:true})}
            //   onBlur={() =>  props.onBlur ?  props.onBlur() :  setState({isFocus:false})}
             ref={ props.inputRef}
              secureTextEntry={ props.passwordType  ?  props.passwordType :  false}
              blurOnSubmit={ props.blurOnSubmit}
              keyboardType={ props.keyboardType}
              returnKeyType={ props.returnKeyType}
              placeholder={ props.placeholder}
             textContentType={ props.textContentType}
             onSubmitEditing={ props.multiline ? null  : Keyboard.dismiss}
              placeholderTextColor={Mycolors.placeholderTextColor}
              onChangeText={ props.onChangeText ? (text) =>  props.onChangeText({text}) : ()=>{}}
              editable={ props.editable}
              multiline={ props.multiline}
             />
   <View style={{width:25,height:50,position:'absolute',right:10,justifyContent:'center'}}>
       <TouchableOpacity onPress={props.press2}>
        <Image source={require('../assets/searchblue.png')} style={{width:25,height:25,alignSelf:'center'}}></Image>
       </TouchableOpacity>
   </View>
   
       </View>
       : null
   }
        </View>

    )
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: Mycolors.BG_COLOR
    },
    input: {
        height: 50,
        width: '100%',
        fontSize: 12,
        borderColor: 'transparent',
        borderWidth: 1,
        borderRadius: 5,
        color: Mycolors.TEXT_COLOR,
        paddingLeft: 15,
        paddingRight: 35,
        backgroundColor: Mycolors.BG_COLOR,
      },
  });
export default ServiceHeader;










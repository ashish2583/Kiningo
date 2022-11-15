import React from 'react'
import { View, Text,TouchableOpacity,Image,TextInput,Keyboard ,StyleSheet} from 'react-native'
import { Mycolors } from '../utility/Mycolors'


const SerchInput = (props) => {
    return (
  
<View style={{width:'98%',height:45,backgroundColor:'#fff',alignSelf:'center',flexDirection:'row',
  //  shadowColor: '#000',
  //     shadowOffset: {
  //       width: 0,
  //       height: 3
  //     },
  //     shadowRadius: 1,
  //     shadowOpacity: 0.3,
  //     justifyContent: 'center',
  //     elevation: 5,
      alignSelf: 'center',marginTop:props.marginTop? props.marginTop :'auto'}}>
<View style={{width:'82%',height:45,backgroundColor:Mycolors.BG_COLOR,borderRadius:8}}>

<View style={{width:'100%',height:45,borderRadius:8,backgroundColor:'#fff',alignSelf:'center',
 shadowColor: '#000',
 shadowOffset: {
   width: 0,
   height: 3
 },
 shadowRadius: 1,
 shadowOpacity: 0.3,
 justifyContent: 'center',
 elevation: 5,
}}>
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
    </View>
</View>
<View style={{width:'14%',height:45,backgroundColor:'transparent',borderRadius:8,left:5,}}>
    <TouchableOpacity style={{width:45,height:45,justifyContent:'center',backgroundColor:Mycolors.SearchBoxColor,borderRadius:8}}
    onPress={props.press}>
    <Image source={require('../assets/search.png')} style={{ width: 24, height: 24, alignSelf: 'center'}}></Image>
    </TouchableOpacity>

</View>
</View>

    )
}

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: Mycolors.BG_COLOR
    },
    input: {
        paddingLeft: 15,
        paddingRight: 15,
        height: 45,
        width:'100%',
        fontSize: 13,
        // borderColor: Mycolors.GrayColor,
        // borderWidth:1,
        backgroundColor: Mycolors.BG_COLOR,
        borderRadius:15,
        color:Mycolors.TEXT_COLOR,
      //   textAlignVertical: 'top',
      },
  });
export default SerchInput;










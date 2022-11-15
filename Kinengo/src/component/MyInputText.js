import React from 'react';
import { StyleSheet, View, TextInput,Dimensions, Text,Image, Platform,TouchableOpacity, Keyboard} from 'react-native';
import { Mycolors } from '../utility/Mycolors';


export default class MyInputText extends React.Component {
  state = {
    text: this.props.defaultValue ? this.props.defaultValue : '',
    isFocus: false,
    secure:true
  };

	// componentWillReceiveProps(nextProps) {
	// 	if (nextProps.defaultValue !== this.props.defaultValue) {
	// 		this.setState({ text: nextProps.defaultValue.toString() });
	// 	}
	// }

  getInputValue = () => this.state.text;
  setVal = (text) => this.setState({text});

  render() {
    const { isFocus, text } = this.state;
    return (
  
      <View style={[styles.container]}>
        <TextInput 
          style={[styles.inputText,
           {  
                //height:this.props.multiline ? 116 : 58,
                textAlignVertical:this.props.multiline ?'top':'center',
                paddingLeft:15
           }
          ]}
          maxLength={this.props.multiline ? 1000 : 40}
          value={this.state.text}  
          autoCapitalize={this.props.autoCapitalize}
          numberOfLines={1}
          // maxLength ={this.props.maxLength}
          onFocus={() => this.props.onFocus ? this.props.onFocus() : this.setState({isFocus:true})}
          onBlur={() => this.props.onBlur ? this.props.onBlur() : this.setState({isFocus:false})}
          ref={this.props.inputRef}
          secureTextEntry={this.props.passwordType  ? this.state.secure : this.props.secureTextEntry}
          blurOnSubmit={this.props.blurOnSubmit}
          keyboardType={this.props.keyboardType}
          returnKeyType={this.props.returnKeyType}
          placeholder={this.props.placeholder}
          textContentType={this.props.textContentType}
          onSubmitEditing={this.props.multiline ? null  : Keyboard.dismiss}
          placeholderTextColor={'grey'}
          onChangeText={this.props.onChangeText ? this.props.onChangeText : (text) => this.setState({text})}
          editable={this.props.editable}
          multiline={this.props.multiline}
          // numberOfLines={1}
          // blurOnSubmit={false}
        /> 
      </View>
     
    );

   


  }
}

MyInputText.defaultProps = {
  focus: () => {},
  style: {},
  placeholder: '',
  blurOnSubmit: false,
  returnKeyType: 'default',
  keyboardType: null,
  secureTextEntry: false, 
  autoCapitalize: "none",
  textContentType: "none",
  defaultValue: '',
  editable: true,
  maxLength:40,
  passwordType:false,
  multiline:false
};

const styles = StyleSheet.create({
  container: {
   backgroundColor:'transparent',
   margin:0,
   overflow:'hidden',
   paddingHorizontal:2,
   paddingHorizontal:3,
   marginHorizontal:0,
   marginVertical:10,
   flexDirection:'row',
   alignSelf:'center',
  
  },

  inputText: {
    alignSelf: 'center',
    marginTop:2,
    width:'100%',
    // width:widthhh * 0.8,
    height:58,
    // borderColor:'#000000',
    // borderWidth:2.5,
    borderRadius:5,
    backgroundColor:Mycolors.BG_COLOR,
    paddingLeft: '1%', 
    paddingRight: '1%',
    borderColor:'black',
    color:'black'
  },
 
});
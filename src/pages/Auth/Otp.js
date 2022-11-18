import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, ScrollView, Alert, TextInput } from 'react-native';
import MyButtons from '../../component/MyButtons';
import MyInputText from '../../component/MyInputText';
import { dimensions, Mycolors } from '../../utility/Mycolors';
import {CodeField,Cursor,useBlurOnFulfill,useClearByFocusCell,} from 'react-native-confirmation-code-field';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {  useSelector, useDispatch } from 'react-redux';
import { setLoading,saveUserToken,saveUserResult,saveCorporateUserResult} from '../../redux/actions/user_action';
import {baseUrl,login,verify_otp,requestPostApi} from '../../WebApi/Service'
import Loader from '../../WebApi/Loader';
import Toast from 'react-native-simple-toast'
import MyAlert from '../../component/MyAlert';
import LinearGradient from 'react-native-linear-gradient'

const CELL_COUNT = 4;
const Otp = (props) => {
  const dispatch =  useDispatch();
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [mprops, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [loading,setLoading]=useState(false)
  const [My_Alert, setMy_Alert] = useState(false)
  const [alert_sms, setalert_sms] = useState('')

  const optclicked=async()=>{
    // LoginPressed('hi')
    if(props.route.params.otp==value){
      let formdata = new FormData();
        formdata.append("phone_no",props.route.params.number);
        formdata.append("otp",value);
      var data={
          "phone": props.route.params.c_code + props.route.params.number,
          "otp": value
        }
        setLoading(true)
   const{responseJson,err}  = await requestPostApi(verify_otp,data,'POST','') 
    setLoading(false)
    console.log('the res==>>', responseJson)
    if (responseJson.headers.success == 1) {
      LoginPressed(responseJson.body)
      // props.navigation.navigate('Login')
    } else {
       setalert_sms(err)
       setMy_Alert(true)
           }
  }else{
    Toast.show('Please enter valid opt')
  } 
  }

  const LoginPressed=(data)=>{
    AsyncStorage.setItem("kinengo",JSON.stringify(data));
    dispatch(saveUserResult(data))
   }

     return(
    <SafeAreaView style={styles.container}>
       <LinearGradient
          colors={[Mycolors.BG_LINEAR_START_COLOR, Mycolors.BG_LINEAR_END_COLOR]}
          style={{flex: 1,height:dimensions.SCREEN_HEIGHT}}
         >
       <MyButtons title="Enter Verification Code" height={55} width={'100%'} alignSelf="center" imgpress={() => { props.navigation.goBack() }} marginHorizontal={20} 
       titlecolor={Mycolors.TEXT_COLOR} backgroundColor={'transparent'} img='left' imgtop={16} imgleft={10} imgheight={20} imgwidth={25}/>

    <ScrollView style={{ paddingHorizontal: 20 }}>
       <View style={{flexDirection:'row',width:'100%',height:50,marginTop:'20%'}}>
       <Image source={require('../../assets/greentick.png')} style={{ width: 17, height: 12,top:10}} />
       <Text style={{fontWeight: 'bold', fontSize: 20 ,color:Mycolors.BTN_LINEAR_START_COLOR,left:10}}>CONFIRMATION</Text>
       </View>
 
       <View style={{flexDirection:'row',width:'100%',height:50,alignItems:'center'}}>
       <Image source={require('../../assets/smartphone.png')} style={{ width: 35, height: 60}} />
       <View style={{left:20}}>
       <Text style={{fontWeight: '500', fontSize: 16 ,color:Mycolors.TEXT_COLOR,left:10}}>Please type the verification</Text>
       <Text style={{fontWeight: '500', fontSize: 16 ,color:Mycolors.TEXT_COLOR,left:10,marginTop:5}}>code send to {props.route.params.c_code}{props.route.params.number}</Text>
       </View>
       </View>
       
        <View style={{width:'100%',height:100,marginTop:10,zIndex:999}}>
          <CodeField
        ref={ref}
        {...mprops}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        // placeholder="-"
        // placeholderTextColor={Mycolors.TEXT_COLOR}
        renderCell={({index, symbol, isFocused}) => (
          <View
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={[styles.cellRoot, isFocused && styles.focusCell]}>
            <Text style={styles.cellText}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      /> 
      </View>

<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:'100%'}}>
      <View style={{flexDirection:'row',width:'45%',height:40,alignItems:'center'}}>
       <Text style={{ fontSize: 13 ,color:Mycolors.TEXT_COLOR,left:10}}>RESEND CODE</Text>
       <Image source={require('../../assets/arrow_right_black.png')} style={{ width: 18, height: 20,left:20}} />
      </View>
       <View style={{flexDirection:'row',width:'45%',height:40,alignItems:'center'}}>
       <Image source={require('../../assets/suport.png')} style={{ width: 15, height: 12}} />
       <Text style={{ fontSize: 14 ,color:Mycolors.TEXT_COLOR,left:10}}>Support Center</Text>
       </View>

</View>

      <MyButtons title="Submit" height={50} width={'100%'} borderRadius={30} alignSelf="center" press={()=>{optclicked()}} marginHorizontal={20} 
      titlecolor={Mycolors.BG_COLOR} backgroundColor={Mycolors.SKY_BLUE} marginVertical={40} hLinearColor={[Mycolors.BTN_LINEAR_START_COLOR,Mycolors.BTN_LINEAR_END_COLOR]}/>
     

        </ScrollView>
       
  
 {My_Alert ? <MyAlert sms={alert_sms} okPress={()=>{setMy_Alert(false)}} /> : null }
  { loading ? <Loader /> : null }
  </LinearGradient>
    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({

  container: {
    flex: 1,  
    backgroundColor:Mycolors.DrawerBGcolor
  },
  root: {padding: 20, minHeight: 300},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {
    marginTop: 20,
    width: 280,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    // borderColor: Mycolors.TEXT_COLOR,
    // borderWidth: 1,
    backgroundColor:Mycolors.OTPBOX_Color,

  },
  cellText: {
    color: Mycolors.BTN_LINEAR_START_COLOR,
    fontSize: 36,
    textAlign: 'center',
  },
  focusCell: {
    // borderBottomColor: '#007AFF',55
    // borderBottomWidth: 2,
    backgroundColor:Mycolors.BG_COLOR
  },
});
export default Otp
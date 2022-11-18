import React, { useEffect, useState } from 'react';
import { View,  Text, StyleSheet,Image, SafeAreaView, ScrollView,TextInput,Keyboard, Alert, TouchableOpacity } from 'react-native';
import MyButtons from '../../component/MyButtons';
import MyInputText from '../../component/MyInputText';
import { dimensions, Mycolors } from '../../utility/Mycolors';
import MyAlert from '../../component/MyAlert';
import Toast from 'react-native-simple-toast';
import LinearGradient from 'react-native-linear-gradient'
import CountryPicker, { getAllCountries, getCallingCode,DARK_THEME } from 'react-native-country-picker-modal';
import getUnicodeFlagIcon from 'country-flag-icons/unicode'
import {SvgCssUri,Rect,Circle } from 'react-native-svg';
import { useSelector, useDispatch } from 'react-redux';
import { saveUserResult, saveUserToken, setUserType } from '../../redux/actions/user_action';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { baseUrl, login, register, requestPostApi } from '../../WebApi/Service'
import Loader from '../../WebApi/Loader';
const SignUp = (props) => {

  const [flag,setFlag]=useState('http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg')
  const [code,setcode]=useState('+1')
  const [isvisuable,setisvisuable]=useState(false)
  const [fristname,setfristname]=useState('') 
  const [lastname,setlastname]=useState('') 
  const [dob,setdob]=useState('') 
  const [number,setnumber]=useState('') 
  const [email,setemail]=useState('') 
  const [address,setaddress]=useState('') 
  const [pass,setpass]=useState('') 
  const [confPass,setconfPass]=useState('') 
  const[passView,setPassView]=useState(true)
  const[cpassView,setcPassView]=useState(true)
  const [My_Alert, setMy_Alert] = useState(false)
  const [alert_sms, setalert_sms] = useState('')
  const [loading, setLoading] = useState(false)

useEffect(()=>{
  
}) 


  const signupPressed=async()=>{

    var EmailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (fristname == '') {
      Alert.alert('Enter first name');
    }else if (lastname=='') {
      Alert.alert('Enter last name');
    }else if (number=='') {
      Alert.alert('Enter mobile number');
    }else if (email == '') {
      Alert.alert('Enter email address');
    } else if (!EmailReg.test(email)) {
      Alert.alert('Enter valid email');
    }else if (address == '') {
      Alert.alert('Enter Address');
    }else if (pass == '') {
      Alert.alert('Enter password');
    } else if (confPass == '') {
      Alert.alert('Enter confirm password');
    } else if (confPass != pass) {
      Alert.alert('Password & confirm password should be same');
    } else {
      setLoading(true)
     
      var data={
                first_name: fristname,
                last_name: lastname,
                email: email,
                password: pass,
                phone: code+number,
                address:address
              }
      const { responseJson, err } = await requestPostApi(register, data, 'POST', '')
      setLoading(false)
      console.log('the res==>>', responseJson)
      if (responseJson.headers.success == 1) {
        props.navigation.navigate('Otp', { number: number, otp: responseJson.body.otp, from: 'SignUp',c_code: code })
      } else {
         setalert_sms(err)
         setMy_Alert(true)
      }
    }
  }
 
  const countryselect=(cod)=>{
    setcode('+'+cod.callingCode.toString())
    var unc=getUnicodeFlagIcon(cod.cca2)
    console.log('the cca=>',unc)
    const url="http://purecatamphetamine.github.io/country-flag-icons/3x2/"+cod.cca2+".svg"
   //setFlag(unc) //cca2
   console.log('URL==>',url)
   setFlag(url) //cca2
    console.log(cod)
  }

  const Mypicker=()=>{
    return(
      <CountryPicker 
      withEmoji
      withCallingCode
      onSelect={(cod)=>countryselect(cod)}
      withAlphaFilter 
     // placeholder="CC"
      withFlagButton
      theme={DARK_THEME}
      visible={true}
     // withCountryNameButton={true}
      // renderFlagButton={(FlagButton['props'])}
    //   renderFlagButton={
    // // (prp)=>
    // {
    //   // console.log(prp)
    //     withEmoji=true,
    //     withFlagButton=true,
    //     // withCountryNameButton?: boolean, 
    //     // withCurrencyButton?: boolean,
    //     // withCallingCodeButton?: boolean,
    //     // withFlagButton?: boolean,
    //     // containerButtonStyle?: StyleProp<ViewStyle>,
    //      countryCode='+91',
    //     // placeholder: string,
      onClose={()=>{setisvisuable(false)}}
    //   }
    //    } 
       />
    )
  }


  return (
    <SafeAreaView style={styles.container}>
       <LinearGradient
          colors={[Mycolors.BG_LINEAR_START_COLOR, Mycolors.BG_LINEAR_END_COLOR]}
          style={{flex: 1,height:dimensions.SCREEN_HEIGHT}}
         >
       <MyButtons title="Signup" height={55} width={'100%'} alignSelf="center" imgpress={() => { props.navigation.navigate('Login') }} marginHorizontal={20} 
       titlecolor={Mycolors.TEXT_COLOR} backgroundColor={'transparent'} img='left' imgtop={16} imgleft={10} imgheight={20} imgwidth={25}/>

      <ScrollView style={{ paddingHorizontal: 20 }}>
       
        <Text style={{ marginTop: '5%', fontWeight: '600', fontSize: 20 ,color:Mycolors.TEXT_COLOR}}>Personal Information</Text>

        <View style={{  width: dimensions.SCREEN_WIDTH - 40 ,marginTop:20,alignSelf:'center',flexDirection:'row',justifyContent:'space-between'}}>
              <TextInput
              value={fristname}
              onChangeText={(text) => {
                setfristname(text)
              }}
              placeholder="First Name"
              placeholderTextColor={Mycolors.placeholdercolor}
              style={[styles.input,{width: '49%',}]}
            />
           <TextInput
              value={lastname}
              onChangeText={(text) => {
                setlastname(text)
              }}
              placeholder="Last Name"
              placeholderTextColor={Mycolors.placeholdercolor}
              style={[styles.input,{width: '49%',}]}
            />
          </View>

          <View style={styles.inputView}>
         
            <TextInput
              value={dob}
              onChangeText={(text) => {
                setdob(text)
              }}
              placeholder="DOB"
              placeholderTextColor={Mycolors.placeholdercolor}
              style={styles.input}
            />
  
          </View>


        <View style={{ flexDirection: 'row', width: dimensions.SCREEN_WIDTH - 140, alignItems: 'center',marginTop:10 }}>
          <View style={{ width: 100, height: 53, backgroundColor: Mycolors.BG_COLOR, left: 6, top: 1, borderTopLeftRadius: 5, borderBottomLeftRadius: 5 ,zIndex:999,justifyContent:'center'}}>
         { isvisuable ?
         Mypicker()
        : null
        }

       <View style={{position:'absolute',height:40,backgroundColor:Mycolors.BG_COLOR,alignItems:'center',zIndex:999,flexDirection:'row',width:100}}>
        <TouchableOpacity onPress={()=>{setisvisuable(true)}}
         style={{width: 50, height: 27,flexDirection:'row',alignItems:'center'}}>
          {/* <SvgCssUri
          width="100%"
          height="100%"
          uri={flag}
          /> */}
         <Image style={{width: 12, height: 12,}} source={Mycolors.BG_COLOR=='#fff'? require('../../assets/arrow-point-to-down.png'):require('../../assets/arrow-point-to-downw.png')}/>
          </TouchableOpacity>
          <ScrollView style={{left:0}}>
        <Text style={{color:Mycolors.TEXT_COLOR,fontWeight:'bold',alignSelf:'flex-end',top:-0.2}}>{code}</Text>
          </ScrollView>
          </View>
          
          </View>
         
              <TextInput
                value={number}
                onChangeText={(text) => {
                  setnumber(text)
                  if(number.length==9){
                    Keyboard.dismiss()
                  }
                }}
                placeholder="**********" 
                placeholderTextColor={Mycolors.GrayColor}
                style={styles.input}
                keyboardType="numeric"
                maxLength={10}
              // editable={false}
              />

        </View>
        

        <View style={styles.inputView}>
         
         <TextInput
           value={email}
           onChangeText={(text) => {
             setemail(text)
           }}
           placeholder="Email Address"
           placeholderTextColor={Mycolors.placeholdercolor}
           style={styles.input}
         />

       </View>

       <View style={styles.inputView}>
         
         <TextInput
           value={address}
           onChangeText={(text) => {
             setaddress(text)
           }}
           placeholder="Address"
           placeholderTextColor={Mycolors.placeholdercolor}
           style={styles.input}
         />

       </View>

       <View style={styles.inputView}>
            <TextInput
              value={pass}
              onChangeText={(text) => {
                setpass(text)
              }}
              placeholder="Password"
              placeholderTextColor={Mycolors.placeholdercolor}
              style={[styles.input,{paddingRight: 50}]}
              secureTextEntry={passView ? true : false}
            />
            <View style={{position:'absolute',right:10,top:17}}>
              <TouchableOpacity onPress={()=>{setPassView(!passView)}}>
              <Image source={passView ? require('../../assets/hide.png') : require('../../assets/view.png')} style={{ width: 35, height: 22}} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.inputView}>
            <TextInput
              value={confPass}
              onChangeText={(text) => {
                setconfPass(text)
              }}
              placeholder="Confirm Password"
              placeholderTextColor={Mycolors.placeholdercolor}
              style={[styles.input,{paddingRight: 50}]}
              secureTextEntry={cpassView ? true : false}
            />
            <View style={{position:'absolute',right:10,top:17}}>
              <TouchableOpacity onPress={()=>{setcPassView(!cpassView)}}>
              <Image source={cpassView ? require('../../assets/hide.png') : require('../../assets/view.png')} style={{ width: 35, height: 22}} />
              </TouchableOpacity>
            </View>
          </View>

       <MyButtons title="Continue" height={50} width={'100%'} borderRadius={30} alignSelf="center" press={()=>{signupPressed()}} marginHorizontal={20} 
      titlecolor={Mycolors.BG_COLOR} backgroundColor={Mycolors.SKY_BLUE} marginVertical={30} hLinearColor={[Mycolors.BTN_LINEAR_START_COLOR,Mycolors.BTN_LINEAR_END_COLOR]}/>
    

      </ScrollView>
   
         {My_Alert ? <MyAlert sms={alert_sms} okPress={()=>{setMy_Alert(false)}} /> : null }
    </LinearGradient>
    {loading ? <Loader /> : null}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Mycolors.DrawerBGcolor
  },
  inputView: {
    width: dimensions.SCREEN_WIDTH - 40 ,marginTop:10
  },
  input: {
    height: 55,
    width: '100%',
    // fontSize: 12,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 5,
    color: Mycolors.TEXT_COLOR,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: Mycolors.BG_COLOR,
    top: 1
  },
});
export default SignUp
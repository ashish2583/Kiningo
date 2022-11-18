import React, { useState,useEffect } from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView, ScrollView,useColorScheme, Alert, TextInput, Keyboard, TouchableOpacity } from 'react-native';
import MyButtons from '../../component/MyButtons';
import MyInputText from '../../component/MyInputText';
import { dimensions, Mycolors } from '../../utility/Mycolors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { saveUserResult, saveUserToken, setUserType } from '../../redux/actions/user_action';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { baseUrl, login, requestPostApi } from '../../WebApi/Service'
import Loader from '../../WebApi/Loader';
import Toast from 'react-native-simple-toast'
import MyAlert from '../../component/MyAlert';
import LinearGradient from 'react-native-linear-gradient'

const Login = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const mapdata = useSelector(state => state.maplocation)
  const [email, setemail] = useState('')
  const [pass, setpass] = useState('')
  const[passView,setPassView]=useState(true)
   const [My_Alert, setMy_Alert] = useState(false)
  const [alert_sms, setalert_sms] = useState('')

  useEffect(()=>{
   
  },[]) 

  const Login_Pressed=(data)=>{
    AsyncStorage.setItem("kinengo",JSON.stringify(data));
    dispatch(saveUserResult(data))
   }

  const LoginPressed = async () => {
   
    var EmailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email == '') {
      Alert.alert('Enter email address');
    } else if (!EmailReg.test(email)) {
      Alert.alert('Enter valid email');
    } else if (pass == '') {
      Alert.alert('Enter password');
    } else {
      setLoading(true)
      let formdata = new FormData();
      formdata.append("email", email); 
      formdata.append("password", pass);
      // formdata.append("user_group", 3);
      var data={
        email:email,
        password:pass
      }
      const { responseJson, err } = await requestPostApi(login, data, 'POST', '')
      setLoading(false)
      console.log('the res==>>', responseJson)
      if (responseJson.headers.success == 1) {
        Login_Pressed(responseJson.body)
      } else {
         setalert_sms(err)
         setMy_Alert(true)
      }
    }
  }

  const resetStacks = (page) => {
    props.navigation.reset({
      index: 0,
      routes: [{ name: page }],
      params: { resentotp: false },
    });
  }




  return (
    <SafeAreaView style={styles.container}>
        <LinearGradient
          colors={[Mycolors.BG_LINEAR_START_COLOR, Mycolors.BG_LINEAR_END_COLOR]}
          style={{flex: 1,height:dimensions.SCREEN_HEIGHT}}
         >
       <MyButtons title="Sign In" height={55} width={'100%'} alignSelf="center" imgpress={() => { props.navigation.goBack() }} marginHorizontal={20} 
       titlecolor={Mycolors.TEXT_COLOR} backgroundColor={'transparent'} img='left' imgtop={16} imgleft={10} imgheight={20} imgwidth={25}/>

      <ScrollView style={{ paddingHorizontal: 20 }}>
        

        <Text style={{ marginTop: '15%', fontSize: 25, color: Mycolors.TEXT_COLOR }}>Welcome to</Text>
<View style={{width:'100%',height:50,padding:7}}>
                     <Image
                        source={require('../../assets/Kinengo_Green.png')}
                        style={{
                          width: 260, height: 55
                        }}
                     />
</View>
                   

        <View style={{  width: dimensions.SCREEN_WIDTH - 40 ,marginTop:50}}>
         
       <Text style={{color:Mycolors.TEXT_COLOR,top:-5}}>Email</Text>
          <TextInput
            value={email}
            onChangeText={(text) => {
              setemail(text)
            }}
            placeholder="example@email.com"
            placeholderTextColor={Mycolors.placeholdercolor}
            style={styles.input}
          />

        </View>

        <View style={{  width: dimensions.SCREEN_WIDTH - 40 ,marginTop:30}}>
         
         <Text style={{color:Mycolors.TEXT_COLOR,top:-5}}>Password</Text>
            <TextInput
              value={pass}
              onChangeText={(text) => {
                setpass(text)
              }}
              placeholder="password"
              placeholderTextColor={Mycolors.placeholdercolor}
              style={[styles.input,{paddingRight: 50}]}
              secureTextEntry={passView ? true : false}
            />
            <View style={{position:'absolute',right:10,top:35}}>
              <TouchableOpacity onPress={()=>{setPassView(!passView)}}>
              <Image source={passView ? require('../../assets/hide.png') : require('../../assets/view.png')} style={{ width: 35, height: 22}} />
              </TouchableOpacity>
            </View>
          </View>
      <MyButtons title="Sign In" height={50} width={'100%'} borderRadius={30} alignSelf="center" press={()=>{LoginPressed()}} marginHorizontal={20} 
      titlecolor={Mycolors.BG_COLOR} backgroundColor={Mycolors.SKY_BLUE} marginVertical={40} hLinearColor={[Mycolors.BTN_LINEAR_START_COLOR,Mycolors.BTN_LINEAR_END_COLOR]}/>
      </ScrollView>
      <View style={{flexDirection:'row',alignSelf:'center',top:-30}}>
        <Text style={[styles.textStyle, { color: Mycolors.TEXT_COLOR }]}
          onPress={() => { resetStacks('SignUp') }}>Don't have an account?</Text>
          <Text style={[styles.textStyle, { color: Mycolors.BLUE ,textDecorationLine: 'underline'}]}
          onPress={() => { resetStacks('SignUp') }}> Sign Up</Text>
      </View>
         
         {My_Alert ? <MyAlert sms={alert_sms} okPress={()=>{setMy_Alert(false)}} /> : null }
      {loading ? <Loader /> : null}
      </LinearGradient>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
   // backgroundColor: Mycolors.BG_LINEAR_END_COLOR
  },
  textStyle: {
    marginTop: 10,
    fontSize: 17,
    alignSelf: 'center',
    color: Mycolors.ORANGE,
  },
  input: {
    height: 55,
    width: '100%',
    // fontSize: 12,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 5,
    color: Mycolors.TEXT_COLOR,
    paddingLeft: 20,
    paddingRight: 10,
    backgroundColor: Mycolors.BG_COLOR,
    top: 1
  },
});
export default Login



import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Alert,Text,StyleSheet,SafeAreaView,TextInput,PermissionsAndroid,FlatList,TouchableOpacity, ScrollView} from 'react-native';
import MyButtons from '../../component/MyButtons';
import { dimensions, Mycolors } from '../../utility/Mycolors';
// import { Rating, AirbnbRating } from 'react-native-ratings';
import {launchCamera,launchImageLibrary} from 'react-native-image-picker';
import {baseUrl,driver_profile,requestPostApi,requestGetApi} from '../../WebApi/Service'
import Loader from '../../WebApi/Loader';
import Toast from 'react-native-simple-toast'
import {  useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setLoading,saveUserResult,saveUserToken} from '../../redux/actions/user_action';
import Modal from 'react-native-modal';
import MyAlert from '../../component/MyAlert';
const EditProfile = (props) => {
  const userdetaile  = useSelector(state => state.user.user_details)
  const person_Image = "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
  const[name,setName]=useState('')
  const[email,setEmail]=useState('')
  const[mobile,setMobile]=useState('')
  const[address,setAddress]=useState('')
  const [loading,setLoading]=useState(false)
  const dispatch =  useDispatch();
  const [modlevisual, setmodlevisual] = useState(false);
  const [pick, setpick] = useState('')
  const [filepath, setfilepath] = useState(null)
  const [My_Alert, setMy_Alert] = useState(false)
  const [alert_sms, setalert_sms] = useState('')

  useEffect(()=>{
    // setName(props.route.params.data.name)
    // setEmail(props.route.params.data.email)
    // setMobile(props.route.params.data.phone_number)
  },[])

  const savePress=()=>{
    if(name==''|| name.trim().length == 0){
        Toast.show('Enter Name')   
    }else if(email == '' || email.trim().length == 0){
      Toast.show('Enter Email Id')
    }
    else if(!(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
      email))){
        Toast.show('Enter Valid Email Id')
    }else if(mobile==''|| mobile.trim().length == 0 || mobile.trim().length< 10){
        Toast.show('Enter Mobile Number')  
    }else{
      AddName()
    }
  }

  const resetStacks=(page)=>{
    props.navigation.reset({
      index: 0,
      routes: [{name: page}],
    });
   }

  const AddName=async()=>{
    let formdata = new FormData();
    formdata.append("first_name",name);
    formdata.append("last_name",' ');
    formdata.append("email",email);
    formdata.append("phone_no",mobile);
    if(filepath!=null){
      formdata.append("profile_image",pick);
    }
    formdata.append("current_screen",'editprofile');
    setLoading(true)
    const{responseJson,err}  = await requestPostApi(driver_profile,formdata,'POST',userdetaile.token) 
    setLoading(false)
    if(err==null){
        if(responseJson.status){
          console.log('Edit Profile Data is',responseJson.data)
         Toast.show(responseJson.message);
         AsyncStorage.setItem("driver",JSON.stringify(responseJson.data));
          dispatch(saveUserResult(responseJson.data)) 
         resetStacks('Myprofile')
        }else{
          Toast.show(responseJson.message);
        }
    }else{
      setalert_sms(err)
            setMy_Alert(true)
    }
  }
 

  // fetch(url, {
  //   method: 'POST',
  //   headers: {
  //     'Accept': 'application/json',
  //     'Content-Type': 'multipart/form-data',
  //   },
  //   body: formData

  // }).then((response) => response.json())
  //   .then((responseJson) => {
  //     if (responseJson.error == false) {

  //     } else {
       
  //     }
  //   }).catch((error) => {
     
  //   });


  
  const requestCameraPermission = async () => {
    opencamera()
    // try {
    //   const granted = await PermissionsAndroid.request(
    //     PermissionsAndroid.PERMISSIONS.CAMERA,
    //     {
    //       title: "App Camera Permission",
    //       message:"App needs access to your camera ",
    //       buttonNeutral: "Ask Me Later",
    //       buttonNegative: "Cancel",
    //       buttonPositive: "OK"
    //     }
    //   );
    //   console.log("CPermissionsAndroid.RESULTS",PermissionsAndroid.RESULTS.GRANTED);
    //   console.log("CPermissionsAndroid.RESULTS",granted);
    //   if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //     console.log("Camera permission given");
    //     opencamera()
    //   } else {
    //     console.log("Camera permission denied");
    //     // opencamera()
    //   }
    // } catch (err) {
    //   console.warn(err);
    // }
  };


  const opencamera = async () => {
    setmodlevisual(false)

    let options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose Photo from Custom Option'
        },
      ],
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchCamera(options, (image) => {
      if (!image.didCancel) {
        console.log('the ddd==', image)
        var photo = {
          uri: image.assets[0].uri,
          type: "image/jpeg",
          name: image.assets[0].fileName
        };
        setpick(photo)
        setfilepath(image)
      }

    })
  }

const openLibrary = async () => {
  setmodlevisual(false)
  let options = {
    title: 'Select Image',
    customButtons: [
      {
        name: 'customOptionKey',
        title: 'Choose Photo from Custom Option'
      },
    ],
    maxWidth: 500,
    maxHeight: 500,
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  launchImageLibrary(options, (image) => {
    if (!image.didCancel) {
      console.log('the ddd==', image.assets[0].uri)
      var photo = {
        uri: image.assets[0].uri,
        type: "image/jpeg",
        name: image.assets[0].fileName
      };
      setpick(photo)
      setfilepath(image)
    }
  })


}

  
  return(
    <SafeAreaView style={styles.container}>
     {/* <View style={{paddingHorizontal:30,}}>
         <MyButtons
          img='left' 
          imgstyle={{ width: 25, height: 20, alimentSelf: 'center' }}
          press={() => { props.navigation.goBack() }}
          backgroundColor="transparent" title="Edit Profile" top={15}/> 

      </View>*/}
      <View style={{width:'100%',height:55,
      justifyContent:'center',
      backgroundColor:Mycolors.BG_COLOR,
      shadowColor:  Mycolors.GrayColor,
            shadowOffset: {
              width:0,
              height:3
            }, 
            shadowRadius: 5,
            shadowOpacity: 3.0,
            justifyContent: 'center',
            elevation: 5}}>
          <TouchableOpacity style={{top:13,left:20}} onPress={()=>{ props.navigation.goBack()}}>
                      <Image
                        source={require('../../assets/ArrowLeft.png')}
                        style={{
                          width: 23, height: 16,
                            // borderRadius: 35,
                        }}
                     />
        </TouchableOpacity>

<Text style={{alignSelf:'center',color:Mycolors.TEXT_COLOR,fontWeight:'bold',top:-5}}>Edit Profile</Text>
      </View>
<View style={{paddingHorizontal:20,backgroundColor:Mycolors.DrawerBGcolor,flex:1}}>
     <ScrollView>
<TouchableOpacity style={{alignSelf:'center',width:100,height:100,borderColor:Mycolors.BG_COLOR,borderWidth:1,borderRadius:50,marginVertical:10,top:5}} onPress={()=>{
   setmodlevisual(true)
}}>
                    <Image
                        source={filepath !=null ? {uri:filepath.assets[0].uri}  : { uri: props.route.params.data.profile_image!=''? props.route.params.data.profile_image : person_Image }}
                        style={{
                            height: 100,
                            width: 100,
                            borderRadius: 50,
                            borderWidth:0.1,
                            borderColor:Mycolors.BG_COLOR
                        }}
                    />
                    {/* <View style={{position:'absolute',width:36,height:36,bottom:0,right:-10,backgroundColor:Mycolors.ORANGE,borderRadius:18,justifyContent:'center'}}>
                    <Image source={require('../../assets/pencil.png')}style={{height: 18,width: 18,alignSelf:'center'}}/>
                    </View> */}
</TouchableOpacity>


<View style={styles.viewStyle}>
<TextInput
      value={name}
      onChangeText={(e) => setName(e)}
      placeholder={'Name'}
      placeholderTextColor="#bbbbbb"
      autoCapitalize = 'none'
      style={styles.input}
    />
</View>

<View style={styles.viewStyle}>
<TextInput
      value={email}
      onChangeText={(e) => setEmail(e)}
      placeholder={'Email'}
      placeholderTextColor="#bbbbbb"
      autoCapitalize = 'none'
      style={styles.input}
    />
</View>

<View style={styles.viewStyle}>
<TextInput
      value={mobile}
      onChangeText={(e) => setMobile(e)}
      placeholder={'Number'}
      placeholderTextColor="#bbbbbb"
      autoCapitalize = 'none'
      maxLength={12}
      style={styles.input}
    />
</View>

{/* <View style={styles.viewStyle}>
<TextInput
      value={address}
      onChangeText={(e) => setAddress(e)}
      placeholder={'Address'}
      placeholderTextColor="#bbbbbb"
      autoCapitalize = 'none'
      style={styles.input}
    />
</View> */}
<View style={{width:1,height:10}}></View>
     <MyButtons title="Save Details" padding={15} width={'97%'} borderRadius={50} alignSelf="center" press={()=>{savePress()}} marginHorizontal={5} titlecolor={Mycolors.BG_COLOR}/>
       </ScrollView>
          </View>

          <Modal
        isVisible={modlevisual}
        swipeDirection="down"
        onSwipeComplete={(e) => {
          setmodlevisual(false)
        }}
        coverScreen={false}
        backdropColor='transparent'
        style={{ justifyContent: 'flex-end', margin: 0, }}
      >
        <View style={{ height: 150, backgroundColor: Mycolors.BG_COLOR, borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20, margin: 0, bottom: 0 }}>
            <View style={styles.mainView}>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
                <TouchableOpacity style={{width:150,height:150}} 
                onPress={() => { openLibrary() }}
                >
                  <Image
                source={require('../../assets/gallery.png')}
                style={{ width: 40, height: 40 ,alignSelf:'center'}}
                 />
                  <Text style={{textAlign:'center',color:Mycolors.TEXT_COLOR}}>Open Library</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{width:150,height:150}}
                onPress={() => { requestCameraPermission() }}
                >
                   <Image
                source={require('../../assets/camera.png')}
                style={{ width: 40, height: 35 ,alignSelf:'center'}}
                 />
                  <Text style={{textAlign:'center',color:Mycolors.TEXT_COLOR}}>Open Camera</Text>
                </TouchableOpacity>
              </View>

            </View>
        </View>
      </Modal>



      {My_Alert ? <MyAlert sms={alert_sms} okPress={()=>{setMy_Alert(false)}} /> : null }
          { loading ? <Loader /> : null }
    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({

  container: {
    flex: 1,  
    backgroundColor:Mycolors.BG_COLOR
  },
  viewStyle:{width:'97%',height:55,marginTop:10,
  // borderRadius: 28,
  // marginTop: 10,
  backgroundColor: '#fff',
   borderRadius: 10,
  // shadowColor: '#000000',
  // shadowOffset: {
  //   width: 0,
  //   height: 3
  // },
  // shadowRadius: 5,
  // shadowOpacity: 1.0,
  // // justifyContent: 'center',
  // elevation: 5,
  alignSelf:'center',
  
},
  input: {
    paddingLeft: 15,
    height: 55,
    width:'97%',
    fontSize: 13,
    backgroundColor: Mycolors.BG_COLOR,
    borderRadius:5,
    color:Mycolors.TEXT_COLOR,
    textAlignVertical: 'center',
    // top:6
  },
});
export default EditProfile
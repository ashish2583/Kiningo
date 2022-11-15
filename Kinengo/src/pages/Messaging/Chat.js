import React, { useEffect, useState } from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView, TouchableOpacity, ScrollView,TextInput, Alert, PermissionsAndroid, Platform} from 'react-native';
import { dimensions, Mycolors } from '../../utility/Mycolors';
// import firestore from '@react-native-firebase/firestore'
// import storage from '@react-native-firebase/storage'
// import auth from '@react-native-firebase/auth'
// import { utils } from '@react-native-firebase/app';
// import {launchCamera,launchImageLibrary} from 'react-native-image-picker';
// import { GiftedChat,Bubble,InputToolbar,Send,Time} from 'react-native-gifted-chat'
// import {  useSelector, useDispatch } from 'react-redux';
// import sendNotification from '../../component/SendNotification';
// import {setNotificationData,setMessageCount} from '../../redux/actions/latLongAction';

const Chat = (props) => {
    // const dispatch =  useDispatch();
    // const mapdata  = useSelector(state => state.maplocation)
    // const userdetaile  = useSelector(state => state.user.user_details)
    // const [sms,setsms]=useState('')
    // const [email,setemail]=useState('abc@yopmail.com')
    // const [password,setPassword] = useState('As@12345')
    // const [messages, setMessages] = useState([]);
    // const [driverId,setDriverid]=useState('');
    // const [userId,setUserId]=useState('');
//       useEffect(()=>{
//         removeMessageCount()
//         var uid=parseInt(mapdata.notificationdata.driver_id)
//         console.log('the notification data is==>>',mapdata.notificationdata)
//         var user_id=parseInt(mapdata.notificationdata.user_id)
//         setDriverid(uid)
//         setUserId(user_id)
//         const docid  = uid > user_id ? user_id+ "-" + uid : uid+"-"+user_id 
//                     // driverId > userId ? userId+ "-" + driverId : driverId+"-"+userId 

//         const messageRef = firestore().collection('chatrooms')
//         .doc(docid)
//         .collection('messages')
//         .orderBy('createdAt',"desc")
//         console.log('the messageRef data is==>>',messageRef)
//       const unSubscribe =  messageRef.onSnapshot((querySnap)=>{
//             const allmsg =   querySnap.docs.map(docSanp=>{
//              const data = docSanp.data()
//              if(data.createdAt){
//                  return {
//                     ...docSanp.data(),
//                     createdAt:docSanp.data().createdAt.toDate()
//                 }
//              }else {
//                 return {
//                     ...docSanp.data(),
//                     createdAt:new Date()
//                 }
//              }
                
//             })
//             setMessages(allmsg)
//         })


//         return ()=>{
//           unSubscribe()
//         }
       
//       },[]) 

//  const removeMessageCount=()=>{
//         dispatch(setMessageCount(0))
//       }

//  const senNoti= async()=>{
//       console.log('hiihiiii')
//         let notidata={
//           'data': {},
//           'title':'Message from fling driver',
//           'body': 'new message',
//          // 'token':'cxHj6Y-nQla1KsGRx3LJDJ:APA91bGkoGHr_DHvfMIycmP_b5pKmjRXY4jzfLnGUGLni4QZg5rXaHWZWBrCzyTGEMZ-c31tOIJWvM3os6b1lI-MhTt9z1o-d97lCJmnPf26fZssGQ4pQwVcoAQbN9FT579TSWC77AiV'
//          'token':mapdata.notificationdata.device_id
//         }
    
//         let result= await sendNotification.sendNotification(notidata)
//          // console.log('result')
//       }

// const onSend = (messageArray) => {
//   senNoti()
//   console.log('the array data is ==>',messageArray) 
//   const msg=messageArray[0]
//   const mymsg={
//     ...msg,
//     sendBy:driverId,  //driver id 
//     sendto:userId,  // user id
//     createdAt: new Date()

//   }
//         setMessages(previousMessages => GiftedChat.append(previousMessages, mymsg))
//        const docid  = driverId > userId ? userId+ "-" + driverId : driverId+"-"+userId
//        // const docid='123'  //here use driverid and user id 
//         firestore().collection('chatrooms')
//         .doc(docid)
//         .collection('messages')
//         .add({...mymsg,createdAt:firestore.FieldValue.serverTimestamp()})
//       }

// const getAllMessages = async ()=>{
//        // const docid  = uid > user.uid ? user.uid+ "-" + uid : uid+"-"+user.uid 
//        const docid  = driverId > userId ? userId+ "-" + driverId : driverId+"-"+userId 
//        // const docid='123'   //here use driverid and user id 
//         const querySanp = await firestore().collection('chatrooms')
//         .doc(docid)
//         .collection('messages')
//         .orderBy('createdAt',"desc")
//         .get()
//        const allmsg =   querySanp.docs.map(docSanp=>{
//             return {
//                 ...docSanp.data(),
//                 createdAt:docSanp.data().createdAt.toDate()
//             }
//         })
//         console.log('the message is==>>',allmsg)
//         setMessages(allmsg)

//      }
     
// const loginchaek=()=>{
//   auth().onAuthStateChanged(userExist=>{
//     if(userExist){
//      console.log('user deteils==>>',userExist)
//       // firestore().collection('users')
//       // .doc(userExist.uid)
//       // .update({
//       //   status:"online"
//       // })
//     } else {
//       console.log('user deteils==>>',userExist)
//     }
//   })
//       }


// const adddata=()=>{
//     firestore()
//   .collection('Users')
//   .doc('ABC')
//   .set({
//     name: 'Ada Lovelace',
//     age: 30,
//   })
//   .then(() => {
//     console.log('User added!');
//   });

// }

// const login=()=>{
 
//    auth().signInWithEmailAndPassword(email,password)
//     .then(() => {
//       console.log('User signed in!');
//     })
//       // firestore().collection('Users').doc(result.user.uid).set({
//       //     name:'name',
//       //     email:result.user.email,
//       //     uid:result.user.uid,
//       //     pic:'image',
//       //     status:"offline"
//       // })  
//       .catch(error => {
//     console.log(error)
//         })
// }

// const getUsers = async ()=>{
//   // const querySanp = await firestore().collection('users').where('uid','!=',user.uid).get()
//   const querySanp = await firestore().collection('Users').get()
//   const allusers = querySanp.docs.map(docSnap=>docSnap.data())
 
 
//   console.log('All Users is',allusers)

// }

// const createaccount= async()=>{
//   try{
//     const result =  await auth().createUserWithEmailAndPassword(email,password)
//       firestore().collection('Users').doc(result.user.uid).set({
//           name:'UserName',
//           email:result.user.email,
//           uid:result.user.uid,
//           // pic:image,
//           status:"online"
//       })  
     
//   }catch(err){
//     console.log('err is',err)
//       // alert("something went wrong")
//   }
// }

// const loguot=()=>{
//   auth()
//   .signOut()
//   .then(() => console.log('User signed out!'));
// }
// const deletuser=()=>{
//     auth().currentUser.delete().then(function () {
//       console.log('delete successful?')
//       // console.log(app.auth().currentUser)
//     }).catch(function (error) {
//       console.error({error})
//     })
//   }

//   const pickImageAndUpload = ()=>{
//     launchImageLibrary({quality:0.5},(fileobj)=>{
//       console.log('jojojojojo',fileobj)
//      const uploadTask =  storage().ref().child(`/userprofile/${Date.now()}`).putFile(fileobj.assets[0].uri)
//             uploadTask.on('state_changed', 
//              (snapshot) => {

//                 var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//                 if(progress==100) alert('image uploaded')
                
//             }, 
//             (error) => {
//                 alert("error uploading image")
//             }, 
//             () => {
//                 uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
//                 // setImage(downloadURL)
//                 });
//             }
//             );
//     })
// }


     return(
    <SafeAreaView style={styles.container}>
    
  {/* ******** Header ********** */}
{/*  
<View style={{flexDirection:'row',alignItems:'center',paddingHorizontal:20, backgroundColor:Mycolors.BG_COLOR,
  width:'100%',height:55,
      shadowColor:  Mycolors.GrayColor,
            shadowOffset: {
              width:0,
              height:3
            }, 
            shadowRadius: 5,
            shadowOpacity: 3.0,
            elevation: 5}}>
<TouchableOpacity style={{}} onPress={()=>{props.navigation.goBack()}}>
<Image source={Mycolors.BG_COLOR=='#fff'? require('../../assets/ArrowLeft.png'):require('../../assets/leftArrowW.png')} style={{ width: 24, height: 16,alignSelf:'center'}}></Image>
</TouchableOpacity>
<View style={{width:25,height:25,borderRadius:15,marginHorizontal:10,borderRadius:15}}>
<Image source={{ uri: mapdata.notificationdata.user_image }} style={{ width: 25, height: 25, alignSelf: 'center',borderRadius:15 }}></Image>
</View>
<Text style={{color:Mycolors.TEXT_COLOR,fontWeight:'bold',}}>{mapdata.notificationdata.user_name}</Text>
</View> */}



{/* ******** End Header ********** */}

{/* 
<TouchableOpacity onPress={() => {pickImageAndUpload()}}>
  <Text>uploade img</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => {loguot()}}>
  <Text>log out</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => {createaccount()}}>
  <Text>Create Account</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => {login()}}>
  <Text>login</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => {adddata()}}>
  <Text>Add data</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => {deletuser()}}>
  <Text>delete User</Text>
</TouchableOpacity>
               
<TouchableOpacity onPress={() => {getUsers()}}>
  <Text>GetAll User</Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => {loginchaek()}}>
  <Text>Check login or not</Text>
</TouchableOpacity> */}
{/* 
<View style={{flex:1,width:dimensions.SCREEN_WIDTH}}>
 <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: driverId, //userId  and from driver side driver 
      }}

      renderTime={()=>{
        <Time
                textStyle={{
                    right: {
                        color: 'red',
                        // fontFamily: 'Montserrat-Light',
                        // fontSize: 14
                    },
                    left: {
                        color: 'black',
                      
                    }
                }}
            />
      }}

      renderBubble={(props)=>{
        return <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor:'#FF8C00',
             right:8
          },
          left:{
            backgroundColor:"white",
             left:-33,
          }
        }}
        textStyle={{
          right: {
            color: "white"
          },
          left: {
            color: Mycolors.TEXT_COLOR
          }
        }}
      />
    }}
      renderInputToolbar={(props)=>{
         return (
           <>
           <View style={{width:'100%',height:70,alignSelf:'center',backgroundColor:'#fff',justifyContent:'center',flexDirection:'row'}}>

            <View style={{width:'80%',height:45,borderRadius:28,marginTop:10}}>
               <InputToolbar {...props}
                containerStyle={styles.input} 
                textInputStyle={{ color: "black" }}
                />
          </View>
          </View>
           </>
         )
    }}
    renderSend={(props) =>{
      return (
          <Send
              {...props}
          >
              <View style={{width: 40, height: 40,marginTop:10,borderRadius:20,backgroundColor:Mycolors.ORANGE,justifyContent:'center',left:15}}>
                  <Image source={require('../../assets/send.png')} resizeMode={'center'}style={{ width: 19, height: 19, alignSelf: 'center' }}/>
              </View>
          </Send>
      );
     }}


    />
     <View style={{width:10,height:30}} />
</View> */}
  

    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({

  container: {
    flex: 1,  
    backgroundColor:Mycolors.DrawerBGcolor
  },
  input: {
    paddingHorizontal: 10,
    fontSize: 13,
    borderColor: Mycolors.GrayColor,
    backgroundColor: Mycolors.DrawerBGcolor,
    borderRadius:8,
    color:Mycolors.TEXT_COLOR,
  },
});
export default Chat
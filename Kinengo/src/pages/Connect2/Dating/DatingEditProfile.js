import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground, Keyboard} from 'react-native';
import HomeHeaderRoundBottom from 'src/component/HomeHeaderRoundBottom';
import SearchInput2 from 'src/component/SearchInput2';
import SearchInputEnt from 'src/component/SearchInputEnt';
import SerchInput from 'src/component/SerchInput';
import { dimensions, Mycolors } from 'src/utility/Mycolors';
import { ImageSlider,ImageCarousel } from "react-native-image-slider-banner";
import MyButtons from 'src/component/MyButtons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Modal from 'react-native-modal';
import Toast from 'react-native-simple-toast'
import LinearGradient from 'react-native-linear-gradient'

const image1 = require('../../../assets/people-following-person.png')
const onlinePersonImageWidth = 50
const onlineDotWidth = 12

const DatingEditProfile = (props) => {
  const [searchValue,setsearchValue]=useState('')
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const myTextInput = useRef()
  const [userMessage, setUserMessage] = useState('')
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
  const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
  const [upData,setupData]=useState([
    {
      id: '1',
      name: 'Chetan Manne',
      isOnline: true,
      message:'Reference site about lorem...',
      img: require('../../../assets/dating-message-image.png'),
    },
    {
      id: '1',
      name: 'Chetan Manne',
      isOnline: false,
      message:'Reference site about lorem...',
      img: require('../../../assets/dating-message-image.png'),
    },
    {
      id: '1',
      name: 'Chetan Manne',
      isOnline: true,
      message:'Reference site about lorem...',
      img: require('../../../assets/dating-message-image.png'),
    },
    {
      id: '1',
      name: 'Chetan Manne',
      isOnline: false ,
      message:'Reference site about lorem...',
      img: require('../../../assets/dating-message-image.png'),
    },
  ])


  return(
    <SafeAreaView scrollEnabled={scrollEnabled} style={{backgroundColor:'#F8F8F8'}}>
      <ScrollView>
<View style={{flexDirection:'row', alignItems:'center', height:80, backgroundColor:'#fff',padding:20, borderBottomLeftRadius:25, borderBottomRightRadius:25}}>
  <TouchableOpacity onPress={()=>{props.navigation.goBack()}} style={{flex:1}}>
    <Image source={require('../../../assets/dating-back-arrow.png')} style={{width:15, height:10}}/>
  </TouchableOpacity>
  <View style={{flex:3, flexDirection:'row', justifyContent:'center'}}>
      <Text style={{fontSize:12.5, fontWeight:'600', color:'#31313f'}}>Edit Profile</Text>
  </View>
  <View style={{flex:1}}/>
</View>
<View style={{width:'90%',alignSelf:'center', marginTop:20}}>

<View style={styles.topContainer}>
  <Image source={require('../../../assets/dating-message-image.png')} style={styles.profilePictureStyle}/>
  <View style={{flexDirection:'row'}}>
    <View style={{flexDirection:'row', alignItems:"center"}}>
      <Image source={require('../../../assets/dating-email-icon.png')}/>
      <View>
        <Text style={styles.contactText}>Email</Text>
        <Text style={styles.contactValue}>john.doe@gmail.com</Text>
      </View>
    </View>
    <View style={{flexDirection:'row', alignItems:"center"}}>
      <Image source={require('../../../assets/dating-phone-icon.png')}/>
      <View>
        <Text style={styles.contactText}>Phone</Text>
        <Text style={styles.contactValue}>+1 1234567890</Text>
      </View>
    </View>
  </View>
</View>  
<View style={{width:'100%',alignSelf:'center',marginTop:20, backgroundColor:'#F8F8F8'}}>
</View>






 </View>
<View style={{height:100}} />

</ScrollView>

    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({
  flatlistMainView:{
    flexDirection:'row', 
    // backgroundColor:'#fff', 
    paddingVertical:15, 
    paddingHorizontal:10, 
    borderRadius:10
  },
  numberView:{
    flexDirection:'row', 
    alignItems:'center', 
    flexWrap: 'wrap'
  },
  numberStyle:{
    fontSize:14, 
    fontWeight:'300', 
    color:'#4a4c52'
  },
  searchView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    height:50,
  },
  searchLeftSubView:{
    width:'83%',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#fff',
    paddingVertical:5, 
    paddingLeft:10, 
    borderRadius:10,
    shadowColor: '#000000',
    shadowOffset: {
      width:0,
      height:3
    }, 
    shadowRadius: 5,
    shadowOpacity: 0.05,
    elevation: 5,
  },
  input: {
    paddingLeft: 10,
    fontSize: 14,
    fontWeight:'300',
    color:'#000',
    flex: 7
  },
  onlinePerson:{
    width:onlinePersonImageWidth, 
    height:onlinePersonImageWidth,
    borderRadius: onlinePersonImageWidth/2,
    borderWidth:2,
    borderColor:'#e1194d',
  },
  onlineDot: {
    backgroundColor:'#29913C', 
    width:onlineDotWidth, 
    height:onlineDotWidth, 
    position:'absolute', 
    borderRadius:onlineDotWidth/2, 
    left:onlinePersonImageWidth-8, 
    top:onlinePersonImageWidth/10, 
    borderWidth:2, 
    borderColor:'#fff'
  },
  topContainer:{
    backgroundColor:'#fff', 
    padding:10, 
    borderRadius:10, 
    marginTop:80
  },
  profilePictureStyle:{
    alignSelf:'center', 
    height:120, 
    width:120, 
    borderRadius:60, 
    top:-(60+10), 
    borderWidth:7, 
    borderColor:'#fff'
  },
  contactText:{
    fontSize:10, 
    lineHeight:15, 
    color:'#c8c8c8'
  },
  contactValue:{
    fontSize:10, 
    lineHeight:15, 
    color:'#4a4c52', 
    fontWeight:'bold'
  },
});
export default DatingEditProfile 
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
  const [selectedPassions, setSelectedPassions] = useState(['90s Kid', 'Festival', 'Travelling'])
  const [showMeValue, setShowMeValue] = useState(0)
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

  const changeShowMeValue = (index) => {
    if(showMeValue === index){
      return
    }

    setShowMeValue(index)
  }


  return(
    <SafeAreaView scrollEnabled={scrollEnabled} style={{backgroundColor:'#F8F8F8'}}>
      <ScrollView>
<View style={{flexDirection:'row', alignItems:'center', height:80, backgroundColor:'#fff',padding:20, borderBottomLeftRadius:25, borderBottomRightRadius:25}}>
  <TouchableOpacity onPress={()=>{props.navigation.goBack()}} style={{flex:1}}>
    <Image source={require('../../../assets/dating-back-arrow.png')} style={{width:25, height:15}} resizeMode='contain'/>
  </TouchableOpacity>
  <View style={{flex:3, flexDirection:'row', justifyContent:'center'}}>
      <Text style={{fontSize:12.5, fontWeight:'600', color:'#31313f'}}>Edit Profile</Text>
  </View>
  <View style={{flex:1}}/>
</View>
<View style={{width:'90%',alignSelf:'center', marginTop:20}}>

<Text style={{fontSize:11.3, fontWeight:'bold', color:'#3e5869', marginBottom:10}}>About me</Text>
<TextInput
       value={''}
       onChangeText={(e) => {}}
       placeholder={'Type here.....'}
       placeholderTextColor="#bbbbbb"
       multiline={true}
     // maxLength={500}
     // keyboardType="number-pad"
       autoCapitalize = 'none'
       style={[styles.input]}
     />
<Text style={{fontSize:11.3, fontWeight:'bold', color:'#3e5869', marginBottom:10}}>Passions</Text>
<View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#fff1f6', padding:20, borderRadius:10}}>
   <Text style={{fontSize:10, color:'#ff5e96', fontStyle: 'italic'}}>{selectedPassions?.join(', ')}</Text>
   <Image source={require('../../../assets/dating-change-password-right-arrow.png')} style={{height:20, width:20,}} resizeMode='contain'/> 
</View>

<Text style={{fontSize:11.3, fontWeight:'bold', color:'#3e5869', marginBottom:10}}>Show me</Text>
<View style={{flexDirection:'row', alignItems:'center'}}>
  <TouchableOpacity onPress={()=>{changeShowMeValue(0)}} style={[styles.showMeView , {backgroundColor: showMeValue === 0 ? '#fff1f6': '#fff', borderColor: showMeValue === 0 ? '#ff3b7f' : '#e3d0d7'}]}>
    <Text style={styles.showMeText}>Men</Text>
    <View style={[styles.showMeImageView, {backgroundColor: showMeValue === 0 ? '#ff3b7f' : '#e3d0d7'}]}>
      <Image source={require('../../../assets/dating-selected-arrow.png')} style={styles.showMeImage} resizeMode='contain'/> 
    </View>
  </TouchableOpacity>
  
  <TouchableOpacity onPress={()=>{changeShowMeValue(1)}} style={[styles.showMeView , {marginLeft:10, backgroundColor: showMeValue === 1 ? '#fff1f6': '#fff', borderColor: showMeValue === 1 ? '#ff3b7f' : '#e3d0d7'}]}>
    <Text style={styles.showMeText}>Women</Text>
    <View style={[styles.showMeImageView, {backgroundColor: showMeValue === 1 ? '#ff3b7f' : '#e3d0d7'}]}>
      <Image source={require('../../../assets/dating-selected-arrow.png')} style={styles.showMeImage} resizeMode='contain'/> 
    </View>
  </TouchableOpacity>
  
  <TouchableOpacity onPress={()=>{changeShowMeValue(2)}} style={[styles.showMeView , {marginLeft:10, backgroundColor: showMeValue === 2 ? '#fff1f6': '#fff', borderColor: showMeValue === 2 ? '#ff3b7f' : '#e3d0d7'}]}>
    <Text style={styles.showMeText}>Everyone</Text>
    <View style={[styles.showMeImageView, {backgroundColor: showMeValue === 2 ? '#ff3b7f' : '#e3d0d7'}]}>
      <Image source={require('../../../assets/dating-selected-arrow.png')} style={styles.showMeImage} resizeMode='contain'/> 
    </View>
  </TouchableOpacity>

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
  input: {
    paddingLeft: 15,
    width:'100%',
    fontSize: 13,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth:0.5,
   // backgroundColor: '#34333a',
    color:'#fff',
    height:100,
    borderRadius:5,
    paddingHorizontal:15,
    paddingVertical:10,
    color:Mycolors.Black
  },
  showMeView:{
    flexDirection:'row', 
    alignItems:'center',
    justifyContent:'space-between',
    width:'27%', 
    padding:10, 
    // paddingHorizontal:15, 
    borderRadius:20,
    borderWidth:0.5
  },
  showMeText:{
    fontSize:10, 
    color:'#4a4c52'
  },
  showMeImageView:{
    justifyContent:'center', 
    alignItems:'center',
    height:20, 
    width:20, 
    borderRadius:20/2,
    marginLeft:10,
  },
  showMeImage:{
    height:15, 
    width:15
  }
});
export default DatingEditProfile 
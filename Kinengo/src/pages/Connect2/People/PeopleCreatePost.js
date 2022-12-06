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

const PeopleCreatePost = (props) => {
  const [searchValue,setsearchValue]=useState('')
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const myTextInput = useRef()
  const [userMessage, setUserMessage] = useState('')
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
  const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
  

  return(
    <SafeAreaView scrollEnabled={scrollEnabled} style={{backgroundColor:'#F8F8F8'}}>
      <ScrollView>
      <HomeHeaderRoundBottom height={80}  paddingHorizontal={15} backgroundColor='#fff'
   press1={()=>{props.navigation.goBack()}} img1={require('../../../assets/events_arrow.png')} img1width={25} img1height={20} 
   press2={()=>{}} title2={'Create People'} fontWeight={'500'} img2height={20} color='#455A64'
   press3={()=>{}} img3width={25} img3height={25} borderBottomLeftRadius={25} borderBottomRightRadius={25} />
<View style={{width:'90%',alignSelf:'center', marginTop:20}}>
  


<View style={{width:'100%',alignSelf:'center',marginTop:20, backgroundColor:'#F8F8F8'}}>

  <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', backgroundColor:'#fff', padding:10, borderRadius:10}}>
    
    <View style={{flexDirection:'row', alignItems:'center',}}>
      <Image source={image1}/>
      <Text style={{fontSize:14, fontWeight:'600', color:'#455A64', marginLeft:10}}>Aayav Nadkarni</Text>
    </View>
    
    <View style={styles.eyeView}>
      <Image source={require('../../../assets/people-eye-image.png')}/>
      <Text style={{fontSize:14, fontWeight:'400', color:'#fff', marginLeft:10}}>View Profile</Text>
    </View>
  </View>

  <View style={{marginTop:10}}>
    <TextInput
        //  value={reson}
        //  onChangeText={(e) => setreson(e)}
        placeholder={`What's on your mind`}
        placeholderTextColor="#bbbbbb"
        multiline={true}
      // maxLength={500}
      // keyboardType="number-pad"
        autoCapitalize = 'none'
        style={[styles.input]}
      />  
  </View>  



</View>






 </View>
<View style={{height:100}} />

</ScrollView>

    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({
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
  eyeView:{
    flexDirection:'row', 
    alignItems:'center',
    backgroundColor:'#0089CF', 
    borderRadius:20,
    paddingVertical:10,
    paddingHorizontal:12,
    shadowColor: '#0089CF',
    shadowOffset: {
      width:0,
      height:3
    }, 
    shadowRadius: 5,
    shadowOpacity: 0.10,
    elevation: 5,
  },
  input: {
    paddingLeft: 15,
    width:'100%',
    fontSize: 14,
    backgroundColor: '#fff',
    height:100,
    borderRadius:5,
    paddingHorizontal:15,
    paddingVertical:10,
    color:Mycolors.Black,
    borderRadius:10
  },
});
export default PeopleCreatePost 
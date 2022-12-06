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
<View style={{flexDirection:'row', alignItems:'center', height:80, backgroundColor:'#fff',padding:20, borderBottomLeftRadius:25, borderBottomRightRadius:25}}>
  <TouchableOpacity onPress={()=>{props.navigation.goBack()}}>
    <Image source={require('../../../assets/events_arrow.png')} style={{width:25, height:20}}/>
  </TouchableOpacity>
  <Image source={image1} style={{marginLeft:10, height:28, width:28}}/>
  <Text style={{fontSize:14, fontWeight:'600', color:'#455A64', marginLeft:10}}>Aryav Nadkarni</Text>
</View>
<View style={{width:'90%',alignSelf:'center', marginTop:20}}>
  


<View style={{width:'100%',alignSelf:'center',marginTop:20, backgroundColor:'#F8F8F8'}}>
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
  input: {
    paddingLeft: 10,
    fontSize: 14,
    fontWeight:'300',
    color:'#000',
    flex: 7
  },
});
export default PeopleCreatePost 
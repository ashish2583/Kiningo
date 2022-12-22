import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import HomeHeaderRoundBottom from 'src/component/HomeHeaderRoundBottom';
import HomeHeader from 'src/component/HomeHeader';
import SearchInput2 from 'src/component/SearchInput2';
import SearchInputEnt from 'src/component/SearchInputEnt';
import SerchInput from 'src/component/SerchInput';
import { dimensions, Mycolors } from 'src/utility/Mycolors';
import { ImageSlider,ImageCarousel } from "react-native-image-slider-banner";
import MyButtons from 'src/component/MyButtons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Modal from 'react-native-modal';
import Toast from 'react-native-simple-toast'
import ViewMoreText from 'react-native-view-more-text';

const DatingYourMatches = (props) => {
  const [searchValue,setsearchValue]=useState('')
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const myTextInput = useRef()
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
  const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
  const [passionValues, setPassionsValues] = useState([
    {id:'1',name:'Travelling', mutual: true}, 
    {id:'2',name:'Books', mutual: true}, 
    {id:'3',name:'Music', mutual: false}, 
    {id:'4',name:'Dancing', mutual: false}, 
    {id:'5',name:'Modelling', mutual: false},
  ])
  const [upData,setupData]=useState([
    {
      id: '1',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      img:require('../../../assets/images/images.png'),
      isSaved: false,
      isLiked: false
    },
    {
      id: '2',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      img:require('../../../assets/images/images.png'),
      isSaved: false,
      isLiked: false
    },
    {
      id: '3',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      img:require('../../../assets/images/images.png'),
      isSaved: false,
      isLiked: false
    },
    {
      id: '4',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      img:require('../../../assets/images/images.png'),
      isSaved: false,
      isLiked: false
    },

  ])
  const multiSliderValuesChange = (values) => {setMultiSliderValue(values)}
  useEffect(()=>{

 },[])

 const changeSaved = (id) => {
  const updataCopy = [...upData]
  const updatedData = updataCopy?.map(el=>el.id === id ? {...el, isSaved: !el.isSaved }: el)
  setupData([...updatedData])
 }
 const changeLiked = (id) => {
  const updataCopy = [...upData]
  const updatedData = updataCopy?.map(el=>el.id === id ? {...el, isLiked: !el.isLiked }: el)
  setupData([...updatedData])
 }

  return(
    <SafeAreaView scrollEnabled={scrollEnabled} style={{backgroundColor:'#fff5f7', height:'100%'}}>
      <ScrollView>
      <View style={{flexDirection:'row', alignItems:'center', height:80,padding:20, borderBottomLeftRadius:25, borderBottomRightRadius:25}}>
  <TouchableOpacity onPress={()=>{props.navigation.goBack()}} style={{flex:1}}>
    <Image source={require('../../../assets/dating-back-arrow.png')} style={{width:25, height:15}} resizeMode='contain'/>
  </TouchableOpacity>
  <View style={{flex:3, flexDirection:'row', justifyContent:'center'}}>
      <Text style={{fontSize:12.5, fontWeight:'600', color:'#31313f'}}>Your Matches</Text>
  </View>
  <View style={{flex:1}}/>
</View>
<View style={{width:'90%',alignSelf:'center', marginTop:20}}>

<FlatList
    data={passionValues}
    showsHorizontalScrollIndicator={false}
    numColumns={2}
    keyExtractor={item => item.id}
    renderItem={({item,index})=>{
      return(
        <View key={item.name} style={[styles.flatListView, index % 2 === 0 ? styles.leftView : styles.rightView]}>
          <Image source={require('../../../assets/dating-your-matches-person-image.png')}/>
        </View>
      )
    }}
  />

 </View>
<View style={{height:100}} />

</ScrollView>
    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({
  flatListView:{
    width:'48%', 
    height:200
  },
  leftView:{
    marginRight:10
  },
  rightView:{
    marginLeft:10
  },
});
export default DatingYourMatches 
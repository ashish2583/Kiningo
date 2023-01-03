import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import HomeHeaderRoundBottom from 'src/component/HomeHeaderRoundBottom';
import SearchInput2 from 'src/component/SearchInput2';
import SearchInputEnt from 'src/component/SearchInputEnt';
import LearningSearch from './Components/LearningSearch';
import SerchInput from 'src/component/SerchInput';
import { dimensions, Mycolors } from 'src/utility/Mycolors';
import { ImageSlider,ImageCarousel } from "react-native-image-slider-banner";
import MyButtons from 'src/component/MyButtons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Modal from 'react-native-modal';
import Toast from 'react-native-simple-toast'
import LinearGradient from 'react-native-linear-gradient'
import AppIntroSlider from 'react-native-app-intro-slider';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import Loader from '../../../WebApi/Loader';
import VideoPlayer from 'react-native-video-player'
import { createThumbnail } from "react-native-create-thumbnail";

const LearningTeachersList = (props) => {
  const [searchValue,setsearchValue]=useState('')
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const myTextInput = useRef()
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
  const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
  const [selectedCategory, setSelectedCategory]=useState('1')
  const [loading, setLoading] = useState(false)
  const [videoDetails, setVideoDetails] = useState([
    {url: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`},
    {url: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`},
    {url: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`},
  ])
const [teachersList, setTeachersList]=useState([
  {
      id: '1',
      title: 'John Smith',
      nameOfClass:'Graphics Design Class',
      desc:['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
      distance:'3 kms away',
      img:require('../../../assets/service-product-image.png'),
  },
  {
      id: '2',
      title: 'John Smith',
      nameOfClass:'Graphics Design Class',
      desc:['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
      distance:'3 kms away',
      img:require('../../../assets/service-product-image.png'),
  },
  {
      id: '3',
      title: 'John Smith',
      nameOfClass:'Graphics Design Class',
      desc:['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
      distance:'3 kms away',
      img:require('../../../assets/service-product-image.png'),
  },
])
  const [courseData, setCourseData]=useState([
    {
      id: '1',
      title: 'Learning Advisor',
      desc:'',
      time:'',
      img:require('../../../assets/learning-learning-advisor-image.png'),
    },
    {
      id: '2',
      title: 'Training Facilitator',
      desc:'',
      time:'',
      img:require('../../../assets/learning-training-facilitator-image.png'),
    },
    {
      id: '3',
      title: 'Web Development',
      desc:'',
      time:'',
      img:require('../../../assets/learning-web-development-image.png'),
    },
    {
      id: '4',
      title: 'Learning Advisor',
      desc:'',
      time:'',
      img:require('../../../assets/learning-learning-advisor-image.png'),
    },
    {
      id: '5',
      title: 'Training Facilitator',
      desc:'',
      time:'',
      img:require('../../../assets/learning-training-facilitator-image.png'),
    },
  ])
  const [upData,setupData]=useState([
    {
      id: '1',
      catId: '1',
      title: 'Intel 3rd Gen Motherboard',
      desc:'',
      price:'$140.00',
      time:'',
      img:require('../../../assets/intel_motherboard.png'),
    },
    {
      id: '2',
      catId: '2',
      title: 'Intel 3rd Gen Motherboard',
      desc:'',
      price:'$140.00',
      time:'',
      img:require('../../../assets/intel_motherboard.png'),
    },
    {
      id: '3',
      catId: '3',
      title: 'Intel 3rd Gen Motherboard',
      desc:'',
      price:'$140.00',
      time:'',
      img:require('../../../assets/intel_motherboard.png'),
    },
    {
      id: '4',
      catId: '4',
      title: 'Intel 3rd Gen Motherboard',
      desc:'',
      price:'$140.00',
      time:'',
      img:require('../../../assets/intel_motherboard.png'),
    },
    {
      id: '5',
      catId: '1',
      title: 'Intel 3rd Gen Motherboard',
      desc:'',
      price:'$140.00',
      time:'',
      img:require('../../../assets/intel_motherboard.png'),
    },
    {
      id: '6',
      catId: '2',
      title: 'Intel 3rd Gen Motherboard',
      desc:'',
      price:'$140.00',
      time:'',
      img:require('../../../assets/intel_motherboard.png'),
    },
    {
      id: '7',
      catId: '3',
      title: 'Intel 3rd Gen Motherboard',
      desc:'',
      price:'$140.00',
      time:'',
      img:require('../../../assets/intel_motherboard.png'),
    },
  ])
  const multiSliderValuesChange = (values) => {setMultiSliderValue(values)}
  useEffect(()=>{

 },[])
 useEffect(()=>{
  generateThumb()
},[])
const generateThumb = async () => {
  setLoading(true)
  const thumbs = []
  try {
    for(let i = 0; i < videoDetails?.length; i++){
      const resp = await createThumbnail({
        url: videoDetails[0].url,
        timeStamp: 10000,
        // cacheName: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`
      })
      thumbs.push(resp.path)
    }
    // const resp = await createThumbnail({
    //   url: videoDetails?.url,
    //   timeStamp: 10000,
    //   // cacheName: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`
    // })
    const videoDetailsCopy = [...videoDetails]
    const updatedVideoDetails = videoDetailsCopy.map((el, index)=>{
      return {...el, thumbnail: thumbs[index]}
    })
    setVideoDetails([...updatedVideoDetails])
    // setVideoDetails({...videoDetails, thumbnail: resp.path})
  } catch (error) {
    console.log('thumbnail creating error', error);      
  }
  setLoading(false)
}

 const _renderItem = ({ item }) => {
  return (
      <Image source={{uri: item.image}} style={{width:'100%',height:170, borderRadius:20, alignSelf:'center'}}/>
    // <View key={item.key} style={styles.slide}>
    //   <Text style={styles.title}>{item.title}</Text>
    //   <Text style={styles.text}>{item.text}</Text>
    // </View>
  );
}

  return(
    <SafeAreaView scrollEnabled={scrollEnabled} style={{height:'100%', backgroundColor: '#F8F8F8'}}>
      <ScrollView>
    <HomeHeaderRoundBottom height={100} extraStyle={{paddingtop:10, paddingBottom:25}}  paddingHorizontal={15} borderBottomLeftRadius={20} borderBottomRightRadius={20} backgroundColor='#29913C'
   press1={()=>{props.navigation.goBack()}} img1={require('../../../assets/service-header-back-button.png')} img1width={25} img1height={18} 
   press2={()=>{}} title2={'Teachers List'} fontWeight={'500'} img2height={20} color={'#fff'}
   press3={()=>{}} img3={require('../../../assets/service-cart-icon.png')} img3width={25} img3height={20} />

<View style={{width:'85%',alignSelf:'center'}}>
<View style={{top:-20}}>
    <LearningSearch marginTop={0} placeholder={'Search for teachers'} 
    serchValue={searchValue}
    searchIcon={require('../../../assets/learning-search-icon.png')} 
    onChangeText={(e)=>{setsearchValue(e)}} 
    press={()=>{Alert.alert('Hi')}}
    presssearch={()=>{Alert.alert('Search Pressed')}}
    paddingLeft={20}/>
</View>
 
  <View style={{height:10}}/> 



<View style={{width:'100%',alignSelf:'center',marginTop:-10, marginBottom:10}}>
          <FlatList
                  data={teachersList}
                  style={{marginTop:10}}
                  renderItem={({item,index})=>{
                    return(
                      <LinearGradient
          colors={['rgba(255, 255, 255, 1)', 'rgba(249, 249, 249, 1)']}
          style={{width:'100%',height:140,marginBottom:15,marginRight: 10, borderRadius:15, padding:10, shadowColor:'#000',shadowOffset: {width: 0,height: 3},shadowRadius: 1,shadowOpacity: 0.03,elevation: 1,}}
         >
        <View style={{flexDirection:'row'}}>
        <View style={{flex:1}}>
            <Image source={item.img} style={{width:60,height:60,borderRadius:60/2,alignSelf:'center'}}></Image>
        </View>
        
        <View style={{flex:4, marginLeft:20, marginTop:10}}>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('LearningTeacherDetails')}}>
              <Text style={styles.unselectedTabText}>{item.title}</Text>
            </TouchableOpacity>
            <View style={{flexDirection:'row', alignItems:'center', marginTop:5, marginBottom:3}}>
                <Text style={{fontSize:14,fontWeight:'400',color: '#263238'}}>{item.nameOfClass}</Text>
            </View>
            <TouchableOpacity onPress={()=>{}} style={styles.sendInquiryView}>
                <Text style={{fontSize:14,fontWeight:'400',color:'#FFF'}}>Send Inquiry</Text>
            </TouchableOpacity>
        </View>

    </View>
          </LinearGradient>
                    )
                  }}
                  keyExtractor={item => item.id}
                />
         </View>

 </View>
<View style={{height:100}} />

</ScrollView>
{loading ? <Loader /> : null}
    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({
  unselectedTabText:{
    fontSize:16,
    fontWeight:'500',
    color: '#263238'
  },
  sendInquiryView:{
    marginTop:10,
    width:140,
    height:45,
    borderRadius:25,
    backgroundColor:'#29913C',
    alignItems:'center',
    justifyContent:'center',
    shadowColor:'#6D2F91',
    shadowOffset: {width:3,height:3}, 
    shadowRadius: 5,
    shadowOpacity: 0.17,
    elevation: 2
  },
});
export default LearningTeachersList 
import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import HomeHeaderRoundBottom from 'src/component/HomeHeaderRoundBottom';
import SearchInput2 from 'src/component/SearchInput2';
import SearchInputEnt from 'src/component/SearchInputEnt';
import FashionSearch from './components/FashionSearch';
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
import ViewMoreText from 'react-native-view-more-text';

const FashionPost = (props) => {
  const [searchValue,setsearchValue]=useState('')
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const myTextInput = useRef()
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
  const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
  const [selectedCategory, setSelectedCategory]=useState('1')
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState({isVisible: false, data: null});
  const [showVideoModal, setShowVideoModal] = useState(false)
  const [selectedVideo, setSelectedVideo] = useState({})
  const [videoDetails, setVideoDetails] = useState([
    {url: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`},
    {url: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`},
    {url: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`},
  ])
const [classesList, setClassesList]=useState([
  {
      id: '1',
      title: 'Graphic Design Class',
      price:949,
      desc:['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
      distance:'3 kms away',
      img:require('../../../assets/service-product-image.png'),
  },
  {
      id: '2',
      title: 'Graphic Design Class',
      price:949,
      desc:['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
      distance:'3 kms away',
      img:require('../../../assets/service-product-image.png'),
  },
  {
      id: '3',
      title: 'Graphic Design Class',
      price:949,
      desc:['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
      distance:'3 kms away',
      img:require('../../../assets/service-product-image.png'),
  },
])
  const [aroundTheWorldData, setAroundTheWorldData]=useState([
    {
      id: '1',
      name: 'Leslie Alexander',
      desc:'',
      time:'14 hours ago',
      img:require('../../../assets/fashion-around-the-world-image.png'),
      likes: '4k',
      dislikes: '1k',
    },
    {
      id: '2',
      name: 'Leslie Alexander',
      desc:'',
      time:'14 hours ago',
      img:require('../../../assets/fashion-around-the-world-image.png'),
      likes: '4k',
      dislikes: '1k',
    },
    {
      id: '3',
      name: 'Leslie Alexander',
      desc:'',
      time:'14 hours ago',
      img:require('../../../assets/fashion-around-the-world-image.png'),
      likes: '4k',
      dislikes: '1k',
    },
  ])
  const [courseData, setCourseData]=useState([
    {
      id: '1',
      title: 'Celebrity Style',
      desc:'',
      time:'',
      img:require('../../../assets/fashion-celebrity-style.png'),
    },
    {
      id: '2',
      title: 'Street Style',
      desc:'',
      time:'',
      img:require('../../../assets/fashion-celebrity-style.png'),
    },
    {
      id: '3',
      title: 'Models',
      desc:'',
      time:'',
      img:require('../../../assets/fashion-celebrity-style.png'),
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
                      
          <Image source={require('../../../assets/fashion-post-image.png')} style={{width:dimensions.SCREEN_WIDTH,height:350}}></Image>

          <View style={{width:'85%', marginHorizontal:20,paddingVertical:20}}>
          <Text style={{fontSize:20, lineHeight:20, fontWeight:'400', color:'#000'}}>
          A New Documentary Explores the Meteoric Rise of Trailblazing Model Quannah Chasinghorse
          </Text>
          <View style={{flexDirection:'row', alignItems:'center', marginTop:10}}>
            <Text style={{fontSize:12,fontWeight:'400',color:'#455A64'}}>By: Leslie Alexander</Text>
            <View style={{flexDirection:'row', alignItems:'center', marginLeft:20}}>
                <Image source={require('../../../assets/fashion-calendar-icon.png')} />
                <Text style={{fontSize:12,fontWeight:'400',color:'#455A64', marginLeft:5}}>June 16, 2022, at 6:18 p.m.</Text>
            </View>
          </View>


          <View style={styles.buttonsRow}>
            <View style={styles.buttonView}>
              <Image source={require('../../../assets/fashion-dark-like-button.png')} style={{height:20, width:20}} />
              <Text style={styles.buttonText}>4k</Text>
            </View>
            <View style={styles.buttonView}>
              <Image source={require('../../../assets/fashion-dark-dislike-button.png')} style={{height:20, width:20}} />
              <Text style={styles.buttonText}>1k</Text>
            </View>
            <View style={styles.buttonView}>
              <Image source={require('../../../assets/fashion-dark-share-button.png')} style={{height:20, width:20}} />
              <Text style={styles.buttonText}>Share</Text>
            </View>
            <View style={styles.buttonView}>
              <Image source={require('../../../assets/fashion-dark-report-button.png')} style={{height:20, width:20}} />
              <Text style={styles.buttonText}>Report</Text>
            </View>
          </View>

          <Text style={styles.descriptionText}>
          If you want to know who I am, you have to acknowledge where I come from.” These are the opening words of Walking Two Worlds, a new documentary that premiered at the Tribeca Film Festival last week exploring the meteoric rise of Indigenous model Quannah Chasinghorse. The film, directed by Maia Wikler, follows Chasinghorse and her mother, Jody Potts-Joseph, as they grapple with the two realities they currently exist in. One world they inhabit is the more familiar one—living on their Alaska homelands and engaging in their traditional hunting, fishing, and dogsledding practices. The other world is newer and perhaps more foreign, arriving thanks to Chasinghorse’s newfound status as one of the high-fashion world’s most in-demand new faces, taking over the runways for labels such as Gucci and Chanel and even attending the Met Gala twice. 
          </Text>

          </View>




  <View style={{height:10}}/> 

  <View style={{width:'85%',alignSelf:'center'}}>
 </View>
<View style={{height:100}} />
</ScrollView>
{loading ? <Loader /> : null}
<Modal
        isVisible={showVideoModal}
        swipeDirection="down"
        onBackdropPress={()=>setShowVideoModal(false)}
        onSwipeComplete={(e) => {
          setShowVideoModal(false)
        }}
          scrollTo={() => {}}
          scrollOffset={1}
          propagateSwipe={true}
        coverScreen={false}
        backdropColor='transparent'
        style={{ justifyContent: 'flex-end', margin: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <View style={{ height: '50%', backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20 }}>
          <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
          
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'flex-end', marginBottom:30, marginTop:10}}>
            <TouchableOpacity onPress={()=>setShowVideoModal(false)} style={{}}>
              <Text style={{color:'#FF3B7F',fontWeight:'500', textAlign:'center'}}>Close</Text>
            </TouchableOpacity>
          </View>
          <VideoPlayer
            video={{ uri: selectedVideo?.url }}
            // videoWidth={1600}
            videoWidth={dimensions.SCREEN_WIDTH*0.9}
            videoHeight={250}
            // videoHeight={900}
            thumbnail={{ uri: selectedVideo?.thumbnail }}
            style={{marginRight:10, borderTopLeftRadius:15, borderTopRightRadius:15}}
            customStyles={{
              thumbnail: {width: dimensions.SCREEN_WIDTH*0.9, height:250},
              videoWrapper: {width: dimensions.SCREEN_WIDTH*0.9, height:250},
              // wrapper: {alignSelf:'center'},
            }}
          />
            </ScrollView>
           
            </View>
</Modal>
    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({
  unselectedTabText:{
    fontSize:14,
    fontWeight:'500',
    color: '#263238'
  },
  requestCallView:{
    marginTop:10,
    width:140,
    height:30,
    borderRadius:15,
    backgroundColor:'#29913C',
    alignItems:'center',
    justifyContent:'center',
    shadowColor:'#6D2F91',
    shadowOffset: {width:3,height:3}, 
    shadowRadius: 5,
    shadowOpacity: 0.17,
    elevation: 2
  },
  VideoThumbWrapper: {
    position: 'relative',
    // width: '48%',
    // marginRight: 8,
    marginBottom: 4,

    width:dimensions.SCREEN_WIDTH/1.5,
    height:160,
    marginRight: 20,
    borderRadius:15, 
    // shadowColor:'#000',
    // shadowOffset: {width: 0,height: 3},
    // shadowRadius: 1,
    // shadowOpacity: 0.03,
    // elevation: 1,
  },
  PlayIconContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  PlayIconWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  BackGroundImage: {
    width: '100%',
    height: 160,
    justifyContent: 'center',
    borderRadius:15
  },
  buttonsRow:{
    width:'80%',
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignItems:'center', 
    marginTop:10
  },
  buttonView:{
    flexDirection:'row', 
    alignItems:'center'
  },
  buttonText:{
    fontSize:14, 
    fontWeight:'500', 
    color:'#455A64', 
    marginLeft:5
  },
  descriptionText:{
    fontSize:14, 
    lineHeight:17.64, 
    fontWeight:'400', 
    color:'#455A64', 
    marginTop:20
  },
});
export default FashionPost 
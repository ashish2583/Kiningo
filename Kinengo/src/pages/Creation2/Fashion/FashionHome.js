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

const FashionHome = (props) => {
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
  const [introSliderData] = useState([
    // require('../../assets/Group75972.png'),
    {key:'one' ,image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'},
    {key:'two' ,image: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'},
    {key:'three' ,image: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
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
 useEffect(()=>{
  generateThumb()
},[])
const toggleModal = state => {
  setShowModal({
    isVisible: state.isVisible,
    data: state.data,
  });
};
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
      <HomeHeaderRoundBottom height={100} extraStyle={{paddingtop:10, paddingBottom:25}}  paddingHorizontal={15} borderBottomLeftRadius={20} borderBottomRightRadius={20} backgroundColor='#0089CF'
   press1={()=>{props.navigation.goBack()}} img1={require('../../../assets/service-header-back-button.png')} img1width={25} img1height={18} 
   press2={()=>{}} title2={'Fashion'} fontWeight={'500'} img2height={20} color={'#fff'}
   press3={()=>{}} img3={require('../../../assets/service-cart-icon.png')} img3width={25} img3height={20} />

<View style={{width:'85%',alignSelf:'center'}}>
<View style={{top:-20}}>
    <FashionSearch marginTop={0} placeholder={'Search here'} 
    serchValue={searchValue}
    searchIcon={require('../../../assets/learning-search-icon.png')} 
    onChangeText={(e)=>{setsearchValue(e)}} 
    press={()=>{Alert.alert('Hi')}}
    presssearch={()=>{Alert.alert('Search Pressed')}}
    paddingLeft={20}/>
</View>
 
<View style={{width:dimensions.SCREEN_WIDTH*0.9,alignSelf:'flex-start',marginTop:0, marginBottom:10}}>
          <FlatList
                  data={courseData}
                  showsHorizontalScrollIndicator={true}
                  horizontal
                  renderItem={({item,index})=>{
                    return(
                      <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.43)']}
          style={{width:dimensions.SCREEN_WIDTH/2.8,marginRight: 15, borderRadius:15, }}
         >
          <TouchableOpacity style={{width:dimensions.SCREEN_WIDTH/2.8,height:160,position: 'relative', alignItems:'center', borderRadius:15, paddingHorizontal:10}}
          onPress={()=>{}}>
          <Image source={item.img} style={{width:dimensions.SCREEN_WIDTH/2.8,height:160}} resizeMode='contain'></Image>
          <View style={{position: 'absolute',top: 0,bottom: 20,left: 0,right: 0,zIndex: 1,}}>
            <View style={{flex: 1,flexDirection: 'column',justifyContent: 'flex-end',alignItems: 'center',}}>
              <Text style={{fontSize:14,fontWeight:'500',color:'#fff',}}>{item.title}</Text>
            </View>
          </View>
          </TouchableOpacity>
          </LinearGradient>
                    )
                  }}
                  keyExtractor={item => item.id}
                />
         </View>

  {/* <View style={{height:140,borderRadius:10,overflow:'hidden',marginVertical:10,width:'98%',alignSelf:'center'}}>
     <ImageSlider 
    //  localImg={true}
    data={[
        // require('../../assets/Group75972.png'),
        {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'},
        {img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
    ]}
    onClick={(item, index) => {Alert.alert('hello'+index)}}
    autoPlay={true}
   // onItemChanged={(item) => console.log("item", item)}
    closeIconColor="transparent"
/>
   </View> */}

  <View style={{height:10}}/> 

  <AppIntroSlider
      data={introSliderData}
      renderItem={_renderItem}
      // renderPagination={() => null}
      renderDoneButton={()=><View />}
      renderNextButton={()=><View />}
      activeDotStyle={{top:60,backgroundColor:'#29913C'}}
      dotStyle={{top:60,backgroundColor:'#D9D9D9'}}
      keyExtractor={(item) => item.id}
    />

<View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:50}}>
   <Text style={{fontSize:18,fontWeight:'500',color:'#263238'}}>Online Study Classes</Text>
   <TouchableOpacity onPress={()=>{props.navigation.navigate('LearningOnineStudyClasses')}}>
     <Text style={{fontSize:13,fontWeight:'400',color:'#29913C'}}>View all</Text>
   </TouchableOpacity>
</View>

<View style={{width:dimensions.SCREEN_WIDTH*0.9,alignSelf:'flex-start',marginTop:20, marginBottom:10}}>
          <FlatList
                  data={videoDetails}
                  showsHorizontalScrollIndicator={true}
                  horizontal
                  renderItem={({item}) => (
                    <View style={styles.VideoThumbWrapper}>
                      <TouchableOpacity
                        onPress={() => {
                          setShowModal({
                            isVisible: true,
                            data: item,
                          });
                        }}>
                        <View style={styles.PlayIconContainer}>
                          <View style={styles.PlayIconWrapper}>
                            {/* <PlayIcon width={28} height={28} /> */}
                            <View style={{backgroundColor:'rgba(0, 0, 0, 0.4)', width:50, height:50, borderRadius:50/2,alignItems:'center', justifyContent:'center'}}>
                              <Image source={require('../../../assets/learning-play-button.png')} style={{width:30, height:30}}/>
                            </View>
                          </View>
                        </View>
                        <Image
                          style={styles.BackGroundImage}
                          // theme={theme}
                          source={{uri:item?.thumbnail}}
                          resizeMode={'contain'}
                        />
                      </TouchableOpacity>
                    </View>
                  )}
        //           renderItem={({item,index})=>{
        //             return(
        //               <View
        //   style={{width:dimensions.SCREEN_WIDTH/1.5,height:160,marginRight: 20, borderRadius:15, shadowColor:'#000',shadowOffset: {width: 0,height: 3},shadowRadius: 1,shadowOpacity: 0.03,elevation: 1,}}
        //  >
        //   <ImageBackground source={{ uri: item?.thumbnail }} style={{width:dimensions.SCREEN_WIDTH/1.5,height:160}}>
        //     <TouchableOpacity onPress={()=>{setSelectedVideo(item);setShowVideoModal(true)}} style={{position:'absolute', top:50, left:dimensions.SCREEN_WIDTH/(1.5*2.5), backgroundColor:'rgba(0, 0, 0, 0.4)', width:50, height:50, borderRadius:50/2, justifyContent:'center', alignItems:'center'}}>
        //       <Image source={require('../../../assets/learning-play-button.png')} style={{width:30, height:30}}/>
        //     </TouchableOpacity>
        //   </ImageBackground>
        //   </View>
        //             )
        //           }}
                  keyExtractor={item => item.id}
                />
         </View>

<View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:20}}>
   <Text style={{fontSize:18,fontWeight:'500',color:'#263238'}}>Classes Center</Text>
   <TouchableOpacity onPress={()=>{props.navigation.navigate('LearningCentersList')}}>
     <Text style={{fontSize:13,fontWeight:'400',color:'#29913C'}}>View all</Text>
   </TouchableOpacity>
</View>

<View style={{width:dimensions.SCREEN_WIDTH*0.9,alignSelf:'flex-start',marginTop:0, marginBottom:10}}>
          <FlatList
                  data={classesList}
                  showsHorizontalScrollIndicator={true}
                  horizontal
                  style={{marginTop:10}}
                  renderItem={({item,index})=>{
                    return(
                      <LinearGradient
          colors={['rgba(255, 255, 255, 1)', 'rgba(249, 249, 249, 1)']}
          style={{width:dimensions.SCREEN_WIDTH*0.7,height:120,marginRight: 10, borderRadius:15, padding:10, shadowColor:'#000',shadowOffset: {width: 0,height: 3},shadowRadius: 1,shadowOpacity: 0.03,elevation: 1,}}
         >
        <View style={{flexDirection:'row'}}>
        <View style={{flex:1}}>
            <Image source={item.img} style={{width:60,height:60,borderRadius:60/2,alignSelf:'center'}}></Image>
        </View>
        
        <View style={{flex:4, marginLeft:20, marginTop:10}}>
            <Text style={styles.unselectedTabText}>{item.title}</Text>
            <View style={{flexDirection:'row', alignItems:'center', marginTop:5, marginBottom:3}}>
                <Text style={styles.unselectedTabText}>${item.price}</Text>
                <Text style={{fontSize:10,fontWeight:'400',color: '#455A64', marginLeft:40}}>{item.distance}</Text>
            </View>
            <TouchableOpacity onPress={()=>{props.navigation.navigate('ServiceCart')}} style={styles.requestCallView}>
                <Text style={{fontSize:14,fontWeight:'400',color:'#FFF'}}>Request a Call</Text>
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
});
export default FashionHome 
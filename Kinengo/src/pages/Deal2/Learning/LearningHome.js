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

const LearningHome = (props) => {
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
  <View style={{flexDirection:'row', alignItems:'center', backgroundColor:'#29913C',height:100, paddingtop:10, paddingBottom:25, paddingHorizontal:15, borderBottomLeftRadius:20,borderBottomRightRadius:20}}>
  
  <View style={{flex:1,flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
    <TouchableOpacity onPress={()=>props.navigation.goBack()}>
      <Image source={require('../../../assets/service-header-back-button.png')} style={{width:25, height:18}}/>
    </TouchableOpacity>
  </View>

  <View style={{flex:1,flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
    <Text style={{fontSize:14, fontWeight:'500',color:'#fff'}}>Learning</Text>
  </View>

  <View style={{flex:1,flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
    <TouchableOpacity onPress={()=>{props.navigation.navigate('LearningMessage')}}>
      <Image source={require('../../../assets/learning-message-icon.png')} style={{width:25, height:20}}/>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=>{}} style={{marginLeft:15}}>
      <Image source={require('../../../assets/service-cart-icon.png')} style={{width:25, height:20}}/>
    </TouchableOpacity>
  </View>

</View>
<View style={{width:'85%',alignSelf:'center'}}>
<View style={{top:-20}}>
    <LearningSearch marginTop={0} placeholder={'Search for courses'} 
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
          colors={['rgba(255, 255, 255, 1)', 'rgba(249, 249, 249, 1)']}
          style={{width:dimensions.SCREEN_WIDTH/3.8,marginRight: 10, borderRadius:15, shadowColor:'#000',shadowOffset: {width: 0,height: 3},shadowRadius: 1,shadowOpacity: 0.03,elevation: 1,}}
         >
          <TouchableOpacity style={{width:dimensions.SCREEN_WIDTH/3.8,height:130, alignItems:'center', borderRadius:15, paddingHorizontal:10}}
          onPress={()=>{props.navigation.navigate('LearningTeachersList', {name: item.title})}}>
          <LinearGradient
          colors={['rgba(210, 241, 206, 1)', 'rgba(255, 255, 255, 0)']}
          style={{justifyContent:'center', alignItems:'center', width:70,height:70,borderRadius:70/2, marginTop:10}}
         >
          <Image source={item.img} style={{width:40,height:40}} resizeMode='contain'></Image>
         </LinearGradient>
          
          <Text style={{fontSize:13,fontWeight:'500',color:'#263238',marginTop:5,textAlign:'center'}}>{item.title}</Text>
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
                  renderItem={({item,index})=>{
                    return(
                      <View
          style={{width:dimensions.SCREEN_WIDTH/1.5,height:160,marginRight: 20, borderRadius:15, shadowColor:'#000',shadowOffset: {width: 0,height: 3},shadowRadius: 1,shadowOpacity: 0.03,elevation: 1,}}
         >
          <VideoPlayer
            video={{ uri: item?.url }}
            // videoWidth={1600}
            videoWidth={dimensions.SCREEN_WIDTH/1.5}
            videoHeight={160}
            // videoHeight={900}
            thumbnail={{ uri: item?.thumbnail }}
            style={{marginRight:10, borderTopLeftRadius:15, borderTopRightRadius:15}}
          />
          </View>
                    )
                  }}
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
});
export default LearningHome 
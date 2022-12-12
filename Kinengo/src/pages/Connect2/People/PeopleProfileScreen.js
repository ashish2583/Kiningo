import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import HomeHeaderRoundBottom from 'src/component/HomeHeaderRoundBottom';
import SearchInput2 from 'src/component/SearchInput2';
import SearchInputEnt from 'src/component/SearchInputEnt';
import SerchInput from 'src/component/SerchInput';
import { dimensions, Mycolors } from 'src/utility/Mycolors';
import { ImageSlider,ImageCarousel } from "react-native-image-slider-banner";
import MyButtons from 'src/component/MyButtons';
import Modal from 'react-native-modal';
import Toast from 'react-native-simple-toast'
import LinearGradient from 'react-native-linear-gradient'
import VideoPlayer from 'react-native-video-player'
import { createThumbnail } from "react-native-create-thumbnail";
import Loader from '../../../WebApi/Loader';
import PostsModal from './modals/PostsModal';
const PeopleProfileScreen = (props) => {
  const [searchValue,setsearchValue]=useState('')
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const myTextInput = useRef()
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
  const [showPostsModal, setShowPostsModal] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState(1)
  const [startFromIndex, setStartFromIndex] = useState(0)
  const [loading, setLoading] = useState(false)
  const [originalData, setOriginalData]=useState([])
  const [filteredData, setFilteredData]=useState([])
  const [upData,setupData]=useState([
    {
      id: '1',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      type:'image',
      source:require('../../../assets/people-one-post-image.png'),
    },
    {
      id: '2',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      type:'image',
      type:'video',
      source:`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`,
    },
    {
      id: '3',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      type:'image',
      source:require('../../../assets/people-one-post-image.png'),
    },
    {
      id: '4',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      type:'image',
      source:require('../../../assets/people-one-post-image.png'),
    },
    {
      id: '5',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      type:'image',
      source:require('../../../assets/people-one-post-image.png'),
    },
    {
      id: '6',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      type:'image',
      source:require('../../../assets/people-one-post-image.png'),
    },
    {
      id: '7',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      type:'image',
      type:'video',
      source:`http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`,
    },
    {
      id: '8',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      type:'image',
      source:require('../../../assets/people-one-post-image.png'),
    },{
      id: '9',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      type:'image',
      source:require('../../../assets/people-one-post-image.png'),
    },{
      id: '10',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      type:'image',
      source:require('../../../assets/people-one-post-image.png'),
    },{
      id: '11',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      type:'image',
      source:require('../../../assets/people-one-post-image.png'),
    },
    
  ])
  const multiSliderValuesChange = (values) => {setMultiSliderValue(values)}
  useEffect(()=>{
    generateThumb()
  },[])
  const generateThumb = async () => {
    setLoading(true)
    try {
      const resp = await createThumbnail({
        url: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`,
        timeStamp: 10000,
        // cacheName: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`
      })
      const updatedData = upData.map(el=>{
        if(el.type === 'video'){
          return {...el, thumbnail: resp.path}
        }else{
          return el
        }
      })
      setupData([...updatedData])
      setOriginalData([...updatedData])
      setFilteredData([...updatedData])
    } catch (error) {
      console.log('thumbnail creating error', error);      
    }
    setLoading(false)
  } 
  
 const onChangeFilter = (newFilter) =>{
    if(newFilter === selectedFilter){
      return
    }

    setSelectedFilter(newFilter)
    if(newFilter === 1) {
      setFilteredData([...originalData])
    }else if(newFilter === 2) {
      setFilteredData(originalData?.filter(el=>el?.type === 'image'))
    }else if(newFilter === 3) {
      setFilteredData(originalData?.filter(el=>el?.type === 'video'))
    }
 }

  return(
    <SafeAreaView scrollEnabled={scrollEnabled} style={{backgroundColor:'#F8F8F8'}}>
      <ScrollView>
    <HomeHeaderRoundBottom height={80}  paddingHorizontal={15} backgroundColor='#fff'
   press1={()=>{props.navigation.goBack()}} img1={require('../../../assets/events_arrow.png')} img1width={25} img1height={20} 
   press2={()=>{}} title2={'People'} fontWeight={'500'} img2height={20} color='#455A64'
   press3={()=>{}} img3width={25} img3height={25} borderBottomLeftRadius={25} borderBottomRightRadius={25} />
<View style={{width:'90%',alignSelf:'center', marginTop:20}}>
    
  <LinearGradient
    colors={['rgba(255, 255, 255, 1)', 'rgba(249, 249, 249, 1)']}
    style={styles.descriptionView}
    >
      <View style={{flex:1}}>
        <Image source={require('../../../assets/people-following-person.png')}/>
      </View>    
    {/* <View style={styles.descriptionView}> */}
    <View style={{flex:5}}>
      <View style={styles.imageRowView}>
        
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={{fontSize:14, fontWeight:'600', color:'#455A64'}}>Aryav Nadkarni</Text>
        </View>

        <View style={styles.followingView}>
          <Text style={{fontSize:14, fontWeight:'400', color:'#455A64'}}>Following</Text>
        </View>
      </View>

      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-evenly', marginTop:10}}>
        <LinearGradient
          colors={['rgba(255, 255, 255, 1)', 'rgba(249, 249, 249, 1)']}
          style={[styles.numView, {marginRight:10}]}
          >
          <Text style={styles.numValue}>09</Text>
          <Text style={styles.numText}>Posts</Text>
        </LinearGradient>
        <LinearGradient
          colors={['rgba(255, 255, 255, 1)', 'rgba(249, 249, 249, 1)']}
          style={[styles.numView, {marginRight:10}]}
          >
            <TouchableOpacity onPress={()=>props.navigation.navigate('PeopleFollowers', {gotoFollowersTab: 'yes'})} style={{justifyContent:'center', alignItems:'center'}}>
              <Text style={styles.numValue}>1.1M</Text>
              <Text style={styles.numText}>Followers</Text>
            </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={['rgba(255, 255, 255, 1)', 'rgba(249, 249, 249, 1)']}
          style={styles.numView}
          >
            <TouchableOpacity onPress={()=>props.navigation.navigate('PeopleFollowers', {gotoFollowersTab: 'no'})} style={{justifyContent:'center', alignItems:'center'}}>
              <Text style={styles.numValue}>369</Text>
              <Text style={styles.numText}>Following</Text>
            </TouchableOpacity>
          </LinearGradient>
      </View>
      <View style={{flexDirection:'row', alignItems:'center', marginTop:20}}>
        <TouchableOpacity style={styles.blueButtonView} onPress={()=>{props.navigation.navigate('PeopleChat')}}>
          <Image source={require('../../../assets/people-message2.png')}/>
          <Text style={{fontSize:14, fontWeight:'400', color:'#fff', marginLeft:10}}>Message</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.blueButtonView, {marginLeft:10}]}>
          <Image source={require('../../../assets/people-block.png')}/>
          <Text style={{fontSize:14, fontWeight:'400', color:'#fff', marginLeft:10}}>Block</Text>
        </TouchableOpacity>
        {/* <LinearGradient
          colors={['rgba(255, 255, 255, 1)', 'rgba(249, 249, 249, 1)']}
          style={styles.numView}
          >
          <Text style={styles.numValue}>369</Text>
          <Text style={styles.numText}>Following</Text>
          </LinearGradient> */}
      </View>
      </View>
    {/* </View> */}
    </LinearGradient>

    <View style={styles.allFiltersRow}>
      <View style={styles.filter1View}>
        <TouchableOpacity onPress={()=>onChangeFilter(1)}>
          <Image source={selectedFilter === 1 ? require('../../../assets/people-all-filter-selected.png') : require('../../../assets/people-all-filter.png')}/>
        </TouchableOpacity>
      </View>
      <View style={styles.filter2View}>
        <TouchableOpacity onPress={()=>onChangeFilter(2)}>
          <Image source={selectedFilter === 2 ? require('../../../assets/people-image-filter-selected.png') : require('../../../assets/people-image-filter.png')}/>
        </TouchableOpacity>
      </View>
      <View style={styles.filter3View}>
        <TouchableOpacity onPress={()=>onChangeFilter(3)}>
          <Image source={selectedFilter === 3 ? require('../../../assets/people-video-filter-selected.png') : require('../../../assets/people-video-filter.png')}/>
          </TouchableOpacity>
      </View>
    </View>  
    
    {/* {upData?.filter(el=>el.type === 'video').map(item=>{
      return (
        <VideoPlayer
          video={{ uri: item.source }}
          videoWidth={1600}
          videoHeight={900}
          thumbnail={{ uri: item.thumbnail }}
      />
      )
    })} */}

    <View style={{marginTop:10}}>
          <FlatList
                  data={filteredData}
                  showsHorizontalScrollIndicator={false}
                  numColumns={3}
                  style={{alignSelf:'center'}}
                  renderItem={({item,index})=>{
                    return(
                      <View style={{width:120, marginHorizontal: index % 3 == 1 ? 5 : 0, height:120,marginVertical:10}}>
          <TouchableOpacity style={{width:'100%',height:'auto',backgroundColor:'#F8F8F8',alignSelf:'center'}}
          onPress={()=>{setStartFromIndex(index);setShowPostsModal(true);}}>
            {item.type === 'image' ?
          <Image source={item.source} style={{width:'100%',height:'100%',alignSelf:'center',}} resizeMode='contain' ></Image>
          :
          <ImageBackground source={{uri: item.thumbnail}} style={{width:'100%',height:'100%',alignSelf:'center',justifyContent:'center'}} resizeMode='cover' >
            <Image source={require('../../../assets/people-play-button.png')} style={{width:'30%',height:'30%',alignSelf:'center',}} resizeMode='contain' ></Image>
          </ImageBackground>
          }
          </TouchableOpacity>
          </View>
                    )
                  }}
                  keyExtractor={item => item.id}
                />
         </View>    

 </View>
<View style={{height:100}} />

</ScrollView>
    
    <PostsModal
      isVisible={showPostsModal}
      setIsVisible={setShowPostsModal} 
      data={filteredData}
      startFromIndex={startFromIndex}
    />
    {loading ? <Loader /> : null}
    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({
  descriptionView:{
    flexDirection:'row',
    backgroundColor:'#fff', 
    paddingTop:10, 
    paddingHorizontal:10, 
    paddingBottom:20, 
    borderRadius:15,
    shadowColor: '#000',
    shadowOffset: {
    width:0,
    height:3
    }, 
    shadowRadius: 5,
    shadowOpacity: 0.03,
    elevation: 1,
  },
  imageRowView:{
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignItems:'center'
  },
  followingView:{
    paddingHorizontal:20,
    paddingVertical:10,
    backgroundColor:'#fff',
    borderRadius:20,
    shadowColor: '#0089CF',
    shadowOffset: {
    width:0,
    height:3
    }, 
    shadowRadius: 5,
    shadowOpacity: 0.1,
    elevation: 5,
  },
  numView:{
    alignItems:'center',
    width:90,
    height:90,
    justifyContent:'center',
    borderRadius:15,
    paddingHorizontal:10,
    shadowColor: '#000',
    shadowOffset: {
    width:0,
    height:3
    }, 
    shadowRadius: 5,
    shadowOpacity: 0.03,
    elevation: 1, 
  },
  numValue:{
    fontSize:20, 
    fontWeight:'500', 
    color:'#455A64'
  },
  numText:{
    fontSize:14, 
    fontWeight:'400', 
    color:'#455A64'
  },
  blueButtonView:{
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#0089CF',
    paddingHorizontal:15,
    paddingVertical:10,
    borderRadius:20,
    shadowColor: '#0089CF',
    shadowOffset: {
    width:0,
    height:3
    }, 
    shadowRadius: 5,
    shadowOpacity: 0.1,
    elevation: 1,
  },
  allFiltersRow:{
    flexDirection:'row', 
    alignItems:'center', 
    marginTop:20, 
    paddingHorizontal:20
  },
  filter1View:{
    flex:1, 
    flexDirection:'row', 
    justifyContent:'flex-start'
  },
  filter2View:{
    flex:1, 
    flexDirection:'row', 
    justifyContent:'center'
  },
  filter3View:{
    flex:1, 
    flexDirection:'row', 
    justifyContent:'flex-end'
  },
});
export default PeopleProfileScreen 
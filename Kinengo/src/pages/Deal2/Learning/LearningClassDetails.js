import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import HomeHeader from 'src/component/HomeHeader';
import SearchInput2 from 'src/component/SearchInput2';
import { dimensions, Mycolors } from 'src/utility/Mycolors';
import { ImageSlider,ImageCarousel } from "react-native-image-slider-banner";
import MyButtons from 'src/component/MyButtons';
import { Rating } from 'react-native-ratings';
import ViewMoreText from 'react-native-view-more-text';
import Toggle from "react-native-toggle-element";
import Modal from 'react-native-modal';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { setSelectedCarTab } from 'src/redux/actions/user_action';
import DatePicker from 'react-native-datepicker';
import { createThumbnail } from "react-native-create-thumbnail";
import Loader from '../../../WebApi/Loader';
import VideoPlayer from 'react-native-video-player'
import LinearGradient from 'react-native-linear-gradient'

const LearningClassDetails = (props) => {
  const [searchValue,setsearchValue]=useState('')
  const [selectedTab,setselectedTab]=useState('Description')
  const [cookingIns,setcookingIns]=useState('')
  const [selectedTime,setselectedTime]=useState('1')
  const [selectedTime2,setselectedTime2]=useState('1')
  const [counter,setcounter]=useState(1)
  const [date, setDate] = useState('')
  const [toggleValue, setToggleValue] = useState(false);
  const [modlevisual1,setmodlevisual1] = useState(false)
  const [modlevisual2,setmodlevisual2] = useState(false)
  const [modlevisual3,setmodlevisual3] = useState(false)
  const [modlevisual4,setmodlevisual4] = useState(false)
  const [videoDetails, setVideoDetails] = useState({url: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`})
  const [loading, setLoading] = useState(false)
  const [dayData, setDayData]=useState([{dayPart:'Day', id: 1},{dayPart:'Afternoon', id: 2},{dayPart:'Evening', id: 3}])
  const [servicesList, setServicesList]=useState([
    {
        id: '1',
        title: 'Deep clean AC service (window)',
        price:949,
        desc:['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
        time:'45 mins',
        img:require('../../../assets/service-product-image.png'),
    },
    {
        id: '2',
        title: 'Deep clean AC service (window)',
        price:949,
        desc:['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
        time:'45 mins',
        img:require('../../../assets/service-product-image.png'),
    },
    {
        id: '3',
        title: 'Deep clean AC service (window)',
        price:949,
        desc:['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
        time:'45 mins',
        img:require('../../../assets/service-product-image.png'),
    },
  ])
  const [reviewsData, setReviewsData] = useState([
    {
        'id': 1,
        img: require('../../../assets/store_image.png'), 
        name: 'Maude Hall', 
        rating: '4.5', 
        time: '14 mins', 
        message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
    {
        'id': 2,
        img: require('../../../assets/store_image.png'), 
        name: 'Maude Hall', 
        rating: '4.5', 
        time: '14 mins', 
        message: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`
    },
])
  const [upData,setupData]=useState([
    {
      id: '1',
      title: 'Hair Cut',
      desc:'',
      time:'10:00AM',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '2',
      title: 'Shaving',
      desc:'',
      time:'10:30AM',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '3',
      title: 'Facial',
      desc:'',
      time:'11:00AM',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '4',
      title: 'Hair Color',
      desc:'',
      time:'11:30AM',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '5',
      title: 'Hair wash',
      desc:'',
      time:'12:00PM',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '6',
      title: 'Beard style',
      desc:'',
      time:'12:30PM',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '7',
      title: 'Facial',
      desc:'',
      time:'01:00PM',
      img:require('../../../assets/images/images.png'),
    },
  ])
  useEffect(()=>{

 },[])
 useEffect(()=>{
    generateThumb()
  },[])
  const generateThumb = async () => {
    setLoading(true)
    try {
      const resp = await createThumbnail({
        url: videoDetails?.url,
        timeStamp: 10000,
        // cacheName: `http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4`
      })
      setVideoDetails({...videoDetails, thumbnail: resp.path})
    } catch (error) {
      console.log('thumbnail creating error', error);      
    }
    setLoading(false)
  }

  
const design=(img,ti,tit,w,imgh,imgw,bg,redious)=>{
  return(
    <View style={{flexDirection:'row',alignItems:'center',width:w,marginTop:10}}>
   <View style={{width:40,height:40,backgroundColor:bg,justifyContent:'center',borderRadius:redious}}>
    <Image source={img} style={{width:imgw,height:imgh,overflow:'hidden',alignSelf:'center'}}></Image>
   </View>
   <View style={{marginLeft:5,width:'85%'}}>
    <Text style={{fontSize:10,fontWeight:'bold',color:Mycolors.Black}}>{ti}</Text>
    <Text style={{fontSize:10,color:Mycolors.GrayColor,top:3}}>{tit}</Text>
   </View>
   
  </View>
  )
}


const flatliistDesign=(img,ti,rs,des,press,allpress)=>{
  return(
    <TouchableOpacity style={{width:'95%',height:120,marginHorizontal:5,marginVertical:5, padding:10,backgroundColor:'#fff',
    borderColor:'#dee4ec',
    borderWidth:1,
    elevation: 5,borderRadius:10,alignSelf:'center',flexDirection:'row',alignItems:'center'}}
    onPress={allpress}>
<View style={{width:60,height:75,alignSelf:'center',borderRadius:5,borderWidth:3,borderColor:'#dee4ec'}}>
<Image source={img}  style={{width:'100%',height:'100%',alignSelf:'center',borderRadius:5,resizeMode: 'stretch'}} ></Image>
</View>
<View style={{marginLeft:10}}>
<Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:12,marginTop:9}} >{ti}</Text>
<Text style={{color:Mycolors.RED,fontWeight:'600',fontSize:12,marginTop:9}} >{rs}</Text>
<View style={{flexDirection:'row'}}>
<Text style={{color:Mycolors.GrayColor,fontWeight:'600',fontSize:12,marginTop:9}} >Food Preparation Time:</Text>
<Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:12,marginTop:9}} >{des}</Text>
</View>



{press ?
<View style={{width:70}}>
<MyButtons title="ADD" height={30} width={'100%'} borderRadius={5} alignSelf="center" press={press} marginHorizontal={20} fontSize={11}
titlecolor={Mycolors.BG_COLOR} backgroundColor={Mycolors.RED} marginVertical={0} />
</View>
: null
}
</View>
  <View style={{position:'absolute',width:20,height:20,top:10,right:10,borderRadius:3,backgroundColor:'red',justifyContent:'center'}}>
  <View style={{width:10,height:10,borderRadius:10,alignSelf:'center',backgroundColor:'#fff'}} />
  </View>
</TouchableOpacity>
  )
}

  return(
    <SafeAreaView style={{height:'100%', backgroundColor: '#F8F8F8'}}>
      <ScrollView>
   <View>
    <VideoPlayer
        video={{ uri: videoDetails?.url }}
        videoWidth={1600}
        videoHeight={900}
        thumbnail={{ uri: videoDetails?.thumbnail }}
        />
        <TouchableOpacity onPress={()=>{props.navigation.goBack()}} style={styles.backButtonAbsolute}>
            <Image source={require('../../../assets/service-video-header-back-button.png')} style={{width:20, height:20}}/>
        </TouchableOpacity>
   </View>

<View style={{width:'96%',alignSelf:'center',backgroundColor:'#F8F8F8'}}>

<View style={{width:'96%',flexDirection:'row',justifyContent:'space-between',alignSelf:'center',backgroundColor:'#F8F8F8',borderRadius:9,paddingVertical:20}}>
  <View>
<Text style={{color:Mycolors.Black,fontWeight:'600'}}>Air Conditioner</Text>
<View style={{flexDirection:'row',marginTop:10}}>
    <Image source={require('../../../assets/Star.png')} style={{width:18,height:18}}></Image>
    <Text style={{color:'#455A64',fontSize:14,fontWeight:'400',left:5}}>4.78</Text>
</View>
{/* <Text style={{color:Mycolors.GrayColor,fontSize:13,fontWeight:'500',marginVertical:4}}>Electronics</Text> */}
  </View>

  <TouchableOpacity style={styles.messagesView} onPress={()=>{props.navigation.navigate('ServiceMessages')}}>
    <Text style={{fontSize:14,fontWeight:'400',color:'#FFF'}}>Messages</Text>
  </TouchableOpacity>

</View>

<View style={{width:'95%',alignSelf:'center',flexDirection:'row',marginTop:10}}>
{/* <View style={{width:'32%'}}> */}
    <TouchableOpacity onPress={()=>{setselectedTab('Description')}} style={selectedTab=='Description' ? styles.selectedTabStyle : styles.unselectedTabStyle}>
        <Text style={selectedTab=='Description' ? styles.selectedTabText : styles.unselectedTabText}>Description</Text>
    </TouchableOpacity>
{/* </View> */}

{/* <View style={{width:'32%', marginLeft:20}}> */}
    <TouchableOpacity onPress={()=>{setselectedTab('Customer Reviews')}} style={selectedTab=='Customer Reviews' ? [styles.selectedTabStyle, {marginLeft:40}] : [styles.unselectedTabStyle, {marginLeft:40}]}>
        <Text style={selectedTab=='Customer Reviews' ? styles.selectedTabText : styles.unselectedTabText}>Customer Reviews</Text>
    </TouchableOpacity>
{/* <MyButtons title='Customer Reviews' height={37} width={'100%'} borderRadius={5} alignSelf="center" press={()=>{setselectedTab('Customer Reviews')}} marginHorizontal={20} fontSize={12}
  titlecolor={selectedTab=='Customer Reviews' ? '#6D2F91' : Mycolors.Black} marginVertical={0} backgroundColor={selectedTab=='Customer Reviews' ? '#FFC40C' : 'transparent'}/> */}
{/* </View> */}

</View>



{selectedTab=='Description' ? 
<View style={{marginTop:20}}>
<View style={{width:'95%',alignSelf:'center'}}>
<ViewMoreText
          numberOfLines={3}
          renderViewMore={(onPress)=>{
            return(
              <Text onPress={onPress} style={{color:'#6D2F91',textDecorationLine: "underline"}}>View more</Text>
            )
          }}
          renderViewLess={(onPress)=>{
            return(
              <Text onPress={onPress} style={{color:'#6D2F91',textDecorationLine: "underline"}}>View less</Text>
            )
           }}
          textStyle={{textAlign: 'left',width:'95%'}}
        >
          <Text style={{color:Mycolors.DARK_GREY}}>
          In publishing and graphic design, Lorem ipsum is a place-
          holder text commonly used to demonstrate the visual form
          of a document or a typeface without relying on meaningful
          of a document or a typeface without relying on meaningful
          content.
          </Text>
</ViewMoreText>

<Text style={{fontSize:16, fontWeight:'500',color:'#263238', marginVertical:10}}>Add Service</Text>

<FlatList
                  data={servicesList}
                  numColumns={1}
                  renderItem={({item,index})=>{
                    return(
                      <LinearGradient
                              colors={['rgba(255, 255, 255, 1)', 'rgba(249, 249, 249, 1)']}
                              style={{width:dimensions.SCREEN_WIDTH*0.9, backgroundColor:'#fff',borderRadius:15, padding:10, marginBottom:10, shadowColor:'#000',shadowOffset: {width: 0,height: 3},shadowRadius: 1,shadowOpacity: 0.03,elevation: 1,}}
                            >
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Image source={item.img} style={{width:60,height:60,borderRadius:60/2,alignSelf:'center'}}></Image>
                </View>
                
                <View style={{flex:4, marginLeft:10, marginTop:10}}>
                    <Text style={styles.unselectedTabText}>{item.title}</Text>
                    <View style={{flexDirection:'row', alignItems:'center', marginTop:5, marginBottom:3}}>
                        <Text style={styles.unselectedTabText}>${item.price}</Text>
                        <Text style={{fontSize:10,fontWeight:'400',color: '#455A64', marginLeft:40}}>${item.time}</Text>
                    </View>
                    {item.desc?.map((item, index)=>{
                        return (
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={{backgroundColor:'#263238', width:5, height:5, borderRadius:5/2}}/>
                                <Text style={[styles.bulletPoints, {marginLeft:5}]}>{item}</Text>
                            </View>
                        )
                    })}
                    <TouchableOpacity onPress={()=>{props.navigation.navigate('ServiceCart')}} style={styles.addView}>
                        <Text style={{fontSize:14,fontWeight:'400',color:'#FFF'}}>Add</Text>
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
:
selectedTab=='Customer Reviews' ? 
<View>
<View style={{width:'100%',alignSelf:'center',marginTop:10}}>
<FlatList
                  data={reviewsData}
                  numColumns={1}
                  keyExtractor={item => item.id}
                  renderItem={({item,index})=>{
                    return(
    <View style={{width:'95%',marginTop:15,alignSelf:'center', backgroundColor:'#fff', padding:10, paddingBottom:30,borderRadius:15}}>
    
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View style={{flexDirection:'row'}}>
        <Image source={item.img}/>
        <View style={{marginLeft:15, marginTop:5}}>
        <Text style={{fontSize:14, fontWeight:'700', color:'#455A64'}}>{item.name}</Text>
        <View style={{flexDirection:'row',marginTop:5, alignItems:'center'}}>
            <Image source={require('../../../assets/Star.png')} style={{width:18,height:18}}></Image>
            <Text style={{color:'#FFD037',fontSize:14,fontWeight:'400',marginLeft:10}}>{item.rating}</Text>
            <Text style={{color:'#6F6D6D',fontSize:12,fontWeight:'400',marginLeft:20}}>{item.time}</Text>
        </View>
        </View>
        </View>
    </View>

    <Text style={{fontSize:14, fontWeight:'400', color:'#455A64', marginTop:15}}>{item.message}</Text>


    </View>
                    )
                  }}
                />

{/* <MyButtons title="Add Review" height={60} width={'100%'} borderRadius={10} alignSelf="center" press={()=>{props.navigation.navigate('DatingSelection')}} marginHorizontal={20} fontSize={11}
      titlecolor={Mycolors.BG_COLOR}/>               */}
</View>

</View>
:
null
}
 </View>

 

<View style={{height:100}} />

</ScrollView>
{selectedTab=='Customer Reviews' ?
<TouchableOpacity style={styles.addReviewButtonView}>
    <Text style={styles.addReviewText}>Add Review</Text>
</TouchableOpacity>
:null}
{/* ##############&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  Model1 Search Clicked &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   */}

{/* ##############&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  Model2 Product Clicked &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   */}

{/* ##############&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  Model3 Book A Table sloat Clicked &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   */}
{/* ##############&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  Model4 Book A Sloat Clicked &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   */}
{loading ? <Loader /> : null}
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
    height:80,
    borderRadius:5,
    paddingHorizontal:15,
    paddingVertical:10,
    color:Mycolors.Black
  },
  dateIcon:{
    width:22,
    height:23,
    // marginRight:20
  },
  datePickerSelectInput:{
    height: 45,
    width:'100%',
    fontSize: 15,
    borderColor: null,
    backgroundColor: '#fff',
    borderRadius:10,
    color:'#fff',
  },
  backButtonAbsolute:{
    backgroundColor:'#fff', 
    width:30, 
    height:30, 
    alignItems:'center',
    justifyContent:'center',
    position:'absolute', 
    top:20, 
    left:20,
    borderRadius:5
  },
  selectedTabStyle:{
    borderBottomWidth:1,
    borderBottomColor:'#6D2F91',
    alignItems:'center',
    // width:'32%'
  },
  unselectedTabStyle:{
    // width:'32%'
  },
  selectedTabText:{
    fontSize:14,
    fontWeight:'500',
    color: '#6D2F91',
    paddingBottom: 10,
  },
  unselectedTabText:{
    fontSize:14,
    fontWeight:'500',
    color: '#263238'
  },
  bulletPoints:{
    fontSize:12,
    fontWeight:'400',
    color: '#263238'
  },
  messagesView:{
    paddingHorizontal:40,
    paddingVertical:5,
    borderRadius:30,
    backgroundColor:'#6D2F91',
    alignItems:'center',
    justifyContent:'center',
    shadowColor:'#6D2F91',
    shadowOffset: {width:3,height:3}, 
    shadowRadius: 5,
    shadowOpacity: 0.06,
    elevation: 1
  },
  addView:{
    marginTop:10,
    width:70,
    height:30,
    borderRadius:15,
    backgroundColor:'#6D2F91',
    alignItems:'center',
    justifyContent:'center',
    shadowColor:'#6D2F91',
    shadowOffset: {width:3,height:3}, 
    shadowRadius: 5,
    shadowOpacity: 0.17,
    elevation: 2
  },
  addReviewButtonView:{
    position:'absolute',
    bottom:20,
    marginTop:30,
    borderRadius:5, 
    backgroundColor:'#6D2F91', 
    width:'90%',
    alignSelf:'center', 
    height:60, 
    justifyContent:'center', 
    alignItems:'center',
    shadowColor: '#000',
    shadowOffset: {
    width: 0,
    height: 3
    },
    shadowRadius: 1,
    shadowOpacity: 0.1,
    justifyContent: 'center',
    elevation: 1,
  },
  addReviewText:{
    fontSize:14,
    fontWeight:'500',
    color:'#fff'
  },

});
export default LearningClassDetails 
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
import RepliesModal from './components/RepliesModal'

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
  const [userMessage, setUserMessage] = useState('')
  const [replyingTo, setReplyingTo] = useState('')
  const [showAtUsername, setShowAtUsername] = useState(false)
  const [showRepliesModal, setShowRepliesModal] = useState(false)
  const [upData,setupData]=useState([
    {
      id: '1',
      name: 'Maude Hall',
      message:`That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.`,
      time:'14 min',
      img:require('../../../assets/comment-person-image.png'),
      isLiked: true,
      replies:[]
    },
    {
      id: '2',
      name: 'Eleanor Pena',
      message:`That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.`,
      time:'14 min',
      img:require('../../../assets/comment-person-image.png'),
      isLiked: false,
      replies:[]
    },
    {
      id: '3',
      name: 'Floyd Miles',
      message:`That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.`,
      time:'14 min',
      img:require('../../../assets/comment-person-image.png'),
      isLiked: true,
      replies:[]
    },
    {
      id: '4',
      name: 'Robert Fox',
      message:`That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.`,
      time:'14 min',
      img:require('../../../assets/comment-person-image.png'),
      isLiked: true,
      replies:[]
    },

  ])

  useEffect(()=>{

 },[])

 const sendMessage = () => {
  if(userMessage?.trim()?.length === 0){
    return
  }
  if(replyingTo){
    const upDataCopy = [...upData]
    upDataCopy.map(el=>{
      if(replyingTo === el.id){
        el.replies.push({
          id:99,
          name:'saurabh saneja',
          message: userMessage,
          time: '0 min',
          img: require('../../../assets/people-sender-image.png'),
          isLiked: false
        })
        return el
      }
    })
    setupData([...upDataCopy])
  }else{
    const nextId = upData?.length+1
    setupData([...upData, 
      {
        id: String(nextId),
        name: 'Saurabh Saneja',
        message:userMessage,
        time:'14 min',
        img:require('../../../assets/comment-person-image.png'),
        isLiked: false,
        replies:[]
      },
    ])
  }
  Keyboard.dismiss()
  setUserMessage('')
  setReplyingTo('')
 }
 
 const likeChildComment = (parentId, childIndex) => {
  const upDataCopy = [...upData]
  upDataCopy.map(el => {
    if(el.id === parentId){
      el.replies[childIndex].isLiked = !el.replies[childIndex].isLiked
    }
    return el
  })
  setupData([...upDataCopy])
 }

 const returnOneReply = (itemid) => {
  const replies = upData?.find(el=>el.id === itemid)?.replies
  if(replies?.length === 0){
    return
  }
  return (

    <View style={{width:'90%', marginLeft:30, marginTop:10}}>
    {replies?.length > 1 ? 
    <TouchableOpacity onPress={()=>{setShowAtUsername(false);setReplyingTo(itemid);setShowRepliesModal(true)}} style={{marginBottom:10}}>
      <Text style={{fontSize:14, fontWeight:'500', color:'#0089CF'}}>{`View previous ${replies?.length -1} replies`}</Text>
    </TouchableOpacity>
    :null}
    <View style={{flexDirection:'row', alignItems:'center'}}>
      <Image source={replies[0].img}/>
      <Text style={{fontSize:18, fontWeight:'500', color:'#000', marginLeft:10}}>{replies[0].name}</Text>
      <Text style={{fontSize:12, fontWeight:'400', color:'#B4BBC6', marginLeft:20}}>{replies[0].time}</Text>
    </View>
    <View style={{marginTop:10}}>
      <Text numberOfLines={1} style={{fontSize:14, fontWeight:'400', color:'#272727'}}>{replies[0].message}</Text>
    </View>
    {/* <View style={{marginTop:15, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
      <View style={{flexDirection:'row', alignItems:'center'}}>
        <TouchableOpacity onPress={()=>{likeChildComment(itemid, index)}}>
          <Image source={replies[0].isLiked ? require('../../../assets/people-sel-heart.png') : require('../../../assets/people-unsel-heart.png')} style={{width:30, height:30}}/>
        </TouchableOpacity>
        <Text style={{fontSize:14, fontWeight:'500', color:'#B4BBC6', marginLeft:10}}>Like</Text>
      </View>
      <TouchableOpacity onPress={()=>{myTextInput.current.focus(); setUserMessage(`@${replies[0].name}`); setReplyingTo(itemid)}} style={{flexDirection:'row', alignItems:'center'}}>
        <Image source={require('../../../assets/people-reply-image.png')}/>
        <Text style={{fontSize:14, fontWeight:'500', color:'#B4BBC6', marginLeft:10}}>Reply</Text>
      </TouchableOpacity>
    </View> */}
  </View>
    )
 }

  return(
    <SafeAreaView scrollEnabled={scrollEnabled} style={{height:'100%', backgroundColor: '#F8F8F8'}}>
      <ScrollView>
          <View style={{position:'relative'}}>
            <Image source={require('../../../assets/fashion-post-image.png')} style={{width:dimensions.SCREEN_WIDTH,height:350}}></Image>
            <TouchableOpacity onPress={()=>{props.navigation.goBack()}} style={{position:'absolute', left:20, top:20}}>
                <Image source={require('../../../assets/service-header-back-button.png')} style={{width:25, height:20,}} />
            </TouchableOpacity>
          </View>            

          <View style={{width:'90%', alignSelf:'center',paddingVertical:20}}>
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


          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginBottom:10, marginTop:35}}>
          <Text style={{fontSize:16,fontWeight:'500',color:'#455A64'}}>Comments</Text>
          <TouchableOpacity onPress={()=>{}}>
            <Text style={{fontSize:13,fontWeight:'400',color:'#0089CF'}}>Add a comment</Text>
          </TouchableOpacity>
        </View>
          <View style={{width:'100%',alignSelf:'center',marginTop:10}}>
          <FlatList
                  data={upData}
                  showsHorizontalScrollIndicator={false}
                  numColumns={1}
                  renderItem={({item,index})=>{
                    return(
                      <View style={{width:dimensions.SCREEN_WIDTH*0.9, marginBottom:15}}>
                        <>
                        <View>
                          <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                              <Image source={item.img}/>
                              <View style={{marginLeft:10}}>
                                <Text style={{fontSize:14, fontWeight:'700', color:'#455A64'}}>{item.name}</Text>
                                <Text style={{fontSize:12, fontWeight:'400', color:'#6F6D6D'}}>{item.time}</Text>
                              </View>
                            </View>
                            <TouchableOpacity onPress={()=>{setShowAtUsername(true); setReplyingTo(item.id); setShowRepliesModal(true);}} style={{flexDirection:'row', alignItems:'center'}}>
                              <Image source={require('../../../assets/people-reply-image.png')}/>
                              <Text style={{fontSize:14, fontWeight:'500', color:'#B4BBC6', marginLeft:10}}>Reply</Text>
                            </TouchableOpacity>
                          </View>
                          <View style={{marginTop:10}}>
                            <Text style={{fontSize:14, fontWeight:'400', color:'#272727'}}>{item.message}</Text>
                          </View>
                          <View style={{marginTop:15, flexDirection:'row', alignItems:'center',justifyContent:'space-between', width:'30%'}}>
                              {/* <TouchableOpacity onPress={()=>{setupData(upData.map((el, elIndex)=> index === elIndex ? {...el, isLiked: !item.isLiked} : el))}}>
                                <Image source={item.isLiked ? require('../../../assets/people-unsel-heart.png') : require('../../../assets/people-sel-heart.png')} style={{width:30, height:30}}/>
                              </TouchableOpacity> */}
                              <TouchableOpacity onPress={()=>{setupData(upData.map((el, elIndex)=> index === elIndex ? {...el, isLiked: !item.isLiked} : el))}} style={styles.buttonView}>
                                <Image source={require('../../../assets/fashion-like-button.png')} style={{height:20, width:20}} />
                                <Text style={styles.buttonText}>{item?.likes}4k</Text>
                              </TouchableOpacity>
                              <TouchableOpacity style={styles.buttonView}>
                                <Image source={require('../../../assets/fashion-dislike-button.png')} style={{height:20, width:20}} />
                                <Text style={styles.buttonText}>{item?.dislikes}1k</Text>
                              </TouchableOpacity>
                          </View>
                        </View>
                        <View style={{borderBottomColor: '#E0E0E0', borderBottomWidth: 1, marginTop:10}}/>
                        {item?.replies?.length > 0 ?
                        <>
                        {returnOneReply(item.id)}
                        </>
                        :null}
                        </>
                     </View>
                    )
                  }}
                  keyExtractor={item => item.id}
                />
         </View>  
          </View>




  <View style={{height:10}}/> 

  <View style={{width:'85%',alignSelf:'center'}}>
 </View>
<View style={{height:100}} />
</ScrollView>
{loading ? <Loader /> : null}
<RepliesModal
      isVisible={showRepliesModal}
      setIsVisible={setShowRepliesModal} 
      data={upData}
      setData={setupData}
      replyingTo={replyingTo}
      setReplyingTo={setReplyingTo}
      showAtUsername={showAtUsername}
      likeChildComment={likeChildComment}
      // startFromIndex={startFromIndex}
    />
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
  buttonView:{
    flexDirection:'row', 
    alignItems:'center'
  },
  buttonText:{
    fontSize:10, 
    fontWeight:'500', 
    color:'#8F93A0', 
    marginLeft:5
  }
});
export default FashionPost 
import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground, ImageEditor, Keyboard} from 'react-native';
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
import RepliesModal from './modals/RepliesModal';

const PeopleComments = (props) => {
  const [searchValue,setsearchValue]=useState('')
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const myTextInput = useRef()
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
  const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
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
  const multiSliderValuesChange = (values) => {setMultiSliderValue(values)}
  useEffect(()=>{
    console.log('upData changed', upData);
 },[upData])

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
    <SafeAreaView scrollEnabled={scrollEnabled} style={{backgroundColor:'#fff'}}>
    {!showRepliesModal ?
    <HomeHeaderRoundBottom height={80}  paddingHorizontal={15} backgroundColor='#fff'
   press1={()=>{props.navigation.goBack()}} img1={require('../../../assets/events_arrow.png')} img1width={25} img1height={20} 
   press2={()=>{}} title2={'20 Comments'} fontWeight={'500'} img2height={20} color='#455A64'
   press3={()=>{}} img3width={25} img3height={25} />
    :null}
      <ScrollView>
<View style={{width:'90%',alignSelf:'center', marginTop:20}}>
  

<View style={{width:'100%',alignSelf:'center',}}>
          <FlatList
                  data={upData}
                  showsHorizontalScrollIndicator={false}
                  numColumns={1}
                  renderItem={({item,index})=>{
                    return(
                      <View style={{width:dimensions.SCREEN_WIDTH*0.9,marginHorizontal:5, marginBottom:15, paddingHorizontal:20}}>
                        <>
                        <View>
                          <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Image source={item.img}/>
                            <Text style={{fontSize:18, fontWeight:'500', color:'#000', marginLeft:10}}>{item.name}</Text>
                            <Text style={{fontSize:12, fontWeight:'400', color:'#B4BBC6', marginLeft:20}}>{item.time}</Text>
                          </View>
                          <View style={{marginTop:10}}>
                            <Text style={{fontSize:14, fontWeight:'400', color:'#272727'}}>{item.message}</Text>
                          </View>
                          <View style={{marginTop:15, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                              <TouchableOpacity onPress={()=>{setupData(upData.map((el, elIndex)=> index === elIndex ? {...el, isLiked: !item.isLiked} : el))}}>
                                <Image source={item.isLiked ? require('../../../assets/people-unsel-heart.png') : require('../../../assets/people-sel-heart.png')} style={{width:30, height:30}}/>
                              </TouchableOpacity>
                              <Text style={{fontSize:14, fontWeight:'500', color:'#B4BBC6', marginLeft:10}}>Like</Text>
                            </View>
                            <TouchableOpacity onPress={()=>{setShowAtUsername(true); setReplyingTo(item.id); setShowRepliesModal(true);}} style={{flexDirection:'row', alignItems:'center'}}>
                              <Image source={require('../../../assets/people-reply-image.png')}/>
                              <Text style={{fontSize:14, fontWeight:'500', color:'#B4BBC6', marginLeft:10}}>Reply</Text>
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
<View style={{height:100}} />

</ScrollView>
<View style={styles.addCommentView}>
  <TextInput
    ref={myTextInput}
    value={userMessage}
    onChangeText={(text) => {
      setUserMessage(text)
    }}
    placeholder="What's on your mind"
    placeholderTextColor={'#B2B7B9'}
    style={styles.input}
    multiline
  />
  <TouchableOpacity onPress={sendMessage} style={styles.sendButtonView}>
    <Text style={{fontSize:14, fontWeight:'500', color:'#fff'}}>Send</Text>
  </TouchableOpacity>
  </View>
  <RepliesModal
      isVisible={showRepliesModal}
      setIsVisible={setShowRepliesModal} 
      data={upData}
      setData={setupData}
      replyingTo={replyingTo}
      setReplyingTo={setReplyingTo}
      showAtUsername={showAtUsername}
      // startFromIndex={startFromIndex}
    />
    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({
  addCommentView:{
    position:'absolute', 
    bottom:20,
    width:'100%', 
    backgroundColor:'#fff', 
    padding:15, 
    flexDirection:'row',
    alignItems:'center', 
    justifyContent:'space-between',
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 3
    // },
    // shadowRadius: 1,
    // shadowOpacity: 0.3,
    // elevation: 5,
  },
  input: {
    paddingLeft: 20,
    fontSize: 14,
    fontWeight:'500',
    color:'#000',
    flex: 7
  },
  sendButtonView:{
    backgroundColor:'#0089CF', 
    paddingHorizontal:30, 
    paddingVertical:10, 
    borderRadius:5,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
export default PeopleComments 
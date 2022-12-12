import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  FlatList,
  Alert,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Keyboard
} from 'react-native';
import Modal from 'react-native-modal';
import { dimensions, Mycolors } from 'src/utility/Mycolors';
import VideoPlayer from 'react-native-video-player'

const RepliesModal = ({isVisible, setIsVisible, data, setData, replyingTo, setReplyingTo, showAtUsername, returnReplies = () => {}}) => {
    const [initialIndex, setInitialIndex] = useState(null)
    // let flatListRef = useRef();
    // const scrollRef = useRef({ flatListRef: undefined });
    const ref = useRef(null)
    const myTextInput = useRef()
    const [userMessage, setUserMessage] = useState('')
//   let refFlatList = null;
//   useEffect(()=>{
//         refFlatList.current && refFlatList.current.scrollToIndex({animated: true, index:10 })
//   },[])

const sendMessage = () => {
  if(userMessage?.trim()?.length === 0){
    return
  }
  if(replyingTo){
    const dataCopy = [...data]
    dataCopy.map(el=>{
      if(replyingTo === el.id){
        el.replies.push({
          id:99,
          name:'saurabh saneja',
          message: userMessage,
          time: '0 min',
          img: require('../../../../assets/people-sender-image.png'),
          isLiked: false
        })
        return el
      }
    })
    setData([...dataCopy])
  }else{
    const nextId = data?.length+1
    setData([...data, 
      {
        id: String(nextId),
        name: 'Saurabh Saneja',
        message:userMessage,
        time:'14 min',
        img:require('../../../../assets/comment-person-image.png'),
        isLiked: false,
        replies:[]
      },
    ])
  }
  Keyboard.dismiss()
  setUserMessage('')
  // setReplyingTo('')
  }
  // useEffect(()=>{
  //   ref.current && ref.current.scrollToIndex({index: initialIndex})
  // },[initialIndex])
  return (
    <Modal
      isVisible={isVisible}
      swipeDirection="down"
      onBackdropPress={() => setIsVisible(false)}
      onSwipeComplete={e => {
        setIsVisible(false);
      }}
      scrollTo={() => {}}
      scrollOffset={1}
      propagateSwipe={true}
      coverScreen={false}
      onModalWillShow={()=>{
        console.log('onShow showAtUsername', showAtUsername);
        if(showAtUsername){
          // setUserMessage(`@${item.name}`)
          setUserMessage(`@${data?.find(el=>el.id === replyingTo)?.name}`)
          myTextInput.current.focus()
        }
      }}
    //   onShow={()=>{
    //     scrollRef.current?.flatListRef.scrollToIndex(10);
    //   }}
      backdropColor="transparent"
      style={{
        justifyContent: 'flex-end',
        margin: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}>
      <View
        style={{
          height: '100%',
          backgroundColor: '#F8F8F8',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingVertical: 20,
        }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              alignSelf: 'center',
            }}>
            <TouchableOpacity onPress={() => setIsVisible(false)} style={{width:25, height:20, justifyContent:'center'}}>
              <Image source={require('../../../../assets/events_arrow.png')} style={{width:'100%',height:'100%',alignSelf:'center'}}/>
            </TouchableOpacity>
            <Text
              style={{
                color: '#455A64',
                fontWeight: '500',
                fontSize:14,
                marginBottom: 30,
                marginLeft: 20,
              }}>
              Replies
            </Text>
          </View>
          <View style={{width:'90%',alignSelf:'center', marginTop:20}}>
          {data?.filter(el=>el.id === replyingTo)?.map((item, index)=> 
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
                <TouchableOpacity onPress={()=>{setData(data.map((el, elIndex)=> index === elIndex ? {...el, isLiked: !item.isLiked} : el))}}>
                  <Image source={item.isLiked ? require('../../../../assets/people-unsel-heart.png') : require('../../../../assets/people-sel-heart.png')} style={{width:30, height:30}}/>
                </TouchableOpacity>
                <Text style={{fontSize:14, fontWeight:'500', color:'#B4BBC6', marginLeft:10}}>Like</Text>
              </View>
              <TouchableOpacity onPress={()=>{myTextInput.current.focus(); setUserMessage(`@${item.name}`); setReplyingTo(item.id)}} style={{flexDirection:'row', alignItems:'center'}}>
                <Image source={require('../../../../assets/people-reply-image.png')}/>
                <Text style={{fontSize:14, fontWeight:'500', color:'#B4BBC6', marginLeft:10}}>Reply</Text>
              </TouchableOpacity>
            </View>
          </View>
          )}
            <>
            {returnReplies(replyingTo)}
            </>
          </View>

          {/* <View style={{width:100,height:100}} /> */}
        </ScrollView>
      </View>
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
    </Modal>
  );
};
const styles = StyleSheet.create({
  flatlistMainView:{
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'space-between', 
    backgroundColor:'#fff', 
    paddingHorizontal:15, 
    paddingVertical:10,
    width:'90%', 
    borderTopLeftRadius:20, 
    borderTopRightRadius:20,
    alignSelf:'center' 
  },
  followingImageView:{
    flexDirection:'row', 
    alignItems:'center'
  },
  followingView:{
    justifyContent:'center',
    marginLeft:10
  },
  flatlistMainBottomView:{
    backgroundColor:'#fff', 
    paddingVertical:15, 
    paddingHorizontal:15,
    width:'90%', 
    borderBottomRightRadius:20, 
    borderBottomLeftRadius:20,
    alignSelf:'center'
  },
  flatlistBottomView:{
    flexDirection:'row', 
    alignItems:'center', 
    justifyContent:'space-between', 
  },
  text1:{
    fontSize:12, 
    fontWeight:'400', 
    color:'#455A64'
  },
  imageView:{
    width:'100%',
    height:200,
    backgroundColor:'#F8F8F8',
    alignSelf:'center'
  },
  rightButtonsView: {
    backgroundColor:'#F8F8F8',
    padding:10,
    borderRadius:20
  },
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
})
export default RepliesModal;
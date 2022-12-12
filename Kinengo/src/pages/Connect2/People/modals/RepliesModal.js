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
} from 'react-native';
import Modal from 'react-native-modal';
import { dimensions, Mycolors } from 'src/utility/Mycolors';
import VideoPlayer from 'react-native-video-player'

const RepliesModal = ({isVisible, setIsVisible, data, setData, replyingTo, returnReplies = () => {}}) => {
    const [initialIndex, setInitialIndex] = useState(null)
    // let flatListRef = useRef();
    // const scrollRef = useRef({ flatListRef: undefined });
    const ref = useRef(null)
//   let refFlatList = null;
//   useEffect(()=>{
//         refFlatList.current && refFlatList.current.scrollToIndex({animated: true, index:10 })
//   },[])
  useEffect(()=>{
    ref.current && ref.current.scrollToIndex({index: initialIndex})
  },[initialIndex])
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
      onShow={()=>setInitialIndex(startFromIndex)}
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
          {data?.filter(el=>el.id === replyingTo)?.map(item=> 
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
})
export default RepliesModal;
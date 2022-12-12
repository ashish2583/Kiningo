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
import { useNavigation } from '@react-navigation/native';

const PostsModal = ({isVisible, setIsVisible, data, startFromIndex = 0}) => {
    const navigation = useNavigation();  
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
            Posts
          </Text>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}>
          <View style={{width:'90%',alignSelf:'center', marginTop:20}}>
          {/* <View style={{alignItems: 'center'}}> */}
            <View style={{}}>
                    <FlatList
                  data={data}
                  showsHorizontalScrollIndicator={false}
                  numColumns={1}
                  style={{alignSelf:'center'}}
                  renderItem={({item,index})=>{
                    return(
                      <View style={{width:'100%', marginVertical:10, borderRadius:30, alignSelf:'center'}}>
          <View style={styles.flatlistMainView}>
            
            <View style={styles.followingImageView}>
              <TouchableOpacity onPress={()=>navigation.navigate('PeopleProfileScreen')}>
                <Image source={require('../../../../assets/people-following-person.png')}/>
              </TouchableOpacity>
              <View style={styles.followingView}>
              <TouchableOpacity onPress={()=>navigation.navigate('PeopleProfileScreen')}>
                <Text style={{fontSize:14, fontWeight:'600', color:'#455A64'}}>{item.name}</Text>       
              </TouchableOpacity>
                <Text style={{fontSize:13, fontWeight:'400', color:'#B2B7B9', marginTop:2}}>Following</Text>       
              </View>
            </View>

            <View style={{flexDirection:'row', alignItems:'center'}}>
              <View style={[styles.rightButtonsView, {marginRight:10}]}>
                <Image source={require('../../../../assets/people-three-dots.png')} style={{width:20, height:20}} resizeMode='contain'/>
              </View>
              <View style={styles.rightButtonsView}>
                <Image source={require('../../../../assets/people-bookmark.png')} style={{width:20, height:20}} resizeMode='contain'/>
              </View>
            </View>
                      
          </View>
          {item.type === 'image' ? 
          <TouchableOpacity style={styles.imageView}
          // onPress={()=>{navigation.navigate('FoodDetails')}}>
          onPress={()=>{}}>
            <Image
              source={item.source}
              style={{
                width: '100%',
                height: '100%',
                alignSelf: 'center',
              }}
              resizeMode="cover"></Image>
          {/* <Image source={item.source} style={{width:'100%',height:'100%',alignSelf:'center',}}></Image> */}
          </TouchableOpacity>
          : 
          <VideoPlayer
            video={{uri: item.source}}
            videoWidth={dimensions.SCREEN_WIDTH*0.9}
            videoHeight={300}
            thumbnail={{uri: item.thumbnail}}
            endWithThumbnail
            disableControlsAutoHide
            customStyles={{
              thumbnail: {width: dimensions.SCREEN_WIDTH*0.9, height:300},
              // videoWrapper: {width: dimensions.SCREEN_WIDTH, height:300},
              wrapper: {alignSelf:'center'},
            }}
          />
            }
          <View style={styles.flatlistMainBottomView}>            
            
            <View style={styles.flatlistBottomView}>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <TouchableOpacity onPress={()=>{true ? navigation.navigate('PeopleMessages') : navigation.navigate('PeopleFollowers')}} style={{marginRight:10}}>
                  <Image source={require('../../../../assets/people-like.png')} style={{width:25, height:25}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('PeopleComments')} style={{marginRight:10}}>
                  <Image source={require('../../../../assets/people-comment.png')} style={{width:25, height:25}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('PeopleChat')} style={{marginRight:10}}>
                  <Image source={require('../../../../assets/people-message.png')} style={{width:25, height:25}}/>
                </TouchableOpacity>
              </View>
              <Text style={styles.text1}>183K views</Text>
            </View>

            <View style={{flexDirection:'row', alignItems:'center', marginTop:10}}>
                <Image source={require('../../../../assets/people-liked-by.png')} style={{width:30, height:30}} resizeMode='contain'/>
                <Text style={[styles.text1, {marginLeft:10}]}>Liked by Jerry paul and 23.3 K others</Text>
            </View>

            <View style={{marginTop:10}}>
              <Text style={styles.text1}>Amazing football shorts caption this<Text style={{color:'#B2B7B9'}}>…More</Text></Text>
            </View>

            <TouchableOpacity onPress={()=>navigation.navigate('PeopleComments')} style={{marginTop:5}}>
              <Text style={{fontSize:12, fontWeight:'400', color:'#0089CF'}}>View all 183 comments</Text>
            </TouchableOpacity>

            <View style={{marginTop:10}}>
              <Text style={{fontSize:10, fontWeight:'400', color:'#B2B7B9'}}>23 min ago</Text>
            </View>
          </View>
          </View>
                    )
                  }}
                  keyExtractor={item => item.id}
                />
            </View>
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
    // width:'90%', 
    width:dimensions.SCREEN_WIDTH*0.9, 
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
    // width:'90%', 
    width:dimensions.SCREEN_WIDTH*0.9, 
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
export default PostsModal;
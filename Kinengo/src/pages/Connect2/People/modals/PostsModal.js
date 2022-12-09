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

const PostsModal = ({isVisible, setIsVisible, data, startFromIndex = 0}) => {
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
          backgroundColor: '#fff',
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
              justifyContent: 'space-between',
              width: '90%',
              alignSelf: 'center',
            }}>
            <Text
              style={{
                color: Mycolors.Black,
                fontWeight: '500',
                marginBottom: 30,
                marginTop: 10,
              }}>
              Posts Modal
            </Text>
            <TouchableOpacity onPress={() => setIsVisible(false)}>
              <Text style={{color: 'red', fontSize: 16, fontWeight: '400'}}>
                Close
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{alignItems: 'center'}}>
            <View style={{}}>
              <FlatList
                initialScrollIndex={initialIndex}
                getItemLayout={(data, index) => ({
                  length: 500,
                  offset: 500 * index,
                  index,
                })}
                data={data}
                // initialScrollIndex={initialIndex}
                showsHorizontalScrollIndicator={false}
                numColumns={1}
                style={{alignSelf: 'center'}}
                renderItem={({item, index}) => {
                  return (
                    <View
                      style={{
                        width: 200,
                        marginHorizontal: 5,
                        height: 100,
                        marginVertical: 10,
                      }}>
                      <TouchableOpacity
                        style={{
                          width: '100%',
                          height: 'auto',
                          backgroundColor: '#F8F8F8',
                          alignSelf: 'center',
                        }}
                        onPress={() => {}}>
                        {item.type === 'image' ? (
                          <Image
                            source={item.source}
                            style={{
                              width: '100%',
                              height: '100%',
                              alignSelf: 'center',
                            }}
                            resizeMode="contain"></Image>
                        ) : (
                          <VideoPlayer
                            video={{uri: item.source}}
                            videoWidth={1600}
                            videoHeight={900}
                            thumbnail={{uri: item.thumbnail}}
                          />
                        )}
                      </TouchableOpacity>
                    </View>
                  );
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

export default PostsModal;
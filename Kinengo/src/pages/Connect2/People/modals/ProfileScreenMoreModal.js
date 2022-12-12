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
import ReadMoreComponent from '../Components/ReadMoreComponent'

const ProfileScreenMoreModal = ({isVisible, setIsVisible}) => {
    const navigation = useNavigation();  
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
      backdropColor="transparent"
      style={{
        justifyContent: 'flex-end',
        margin: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
      }}>
      <View
        style={{
          height: '30%',
          backgroundColor: '#FFF',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingVertical: 20,
        }}>
        {/* <View
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
            Go to
          </Text>
        </View> */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}>
          <View style={{width:'90%',alignSelf:'center', marginTop:20}}>
            <View style={{backgroundColor:'#F8F8F8', paddingHorizontal:10, paddingVertical:20, borderRadius:10}}>
                <TouchableOpacity style={{marginHorizontal:20, flexDirection:'row', alignItems:'center'}} onPress={()=>{navigation.navigate('PeopleSaved')}}>
                <Image source={require('../../../../assets/people-bookmark.png')} style={{width:20, height:20}} resizeMode='contain'/>
                    <Text style={styles.link}>Saved Screen</Text>
                </TouchableOpacity>
            </View>
          </View>

          <View style={{width:100,height:100}} />
        </ScrollView>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  link:{
    fontSize:16, 
    fontWeight:'400', 
    color:'#455A64',
    marginLeft:10
  }
})
export default ProfileScreenMoreModal;
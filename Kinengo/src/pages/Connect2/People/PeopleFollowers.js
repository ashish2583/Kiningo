import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground, Keyboard} from 'react-native';
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
import LinearGradient from 'react-native-linear-gradient'

const image1 = require('../../../assets/people-following-person.png')
const image2 = require('../../../assets/people-sender-image.png')

const PeopleFollowers = (props) => {
  const [searchValue,setsearchValue]=useState('')
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const myTextInput = useRef()
  const [userMessage, setUserMessage] = useState('')
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
  const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
  const [upData,setupData]=useState([
    {
      id: '1',
      name: 'Chetan Manne',
      img: require('../../../assets/comment-person-image.png'),
      numFollowers: '1.1M', 
      numFollowing: '536',
      numPosts: '12K' 
    },
    {
      id: '2',
      name: 'Parth Shinge',
      img: require('../../../assets/comment-person-image.png'),
      numFollowers: '1.1M', 
      numFollowing: '536',
      numPosts: '12K' 
    },
    {
      id: '3',
      name: 'Naumika Nair',
      img: require('../../../assets/comment-person-image.png'),
      numFollowers: '1.1M', 
      numFollowing: '536',
      numPosts: '12K' 
    },
  ])


  return(
    <SafeAreaView scrollEnabled={scrollEnabled} style={{backgroundColor:'#F8F8F8'}}>
      <ScrollView>
<View style={{flexDirection:'row', alignItems:'center', height:80, backgroundColor:'#fff',padding:20, borderBottomLeftRadius:25, borderBottomRightRadius:25}}>
  <TouchableOpacity onPress={()=>{props.navigation.goBack()}}>
    <Image source={require('../../../assets/events_arrow.png')} style={{width:25, height:20}}/>
  </TouchableOpacity>
  <Image source={image1} style={{marginLeft:10, height:28, width:28}}/>
  <Text style={{fontSize:14, fontWeight:'600', color:'#455A64', marginLeft:10}}>Aryav Nadkarni (followers screen)</Text>
</View>
<View style={{width:'90%',alignSelf:'center', marginTop:20}}>
  

<View style={{width:'100%',alignSelf:'center',marginTop:20, backgroundColor:'#F8F8F8'}}>
          <FlatList
                  data={upData}
                  showsHorizontalScrollIndicator={false}
                  numColumns={1}
                  renderItem={({item,index})=>{
                    return(
                      <View style={{width:dimensions.SCREEN_WIDTH,marginHorizontal:5, marginBottom:20}}>
                        <LinearGradient
                          colors={['rgba(255, 255, 255, 1)', 'rgba(249, 249, 249, 1)']}
                          style={{flex: 1,}}
                        >
                        <View style={styles.flatlistMainView}>
                          <Image source={item.img}/>
                          <View style={{marginLeft:10, justifyContent:'space-between'}}>
                            <Text style={{fontSize:14, fontWeight:'500', color:'#455A64'}}>{item.name}</Text>
                            <View style={styles.numberView}>
                              <Text style={styles.numberStyle}>{item.numFollowers} followers</Text>
                              <Text style={[styles.numberStyle, {marginLeft:10}]}>{item.numFollowing} following</Text>
                              <Text style={[styles.numberStyle, {marginLeft:10}]}>{item.numPosts} posts</Text>
                            </View>
                          </View>

                        </View>
                        </LinearGradient>
                      </View>
                    )
                  }}
                  keyExtractor={item => item.id}
                />
         </View>






 </View>
<View style={{height:100}} />

</ScrollView>

    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({
  flatlistMainView:{
    flexDirection:'row', 
    backgroundColor:'#fff', 
    padding:10, 
    borderRadius:10
  },
  numberView:{
    flexDirection:'row', 
    alignItems:'center', 
    flexWrap: 'wrap'
  },
  numberStyle:{
    fontSize:14, 
    fontWeight:'300', 
    color:'#000'
  }
});
export default PeopleFollowers 
import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground, ImageEditor} from 'react-native';
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

const PeopleComments = (props) => {
  const [searchValue,setsearchValue]=useState('')
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const myTextInput = useRef()
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
  const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
  const [userMessage, setUserMessage] = useState('')
  const [upData,setupData]=useState([
    {
      id: '1',
      name: 'Aryav Nadkarni',
      message:`That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.`,
      time:'14 min',
      img:require('../../../assets/comment-person-image.png'),
      isLiked: true
    },
    {
      id: '2',
      name: 'Aryav Nadkarni',
      message:`That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.`,
      time:'14 min',
      img:require('../../../assets/comment-person-image.png'),
      isLiked: false
    },
    {
      id: '3',
      name: 'Aryav Nadkarni',
      message:`That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.`,
      time:'14 min',
      img:require('../../../assets/comment-person-image.png'),
      isLiked: true
    },
    {
      id: '4',
      name: 'Aryav Nadkarni',
      message:`That's a fantastic new app feature. You and your team did an excellent job of incorporating user testing feedback.`,
      time:'14 min',
      img:require('../../../assets/comment-person-image.png'),
      isLiked: true
    },

  ])
  const multiSliderValuesChange = (values) => {setMultiSliderValue(values)}
  useEffect(()=>{

 },[])


  return(
    <SafeAreaView scrollEnabled={scrollEnabled} style={{backgroundColor:'#fff'}}>
      <ScrollView>
    <HomeHeaderRoundBottom height={80}  paddingHorizontal={15} backgroundColor='#fff'
   press1={()=>{props.navigation.goBack()}} img1={require('../../../assets/events_arrow.png')} img1width={25} img1height={20} 
   press2={()=>{}} title2={'20 Comments'} fontWeight={'500'} img2height={20} color='#455A64'
   press3={()=>{}} img3width={25} img3height={25} />
<View style={{width:'90%',alignSelf:'center', marginTop:20}}>
  

<View style={{width:'100%',alignSelf:'center',}}>
          <FlatList
                  data={upData}
                  showsHorizontalScrollIndicator={false}
                  numColumns={1}
                  renderItem={({item,index})=>{
                    return(
                      <View style={{width:dimensions.SCREEN_WIDTH*0.9,marginHorizontal:5, marginBottom:15, paddingHorizontal:20}}>
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
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                              <Image source={require('../../../assets/people-reply-image.png')}/>
                              <Text style={{fontSize:14, fontWeight:'500', color:'#B4BBC6', marginLeft:10}}>Reply</Text>
                            </View>
                          </View>
                        </View>
                        <View style={{borderBottomColor: '#E0E0E0', borderBottomWidth: 1, marginTop:10}}/>
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
    value={userMessage}
    onChangeText={(text) => {
      setUserMessage(text)
    }}
    placeholder="What's on your mind"
    placeholderTextColor={'#B2B7B9'}
    style={styles.input}
    multiline
  />
  <TouchableOpacity style={styles.sendButtonView}>
    <Text style={{fontSize:14, fontWeight:'500', color:'#fff'}}>Send</Text>
  </TouchableOpacity>
  </View>
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
    flex: 6
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
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

const image1 = require('../../../assets/people-following-person.png')
const image2 = require('../../../assets/people-sender-image.png')

const DatingChat = (props) => {
  const [searchValue,setsearchValue]=useState('')
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const myTextInput = useRef()
  const [userMessage, setUserMessage] = useState('')
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
  const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
  const [upData,setupData]=useState([
    {
      id: '1',
      message: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      me: false,
      time: '12:50 pm'
    },
    {
      id: '2',
      message: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      me: false,
      time: '12:51 pm'
    },
    {
      id: '2',
      message: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      me: true,
      time: '12:51 pm'
    },
    {
      id: '2',
      message: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      me: false,
      time: '12:51 pm'
    },
    {
      id: '2',
      message: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...',
      me: true,
      time: '12:51 pm'
    },

  ])
  const sendMessage = () => {
    if(userMessage?.trim()?.length === 0){
      return
    }
    const lastId = upData?.length
    setupData([...upData, {
      id:String(lastId+1),
      message: userMessage,
      me: true,
      time: '6:00 pm'
    }])
    Keyboard.dismiss()
    setUserMessage('')
   }
  const multiSliderValuesChange = (values) => {setMultiSliderValue(values)}
  useEffect(()=>{

 },[])


  return(
    <SafeAreaView scrollEnabled={scrollEnabled} style={{backgroundColor:'#F8F8F8'}}>
      <ScrollView>
<View style={{flexDirection:'row', alignItems:'center', height:80, backgroundColor:'#fff',padding:20, borderBottomLeftRadius:25, borderBottomRightRadius:25}}>
  <TouchableOpacity onPress={()=>{props.navigation.goBack()}}>
    <Image source={require('../../../assets/events_arrow.png')} style={{width:25, height:20}}/>
  </TouchableOpacity>
  <Image source={image1} style={{marginLeft:10, height:28, width:28}}/>
  <Text style={{fontSize:14, fontWeight:'600', color:'#455A64', marginLeft:10}}>Aryav Nadkarni</Text>
</View>
<View style={{width:'90%',alignSelf:'center', marginTop:20}}>
  

<View style={{width:'100%',alignSelf:'center',marginTop:20, backgroundColor:'#F8F8F8'}}>
          <FlatList
                  data={upData}
                  showsHorizontalScrollIndicator={false}
                  numColumns={1}
                  renderItem={({item,index})=>{
                    return(
                      <View style={{width:'100%', marginBottom:20}}>
                        {item.me ?
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:2.5}}/>
                            <View style={{flex:5.5}}>
                            <View style={{backgroundColor: '#e42f5e', marginLeft:10, padding:10, borderRadius:15,}}>
                                <Text style={styles.rightMessage}>{item.message}</Text>
                              </View>
                                <Text style={{fontSize:10, fontWeight:'400', color:'#e42f5e', marginTop:2, textAlign:'right'}}>{item.time}</Text>
                            </View>
                        </View>
                        :
                        <View style={{flexDirection:'row'}}>
                            <View style={{flex:5.5}}>
                            <View style={{backgroundColor: '#fff', marginLeft:10, padding:10, borderRadius:15,}}>
                                <Text style={styles.leftMessage}>{item.message}</Text>
                              </View>
                                <Text style={{fontSize:10, fontWeight:'400', color:'#e42f5e', marginTop:2, textAlign:'right'}}>{item.time}</Text>
                            </View>
                            <View style={{flex:2.5}}/>
                        </View>
                        }
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
    placeholder="Type a message"
    placeholderTextColor={'#B2B7B9'}
    style={styles.input}
    multiline
  />
  <TouchableOpacity onPress={sendMessage} style={styles.sendButtonView}>
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
    flex: 7
  },
  sendButtonView:{
    backgroundColor:'#0089CF', 
    paddingHorizontal:30, 
    paddingVertical:10, 
    borderRadius:20,
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  leftMessage:{
    fontSize:13, 
    fontWeight:'400', 
    color:'#455A64'
},
  rightMessage:{
    fontSize:13, 
    fontWeight:'400', 
    color:'#fff'
},
});
export default DatingChat 
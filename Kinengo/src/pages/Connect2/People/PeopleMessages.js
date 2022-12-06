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

const PeopleMessages = (props) => {
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
      isOnline: true,
      message:'Nice video jane liked…. Recent message short preview',
      img: require('../../../assets/comment-person-image.png'),
    },
    {
      id: '1',
      name: 'Chetan Manne',
      isOnline: false,
      message:'Nice video jane liked…. Recent message short preview',
      img: require('../../../assets/comment-person-image.png'),
    },
    {
      id: '1',
      name: 'Chetan Manne',
      isOnline: true,
      message:'Nice video jane liked…. Recent message short preview',
      img: require('../../../assets/comment-person-image.png'),
    },
    {
      id: '1',
      name: 'Chetan Manne',
      isOnline: false ,
      message:'Nice video jane liked…. Recent message short preview',
      img: require('../../../assets/comment-person-image.png'),
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
  <Text style={{fontSize:14, fontWeight:'600', color:'#455A64', marginLeft:10}}>Aryav Nadkarni (messages)</Text>
</View>
<View style={{width:'90%',alignSelf:'center', marginTop:20}}>
  

<View style={styles.searchView}>
    <View style={styles.searchLeftSubView}>
      <TextInput
        placeholder="Search"
        placeholderTextColor={'#B2B7B9'} 
        style={styles.input}
      />
    </View>
    
    <Image source={require('../../../assets/people-search.png')} style={{width:50, height:50}}/>
  </View>

<View style={{width:'100%',alignSelf:'center',marginTop:20, backgroundColor:'#F8F8F8'}}>
          <FlatList
                  data={upData}
                  showsHorizontalScrollIndicator={false}
                  numColumns={1}
                  renderItem={({item,index})=>{
                    return(
                      <View style={{width:'100%',marginHorizontal:5, marginBottom:20}}>
                        <LinearGradient
                          colors={['rgba(255, 255, 255, 1)', 'rgba(249, 249, 249, 1)']}
                          style={styles.flatlistMainView}
                        >
                        {/* <View style={styles.flatlistMainView}> */}
                          <View>
                            <Image source={item.img} style={{width:50, height:50}}/>
                            {item.isOnline ?
                            <View style={{backgroundColor:'#29913C', width:9, height:9, position:'absolute', borderRadius:4.5, left:47, top:50/2, borderWidth:1, borderColor:'#fff'}}/>
                            :null}  
                            </View>
                          <View style={{marginLeft:10, justifyContent:'space-between'}}>
                            <Text style={{fontSize:14, fontWeight:'500', color:'#455A64'}}>{item.name}</Text>
                            <View style={{width:'95%'}}>
                              <Text style={styles.numberStyle}>{item.message}</Text>
                            </View>
                          </View>

                        {/* </View> */}
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
    // backgroundColor:'#fff', 
    paddingVertical:15, 
    paddingHorizontal:10, 
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
  },
  searchView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    height:50,
  },
  searchLeftSubView:{
    width:'83%',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#fff',
    paddingVertical:5, 
    paddingLeft:10, 
    borderRadius:10,
  },
  input: {
    paddingLeft: 10,
    fontSize: 14,
    fontWeight:'300',
    color:'#000',
    flex: 7
  },
});
export default PeopleMessages 
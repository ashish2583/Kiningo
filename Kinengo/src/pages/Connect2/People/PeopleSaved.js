import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
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
import ViewMoreText from 'react-native-view-more-text';
import ReadMoreComponent from './Components/ReadMoreComponent';

const PeopleSaved = (props) => {
  const [searchValue,setsearchValue]=useState('')
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const myTextInput = useRef()
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
  const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
  const [upData,setupData]=useState([
    {
      id: '1',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '2',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '3',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '4',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      img:require('../../../assets/images/images.png'),
    },

  ])
  const multiSliderValuesChange = (values) => {setMultiSliderValue(values)}
  useEffect(()=>{

 },[])


  return(
    <SafeAreaView scrollEnabled={scrollEnabled} style={{backgroundColor:'#F8F8F8'}}>
      <ScrollView>
    <HomeHeaderRoundBottom height={80}  paddingHorizontal={15} backgroundColor='#fff'
   press1={()=>{props.navigation.goBack()}} img1={require('../../../assets/events_arrow.png')} img1width={25} img1height={20} 
   press2={()=>{}} title2={'Saved'} fontWeight={'500'} img2height={20} color='#455A64'
   press3={()=>{}} img3width={25} img3height={25} borderBottomLeftRadius={25} borderBottomRightRadius={25} />
<View style={{width:'90%',alignSelf:'center', marginTop:20}}>
  

<View style={{marginTop:10}}>
          <FlatList
                  data={upData}
                  showsHorizontalScrollIndicator={false}
                  numColumns={1}
                  style={{alignSelf:'center'}}
                  renderItem={({item,index})=>{
                    return(
                      <View style={{width:'100%', marginVertical:10, borderRadius:30}}>
          <View style={styles.flatlistMainView}>
            
            <View style={styles.followingImageView}>
              <TouchableOpacity onPress={()=>props.navigation.navigate('PeopleProfileScreen')}>
                <Image source={require('../../../assets/people-following-person.png')}/>
              </TouchableOpacity>
              <View style={styles.followingView}>
              <TouchableOpacity onPress={()=>props.navigation.navigate('PeopleProfileScreen')}>
                <Text style={{fontSize:14, fontWeight:'600', color:'#455A64'}}>{item.name}</Text>       
              </TouchableOpacity>
                <Text style={{fontSize:13, fontWeight:'400', color:'#B2B7B9', marginTop:2}}>Following</Text>       
              </View>
            </View>

            <View style={{flexDirection:'row', alignItems:'center'}}>
              <View style={[styles.rightButtonsView, {marginRight:10}]}>
                <Image source={require('../../../assets/people-three-dots.png')} style={{width:20, height:20}} resizeMode='contain'/>
              </View>
              <View style={styles.rightButtonsView}>
                <Image source={require('../../../assets/people-bookmark.png')} style={{width:20, height:20}} resizeMode='contain'/>
              </View>
            </View>
                      
          </View>
          <TouchableOpacity style={{width:dimensions.SCREEN_WIDTH,height:200,backgroundColor:'#F8F8F8',alignSelf:'center'}}
          // onPress={()=>{props.navigation.navigate('FoodDetails')}}>
          onPress={()=>{props.navigation.navigate('ShopProductAll')}}>
          <Image source={item.img} style={{width:'100%',height:'100%',alignSelf:'center',}}></Image>
          </TouchableOpacity>

          <View style={styles.flatlistMainBottomView}>            
            
            <View style={styles.flatlistBottomView}>
              <View style={{flexDirection:'row', alignItems:'center'}}>
                <TouchableOpacity onPress={()=>{true ? props.navigation.navigate('PeopleMessages') : props.navigation.navigate('PeopleFollowers')}} style={{marginRight:10}}>
                  <Image source={require('../../../assets/people-like.png')} style={{width:25, height:25}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.navigation.navigate('PeopleComments')} style={{marginRight:10}}>
                  <Image source={require('../../../assets/people-comment.png')} style={{width:25, height:25}}/>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>props.navigation.navigate('PeopleMessages')} style={{marginRight:10}}>
                  <Image source={require('../../../assets/people-message.png')} style={{width:25, height:25}}/>
                </TouchableOpacity>
              </View>
              <Text style={styles.text1}>183K views</Text>
            </View>

            <View style={{flexDirection:'row', alignItems:'center', marginTop:10}}>
                <Image source={require('../../../assets/people-liked-by.png')} style={{width:30, height:30}} resizeMode='contain'/>
                <Text style={[styles.text1, {marginLeft:10}]}>Liked by Jerry paul and 23.3 K others</Text>
            </View>

            <View style={{flex:1}}>
              {/* <Text style={styles.text1}>Amazing football shorts caption this<Text style={{color:'#B2B7B9'}}>…More</Text></Text> */}
              <ReadMoreComponent text={`Amazing football shorts caption this Amazing football shorts caption this Amazing football shorts caption this Amazing football shorts caption this Amazing football shorts caption this Amazing football shorts caption this Amazing football shorts caption this `}/>
            </View>

            <TouchableOpacity onPress={()=>props.navigation.navigate('PeopleComments')} style={{marginTop:5}}>
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
<View style={{height:100}} />

</ScrollView>
    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({
  topButtonView:{
    justifyContent:'center',
    alignItems:'center',  
    backgroundColor:'#fff',
    borderRadius:20,
    paddingHorizontal:15,
    paddingVertical:10,
    shadowColor: '#0089CF',
    shadowOffset: {width: 0,height: 3},
    shadowRadius: 1,
    shadowOpacity: 0.1,
    elevation: 5,
  },
  createPostView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'100%',
    height:50,
  },
  createPostLeftSubView:{
    width:'83%',
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'#fff',
    paddingVertical:5, 
    paddingLeft:10, 
    borderRadius:10,
  },
  createPostText:{
    color:'#B2B7B9',
    fontSize:14,
    fontWeight:'300',
    marginLeft:10
  },
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
  },
  rightButtonsView: {
    backgroundColor:'#F8F8F8',
    padding:10,
    borderRadius:20
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
    paddingHorizontal:20, 
    width:'90%', 
    borderBottomRightRadius:20, 
    borderBottomLeftRadius:20
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
  }
});
export default PeopleSaved 
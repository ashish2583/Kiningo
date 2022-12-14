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
// import ReadMoreComponent from './Components/ReadMoreComponent';

const PeopleHome = (props) => {
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
      isSaved: false,
      isLiked: false
    },
    {
      id: '2',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      img:require('../../../assets/images/images.png'),
      isSaved: false,
      isLiked: false
    },
    {
      id: '3',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      img:require('../../../assets/images/images.png'),
      isSaved: false,
      isLiked: false
    },
    {
      id: '4',
      name: 'Aryav Nadkarni',
      desc:'Amazing footbal shorts caption this',
      numViews:'183K',
      numComments:'183',
      time:'',
      img:require('../../../assets/images/images.png'),
      isSaved: false,
      isLiked: false
    },

  ])
  const multiSliderValuesChange = (values) => {setMultiSliderValue(values)}
  useEffect(()=>{

 },[])

 const changeSaved = (id) => {
  const updataCopy = [...upData]
  const updatedData = updataCopy?.map(el=>el.id === id ? {...el, isSaved: !el.isSaved }: el)
  setupData([...updatedData])
 }
 const changeLiked = (id) => {
  const updataCopy = [...upData]
  const updatedData = updataCopy?.map(el=>el.id === id ? {...el, isLiked: !el.isLiked }: el)
  setupData([...updatedData])
 }

  return(
    <SafeAreaView scrollEnabled={scrollEnabled} style={{backgroundColor:'#F8F8F8'}}>
      <ScrollView>
<View style={{width:'90%',alignSelf:'center', marginTop:20}}>
  
  <View style={{flexDirection:'row', alignItems:'center'}}>
    <View style={{flex:1, flexDirection:'row', justifyContent:'flex-start', alignItems:'center'}}>
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <Image source={require('../../../assets/people-following-person.png')} style={{height:40, width:40, borderRadius:20, borderColor:'#e42f5e', borderWidth:2}}/>
        </View>
    </View>
    <View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize:12.5, color:'#31313f'}}>Personal connect</Text>
    </View>
    <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end', alignItems:'center'}}>
        <Image source={require('../../../assets/dating-home-header-right-image.png')}/>
    </View>

  </View>

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
              <TouchableOpacity onPress={()=>{changeSaved(item.id)}} style={styles.rightButtonsView}>
                <Image source={!item.isSaved ? require('../../../assets/people-bookmark.png') : require('../../../assets/people-bookmark-selected.png')} style={{width:20, height:20}} resizeMode='contain'/>
              </TouchableOpacity>
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
                <TouchableOpacity onPress={()=>{changeLiked(item.id)}} style={{marginRight:10}}>
                  <Image source={item.isLiked ? require('../../../assets/people-sel-heart.png') : require('../../../assets/people-like.png')} style={{width:25, height:25}}/>
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
              {/* <ReadMoreComponent text={`Amazing football shorts caption this Amazing football shorts caption this Amazing football shorts caption this Amazing football shorts caption this Amazing football shorts caption this Amazing football shorts caption this Amazing football shorts caption this `}/> */}
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
<Modal
        isVisible={showChooseMilesModal}
        swipeDirection="down"
        onBackdropPress={()=>setShowChooseMilesModal(false)}
        onSwipeComplete={(e) => {
          setShowChooseMilesModal(false)
        }}
          scrollTo={() => {}}
          scrollOffset={1}
          propagateSwipe={true}
        coverScreen={false}
        backdropColor='transparent'
        style={{ justifyContent: 'flex-end', margin: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <View style={{ height: '50%', backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20 }}>
          <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
          <View style={{alignItems:'center'}}>
            <Text style={{color:Mycolors.Black,fontWeight:'500', marginBottom:30, marginTop:10}}>Choose Miles</Text>
            <MultiSlider
            // values={[multiSliderValue[0], multiSliderValue[1]]}
            values={[multiSliderValue[0]]}
            sliderLength={320}
            onValuesChange={multiSliderValuesChange}
            min={0}
            max={100}
            step={1}
            allowOverlap={false}
            minMarkerOverlapDistance={10}
            markerStyle={{
              ...Platform.select({
                ios: {
                  height: 30,
                  width: 30,
                  shadowColor: '#000000',
                  shadowOffset: {
                    width: 0,
                    height: 3
                  },
                  shadowRadius: 1,
                  shadowOpacity: 0.1,
                  borderColor:'#ED1C24',
                  borderWidth:1
                },
                android: {
                  height: 30,
                  width: 30,
                  borderRadius: 50,
                  backgroundColor: '#fff',
                  borderColor:'#ED1C24',
                  borderWidth:1
                }
              })
            }}
            pressedMarkerStyle={{
              ...Platform.select({
                android: {
                  height: 30,
                  width: 30,
                  borderRadius: 20,
                  backgroundColor: '#ED1C24'
                }
              })
            }}
            selectedStyle={{backgroundColor: '#ED1C24'}}
            trackStyle={{
              height:5
            }}
            touchDimensions={{
              height: 40,
              width: 40,
              borderRadius: 20,
              slipDisplacement: 40
            }}
            />
            <View style={{flexDirection:'row', alignItems:'center', width:'95%',
                  height:60,
                  paddingHorizontal:20,
                  backgroundColor:'#fff',
                  alignSelf:'center',
                  shadowColor: 'rgba(0, 0, 0, 0.5)',
                  shadowOffset: {
                    width: 0,
                    height: 3
                  },
                  shadowRadius: 1,
                  shadowOpacity: 0.1,
                  // overflow: 'hidden',
                  elevation: 5,
                  marginTop:30,
                  marginBottom:30,}}>
            <TextInput
                ref={myTextInput}
                value={String(multiSliderValue[0])}
                onChangeText={(e) => {
                  const value = e.replace(/[^0-9]/g, '')
                  if(Number(value) > 100){
                    Toast.show('Miles cannot be more than 100', Toast.SHORT)
                  }else if(Number(value) < 0){
                    Toast.show('Miles cannot be less than 0', Toast.SHORT)
                  } else{
                    multiSliderValuesChange([Number(value)])
                  }
                }}
                textAlignVertical={'center'}
                // onChangeText={(e) => console.log('e', e)}
                placeholder={'0'}
                placeholderTextColor="#263238"
                multiline={true}
              // maxLength={500}
              // keyboardType="number-pad"
                autoCapitalize = 'none'
                style={{
                  color:'#263238',
                  fontSize:12,
                  fontWeight:'500'
                }}
                keyboardType='numeric'
              />
              <Text onPress={()=>{myTextInput.current.focus()}} style={{color:'#263238', fontSize:12, fontWeight:'500'}}> miles</Text>
              </View>
            {/* <Text style={{color:Mycolors.GrayColor,fontWeight:'600',fontSize:12,marginTop:9}} >{multiSliderValue[0]} miles</Text> */}
          </View>
        
          <View style={{width:'95%',alignSelf:'center'}}>
          <MyButtons title="Save" height={50} width={'100%'} borderRadius={5} alignSelf="center" press={()=>{props.navigation.navigate('ShopPayment')}} marginHorizontal={20} fontSize={11}
          titlecolor={Mycolors.BG_COLOR} backgroundColor={'#FFD037'} marginVertical={0} />
          </View>

            {/* <View style={{width:100,height:100}} /> */}
            </ScrollView>
           
            </View>
</Modal>
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
export default PeopleHome 
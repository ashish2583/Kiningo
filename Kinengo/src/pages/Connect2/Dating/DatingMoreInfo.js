import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import HomeHeaderRoundBottom from 'src/component/HomeHeaderRoundBottom';
import HomeHeader from 'src/component/HomeHeader';
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

const DatingMoreInfo = (props) => {
  const [searchValue,setsearchValue]=useState('')
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const myTextInput = useRef()
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
  const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
  const [passionValues, setPassionsValues] = useState([
    {id:'1',name:'Travelling', mutual: true}, 
    {id:'2',name:'Books', mutual: true}, 
    {id:'3',name:'Music', mutual: false}, 
    {id:'4',name:'Dancing', mutual: false}, 
    {id:'5',name:'Modelling', mutual: false},
  ])
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
    <SafeAreaView scrollEnabled={scrollEnabled} style={{backgroundColor:'#fff5f7', height:'100%'}}>
      <ScrollView>
<View style={{width:'100%',alignSelf:'center'}}>
  <ImageSlider 
    //  localImg={true}
    data={[
        // require('../../assets/Group75972.png'),
        {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'},
        {img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
    ]}
   // onClick={(item, index) => {alert('hello'+index)}}
    // autoPlay={true}
   // onItemChanged={(item) => console.log("item", item)}
      indicatorContainerStyle={{bottom:70}}
      caroselImageStyle={{height:400}}
      closeIconColor="#fff"
  />
</View>
<TouchableOpacity onPress={()=>{props.navigation.goBack()}} style={{position:'absolute', top:40, left:20,}}>
  <Image source={require('../../../assets/dating-white-back-button.png')} style={{width:25, height:15}} resizeMode='contain'/>
</TouchableOpacity>
<View style={{width:'90%',alignSelf:'center', marginTop:20}}>

 <View style={{backgroundColor:'#fff5f7', padding:20}}>
  <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',}}>
    <View>
      <Text style={{fontSize:15, color:'#31313f', fontWeight:'bold',}}>Mary Burgees, 23</Text>
      {/* <Text style={{fontSize:10, color:'#e10f51', marginTop:5}}>@marry</Text> */}
      <Text style={{fontSize:10, color:'#4a4c52', marginTop:5}}>Professional model</Text>
    </View>
    <View style={{justifyContent:'center',alignItems:'center', width:40, height:40,borderRadius:10, backgroundColor:'#fff', shadowColor: '#0089CF',shadowOffset: {width: 0,height: 3},shadowRadius: 1,shadowOpacity: 0.1,elevation: 2}}>
      <Image source={require('../../../assets/dating-home-header-right-image.png')} style={{width:20, height:20}}/>
    </View>
    
  </View>   
  <View style={{marginTop:20}}/>
    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
      <View>
        <Text style={{fontSize:12, color:'#31313f', fontWeight:'bold'}}>Location</Text>
        <Text style={{fontSize:10, color:'#4a4c52'}}>Chicago, IL, United States</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',backgroundColor:'rgba(255, 73, 137, 0.13)', width:80,height:30,borderRadius:15, paddingHorizontal:10, shadowColor: 'rgba(255, 73, 137)',shadowOffset: {width: 0,height: 3},shadowRadius: 1,shadowOpacity: 0.13,elevation: 2}}>
        <Image source={require('../../../assets/dating-maptrifold.png')} style={{width:20, height:20}}/>
        <Text style={{fontSize:10, color:'#FF4989'}}>2.5 km</Text>
      </View>
    </View>
  <View style={{marginTop:30}}/>
  <Text style={{fontSize:12, color:'#31313f', fontWeight:'bold', marginBottom:7}}>About</Text>
  <ViewMoreText
          numberOfLines={3}
          renderViewMore={(onPress)=>{
            return(
              <Text onPress={onPress} style={{fontSize:10,color:'#dd2e44',textDecorationLine: "underline"}}>View more</Text>
            )
          }}
          renderViewLess={(onPress)=>{
            return(
              <Text onPress={onPress} style={{fontSize:10,color:'#dd2e44',textDecorationLine: "underline"}}>View less</Text>
            )
           }}
          textStyle={{textAlign: 'left',width:'95%'}}
        >
          <Text style={{fontSize:10, color:'#4a4c52'}}>
          In publishing and graphic design, Lorem ipsum is a place-
          holder text commonly used to demonstrate the visual form
          of a document or a typeface without relying on meaningful
          of a document or a typeface without relying on meaningful
          content.
          </Text>
</ViewMoreText>

<View style={{marginTop:20}}>
<Text style={{fontSize:12, color:'#31313f', fontWeight:'bold',marginBottom:10}}>Passions</Text>
<FlatList
    data={passionValues}
    showsHorizontalScrollIndicator={false}
    numColumns={3}
    keyExtractor={item => item.id}
    renderItem={({item,index})=>{
      return(
        <View key={item.name} style={[styles.showMeView , {width:'30%',marginHorizontal:index % 3 === 1 ? 10 : 0,marginBottom:10,backgroundColor: item?.mutual ? '#fff1f6': '#fff', borderColor: item?.mutual ? '#ff3b7f' : '#e3d0d7'}]}>
          <Text style={styles.showMeText}>{item.name}</Text>
          <View style={[styles.showMeImageView, {backgroundColor: item?.mutual ? '#ff3b7f' : '#e3d0d7'}]}>
            <Image source={require('../../../assets/dating-selected-arrow.png')} style={styles.showMeImage} resizeMode='contain'/> 
          </View>
        </View>
      )
    }}
  />
  
</View>
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
  },
  showMeView:{
    flexDirection:'row', 
    alignItems:'center',
    justifyContent:'space-between',
    width:'27%', 
    padding:10, 
    // paddingHorizontal:15, 
    borderRadius:20,
    borderWidth:0.5
  },
  showMeText:{
    fontSize:10, 
    color:'#4a4c52'
  },
  showMeImageView:{
    justifyContent:'center', 
    alignItems:'center',
    height:20, 
    width:20, 
    borderRadius:20/2,
    marginLeft:10,
  },
  showMeImage:{
    height:15, 
    width:15
  },
});
export default DatingMoreInfo 
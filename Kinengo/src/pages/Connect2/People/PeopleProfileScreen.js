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
import LinearGradient from 'react-native-linear-gradient'

const PeopleProfileScreen = (props) => {
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
   press2={()=>{}} title2={'People'} fontWeight={'500'} img2height={20} color='#455A64'
   press3={()=>{}} img3width={25} img3height={25} borderBottomLeftRadius={25} borderBottomRightRadius={25} />
<View style={{width:'90%',alignSelf:'center', marginTop:20}}>
    
  <LinearGradient
    colors={['rgba(255, 255, 255, 1)', 'rgba(249, 249, 249, 1)']}
    style={styles.descriptionView}
    >
      <View style={{flex:1}}>
        <Image source={require('../../../assets/people-following-person.png')}/>
      </View>    
    {/* <View style={styles.descriptionView}> */}
    <View style={{flex:5}}>
      <View style={styles.imageRowView}>
        
        <View style={{flexDirection:'row', alignItems:'center'}}>
          <Text style={{fontSize:14, fontWeight:'600', color:'#455A64'}}>Aryav Nadkarni</Text>
        </View>

        <View style={styles.followingView}>
          <Text style={{fontSize:14, fontWeight:'400', color:'#455A64'}}>Following</Text>
        </View>
      </View>

      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-start', marginTop:10}}>
        <LinearGradient
          colors={['rgba(255, 255, 255, 1)', 'rgba(249, 249, 249, 1)']}
          style={[styles.numView, {marginRight:10}]}
          >
          <Text style={styles.numValue}>09</Text>
          <Text style={styles.numText}>Posts</Text>
        </LinearGradient>
        <LinearGradient
          colors={['rgba(255, 255, 255, 1)', 'rgba(249, 249, 249, 1)']}
          style={[styles.numView, {marginRight:10}]}
          >
          <Text style={styles.numValue}>1.1M</Text>
          <Text style={styles.numText}>Followers</Text>
        </LinearGradient>
        <LinearGradient
          colors={['rgba(255, 255, 255, 1)', 'rgba(249, 249, 249, 1)']}
          style={styles.numView}
          >
          <Text style={styles.numValue}>369</Text>
          <Text style={styles.numText}>Following</Text>
          </LinearGradient>
      </View>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-start', marginTop:10}}>
        <LinearGradient
          colors={['rgba(255, 255, 255, 1)', 'rgba(249, 249, 249, 1)']}
          style={[styles.numView, {marginRight:10}]}
          >
          <Text style={styles.numValue}>1.1M</Text>
          <Text style={styles.numText}>Followers</Text>
        </LinearGradient>
        <LinearGradient
          colors={['rgba(255, 255, 255, 1)', 'rgba(249, 249, 249, 1)']}
          style={styles.numView}
          >
          <Text style={styles.numValue}>369</Text>
          <Text style={styles.numText}>Following</Text>
          </LinearGradient>
      </View>
      </View>
    {/* </View> */}
    </LinearGradient>

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
  descriptionView:{
    flexDirection:'row',
    backgroundColor:'#fff', 
    padding:10, 
    borderRadius:15,
    shadowColor: '#000',
    shadowOffset: {
    width:0,
    height:3
    }, 
    shadowRadius: 5,
    shadowOpacity: 0.03,
    elevation: 1,
  },
  imageRowView:{
    flexDirection:'row', 
    justifyContent:'space-between', 
    alignItems:'center'
  },
  followingView:{
    paddingHorizontal:20,
    paddingVertical:10,
    backgroundColor:'#fff',
    borderRadius:20,
    shadowColor: '#0089CF',
    shadowOffset: {
    width:0,
    height:3
    }, 
    shadowRadius: 5,
    shadowOpacity: 0.1,
    elevation: 5,
  },
  numView:{
    alignItems:'center',
    width:'25%',
    paddingVertical:10,
    borderRadius:15,
    shadowColor: '#000',
    shadowOffset: {
    width:0,
    height:3
    }, 
    shadowRadius: 5,
    shadowOpacity: 0.03,
    elevation: 1, 
  },
  numValue:{
    fontSize:20, 
    fontWeight:'500', 
    color:'#455A64'
  },
  numText:{
    fontSize:14, 
    fontWeight:'400', 
    color:'#455A64'
  }
});
export default PeopleProfileScreen 
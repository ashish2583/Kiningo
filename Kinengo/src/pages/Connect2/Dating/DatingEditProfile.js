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
const onlinePersonImageWidth = 50
const onlineDotWidth = 12
const DatingEditProfile = (props) => {
  const [searchValue,setsearchValue]=useState('')
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const myTextInput = useRef()
  const [userMessage, setUserMessage] = useState('')
  const [multiSliderValue, setMultiSliderValue] = useState([18, 24])
  const [showPassionsModal, setShowPassionsModal] = useState(false)
  const [selectedPassions, setSelectedPassions] = useState(['90s Kid', 'Festival', 'Travelling'])
  const [allPassions, setAllPassions] = useState(['90s Kid', 'Musicians', 'Maggi', 'Sneakers','Foodie','Yippie','Festival', 'Travelling', 'k-pop'])
  const [showMeValue, setShowMeValue] = useState(0)
  const [upData,setupData]=useState([
    {
      id: '1',
      name: 'Chetan Manne',
      isOnline: true,
      message:'Reference site about lorem...',
      img: require('../../../assets/dating-message-image.png'),
    },
    {
      id: '1',
      name: 'Chetan Manne',
      isOnline: false,
      message:'Reference site about lorem...',
      img: require('../../../assets/dating-message-image.png'),
    },
    {
      id: '1',
      name: 'Chetan Manne',
      isOnline: true,
      message:'Reference site about lorem...',
      img: require('../../../assets/dating-message-image.png'),
    },
    {
      id: '1',
      name: 'Chetan Manne',
      isOnline: false ,
      message:'Reference site about lorem...',
      img: require('../../../assets/dating-message-image.png'),
    },
  ])

  const changeShowMeValue = (index) => {
    if(showMeValue === index){
      return
    }

    setShowMeValue(index)
  }
  const changeSelectedPassions = (value) => {
    if(selectedPassions?.includes(value)){
      const updatedData = selectedPassions?.filter(el=>el !== value)
      setSelectedPassions([...updatedData])
    }else{
      setSelectedPassions([...selectedPassions, value])
    }
  }

  const multiSliderValuesChange = (values) => {setMultiSliderValue(values)}

  return(
    <SafeAreaView scrollEnabled={scrollEnabled} style={{backgroundColor:'#F8F8F8'}}>
      <ScrollView>
<View style={{flexDirection:'row', alignItems:'center', height:80, backgroundColor:'#fff',padding:20, borderBottomLeftRadius:25, borderBottomRightRadius:25}}>
  <TouchableOpacity onPress={()=>{props.navigation.goBack()}} style={{flex:1}}>
    <Image source={require('../../../assets/dating-back-arrow.png')} style={{width:25, height:15}} resizeMode='contain'/>
  </TouchableOpacity>
  <View style={{flex:3, flexDirection:'row', justifyContent:'center'}}>
      <Text style={{fontSize:12.5, fontWeight:'600', color:'#31313f'}}>Edit Profile</Text>
  </View>
  <View style={{flex:1}}/>
</View>
<View style={{width:'90%',alignSelf:'center', marginTop:20}}>

<Text style={{fontSize:11.3, fontWeight:'bold', color:'#3e5869', marginBottom:10}}>Edit Profile Photo</Text>
<View style={{flexDirection:'row', alignItems:'center'}}>
  <View>
    <Image source={require('../../../assets/dating-message-image.png')} style={{width:100, height:100, borderRadius:2}} resizeMode='contain'/>
    <View style={styles.deleteIconView}>
      <Image source={require('../../../assets/dating-delete-photo-icon.png')} style={styles.deleteIcon} resizeMode='contain'/>
    </View>
  </View>
  <View style={{marginLeft:20}}>
    <Image source={require('../../../assets/dating-message-image.png')} style={{width:100, height:100, borderRadius:2}} resizeMode='contain'/>
    <View style={styles.deleteIconView}>
      <Image source={require('../../../assets/dating-delete-photo-icon.png')} style={styles.deleteIcon} resizeMode='contain'/>
    </View>
  </View>
  <View style={styles.plusIconSuperView}>
    <Image source={require('../../../assets/dating-upload-camera-icon.png')} style={{width:30, height:30, }} resizeMode='contain'/>
    <View style={styles.plusIconView}>
      <Image source={require('../../../assets/dating-upload-plus-icon.png')} style={styles.deleteIcon} resizeMode='contain'/>
    </View>
  </View>
</View>
<Text style={{fontSize:11.3, fontWeight:'bold', color:'#3e5869', marginBottom:10, marginTop:20}}>About me</Text>
<TextInput
       value={''}
       onChangeText={(e) => {}}
       placeholder={'Type here.....'}
       placeholderTextColor="#bbbbbb"
       multiline={true}
     // maxLength={500}
     // keyboardType="number-pad"
       autoCapitalize = 'none'
       style={[styles.input]}
     />
<Text style={{fontSize:11.3, fontWeight:'bold', color:'#3e5869', marginBottom:10, marginTop:15}}>Passions</Text>
<View style={{flexDirection:'row', justifyContent:'space-between', backgroundColor:'#fff1f6', padding:20, borderRadius:10}}>
   <Text style={{fontSize:10, color:'#ff5e96', fontStyle: 'italic'}}>{selectedPassions?.join(', ')}</Text>
   <TouchableOpacity onPress={()=>setShowPassionsModal(true)}>
     <Image source={require('../../../assets/dating-change-password-right-arrow.png')} style={{height:20, width:20,}} resizeMode='contain'/> 
   </TouchableOpacity>
</View>

<Text style={{fontSize:11.3, fontWeight:'bold', color:'#3e5869', marginBottom:10, marginTop:15}}>Show me</Text>
<View style={{flexDirection:'row', alignItems:'center'}}>
  <TouchableOpacity onPress={()=>{changeShowMeValue(0)}} style={[styles.showMeView , {backgroundColor: showMeValue === 0 ? '#fff1f6': '#fff', borderColor: showMeValue === 0 ? '#ff3b7f' : '#e3d0d7'}]}>
    <Text style={styles.showMeText}>Men</Text>
    <View style={[styles.showMeImageView, {backgroundColor: showMeValue === 0 ? '#ff3b7f' : '#e3d0d7'}]}>
      <Image source={require('../../../assets/dating-selected-arrow.png')} style={styles.showMeImage} resizeMode='contain'/> 
    </View>
  </TouchableOpacity>
  
  <TouchableOpacity onPress={()=>{changeShowMeValue(1)}} style={[styles.showMeView , {marginLeft:10, backgroundColor: showMeValue === 1 ? '#fff1f6': '#fff', borderColor: showMeValue === 1 ? '#ff3b7f' : '#e3d0d7'}]}>
    <Text style={styles.showMeText}>Women</Text>
    <View style={[styles.showMeImageView, {backgroundColor: showMeValue === 1 ? '#ff3b7f' : '#e3d0d7'}]}>
      <Image source={require('../../../assets/dating-selected-arrow.png')} style={styles.showMeImage} resizeMode='contain'/> 
    </View>
  </TouchableOpacity>
  
  <TouchableOpacity onPress={()=>{changeShowMeValue(2)}} style={[styles.showMeView , {marginLeft:10, backgroundColor: showMeValue === 2 ? '#fff1f6': '#fff', borderColor: showMeValue === 2 ? '#ff3b7f' : '#e3d0d7'}]}>
    <Text style={styles.showMeText}>Everyone</Text>
    <View style={[styles.showMeImageView, {backgroundColor: showMeValue === 2 ? '#ff3b7f' : '#e3d0d7'}]}>
      <Image source={require('../../../assets/dating-selected-arrow.png')} style={styles.showMeImage} resizeMode='contain'/> 
    </View>
  </TouchableOpacity>

</View>

<View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginBottom:10, marginTop:15}}>
  <Text style={{fontSize:11.3, fontWeight:'bold', color:'#3e5869'}}>Age preference</Text>
  <Text style={{fontSize:11.3, fontWeight:'bold', color:'#ff3b7f'}}>{`${multiSliderValue[0]}-${multiSliderValue[1]}`}</Text>
</View>
<View style={{alignItems:'center'}}>
  <MultiSlider
            values={[multiSliderValue[0], multiSliderValue[1]]}
            // values={[multiSliderValue[0]]}
            sliderLength={350}
            onValuesChange={multiSliderValuesChange}
            min={18}
            max={60}
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
                  borderColor:'#f23476',
                  borderWidth:1
                },
                android: {
                  height: 30,
                  width: 30,
                  borderRadius: 50,
                  backgroundColor: '#f23476',
                  borderColor:'#f23476',
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
                  backgroundColor: '#f23476'
                }
              })
            }}
            selectedStyle={{backgroundColor: '#f23476'}}
            unselectedStyle={{backgroundColor: '#e3d0d7', borderColor:'#f23476', borderWidth:0.5}}
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

      <View style={{height:50}} />      

      <MyButtons title="Save" height={60} width={'100%'} borderRadius={10} alignSelf="center" press={()=>{}} marginHorizontal={20} fontSize={11}
      titlecolor={Mycolors.BG_COLOR}  hLinearColor={['#8d046e', '#e30f50']}/>  
     </View>       
<View style={{width:'100%',alignSelf:'center',marginTop:20, backgroundColor:'#F8F8F8'}}>
</View>






 </View>
<View style={{height:100}} />

</ScrollView>
<Modal
        isVisible={showPassionsModal}
        swipeDirection="down"
        onBackdropPress={()=>setShowPassionsModal(false)}
        onSwipeComplete={(e) => {
          setShowPassionsModal(false)
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
          
          <View style={{flexDirection:'row',alignItems:'center', marginBottom:30, marginTop:10}}>
            <View style={{flex:1}}/>
            <Text style={{flex:4,color:Mycolors.Black,fontWeight:'500', textAlign:'center'}}>Passions</Text>
            <TouchableOpacity onPress={()=>setShowPassionsModal(false)} style={{flex:1}}>
              <Text style={{color:'#FF3B7F',fontWeight:'500', textAlign:'center'}}>Done</Text>
            </TouchableOpacity>
          </View>
        
          <View style={{width:'95%',alignSelf:'center'}}>
            <Text style={{color:'#4a4c52',fontSize:12}}>
              Select passions that you would like to share. Choose a minimum of 3.
            </Text>
            <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginTop:10, marginBottom:10}}>
              <Text style={{color:'#4a4c52',fontSize:12, fontWeight:'500'}}>Passions</Text>
              <Text style={{color:'#4a4c52',fontSize:12, fontWeight:'500'}}>{`${selectedPassions?.length}/${allPassions?.length}`}</Text>
            </View>

            <FlatList
                  data={allPassions}
                  showsHorizontalScrollIndicator={false}
                  numColumns={3}
                  keyExtractor={item => item.id}
                  renderItem={({item,index})=>{
                    return(
                      <TouchableOpacity onPress={()=>{changeSelectedPassions(item)}} style={[styles.showMeView , {width:'30%',marginHorizontal:index % 3 === 1 ? 10 : 0,marginBottom:10,backgroundColor: selectedPassions?.includes(item) ? '#fff1f6': '#fff', borderColor: selectedPassions?.includes(item) ? '#ff3b7f' : '#e3d0d7'}]}>
                        <Text style={styles.showMeText}>{item}</Text>
                        <View style={[styles.showMeImageView, {backgroundColor: selectedPassions?.includes(item) ? '#ff3b7f' : '#e3d0d7'}]}>
                          <Image source={require('../../../assets/dating-selected-arrow.png')} style={styles.showMeImage} resizeMode='contain'/> 
                        </View>
                      </TouchableOpacity>
                    )
                  }}
                />
          </View>

            {/* <View style={{width:100,height:100}} /> */}
            </ScrollView>
           
            </View>
</Modal>
    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({
  input: {
    paddingLeft: 15,
    width:'100%',
    fontSize: 13,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth:0.5,
   // backgroundColor: '#34333a',
    color:'#fff',
    height:100,
    borderRadius:5,
    paddingHorizontal:15,
    paddingVertical:10,
    color:Mycolors.Black
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
  deleteIconView:{
    justifyContent:'center', 
    alignItems:'center',
    width:30, 
    height:30, 
    borderRadius:50/2, 
    backgroundColor:'#ff001e',
    position:'absolute',
    top:-5,
    left:80
  },
  plusIconView:{
    justifyContent:'center', 
    alignItems:'center',
    width:30, 
    height:30, 
    borderRadius:50/2, 
    backgroundColor:'#ff3b7f',
    position:'absolute',
    bottom:-10,
    left:40
  },
  deleteIcon:{
    width:10, 
    height:10
  },
  plusIconSuperView:{
    marginLeft:20, 
    backgroundColor:'#fde7eb',
    justifyContent:'center', 
    alignItems:'center', 
    height:100, 
    width:100, 
    borderRadius:10
  }
});
export default DatingEditProfile 
import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import HomeHeader from '../../../component/HomeHeader';
import SearchInput2 from '../../../component/SearchInput2';
import { dimensions, Mycolors } from '../../../utility/Mycolors';
import { ImageSlider,ImageCarousel } from "react-native-image-slider-banner";
import MyButtons from '../../../component/MyButtons';
import { Rating } from 'react-native-ratings';
import ViewMoreText from 'react-native-view-more-text';
import Toggle from "react-native-toggle-element";
import Modal from 'react-native-modal';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { setSelectedCarTab } from '../../../redux/actions/user_action'; 
import DatePicker from 'react-native-datepicker';

const FoodDetails = (props) => {
  const [searchValue,setsearchValue]=useState('')
  const [selectedTab,setselectedTab]=useState('Take Away')
  const [cookingIns,setcookingIns]=useState('')
  const [selectedTime,setselectedTime]=useState('1')
  const [selectedTime2,setselectedTime2]=useState('1')
  const [counter,setcounter]=useState(1)
  const [date, setDate] = useState('')
  const [toggleValue, setToggleValue] = useState(false);
  const [modlevisual1,setmodlevisual1] = useState(false)
  const [modlevisual2,setmodlevisual2] = useState(false)
  const [modlevisual3,setmodlevisual3] = useState(false)
  const [modlevisual4,setmodlevisual4] = useState(false)
  const [upData,setupData]=useState([
    {
      id: '1',
      title: 'Hair Cut',
      desc:'',
      time:'10:00AM',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '2',
      title: 'Shaving',
      desc:'',
      time:'10:30AM',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '3',
      title: 'Facial',
      desc:'',
      time:'11:00AM',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '4',
      title: 'Hair Color',
      desc:'',
      time:'11:30AM',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '5',
      title: 'Hair wash',
      desc:'',
      time:'12:00PM',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '6',
      title: 'Beard style',
      desc:'',
      time:'12:30PM',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '7',
      title: 'Facial',
      desc:'',
      time:'01:00PM',
      img:require('../../../assets/images/images.png'),
    },
  ])
  useEffect(()=>{

 },[])


const design=(img,ti,tit,w,imgh,imgw,bg,redious)=>{
  return(
    <View style={{flexDirection:'row',alignItems:'center',width:w,marginTop:10}}>
   <View style={{width:40,height:40,backgroundColor:bg,justifyContent:'center',borderRadius:redious}}>
    <Image source={img} style={{width:imgw,height:imgh,overflow:'hidden',alignSelf:'center'}}></Image>
   </View>
   <View style={{marginLeft:5,width:'85%'}}>
    <Text style={{fontSize:10,fontWeight:'bold',color:Mycolors.Black}}>{ti}</Text>
    <Text style={{fontSize:10,color:Mycolors.GrayColor,top:3}}>{tit}</Text>
   </View>
   
  </View>
  )
}


const flatliistDesign=(img,ti,rs,des,press,allpress)=>{
  return(
    <TouchableOpacity style={{width:'95%',height:120,marginHorizontal:5,marginVertical:5, padding:10,backgroundColor:'#fff',
    borderColor:'#dee4ec',
    borderWidth:1,
    elevation: 5,borderRadius:10,alignSelf:'center',flexDirection:'row',alignItems:'center'}}
    onPress={allpress}>
<View style={{width:60,height:75,alignSelf:'center',borderRadius:5,borderWidth:3,borderColor:'#dee4ec'}}>
<Image source={img}  style={{width:'100%',height:'100%',alignSelf:'center',borderRadius:5,resizeMode: 'stretch'}} ></Image>
</View>
<View style={{marginLeft:10}}>
<Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:12,marginTop:9}} >{ti}</Text>
<Text style={{color:Mycolors.RED,fontWeight:'600',fontSize:12,marginTop:9}} >{rs}</Text>
<View style={{flexDirection:'row'}}>
<Text style={{color:Mycolors.GrayColor,fontWeight:'600',fontSize:12,marginTop:9}} >Food Preparation Time:</Text>
<Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:12,marginTop:9}} >{des}</Text>
</View>



{press ?
<View style={{width:70}}>
<MyButtons title="ADD" height={30} width={'100%'} borderRadius={5} alignSelf="center" press={press} marginHorizontal={20} fontSize={11}
titlecolor={Mycolors.BG_COLOR} backgroundColor={Mycolors.RED} marginVertical={0} />
</View>
: null
}
</View>
  <View style={{position:'absolute',width:20,height:20,top:10,right:10,borderRadius:3,backgroundColor:'red',justifyContent:'center'}}>
  <View style={{width:10,height:10,borderRadius:10,alignSelf:'center',backgroundColor:'#fff'}} />
  </View>
</TouchableOpacity>
  )
}

  return(
    <SafeAreaView style={{backgroundColor:Mycolors.BG_COLOR}}>
      <ScrollView>
   

<View style={{backgroundColor:'#fff',height:dimensions.SCREEN_HEIGHT*33/100,width:'100%'}}>
    <ImageBackground source={require('../../../assets/images/layer_42.png')}style={{width:'100%',height:'100%',overflow:'hidden'}}resizeMode='cover'>
    <HomeHeader height={60}  paddingHorizontal={15}
   press1={()=>{props.navigation.goBack()}} img1={require('../../../assets/arrow.png')} 
   img1width={30} img1height={30} img1backgroundColor={'#fff'} img1padding={5} img1borderRadius={4}
   press2={()=>{}} title2={'Food'} fontWeight={'bold'} img2height={20} color={Mycolors.BG_COLOR}
   press3={()=>{}} img3width={25} img3height={25} />
     
       </ImageBackground>
    </View>

<View style={{width:'96%',alignSelf:'center',backgroundColor:Mycolors.BG_COLOR}}>

<View style={{width:'96%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',alignSelf:'center',backgroundColor:'#fff',borderRadius:9,paddingHorizontal:15,paddingVertical:10, top:-50}}>
  <View>
<Text style={{color:Mycolors.Black,fontSize:16,fontWeight:'600'}}>GRECA Vegetarian Greek</Text>
<Text style={{color:Mycolors.GrayColor,fontSize:13,fontWeight:'500',marginVertical:4}}>Restaurant</Text>
                          <View style={{flexDirection:'row',marginTop:5}}>
                          <Image source={require('../../../assets/Star.png')} style={{width:18,height:18}}></Image>
                          <Text style={{color:Mycolors.Black,fontSize:14,fontWeight:'600',left:5}}>4.5</Text>
                          </View>
  </View>

  <View>
  <TouchableOpacity style={{width:25,height:25,borderRadius:5,backgroundColor:'#fff',
  shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 1,
      shadowOpacity: 0.3,
      justifyContent: 'center',
      elevation: 5,}}>
          <Image source={require('../../../assets/layer_9.png')} style={{width:10,height:15,alignSelf:'center'}}></Image>
          </TouchableOpacity>
  </View>

</View>

<View style={{flexDirection:'row',justifyContent:'space-between',top:-40}}>
<View style={{width:'32%'}}>
<MyButtons title="Take Away" height={37} width={'100%'} borderRadius={5} alignSelf="center" press={()=>{setselectedTab('Take Away')}} marginHorizontal={20} fontSize={10}
  titlecolor={selectedTab=='Take Away' ? Mycolors.BG_COLOR : Mycolors.Black} marginVertical={0} hLinearColor={selectedTab=='Take Away' ?['#fd001f','#b10027']:['transparent','transparent']} backgroundColor={'transparent'}/>
</View>

<View style={{width:'32%'}}>
<MyButtons title="Dining" height={37} width={'100%'} borderRadius={5} alignSelf="center" press={()=>{setselectedTab('Dining')}} marginHorizontal={20} fontSize={12}
  titlecolor={selectedTab=='Dining' ? Mycolors.BG_COLOR : Mycolors.Black} marginVertical={0} hLinearColor={selectedTab=='Dining' ?['#fd001f','#b10027']:['transparent','transparent']} backgroundColor={'transparent'}/>
</View>

<View style={{width:'32%'}}>
<MyButtons title="Book A Table" height={37} width={'100%'} borderRadius={5} alignSelf="center" press={()=>{setselectedTab('Book A Table')}} marginHorizontal={20} fontSize={12}
  titlecolor={selectedTab=='Book A Table' ? Mycolors.BG_COLOR : Mycolors.Black} marginVertical={0} hLinearColor={selectedTab=='Book A Table' ?['#fd001f','#b10027']:['transparent','transparent']} backgroundColor={'transparent'}/>
</View>
</View>



{selectedTab=='Take Away' ? 
<View>
<View style={{width:'95%',alignSelf:'center',top:-20}}>
<ViewMoreText
          numberOfLines={3}
          renderViewMore={(onPress)=>{
            return(
              <Text onPress={onPress} style={{color:'red',textDecorationLine: "underline"}}>View more</Text>
            )
          }}
          renderViewLess={(onPress)=>{
            return(
              <Text onPress={onPress} style={{color:'red',textDecorationLine: "underline"}}>View less</Text>
            )
           }}
          textStyle={{textAlign: 'left',width:'95%'}}
        >
          <Text>
          In publishing and graphic design, Lorem ipsum is a place-
          holder text commonly used to demonstrate the visual form
          of a document or a typeface without relying on meaningful
          of a document or a typeface without relying on meaningful
          content.
          </Text>
</ViewMoreText>
</View>
 
<View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',width:dimensions.SCREEN_WIDTH*95/100,alignSelf:'center'}}>
 
  {design(require('../../../assets/shape_39.png'),'Food Preparation Time','34 minutes','45%',25,28,'red',20)}
  {design(require('../../../assets/shape_40.png'),'Hygiene Food','','45%',25,28,'red',20)}

</View>
{design(require('../../../assets/shape_41.png'),'Location','Disneys Hollvwood Studios Main Entrance.Kissimmee. FL 34747. United States','95%',25,28,5)}
<View>
  {design(require('../../../assets/shape_42.png'),'Timing','Open at 10:00 AM','95%',28,28,5)}
<TouchableOpacity style={{width:100,height:30,borderColor:'red',borderWidth:0.5,position:'absolute',right:5,top:15,justifyContent:'center',borderRadius:5}}>
<Text style={{fontSize:11,textAlign:'center',color:"red",fontWeight:'bold'}}>Call Restaurant</Text>
</TouchableOpacity>
</View>

{design(require('../../../assets/shape_43.png'),'Cost','Cost for two - $24.78(approx)','95%',35,24,5)}
  
</View>
:
selectedTab=='Dining' ? 
<View>
<View style={{width:'100%',alignSelf:'center',marginTop:10}}>
          <FlatList
                  data={upData}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  // numColumns={2}
                  renderItem={({item,index})=>{
                    return(
                      <TouchableOpacity style={{width:100,height:130,marginHorizontal:5,backgroundColor:'#fff',
                      shadowOffset: {
                      width: 0,
                      height: 3
                    },
                    shadowRadius: 1,
                    shadowOpacity: 0.3,
                   // justifyContent: 'center',
                    elevation: 5,borderRadius:10}}>
          <View style={{width:100,height:130,alignSelf:'center'}}>
          <Image source={require('../../../assets/images/diningimg.png')} style={{width:'100%',height:'100%',alignSelf:'center',resizeMode: 'stretch'}}></Image>
          </View>
          </TouchableOpacity>
                    )
                  }}
                  keyExtractor={item => item.id}
                />
         </View>

</View>
:
null
}
{ selectedTab!='Book A Table' ? 
<> 

<View style={{width:'95%',flexDirection:'row',justifyContent:'space-between',alignSelf:'center',marginTop:15,alignItems:'center'}}>
<Text style={{color:Mycolors.Black,fontWeight:'bold'}}>Menu</Text>
<View style={{height:40,flexDirection:'row'}}>
 <TouchableOpacity style={{width:40,height:40,backgroundColor:'transparent',justifyContent:'center'}}
 onPress={()=>{setmodlevisual1(true)}}>
    <Image source={require('../../../assets/searchblue.png')} style={{width:25,height:25,overflow:'hidden',alignSelf:'center'}}></Image>
   </TouchableOpacity>
<View style={{}}>
<Toggle
  value={toggleValue}
  onPress={(newState) => {
    setToggleValue(newState)
    console.log(newState);
  }}
  //  leftTitle="Veg"
  // rightTitle="Non-Veg"
  trackBarStyle={{
    borderColor: "red",
    width:80,height:25,
    backgroundColor:'red'
  }}
  
  trackBar={{
    // activeBackgroundColor: "#9ee3fb",
    // inActiveBackgroundColor: "#3c4145",
    // borderActiveColor: "#86c3d7",
    // borderInActiveColor: "#1c1c1c",
    //borderWidth: 5,
    backgroundColor:'#fff',
    width: 80,
  }}

  thumbButton={{
    width: 24,
    height: 24,
    radius: 24,
    backgroundColor:'#fff',

  }}
  thumbStyle={{
    left:2,
    right:2,
    backgroundColor:'#fff',
  }}
  containerStyle={{width:80,height:40}}
/>
<View style={{position:'absolute',top:14,right:toggleValue ? 'auto' :8,left:toggleValue ? 5 :'auto'}}>
  <Text style={{color:'#fff',fontSize:10}}>{toggleValue ? 'Veg' : 'Non-Veg'}</Text>
</View>
</View>

</View>


</View>

<View style={{width:'100%',alignSelf:'center',marginTop:10}}>
    {
      upData.map((item,index)=> {
        return(
          <View>
          {flatliistDesign(require('../../../assets/images/layer_40.png'),'Match Time Feast','$140.00',' 34 minutes',()=>{Alert.alert('Add Pressed')},()=>{
            setmodlevisual1(false)
            setmodlevisual2(true)
          }   )}
           </View>
        )
      }
      )
    }
      
         </View>
 </>
 : null
}
 </View>

 { selectedTab=='Book A Table' ? 
<> 
<ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true} style={{paddingHorizontal:15,top:-40}}>
        
        <Text style={{fontWeight:'bold',color:Mycolors.Black,marginVertical:10}}>Book A Table</Text>
        

        <View style={{width:'95%',marginHorizontal:5,marginVertical:10, padding:10,backgroundColor:Mycolors.TimingColor,
              borderColor:Mycolors.RED,borderWidth:0.2,borderRadius:7,alignSelf:'center',}}
            >
        <Text style={{fontSize:12,fontWeight:'500',color:Mycolors.Black}}>Enter number of person</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<View style={{marginTop:10}}>
<Text style={{fontSize:11,fontWeight:'500',color:Mycolors.Black}}>Person</Text>
<Text style={{fontSize:10,fontWeight:'500',color:Mycolors.RED,marginTop:4}}>{counter}</Text>
</View>
<View style={{width:65,right:5,borderWidth:0.2,borderColor:Mycolors.RED,borderRadius:2}}>
<HomeHeader height={21}  paddingHorizontal={7}
   press1={()=>{counter<=0 ? setcounter(1) : setcounter(counter-1) }} img1={require('../../../assets/remove.png')} img1width={10} img1height={3} 
   press2={()=>{}} title2={counter} fontWeight={'500'} img2height={20} fontSize={12}
   press3={()=>{setcounter(counter+1)}} img3={require('../../../assets/add.png')} img3width={10} img3height={10} />
</View>
        </View>

          </View>

          <TouchableOpacity style={{width:'95%',height:50,marginHorizontal:5,marginVertical:10, padding:10,backgroundColor:Mycolors.TimingColor,
              borderColor:'#dee4ec',borderRadius:7,alignSelf:'center',flexDirection:'row',alignItems:'center'}}
            >
          <View style={{width:25,height:25,alignSelf:'center',top:-2}}>
          <Image source={require('../../../assets/shape_42.png')}  style={{width:'100%',height:'100%',alignSelf:'center',borderRadius:5,resizeMode: 'stretch'}} ></Image>
          </View>
          <View style={{marginLeft:10}}>
          <Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:11,}} >Timings</Text>
          <Text style={{color:Mycolors.GrayColor,fontWeight:'400',fontSize:10,marginTop:4}} >10-00AM- 11-00 PM</Text>
          </View>
          </TouchableOpacity>

          <View style={{width:'95%',flexDirection:'row',justifyContent:'space-between',alignSelf:'center',marginVertical:10}}>
          <Text style={{color:Mycolors.Black,fontWeight:'500',fontSize:13}}>For Today</Text>
          </View> 

          <View style={{width:'97%',alignSelf:'center'}}>
          <FlatList
                  data={upData}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item,index})=>{
                    return(
                      <View style={{width:90,marginHorizontal:5}}>
          <TouchableOpacity style={{width:90,height:40,justifyContent:'center',borderWidth:0.5,borderRadius:5,borderColor:selectedTime==item.id ? Mycolors.RED: Mycolors.GrayColor}}
          onPress={()=>{setselectedTime(item.id)}}>
          <Text style={{fontSize:11,color:selectedTime==item.id ? Mycolors.RED: Mycolors.GrayColor,textAlign:'center',fontWeight:'bold'}}>{item.time}</Text>
          </TouchableOpacity>
          </View>
                    )
                  }}
                  keyExtractor={item => item.id}
                />
         </View>

         <View style={{width:'95%',flexDirection:'row',justifyContent:'space-between',alignSelf:'center',marginVertical:10}}>
          <Text style={{color:Mycolors.Black,fontWeight:'500',fontSize:13}}>For Later</Text>
          </View> 

          <View style={{width:'95%',height:50,marginHorizontal:5,marginVertical:10, padding:10,backgroundColor:'#fff',
              borderColor:'#dee4ec',borderRadius:7,alignSelf:'center',flexDirection:'row',alignItems:'center',shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3
              },
              shadowRadius: 1,
              shadowOpacity: 0.1,
              justifyContent: 'center',
              elevation: 3,}}
            >

       <DatePicker
          customStyles={{
            dateInput: {borderColor:'transparent',left:-90},
            dateText: {color:Mycolors.Black},
            dateIcon: styles.dateIcon,
            dateplaceholder: {
              alignContent: 'flex-start',
             
            },
            placeholderText: {
              fontSize: 15,
              color: Mycolors.GrayColor,
              marginLeft: '5%',
              // left:100
            },
            zIndex:99999
          }}
         
          androidMode={'spinner'}
          readOnly={true}
          style={[styles.datePickerSelectInput]}
          date={date}
          mode="date"
          placeholder={'Select date'}
          minDate={new Date ()}
          format='YYYY-MM-DD'
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          iconSource={require ('../../../assets/shape_38.png')}
          onDateChange={date => {
            setDate(date)
          }}
        />



          </View>

          <View style={{width:'97%',alignSelf:'center',marginTop:10}}>
          <FlatList
                  data={upData}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item,index})=>{
                    return(
                      <View style={{width:90,marginHorizontal:5}}>
          <TouchableOpacity style={{width:90,height:40,justifyContent:'center',borderWidth:0.5,borderRadius:5,borderColor:selectedTime2==item.id ? Mycolors.RED: Mycolors.GrayColor}}
          onPress={()=>{setselectedTime2(item.id)}}>
          <Text style={{fontSize:11,color:selectedTime2==item.id ? Mycolors.RED: Mycolors.GrayColor,textAlign:'center',fontWeight:'bold'}}>{item.time}</Text>
          </TouchableOpacity>
          </View>
                    )
                  }}
                  keyExtractor={item => item.id}
                />
         </View>

           <View style={{width:'95%',height:100,borderRadius:2,marginTop:25,alignSelf:'center'}}>
          <TextInput
                value={cookingIns}
                onChangeText={(e) => setcookingIns(e)}
                placeholder={'Add Cooking Instruction'}
                placeholderTextColor="#bbbbbb"
                multiline={true}
              // maxLength={500}
              // keyboardType="number-pad"
                autoCapitalize = 'none'
                style={[styles.input]}
              />

          </View>       
          <View style={{width:'95%',alignSelf:'center'}}>
          <MyButtons title="Confirm & Book Dining Slot" height={40} width={'100%'} borderRadius={5} alignSelf="center" press={()=>{
             setmodlevisual3(false)
             setmodlevisual4(true)
             setmodlevisual1(false)
             setmodlevisual2(false)
          }} marginHorizontal={20} fontSize={11}
          titlecolor={Mycolors.BG_COLOR} backgroundColor={Mycolors.RED} marginVertical={0} hLinearColor={['#b10027','#fd001f']}/>
          </View>
            </ScrollView>
           
 </>
 : null
}

<View style={{height:100}} />

</ScrollView>
{selectedTab=='Dining' ? 
<View style={{width:'92%',alignSelf:'center',position:'absolute',bottom:10}}>
<MyButtons title="Book a Dining Slot" height={45} width={'100%'} borderRadius={5} alignSelf="center" press={()=>{
  setmodlevisual4(false)
  setmodlevisual3(true)
  setmodlevisual1(false)
  setmodlevisual2(false)
}} marginHorizontal={20} fontSize={12}
  titlecolor={Mycolors.BG_COLOR} marginVertical={0} hLinearColor={['#fd001f','#b10027']} backgroundColor={'transparent'}/>
</View>
: null
}
{/* ##############&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  Model1 Search Clicked &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   */}
<Modal
        isVisible={modlevisual1}
        swipeDirection="down"
        onSwipeComplete={(e) => {
          setmodlevisual1(false)
        }}
          scrollTo={() => {}}
          scrollOffset={1}
          propagateSwipe={true}
        coverScreen={false}
        backdropColor='transparent'
        style={{ justifyContent: 'flex-end', margin: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <View style={{ height: '70%', backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20 }}>
          <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
            <View style={{paddingHorizontal:4}}>
               <SearchInput2 marginTop={10} placeholder={'Restaurant Name. Cuisine, Dishes'} 
          serchValue={searchValue} 
          onChangeText={(e)=>{setsearchValue(e)}} 
          press={()=>{Alert.alert('Hi')}}
          presssearch={()=>{Alert.alert('Search Pressed')}}
          paddingLeft={50}/>
            </View>
        
         <Text style={{fontWeight:'bold',fontSize:16,marginTop:15,left:5,color:'#cbcbcb'}}>7 Result Found</Text>
        
          <View style={{width:'100%',alignSelf:'center',marginTop:10}}>
          {
      upData.map((item,index)=> {
        return(
          <View>
          {flatliistDesign(require('../../../assets/images/layer_40.png'),'Match Time Feast','$140.00',' 34 minutes',()=>{Alert.alert('Add Pressed')},()=>{})}
           </View>
        )
      }
      )
    }
         
         </View>

            <View style={{width:100,height:100}} />
            </ScrollView>
           
            </View>
</Modal>

{/* ##############&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  Model2 Product Clicked &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   */}
<Modal
        isVisible={modlevisual2}
        swipeDirection="down"
        onSwipeComplete={(e) => {
          setmodlevisual2(false)
        }}
          scrollTo={() => {}}
          scrollOffset={1}
          propagateSwipe={true}
        onBackdropPress={() =>  setmodlevisual2(false)}
        coverScreen={false}
        backdropColor='transparent'
        style={{ justifyContent: 'flex-end', margin: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <View style={{ height: '50%', backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20 }}>
          <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
        
          <TouchableOpacity style={{width:'95%',height:90,marginHorizontal:5,marginVertical:5, padding:10,backgroundColor:'#fff',
    borderColor:'#dee4ec',
    borderWidth:1,
    elevation: 5,borderRadius:10,alignSelf:'center',flexDirection:'row',alignItems:'center'}}
   >
<View style={{width:60,height:75,alignSelf:'center',borderRadius:5,borderWidth:3,borderColor:'#dee4ec'}}>
<Image source={require('../../../assets/images/layer_40.png')}  style={{width:'100%',height:'100%',alignSelf:'center',borderRadius:5,resizeMode: 'stretch'}} ></Image>
</View>
<View style={{marginLeft:10}}>
<Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:12,marginTop:9}} >Match Time Feast</Text>
<View style={{flexDirection:'row'}}>
<Text style={{color:Mycolors.GrayColor,fontWeight:'600',fontSize:12,marginTop:9}} >Food Preparation Time:</Text>
<Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:12,marginTop:9}} > 34 minutes</Text>
</View>
</View>
<View style={{position:'absolute',width:20,height:20,top:10,right:10,borderRadius:3,backgroundColor:'red',justifyContent:'center'}}>
  <View style={{width:10,height:10,borderRadius:10,alignSelf:'center',backgroundColor:'#fff'}} />
  </View>
 </TouchableOpacity>
        
          <View style={{width:'95%',height:100,borderRadius:2,marginTop:10,alignSelf:'center'}}>

          <TextInput
                value={cookingIns}
                onChangeText={(e) => setcookingIns(e)}
                placeholder={'Add Cooking Instruction'}
                placeholderTextColor="#bbbbbb"
                multiline={true}
              // maxLength={500}
              // keyboardType="number-pad"
                autoCapitalize = 'none'
                style={[styles.input]}
              />

          </View>

          <View style={{width:'95%',flexDirection:'row',justifyContent:'space-between',alignSelf:'center',marginVertical:15}}>
          <Text style={{color:Mycolors.Black,fontWeight:'500'}}>Total Payable Amount</Text>
          <Text style={{color:Mycolors.Black,fontWeight:'500'}}>$140.00</Text>
          </View>        
          <View style={{width:'95%',alignSelf:'center'}}>
          <MyButtons title="Proceed to payment" height={40} width={'100%'} borderRadius={5} alignSelf="center" press={()=>{props.navigation.navigate('ShopPayment')}} marginHorizontal={20} fontSize={11}
          titlecolor={Mycolors.BG_COLOR} backgroundColor={Mycolors.RED} marginVertical={0} hLinearColor={['#b10027','#fd001f']}/>
          </View>

            <View style={{width:100,height:100}} />
            </ScrollView>
           
            </View>
</Modal>

{/* ##############&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  Model3 Book A Table sloat Clicked &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   */}
<Modal
        isVisible={modlevisual3}
        swipeDirection="down"
        onSwipeComplete={(e) => {
          setmodlevisual3(false)
        }}
          scrollTo={() => {}}
          scrollOffset={1}
          propagateSwipe={true}
        coverScreen={false}
        backdropColor='transparent'
        style={{ justifyContent: 'flex-end', margin: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <View style={{ height: '70%', backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20 }}>
          <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
        
        <Text style={{fontWeight:'bold',color:Mycolors.Black,marginVertical:10}}>Book A Slot</Text>
        
        {flatliistDesign(require('../../../assets/images/layer_40.png'),'Match Time Feast','$140.00',' 34 minutes',null,()=>{}   )}

        <View style={{width:'95%',marginHorizontal:5,marginVertical:10, padding:10,backgroundColor:Mycolors.TimingColor,
              borderColor:Mycolors.RED,borderWidth:0.2,borderRadius:7,alignSelf:'center',}}
            >
        <Text style={{fontSize:12,fontWeight:'500',color:Mycolors.Black}}>Enter number of person</Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
<View style={{marginTop:10}}>
<Text style={{fontSize:11,fontWeight:'500',color:Mycolors.Black}}>Person</Text>
<Text style={{fontSize:10,fontWeight:'500',color:Mycolors.RED,marginTop:4}}>{counter}</Text>
</View>
<View style={{width:65,right:5,borderWidth:0.2,borderColor:Mycolors.RED,borderRadius:2}}>
<HomeHeader height={21}  paddingHorizontal={7}
   press1={()=>{counter<=0 ? setcounter(1) : setcounter(counter-1) }} img1={require('../../../assets/remove.png')} img1width={10} img1height={3} 
   press2={()=>{}} title2={counter} fontWeight={'500'} img2height={20} fontSize={12}
   press3={()=>{setcounter(counter+1)}} img3={require('../../../assets/add.png')} img3width={10} img3height={10} />
</View>
        </View>

          </View>

          <TouchableOpacity style={{width:'95%',height:50,marginHorizontal:5,marginVertical:10, padding:10,backgroundColor:Mycolors.TimingColor,
              borderColor:'#dee4ec',borderRadius:7,alignSelf:'center',flexDirection:'row',alignItems:'center'}}
            >
          <View style={{width:25,height:25,alignSelf:'center',top:-2}}>
          <Image source={require('../../../assets/shape_42.png')}  style={{width:'100%',height:'100%',alignSelf:'center',borderRadius:5,resizeMode: 'stretch'}} ></Image>
          </View>
          <View style={{marginLeft:10}}>
          <Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:11,}} >Timings</Text>
          <Text style={{color:Mycolors.GrayColor,fontWeight:'400',fontSize:10,marginTop:4}} >10-00AM- 11-00 PM</Text>
          </View>
          </TouchableOpacity>

          <View style={{width:'95%',flexDirection:'row',justifyContent:'space-between',alignSelf:'center',marginVertical:10}}>
          <Text style={{color:Mycolors.Black,fontWeight:'500',fontSize:13}}>Select From Available Slot</Text>
          </View> 

          <View style={{width:'97%',alignSelf:'center'}}>
          <FlatList
                  data={upData}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item,index})=>{
                    return(
                      <View style={{width:90,marginHorizontal:5}}>
          <TouchableOpacity style={{width:90,height:40,justifyContent:'center',borderWidth:0.5,borderRadius:5,borderColor:selectedTime==item.id ? Mycolors.RED: Mycolors.GrayColor}}
          onPress={()=>{setselectedTime(item.id)}}>
          <Text style={{fontSize:11,color:selectedTime==item.id ? Mycolors.RED: Mycolors.GrayColor,textAlign:'center',fontWeight:'bold'}}>{item.time}</Text>
          </TouchableOpacity>
          </View>
                    )
                  }}
                  keyExtractor={item => item.id}
                />
         </View>

           <View style={{width:'95%',height:100,borderRadius:2,marginTop:25,alignSelf:'center'}}>

          <TextInput
                value={cookingIns}
                onChangeText={(e) => setcookingIns(e)}
                placeholder={'Add Cooking Instruction'}
                placeholderTextColor="#bbbbbb"
                multiline={true}
              // maxLength={500}
              // keyboardType="number-pad"
                autoCapitalize = 'none'
                style={[styles.input]}
              />

          </View>       
          <View style={{width:'95%',alignSelf:'center'}}>
          <MyButtons title="Confirm & Book Dining Slot" height={40} width={'100%'} borderRadius={5} alignSelf="center" press={()=>{}} marginHorizontal={20} fontSize={11}
          titlecolor={Mycolors.BG_COLOR} backgroundColor={Mycolors.RED} marginVertical={0} hLinearColor={['#b10027','#fd001f']}/>
          </View>

            <View style={{width:100,height:100}} />
            </ScrollView>
           
            </View>
</Modal>
{/* ##############&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  Model4 Book A Sloat Clicked &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   */}
<Modal
        isVisible={modlevisual4}
        swipeDirection="down"
        onSwipeComplete={(e) => {
          setmodlevisual4(false)
        }}
          scrollTo={() => {}}
          scrollOffset={1}
          propagateSwipe={true}
        coverScreen={false}
        backdropColor='transparent'
        style={{ justifyContent: 'flex-end', margin: 0, backgroundColor: 'rgba(0,0,0,0.5)' }}
      >
        <View style={{ height: '48%', backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20 }}>
          <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true}>
        
        <Text style={{fontWeight:'bold',color:Mycolors.Black,marginVertical:10}}>Book A Slot</Text>
        
        <Text style={{color:Mycolors.RED,fontWeight:'400',fontSize:12,marginTop:20}}>#KIN876549</Text>
            <View>
             <View style={{flexDirection:'row',alignItems:'center',width:'100%'}}>
              <View style={{width:'50%'}}>
              <Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:12,marginTop:15}}>Table Number</Text>
              <Text style={{color:Mycolors.GrayColor,fontSize:11,marginTop:4}}>14</Text>
              </View>
              <View style={{width:'50%'}}>
              <Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:12,marginTop:15}}>Booking for</Text>
              <Text style={{color:Mycolors.GrayColor,fontSize:11,marginTop:4}}>3 person</Text>
              </View>
              </View>
              <View style={{flexDirection:'row',alignItems:'center',width:'100%',marginTop:10}}>
              <View style={{width:'50%'}}>
              <Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:12,marginTop:15}}>Table Booking Time</Text>
              <Text style={{color:Mycolors.GrayColor,fontSize:11,marginTop:4}}>21 July 2021, 11:00 AM</Text>
              </View>
              <View style={{width:'50%'}}>
              <TouchableOpacity style={{width:120,height:40,borderColor:Mycolors.RED,borderWidth:0.5,borderRadius:4,justifyContent:'center',top:8}}>
              <Text style={{textAlign:'center',color:Mycolors.RED,fontSize:12,fontWeight:'600'}}>View Order</Text>
              </TouchableOpacity>
              </View>
              </View>

          </View>


<View style={{width:'100%',padding:10,borderRadius:15,borderColor:Mycolors.GrayColor,borderWidth:0.3,marginTop:20}}>
  <View style={{flexDirection:'row',alignItems:'center',width:'85%',marginTop:10}}>
   <View style={{width:40,height:40,backgroundColor:Mycolors.GREEN,justifyContent:'center',borderRadius:20}}>
    <Image source={require('../../../assets/shape_39.png')} style={{width:25,height:28,overflow:'hidden',alignSelf:'center'}}></Image>
   </View>
   <View style={{marginLeft:10,width:'85%'}}>
    <Text style={{fontSize:13,fontWeight:'bold',color:Mycolors.Black}}>Order Status</Text>
    <Text style={{fontSize:13,color:Mycolors.GREEN,marginTop:7,lineHeight:18}}>Accepted by restaurant vour table no 14 is booked</Text>
   </View>
   
  </View>
<View style={{flexDirection:'row',marginTop:10}}>
<Text style={{fontWeight:'600',color:Mycolors.Black,fontSize:12}}>Note:</Text>
<Text style={{fontWeight:'400',color:Mycolors.Black,fontSize:12}}> Show your booking number when asked</Text>
</View>
</View>

            <View style={{width:100,height:100}} />
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
    height:80,
    borderRadius:5,
    paddingHorizontal:15,
    paddingVertical:10,
    color:Mycolors.Black
  },
  dateIcon:{
    width:22,
    height:23,
    // marginRight:20
  },
  datePickerSelectInput:{
    height: 45,
    width:'100%',
    fontSize: 15,
    borderColor: null,
    backgroundColor: '#fff',
    borderRadius:10,
    color:'#fff',
  },
});
export default FoodDetails 
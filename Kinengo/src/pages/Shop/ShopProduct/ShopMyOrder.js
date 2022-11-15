import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import HomeHeader from 'src/component/HomeHeader';
import SearchInput2 from 'src/component/SearchInput2';
import SerchInput from 'src/component/SerchInput';
import { dimensions, Mycolors } from 'src/utility/Mycolors';
import { ImageSlider,ImageCarousel } from "react-native-image-slider-banner";
import MyButtons from 'src/component/MyButtons';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-datepicker';


const ShopMyOrder = (props) => {
  const [searchValue,setsearchValue]=useState('')
  const [modlevisual1,setmodlevisual1] = useState(false)
  const [checkitem,setcheckitem]=useState('')
  const [reson,setreson]=useState('')
  const [date, setDate] = useState('')

  const [upData,setupData]=useState([
    {
      id: '1',
      title: 'Dining',
      desc:'Order placed by mistake',
      time:'',
       img:require('../../../assets/images/images.png'),
    },
    {
      id: '2',
      title: 'Table',
      desc:'Food preparation time was to late',
      time:'',
       img:require('../../../assets/images/images.png'),
    },
    {
      id: '3',
      title: 'Dining',
      desc:'Restaurant manager behaviour was not good',
      time:'',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '4',
      title: 'Table',
      desc:'Changed my mind',
      time:'',
      img:require('../../../assets/images/images.png'),
    },
    
  ])
  useEffect(()=>{

 },[])
 const design=(img,ti,tit,w,imgh,imgw,bg,redious)=>{
  return(
    <View style={{flexDirection:'row',width:w,marginTop:10,backgroundColor:Mycolors.TimingColor,paddingVertical:20,borderRadius:10,alignSelf:'center',paddingHorizontal:10}}>
   <View style={{width:40,height:40,backgroundColor:bg,justifyContent:'center',borderRadius:redious}}>
    <Image source={img} style={{width:imgw,height:imgh,overflow:'hidden',alignSelf:'center'}}></Image>
   </View>
   <View style={{marginLeft:15,width:'80%'}}>
    <Text style={{fontSize:13,fontWeight:'bold',color:Mycolors.Black}}>{ti}</Text>
    <Text style={{fontSize:12,color:Mycolors.GrayColor,top:3,lineHeight:18}}>{tit}</Text>
   </View>
   
  </View>
  )
}
 const flatliistDesign=(img,ti,rs,des,press,allpress)=>{
  return(
    <TouchableOpacity style={{width:'100%',height:120,marginVertical:5,backgroundColor:'transparent',
    borderColor:'#dee4ec',
    
    elevation: 5,borderRadius:10,alignSelf:'center',flexDirection:'row',alignItems:'center'}}
    onPress={allpress}>
<View style={{width:60,height:75,alignSelf:'center',borderRadius:5,borderWidth:3,borderColor:'#dee4ec'}}>
<Image source={img}  style={{width:'100%',height:'100%',alignSelf:'center',borderRadius:5,resizeMode: 'stretch'}} ></Image>
</View>
<View style={{marginLeft:10}}>
<Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:12,}} >{ti}</Text>
<Text style={{color:Mycolors.RED,fontWeight:'600',fontSize:12,}} >{rs}</Text>
<View style={{flexDirection:'row',top:-6}}>
<Text style={{color:Mycolors.GrayColor,fontWeight:'600',fontSize:12,}} >{des}</Text>
<Text style={{color:Mycolors.GrayColor,fontWeight:'600',fontSize:12,}} > Person Serve</Text>
</View>



{press ?
<View style={{width:120,}}>
<MyButtons title="Call Restaurant" height={30} width={'100%'} borderRadius={5} alignSelf="center" press={press} marginHorizontal={20} fontSize={11}
titlecolor={Mycolors.RED} backgroundColor={'transparent'} marginVertical={0} borderColor={Mycolors.RED} borderWidth={0.4}/>
</View>
: null
}
</View>
  {/* <View style={{position:'absolute',width:20,height:20,top:10,right:10,borderRadius:3,backgroundColor:'red',justifyContent:'center'}}>
  <View style={{width:10,height:10,borderRadius:10,alignSelf:'center',backgroundColor:'#fff'}} />
  </View> */}
</TouchableOpacity>
  )
}

const cancleDesign=(title,press,check)=>{
  return(
    <TouchableOpacity style={{width:'100%',height:50,flexDirection:'row',alignItems:'center',borderRadius:7,borderColor:check? Mycolors.RED:Mycolors.GrayColor,borderWidth:0.5,paddingHorizontal:10,marginTop:10}}
    onPress={press}>
<View style={{width:25,height:25,borderColor:check? Mycolors.RED:Mycolors.GrayColor,borderWidth:0.3,justifyContent:'center',borderRadius:20,}}>
{check ?
    <View style={{width:15,height:15,borderRadius:15,backgroundColor:Mycolors.RED,alignSelf:'center'}} />
    : null
}
</View>
<View>
<Text style={{color:Mycolors.Black,fontSize:13,marginLeft:10,fontWeight:'300'}}>{title}</Text>
</View>
    </TouchableOpacity>
  )
}

  return(
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
    <HomeHeader height={60}  paddingHorizontal={15}// backgroundColor={'#fff'}
   press1={()=>{props.navigation.goBack()}} img1={require('../../../assets/arrow.png')} img1width={18} img1height={15} 
   press2={()=>{}} title2={'Dining & Booked Table'} fontWeight={'500'} img2height={20}
   press3={()=>{}} img3width={25} img3height={25} />
<View style={{width:'95%',alignSelf:'center',backgroundColor:'rgba(0,0,0,0.025)',borderRadius:10,borderBottomColor:'rgba(0,0,0,0.5)',borderBottomWidth:0.2}}>
  <HomeHeader height={40}  paddingHorizontal={15}
   press1={()=>{}} img1={require('../../../assets/calendar.png')} img1width={22} img1height={22} 
   press2={()=>{}} title2={''} fontWeight={'500'} img2height={20} right={dimensions.SCREEN_WIDTH*28/100} fontSize={10} color={Mycolors.GrayColor}
   press3={()=>{}} img3={require('../../../assets/shape_32.png')} img3width={25} img3height={25} />

<View style={{position:'absolute'}}>
   <DatePicker
          customStyles={{
            dateInput: {borderColor:'transparent',},
            dateText: {color:Mycolors.GrayColor},
            dateIcon: styles.dateIcon,
            dateplaceholder: {
              alignContent: 'flex-start',
            },
            placeholderText: {
              fontSize: 10,
              color: Mycolors.GrayColor,
              //marginLeft: '1%',
               left:-5
            },
            zIndex:99999
          }}
          showIcon={false}
          androidMode={'spinner'}
          readOnly={true}
          style={[styles.datePickerSelectInput,{fontSize: 11,color:Mycolors.GrayColor,left:15}]}
          date={date}
          mode="date"
          placeholder={'Pick a Date'}
          minDate={new Date ()}
          format='YYYY-MM-DD'
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          //iconSource={require ('../../../assets/shape_38.png')}
          onDateChange={date => {
            setDate(date)
          }}
        />
</View>
</View>

    

<View style={{width:'90%',alignSelf:'center'}}>

{
      upData.map((item,index)=> {
        return(
          <View style={{marginVertical:10,backgroundColor:'#fff',padding:15,borderRadius:10,borderColor:'rgba(0,0,0,0.2)',borderWidth:0.5}}> 
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:14}}>GRECA Vegetarian Greek</Text>
          {item.title=='Dining'?
          <View style={{paddingHorizontal:10,justifyContent:'center',borderRadius:10,backgroundColor:'rgba(256,214,147,0.4)',borderColor:Mycolors.GrayColor,borderWidth:0.2}}>
          <Text style={{color:Mycolors.ORANGE,fontSize:11,textAlign:'center',lineHeight:22}}>Dining Booking</Text>
          </View>
          :
          <View style={{paddingHorizontal:10,justifyContent:'center',borderRadius:10,backgroundColor:'rgba(130,213,112,0.2)',borderColor:Mycolors.GrayColor,borderWidth:0.2}}>
          <Text style={{color:Mycolors.GREEN,fontSize:11,textAlign:'center',lineHeight:22}}>Table Booking</Text>
          </View>
          }
          </View>
          <Text style={{color:Mycolors.RED,fontWeight:'400',fontSize:12,marginTop:5}}>#KIN876549</Text>
          {item.title=='Dining' ?
           <>
          <Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:12,marginTop:15}}>Dining Slot Booked</Text>
          <Text style={{color:Mycolors.GrayColor,fontSize:11,marginTop:4}}>11:00 AM</Text>
          
          {flatliistDesign(require('../../../assets/images/layer_40.png'),'Hat-Trick Combo','','3',()=>{Alert.alert('Add Pressed')},()=>{})}
          </>
           :
          <View style={{marginBottom:20}}>
              <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
              <View>
              <Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:12,marginTop:15}}>Table Booked</Text>
              <Text style={{color:Mycolors.GrayColor,fontSize:11,marginTop:4}}>11:00 AM</Text>
              </View>
              <View>
              <Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:12,marginTop:15}}>Booking for</Text>
              <Text style={{color:Mycolors.GrayColor,fontSize:11,marginTop:4}}>3 person</Text>
              </View>
              </View>
              <View>
              <Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:12,marginTop:15}}>Table Number</Text>
              <Text style={{color:Mycolors.GrayColor,fontSize:11,marginTop:4}}>14</Text>
              </View>
          </View>
          }
          <View style={{borderColor:Mycolors.GrayColor,borderWidth:1,borderStyle: 'dashed',}}/>
          
          {design(require('../../../assets/shape_39.png'),'Order Status','Accepted by restaurant your order will be ready in 34 mins Est. and will be serve to you as instructed','100%',25,28,'red',20)}
          
          <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',alignSelf:'center',marginTop:15}}>
          <MyButtons title="Navigate" height={45} width={'47%'} borderRadius={5} alignSelf="center" press={()=>{}}  fontSize={11}
          titlecolor={Mycolors.RED} backgroundColor={'transparent'} marginVertical={0} borderColor={Mycolors.RED} borderWidth={0.2}/>
          
          <MyButtons title={item.title=='Dining' ? "Cancel Booking" : "Submit Review"} height={45} width={'47%'} borderRadius={5} alignSelf="center" press={()=>{
            if(item.title=='Dining') {
            setmodlevisual1(true)
            }else{
            props.navigation.navigate('ShopReview')
            }
          }}  fontSize={11}
          titlecolor={Mycolors.Black} backgroundColor={'transparent'} marginVertical={0} borderColor={Mycolors.Black} borderWidth={0.2}/>
          </View>
          
          <View style={{flexDirection:'row'}}>
          <Text style={{color:Mycolors.Black,fontWeight:'400',fontSize:12,marginTop:9}} >Booking date and time:</Text>
          <Text style={{color:Mycolors.GrayColor,fontWeight:'600',fontSize:12,marginTop:9}} > 21 July 2021, 11:00 AM</Text>
          </View>
          </View>
        )
      }
      )
    }



</View>
<View style={{height:100}} />
</ScrollView>


{/* ##############&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&  Model1 Cancle Clicked &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&   */}
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
        
        <View style={{ height: '70%', backgroundColor: '#fff', borderTopLeftRadius: 30, borderTopRightRadius: 30, }}>
        <View style={{width:'100%',height:50,backgroundColor:Mycolors.TimingColor,borderTopLeftRadius: 30, borderTopRightRadius: 30,justifyContent:'center'}}>
         <Text style={{fontWeight:'600',fontSize:14,marginTop:5,color:Mycolors.Black,textAlign:'center'}}>Cancel Order</Text>
        </View>
          <ScrollView showsVerticalScrollIndicator={false} nestedScrollEnabled={true} style={{paddingHorizontal:20}}>
          <Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:12,marginTop:10}} >Select Specific reason for cancel order</Text>
          <View style={{width:'100%',alignSelf:'center',marginTop:10}}>
          {
      upData.map((item,index)=> {
        return(
          <View>
       {cancleDesign(item.desc,()=>{setcheckitem(item)},checkitem==item ? true : false)}

           </View>
        )
      }
      )
    }
         </View>
         <Text style={{fontWeight:'600',fontSize:14,marginTop:20,color:Mycolors.Black,}}>Other Reason</Text>

         <View style={{width:'100%',height:100,borderRadius:2,marginTop:10,alignSelf:'center'}}>
             <TextInput
                value={reson}
                onChangeText={(e) => setreson(e)}
                placeholder={'Type here'}
                placeholderTextColor="#bbbbbb"
                multiline={true}
              // maxLength={500}
              // keyboardType="number-pad"
                autoCapitalize = 'none'
                style={[styles.input]}
              />

          </View>  

          <View style={{width:'100%'}}>
          <MyButtons title="Cancel order" height={50} width={'100%'} borderRadius={5} alignSelf="center" press={()=>{}} marginHorizontal={20} fontSize={14}
            titlecolor={Mycolors.BG_COLOR}  hLinearColor={['#b10027','#fd001f']}/>
          </View>

<View style={{width:'100%',flexDirection:'row',alignItems:'center',marginTop:20,backgroundColor:Mycolors.TimingColor,borderRadius:5,padding:10}}>
<View style={{width:22,height:22,backgroundColor:Mycolors.RED,borderRadius:20,justifyContent:'center'}}>
  <Image source={require('../../../assets/info.png')} style={{width:13,height:13,alignSelf:'center'}}></Image>
</View>
<View style={{marginLeft:10,width:'80%'}}>
  <Text style={{color:Mycolors.Black,fontWeight:'300',fontSize:12,lineHeight:14,fontStyle: 'italic'}}>Note: Cancellation fees of $5.00 for courier's time
might apply if 10 minutes had elapsed since your
order was placed.</Text>
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
  // datePickerSelectInput:{
  //   height: 45,
  //   width:'100%',
  //   fontSize: 15,
  //   borderColor: null,
  // //  backgroundColor: '#fff',
  //   borderRadius:10,
  //   color:Mycolors.GrayColor,
  // },
});
export default ShopMyOrder
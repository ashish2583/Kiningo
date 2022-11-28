import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import HomeHeader from '../../../component/HomeHeader';
import SearchInput2 from '../../../component/SearchInput2';
import SerchInput from '../../../component/SerchInput';
import { dimensions, Mycolors } from '../../../utility/Mycolors';
import { ImageSlider,ImageCarousel } from "react-native-image-slider-banner";
import MyButtons from '../../../component/MyButtons';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-datepicker';
import { Rating, AirbnbRating } from 'react-native-ratings';


const ShopPayment = (props) => {
  const [checkitem,setcheckitem]=useState('')
  const [reson,setreson]=useState('')
  const [upData,setupData]=useState([
    {
      id: '1',
      title: '**** **** **** 5967',
      height:33,
      width:55,
      time:'Expires 24/22',
      img:require('../../../assets/images/layer_48.png'),
    },
    {
      id: '2',
      title: '**** **** **** 5967',
      height:18,
      width:55,
      time:'Expires 24/22',
      img:require('../../../assets/images/group_36.png'),
    },
    {
      id: '3',
      title: '    john.doe@gmail.com',
      height:35,
      width:40,
      time:'',
      img:require('../../../assets/images/layer_51.png'),
    },
    {
        id: '4',
        title: 'Cash Payment',
        height:40,
        width:40,
        time:'Default method',
        img:require('../../../assets/images/cashondelivery.png'),
      },
  ])
  
  useEffect(()=>{
    setcheckitem(upData[3])
 },[])


  return(
    <SafeAreaView style={{flex:1,}}>
      <ScrollView showsVerticalScrollIndicator={false}>
    <HomeHeader height={60}  paddingHorizontal={15} backgroundColor={'#fff'}
   press1={()=>{props.navigation.goBack()}} img1={require('../../../assets/arrow.png')} img1width={18} img1height={15} 
   press2={()=>{}} title2={'Payment'} fontWeight={'500'} img2height={20}
   press3={()=>{}} img3width={25} img3height={25} />

<View style={{width:'92%',alignSelf:'center'}}>

         <View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',alignSelf:'center',marginVertical:15}}>
          <Text style={{color:Mycolors.GrayColor,fontWeight:'500',fontSize:12}}>CHOOSE PAYMENT OPTION</Text>
          <Text style={{color:Mycolors.RED,fontWeight:'500',textDecorationLine:'underline',fontSize:13}}>Add payment method</Text>
          </View>   

          {
      upData.map((item,index)=> {
        return(
            <>
        { checkitem != item ?
          <TouchableOpacity style={{width:'100%',borderColor:Mycolors.GrayColor,borderWidth:0.02,flexDirection:'row',alignItems:'center',paddingVertical:17,paddingHorizontal:17, borderRadius:7,backgroundColor:'#fff',marginTop:15}}
          onPress={()=>{setcheckitem(item)}}>
            <View style={{width:item.width,height:item.height}}>
            <Image source={item.img}  style={{width:'100%',height:'100%',alignSelf:'center',borderRadius:5,resizeMode: 'stretch'}} ></Image>
            </View>
            <View style={{marginLeft:15}}>
            <Text style={{color:Mycolors.TEXT_COLOR,fontWeight:'500',fontSize:13}}>{item.title}</Text>
            <Text style={{color:Mycolors.GrayColor,fontWeight:'400',fontSize:11,top:2}}>{item.time}</Text>         
            </View>
            </TouchableOpacity>
            :
            <></>
          }
          </>
        )
      }
      )
    }

<Text style={{color:Mycolors.GrayColor,fontWeight:'300',fontSize:12,marginVertical:20}}>CURRENT METHOD</Text>
<View style={{width:'100%',borderColor:Mycolors.RED,borderWidth:0.2,flexDirection:'row',alignItems:'center',paddingVertical:17,paddingHorizontal:17, borderRadius:7,backgroundColor:'#fff'}}>
<View style={{width:checkitem.width,height:checkitem.height}}>
<Image source={checkitem.img}  style={{width:'100%',height:'100%',alignSelf:'center',borderRadius:5,resizeMode: 'stretch'}} ></Image>
</View>
<View style={{marginLeft:15}}>
<Text style={{color:Mycolors.TEXT_COLOR,fontWeight:'500',fontSize:13}}>{checkitem.title}</Text>
<Text style={{color:Mycolors.GrayColor,fontWeight:'400',fontSize:10,top:2}}>{checkitem.time}</Text>         
</View>
<View style={{width:24,height:24,backgroundColor:Mycolors.RED,borderRadius:5,position:'absolute',right:20,justifyContent:'center'}}>
<Image source={require('../../../assets/tickw.png')}  style={{width:15,height:15,alignSelf:'center',borderRadius:5,resizeMode: 'stretch'}} ></Image>
</View>
</View>


 <View style={{width:'100%',marginTop:30}}>
 <MyButtons title="Continue" height={53} width={'100%'} borderRadius={5} alignSelf="center" press={()=>{}} marginHorizontal={20} fontSize={14}
   titlecolor={Mycolors.BG_COLOR}  hLinearColor={['#b10027','#fd001f']}/>
 </View>



</View>
<View style={{height:100}} />
</ScrollView>



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
  
});
export default ShopPayment
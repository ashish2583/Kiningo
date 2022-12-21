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
import { baseUrl,shop_eat_cart,shop_eat_cart_id,shop_eat_coupons_userid,shop_eat_cart_apply_coupon, login,shop_eat_business_id,shop_eat_menu_userid, requestPostApi,requestGetApi,shop_eat } from '../../../WebApi/Service'
import Loader from '../../../WebApi/Loader';
import Toast from 'react-native-simple-toast'
import MyAlert from '../../../component/MyAlert';
import { useSelector, useDispatch } from 'react-redux';


const ShopCart = (props) => {
    const person_Image = "https://images.unsplash.com/photo-1491349174775-aaafddd81942?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"

  const [checkitem,setcheckitem]=useState('')
  const [res,setres]=useState('')
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
    
  ])
  const User = useSelector(state => state.user.user_details)
  const VenderDetails = useSelector(state => state.user.venderDeatil)
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const [resData, setresData] = useState([])
  const [promocode, setpromocode] = useState('')
  const [rescopun, setrescopun] = useState([{"coupon_code": "KINENGO3", "coupon_name": "Dummy Coupon", "coupon_type": "flat", "discount_id": 9, "discount_value": "3.00", "expred_on": "2023-10-31", "image": "http://54.153.75.225/images/app-icons/offer2.jpg", "min_order_value": 10}]) 
  const [discount_id,setdiscount_id]=useState(null)
  const [discountPrice,setdiscountPrice]=useState('0.0')
  const [subTotal,setsubTotal]=useState('0.0')
  const [dilivery,setdilivery]=useState('0.0')
  const [totla,settotal]=useState('0.0')
  const [applyedCoupen,setapplyedCoupen]=useState('')
  const [modlevisual,setmodlevisual]=useState(false)
  useEffect(()=>{
   console.log('hello ji ==>>',User);
    getcart()
    getCopun()
 },[])

  const putcart = async (item,add) => {
   
    setLoading(true)
    var data=''
   if(add=='+'){
   data={
      id: item.id,
      product_id: item.product_id,
      quantity: item.quantity+1,
    }
   }else{
    if(item.quantity>1){
      data={
      id: item.id,
      product_id: item.product_id,
      quantity: item.quantity-1,
    }
    }else{
      deletcart(item)
    }
    
   }
    
    const { responseJson, err } = await requestPostApi(shop_eat_cart_id+item.id, data, 'PUT', User.token)
    setLoading(false)
    console.log('the res==>>', responseJson)
    if (responseJson.headers.success == 1) {
      Toast.show(responseJson.headers.message)
      getcart()
    } else {
    // setalert_sms(err)
    // setMy_Alert(true)
    }
  }
  
  const deletcart = async (item) => {
   
    setLoading(true)
    
    const { responseJson, err } = await requestPostApi(shop_eat_cart_id+item.id, '', 'DELETE',User.token)
    setLoading(false)
    console.log('the res==>>', responseJson)
    if (responseJson.headers.success == 1) {
      Toast.show(responseJson.headers.message)
      getcart()
    } else {
    // setalert_sms(err)
    // setMy_Alert(true)
    }
  }

 const getcart = async () => {
   
    setLoading(true)
    
    const { responseJson, err } = await requestGetApi(shop_eat_cart, '', 'GET',  User.token)
    setLoading(false)
    console.log('the res get shop_eat_cart ==>>', responseJson.body)
    if (responseJson.headers.success == 1) {
      setres(responseJson.body)
        setresData(responseJson.body.items)
        setsubTotal(responseJson.body.sub_total)  
        setdilivery(responseJson.body.delivery_charge)
        settotal(responseJson.body.total)
    } else {
      //  setalert_sms(err)
      //  setMy_Alert(true)
    }
  
  }
  
  const applyCoupan = async () => {
    if(discount_id==null){
      Toast.show('Please select any coupon')
    }else{
      setLoading(true)
    var data={ 
        discount_id: discount_id,
      }
    const { responseJson, err } = await requestPostApi(shop_eat_cart_apply_coupon, data, 'POST', User.token)
    setLoading(false)
    console.log('the res shop_eat_cart_apply_coupon==>>', responseJson)
    if (responseJson.headers.success == 1) {
      setdiscountPrice(responseJson.body.coupon_discount)
        setsubTotal(responseJson.body.sub_total)  
        setdilivery(responseJson.body.delivery_charge)
        settotal(responseJson.body.total)
        setapplyedCoupen(responseJson.body.coupon)
    } else {
    // setalert_sms(err)
    // setMy_Alert(true)
    }
    }
    
  }
  
 
  const getCopun = async () => {
   
    setLoading(true)
    
    const { responseJson, err } = await requestGetApi(shop_eat_coupons_userid+VenderDetails.userid, '', 'GET',  User.token)
    setLoading(false)
    console.log('the res get shop_eat_coupons_userid ==>>', responseJson)
    if (responseJson.headers.success == 1) {
      setrescopun(responseJson.body)
    } else {
      //  setalert_sms(err)
      //  setMy_Alert(true)
    }
  
  } 

const flatliistDesign=(img,ti,rs,des,mpress,apress,dpress,qty)=>{
    return(
      <View style={{width:'100%',marginHorizontal:5,marginVertical:5, padding:10,backgroundColor:'#fff',
      borderColor:'#dee4ec',
      borderWidth:1,
      elevation: 5,borderRadius:10,alignSelf:'center',flexDirection:'row',alignItems:'center'}}
      >
  <View style={{width:90,height:90,alignSelf:'center',borderRadius:15,borderWidth:3,borderColor:'#dee4ec'}}>
  <Image source={{uri:img}}  style={{width:'100%',height:'100%',alignSelf:'center',borderRadius:15,resizeMode: 'stretch'}} ></Image>
  </View>
  <View style={{marginLeft:10}}>
  <Text style={{color:Mycolors.GrayColor,fontWeight:'600',fontSize:12,marginTop:9}} >{ti}</Text>
  <Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:14,marginTop:9}} >{rs}</Text>
  <View style={{flexDirection:'row',justifyContent:'space-between',}}>
  <Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:14,marginTop:9}} >{des}</Text>
 
  </View>
     
  </View>
    <TouchableOpacity style={{position:'absolute',width:20,height:22,top:10,right:10,borderRadius:3,justifyContent:'center'}} 
    onPress={dpress}>
    <Image source={require('../../../assets/bin.png')}  style={{width:'100%',height:'100%',alignSelf:'center',resizeMode: 'stretch'}} ></Image>
    </TouchableOpacity>
 <View style={{width:100,height:30,flexDirection:'row',alignItems:'center',marginTop:5,marginLeft:70,position:'absolute',bottom:5,right:0}}>
<TouchableOpacity style={{width:30,height:30,borderRadius:20,backgroundColor:'#FFE2E6',justifyContent:'center'}}
onPress={mpress}>
<Text style={{textAlign:'center',fontSize:25,color:'red',top:-1}}>-</Text>
</TouchableOpacity>
<Text style={{marginHorizontal:10,color:Mycolors.Black}}>{qty}</Text>
<TouchableOpacity style={{width:30,height:30,borderRadius:20,backgroundColor:'red',justifyContent:'center'}}
onPress={apress}>
<Text style={{textAlign:'center',fontSize:25,color:'#fff',top:-1}}>+</Text>
</TouchableOpacity>
   </View>
  </View>
    )
  }
  
  return(
    <SafeAreaView style={{flex:1,}}>
      <ScrollView showsVerticalScrollIndicator={false}>
    <HomeHeader height={60}  paddingHorizontal={15} backgroundColor={'#fff'}
   press1={()=>{props.navigation.goBack()}} img1={require('../../../assets/arrow.png')} img1width={18} img1height={15} 
   press2={()=>{}} title2={'Cart'} fontWeight={'500'} img2height={20}
   press3={()=>{}} img3width={25} img3height={25} />

<View style={{width:'92%',alignSelf:'center'}}>

       
          {
      resData.map((item,index)=> {
        return(
          <View>
            {/* {"id": 1, "image": "http://54.153.75.225/images/vendor/tofu-scramble.jpg",
             "name": null, "price": "0.00", "product_desc": null, "product_id": null} */}
          {flatliistDesign(item.image,item.category,item.name,'$'+item.price,()=>{putcart(item,'-')},()=>{putcart(item,'+')} ,()=>{deletcart(item)} ,item.quantity )}
           </View>
        )
      }
      )
    }

    <View style={{  width: dimensions.SCREEN_WIDTH - 30 ,marginTop:15,alignSelf:'center'}}>
         
            <TextInput
              value={promocode}
              onChangeText={(text) => {
                setpromocode(text)
              }}
              placeholder="Promo Code"
              placeholderTextColor={Mycolors.placeholdercolor}
              style={[styles.input,{paddingRight: 70}]}
             
            />
            <View style={{position:'absolute',right:3,top:3,backgroundColor:'red',paddingHorizontal:10,height:40,justifyContent:'center',borderRadius:5}}>
              <TouchableOpacity onPress={()=>{applyCoupan()}} style={{with:'100%',height:'100%',justifyContent:'center',}}>
               <Text style={{textAlign:'center'}}>Apply</Text>
              </TouchableOpacity>
            </View>
          </View>


     <View style={{flexDirection:'row',justifyContent:'space-between',marginVertical:12,width:'100%'}}>
     <Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:14,}} >Other Coupons</Text>
     <Text style={{color:Mycolors.RED,fontSize:13,}} onPress={()=>{setmodlevisual(true)}}>View All</Text>
     </View>

     {applyedCoupen!='' ?
     
          <View style={{width:'100%',marginHorizontal:5,marginVertical:5, padding:10,backgroundColor:'#fff',
          borderColor:'#dee4ec', borderWidth:1, elevation: 5,borderRadius:7,alignSelf:'center',flexDirection:'row',alignItems:'center'}}
          >
      <View style={{width:25,height:25,alignSelf:'center',borderRadius:2,borderWidth:0.5,borderColor:'#dee4ec'}}>
      <Image source={{uri:applyedCoupen.image}}  style={{width:'100%',height:'100%',alignSelf:'center',borderRadius:2,resizeMode: 'stretch'}} ></Image>
      </View>
      <View style={{marginLeft:10}}>
      <Text style={{color:Mycolors.TEXT_COLOR,fontSize:13}} >{applyedCoupen.coupon_desc}</Text>
      <Text style={{color:Mycolors.GREEN,fontSize:11,marginTop:5}} >Save ${applyedCoupen.discount_value} with this code</Text>
      </View>
       <View style={{position:'absolute',right:10,top:10}}>
        <View style={{width:80,}}>
        <MyButtons title={applyedCoupen.coupon_code} height={27} width={'100%'} borderRadius={15} alignSelf="center" press={()=>{
          setpromocode(applyedCoupen.coupon_code)
          setdiscount_id(applyedCoupen.discount_id)
        }} marginHorizontal={20} fontSize={12}
          titlecolor={Mycolors.RED}   borderColor={Mycolors.RED} borderWidth={0.5} backgroundColor={'transparent'} fontWeight={'300'}/>
        </View>
        </View>
      </View>
      : null
      }

 
   <View style={{width:'100%',marginHorizontal:5,marginVertical:5, padding:10,backgroundColor:'#fff',
          borderColor:'#dee4ec', borderWidth:1, elevation: 5,borderRadius:7,alignSelf:'center'}}
          >
       <View style={{flexDirection:'row',justifyContent:'space-between',}}>
      <Text style={{color:Mycolors.Black,fontSize:13,fontWeight:'600'}} >Sub Total</Text>
      <Text style={{color:Mycolors.TEXT_COLOR,fontSize:13,marginTop:5}} >{subTotal}</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
      <Text style={{color:Mycolors.Black,fontSize:13,}} >Delivery Charges</Text>
      <Text style={{color:Mycolors.TEXT_COLOR,fontSize:13,marginTop:5}} >${dilivery}</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:5}}>
      <Text style={{color:Mycolors.Black,fontSize:13,}} >Discount</Text>
      <Text style={{color:Mycolors.TEXT_COLOR,fontSize:13,marginTop:5}} >${discountPrice}</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
      <Text style={{color:Mycolors.Black,fontSize:14,fontWeight:'600'}} >Total Cost</Text>
      <Text style={{color:Mycolors.TEXT_COLOR,fontSize:14,marginTop:5,fontWeight:'600'}} >{totla}</Text>
      </View>
      </View>

</View>

          <View style={{width:'95%',alignSelf:'center',marginTop:15}}>
          <MyButtons title="Proceed to payment" height={40} width={'100%'} borderRadius={5} alignSelf="center" press={()=>{props.navigation.navigate('ShopPayment')}} marginHorizontal={20} fontSize={11}
          titlecolor={Mycolors.BG_COLOR} backgroundColor={Mycolors.RED} marginVertical={0} hLinearColor={['#b10027','#fd001f']}/>
          </View>

<View style={{height:100}} />
</ScrollView>

{modlevisual ?
<View style={{width:dimensions.SCREEN_WIDTH,height:dimensions.SCREEN_HEIGHT,backgroundColor:'rgba(0,0,0,0.4)',position:'absolute',left:0,top:0,justifyContent:'center'}}>
        <View style={{ height: 300, backgroundColor: '#fff',  borderRadius: 30,position: 'absolute',  width: '95%',borderColor:'#fff',borderWidth:0.3,alignSelf:'center' ,padding:10}}>

        {
      rescopun.map((item,index)=> {
        return(
          <View style={{width:'100%',marginHorizontal:5,marginVertical:5, padding:10,backgroundColor:'#fff',
          borderColor:'#dee4ec', borderWidth:1, elevation: 5,borderRadius:7,alignSelf:'center',flexDirection:'row',alignItems:'center'}}
          >
      <View style={{width:25,height:25,alignSelf:'center',borderRadius:2,borderWidth:0.5,borderColor:'#dee4ec'}}>
      <Image source={{uri:item.image}}  style={{width:'100%',height:'100%',alignSelf:'center',borderRadius:2,resizeMode: 'stretch'}} ></Image>
      </View>
      <View style={{marginLeft:10}}>
      <Text style={{color:Mycolors.TEXT_COLOR,fontSize:13}} >{item.coupon_name}</Text>
      <Text style={{color:Mycolors.GREEN,fontSize:11,marginTop:5}} >Save ${item.discount_value} with this code</Text>
      </View>
       <View style={{position:'absolute',right:10,top:10}}>
        <View style={{width:80,}}>
        <MyButtons title={item.coupon_code} height={27} width={'100%'} borderRadius={15} alignSelf="center" press={()=>{
          setpromocode(item.coupon_code)
          setdiscount_id(item.discount_id)
          setmodlevisual(false)
        }} marginHorizontal={20} fontSize={12}
          titlecolor={Mycolors.RED}   borderColor={Mycolors.RED} borderWidth={0.5} backgroundColor={'transparent'} fontWeight={'300'}/>
        </View>
        </View>
      </View>
        )
      }
      )
    }







        </View>

</View>
        : null
      }
     


{loading ? <Loader /> : null}
    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({
  input: {
    height: 45,
    width: '100%',
    // fontSize: 12,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 5,
    color: Mycolors.TEXT_COLOR,
    paddingLeft: 15,
   
    backgroundColor: Mycolors.BG_COLOR,
    top: 1
  },
});
export default ShopCart
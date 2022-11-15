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


const ShopReview = (props) => {
  const [checkitem,setcheckitem]=useState('')
  const [reson,setreson]=useState('')

  const [upData,setupData]=useState([
    {
      id: '1',
      title: 'Tasty Food',
      desc:'Order placed by mistake',
      time:'',
     
    },
    {
      id: '2',
      title: 'Extremely Yummy Food',
      desc:'Food preparation time was to late',
      time:'',
     
    },
    {
      id: '3',
      title: 'Average',
      desc:'Restaurant manager behaviour was not good',
      time:'',
     
    },
    {
      id: '4',
      title: 'Not Good',
      desc:'Changed my mind',
      time:'',
      
    },
    {
        id: '5',
        title: 'Bad',
        desc:'Changed my mind',
        time:'',
       
      },
    
  ])
  useEffect(()=>{

 },[])
 

  return(
    <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
    <HomeHeader height={60}  paddingHorizontal={15}// backgroundColor={'#fff'}
   press1={()=>{props.navigation.goBack()}} img1={require('../../../assets/arrow.png')} img1width={18} img1height={15} 
   press2={()=>{}} title2={'Review & Rating'} fontWeight={'500'} img2height={20}
   press3={()=>{}} img3width={25} img3height={25} />


    

<View style={{width:'90%',alignSelf:'center'}}>
<Text style={{fontWeight:'600',fontSize:16,marginTop:5,color:Mycolors.Black,lineHeight:20}}>GRECA Vegetarian Greek</Text>
<View style={{marginTop:20}}>
<Image source={require('../../../assets/images/layer_42.png')} style={{width:'100%',height:160,alignSelf:'center',borderRadius:10,overflow:'hidden'}}></Image>
</View>


<Text style={{fontWeight:'500',fontSize:13,marginTop:20,color:Mycolors.Black,lineHeight:20}}>Please select food & restaurant experienced rating</Text>
<View style={{marginTop:20,paddingHorizontal:5,backgroundColor:'#fff',alignItems:'flex-start'}}>
<Rating
// type='heart'
ratingCount={5}
imageSize={35}
startingValue={3}
 // readonly={true}
// showRating
//onFinishRating={this.ratingCompleted}
/>
</View>

    <View style={{width:'100%',alignSelf:'center',marginTop:25}}>
          <FlatList
                  data={upData}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  // numColumns={2}
                  renderItem={({item,index})=>{
                    return(
                      <View style={{marginHorizontal:5,}}>
          <TouchableOpacity style={{height:40,backgroundColor:checkitem==item ? Mycolors.RED:'transparent',alignSelf:'center',borderColor:Mycolors.GrayColor,borderWidth:0.5,borderRadius:5,paddingHorizontal:15,justifyContent:'center'}}
          onPress={()=>{setcheckitem(item)}}>
          <Text style={{textAlign:'center',color:checkitem==item ? Mycolors.BG_COLOR:Mycolors.Black,fontSize:13,fontWeight:'500'}}>{item.title}</Text>
          </TouchableOpacity>
          </View>
                    )
                  }}
                  keyExtractor={item => item.id}
                />
         </View>


<Text style={{fontWeight:'500',fontSize:13,marginTop:20,color:Mycolors.Black,lineHeight:20}}>Please provide us your feedback about GRECA Vegetarian Greek</Text>

<View style={{width:'100%',height:120,borderRadius:2,marginTop:10,alignSelf:'center'}}>
    <TextInput
       value={reson}
       onChangeText={(e) => setreson(e)}
       placeholder={'Type here.....'}
       placeholderTextColor="#bbbbbb"
       multiline={true}
     // maxLength={500}
     // keyboardType="number-pad"
       autoCapitalize = 'none'
       style={[styles.input]}
     />

 </View>  

 <View style={{width:'100%'}}>
 <MyButtons title="Submit" height={50} width={'100%'} borderRadius={5} alignSelf="center" press={()=>{}} marginHorizontal={20} fontSize={14}
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
export default ShopReview
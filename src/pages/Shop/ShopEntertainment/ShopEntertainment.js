import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import HomeHeader from '../../../component/HomeHeader';
import SearchInput2 from '../../../component/SearchInput2';
import SearchInputEnt from '../../../component/SearchInputEnt';
import SerchInput from '../../../component/SerchInput';
import { dimensions, Mycolors } from '../../../utility/Mycolors';
import { ImageSlider,ImageCarousel } from "react-native-image-slider-banner";
import MyButtons from '../../../component/MyButtons';


const ShopEat = (props) => {
  const [searchValue,setsearchValue]=useState('')

  const [upData,setupData]=useState([
    {
      id: '1',
      title: 'Hair Cut',
      desc:'',
      time:'',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '2',
      title: 'Shaving',
      desc:'',
      time:'',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '3',
      title: 'Facial',
      desc:'',
      time:'',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '4',
      title: 'Hair Color',
      desc:'',
      time:'',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '5',
      title: 'Hair wash',
      desc:'',
      time:'',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '6',
      title: 'Beard style',
      desc:'',
      time:'',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '7',
      title: 'Facial',
      desc:'',
      time:'',
      img:require('../../../assets/images/images.png'),
    },
  ])
  useEffect(()=>{

 },[])


  return(
    <SafeAreaView style={{}}>
    <HomeHeader height={60}  paddingHorizontal={15}
   press1={()=>{props.navigation.goBack()}} img1={require('../../../assets/arrow.png')} img1width={18} img1height={15} 
   press2={()=>{}} title2={'Entertainment'} fontWeight={'500'} img2height={20}
   press3={()=>{}} img3width={25} img3height={25} />
<View style={{width:'95%',alignSelf:'center',backgroundColor:'rgba(0,0,0,0.025)',borderRadius:10,borderBottomColor:'rgba(0,0,0,0.5)',borderBottomWidth:0.2}}>
  <HomeHeader height={40}  paddingHorizontal={15}
   press1={()=>{}} img1={require('../../../assets/ent_location_image.png')} img1width={11} img1height={15} 
   press2={()=>{}} title2={'New Yark USA'} fontWeight={'500'} img2height={20} right={dimensions.SCREEN_WIDTH*26/100} fontSize={10} color={Mycolors.GrayColor}
   press3={()=>{}} img3={require('../../../assets/shape_32.png')} img3width={25} img3height={25} />
</View>

<View style={{width:'96%',alignSelf:'center'}}>
<SearchInputEnt marginTop={10} placeholder={'Restaurant Name. Cuisine, Dishes'} 
serchValue={searchValue} 
onChangeText={(e)=>{setsearchValue(e)}} 
press={()=>{Alert.alert('Hi')}}
presssearch={()=>{Alert.alert('Search Pressed')}}
paddingLeft={50}/>
 


<View style={{width:'100%',alignSelf:'center',marginTop:20}}>
          <FlatList
                  data={upData}
                  // horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  numColumns={2}
                  renderItem={({item,index})=>{
                    return(
                      <>
                      <View style={{width:dimensions.SCREEN_WIDTH/2.2,marginHorizontal:5}}>
          <TouchableOpacity style={{width:dimensions.SCREEN_WIDTH/2.2,height:170,backgroundColor:Mycolors.LogininputBox,alignSelf:'center'}}
          onPress={()=>{props.navigation.navigate('PlaceDetails')}}>
          <Image source={item.img} style={{width:'100%',height:'100%',alignSelf:'center',borderRadius:7}}></Image>
          </TouchableOpacity>
          <View style={{}}>
          <Text style={{fontSize:11,color:Mycolors.Black,marginTop:5,textAlign:'left',fontWeight:'bold'}}>Cafe 36</Text>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:5,top:-10}}>
          <Text style={{fontSize:9,color:Mycolors.DARK_GREY,marginTop:5,textAlign:'left',}}>Cafe</Text>
          <TouchableOpacity style={{width:25,height:25,borderRadius:5,backgroundColor:'#fff',shadowColor: '#000',
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
          
          {upData.length-1==index ?
           <View style={{width:10,height:800}}></View>
          : null}
                 </> 
                   )
                  }}
                  keyExtractor={item => item.id}
                />

                
         </View>

 </View>

<View style={{width:'80%',height:60,flexDirection:'row',justifyContent:'space-between',position:'absolute',bottom:200,alignSelf:'center'}}>
<MyButtons title="Purchased Tickets" height={45} width={'100%'} borderRadius={10} alignSelf="center" press={()=>{props.navigation.navigate('ShopEntPurchasedTickets')}} fontSize={11}
  titlecolor={Mycolors.BG_COLOR} backgroundColor={Mycolors.ServiceHeader}/>
</View>
    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({

});
export default ShopEat 
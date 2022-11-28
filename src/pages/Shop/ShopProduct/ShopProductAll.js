import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import HomeHeader from '../../../component/HomeHeader';
import SearchInput2 from '../../../component/SearchInput2';
import SearchInputEnt from '../../../component/SearchInputEnt';
import SerchInput from '../../../component/SerchInput';
import { dimensions, Mycolors } from '../../../utility/Mycolors';
import { ImageSlider,ImageCarousel } from "react-native-image-slider-banner";
import MyButtons from '../../../component/MyButtons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Modal from 'react-native-modal';
import Toast from 'react-native-simple-toast'

const ShopProductDetails = (props) => {
  const [searchValue,setsearchValue]=useState('')
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const myTextInput = useRef()
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
  const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
  const [selectedCategory, setSelectedCategory]=useState('1')
  const [categoryData, setCategoryData]=useState([
    {
      id: '1',
      title: 'Electronics',
      desc:'',
      time:'',
      img:require('../../../assets/images/dddd.jpg'),
    },
    {
      id: '2',
      title: 'Farm, Pet & Ranch',
      desc:'',
      time:'',
      img:require('../../../assets/farmland.jpg'),
    },
    {
      id: '3',
      title: 'Hand Tool',
      desc:'',
      time:'',
      img:require('../../../assets/images/ddd.jpg'),
    },
    {
      id: '4',
      title: 'Hardware',
      desc:'',
      time:'',
      img:require('../../../assets/images/dd.jpg'),
    },
  ])
  const [upData,setupData]=useState([
    {
      id: '1',
      catId: '1',
      title: 'Intel 3rd Gen Motherboard',
      desc:'',
      price:'$140.00',
      time:'',
      img:require('../../../assets/intel_motherboard.png'),
    },
    {
      id: '2',
      catId: '2',
      title: 'Intel 3rd Gen Motherboard',
      desc:'',
      price:'$140.00',
      time:'',
      img:require('../../../assets/intel_motherboard.png'),
    },
    {
      id: '3',
      catId: '3',
      title: 'Intel 3rd Gen Motherboard',
      desc:'',
      price:'$140.00',
      time:'',
      img:require('../../../assets/intel_motherboard.png'),
    },
    {
      id: '4',
      catId: '4',
      title: 'Intel 3rd Gen Motherboard',
      desc:'',
      price:'$140.00',
      time:'',
      img:require('../../../assets/intel_motherboard.png'),
    },
    {
      id: '5',
      catId: '5',
      title: 'Intel 3rd Gen Motherboard',
      desc:'',
      price:'$140.00',
      time:'',
      img:require('../../../assets/intel_motherboard.png'),
    },
    {
      id: '6',
      catId: '3',
      title: 'Intel 3rd Gen Motherboard',
      desc:'',
      price:'$140.00',
      time:'',
      img:require('../../../assets/intel_motherboard.png'),
    },
    {
      id: '7',
      catId: '3',
      title: 'Intel 3rd Gen Motherboard',
      desc:'',
      price:'$140.00',
      time:'',
      img:require('../../../assets/intel_motherboard.png'),
    },
  ])
  const multiSliderValuesChange = (values) => {setMultiSliderValue(values)}
  useEffect(()=>{

 },[])


  return(
    <SafeAreaView scrollEnabled={scrollEnabled} style={{height:'100%',backgroundColor: '#F8F8F8'}}>
    <HomeHeader height={60}  paddingHorizontal={15}
   press1={()=>{props.navigation.goBack()}} img1={require('../../../assets/arrow.png')} img1width={18} img1height={15} 
   press2={()=>{}} title2={'24/7 Hardware Store'} fontWeight={'500'} img2height={20}
   press3={()=>{}} img3={require('../../../assets/layer_9.png')} img3width={13} img3height={18} />

<View style={{width:'96%',alignSelf:'center'}}>
<SearchInputEnt marginTop={10} placeholder={'Enter Keyword'} 
serchValue={searchValue} 
searchIcon={require('../../../assets/product_search_icon.png')}
onChangeText={(e)=>{setsearchValue(e)}} 
press={()=>{Alert.alert('Hi')}}
presssearch={()=>{Alert.alert('Search Pressed')}}
paddingLeft={50}/>
 


<View style={{width:'96%',flexDirection:'row',justifyContent:'space-between',alignSelf:'center',marginTop:20}}>
<Text style={{color:Mycolors.Black,fontWeight:'500'}}>Pick from wide range of categories</Text>
<Text style={{color:'#FFC40C',fontWeight:'500',textDecorationLine: "underline", textDecorationColor:'#FFC40C'}} 
 onPress={()=>{props.navigation.navigate('ShopCategoryAll')}}>View More</Text>
</View>

<View style={{width:'100%',alignSelf:'center',marginTop:10, backgroundColor: '#F8F8F8'}}>
          <FlatList
                  data={categoryData}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                  // numColumns={2}
                  renderItem={({item,index})=>{
                    return(
                      <View style={{width:100,marginHorizontal:5}}>
          <TouchableOpacity style={{width:100,height:80,backgroundColor: '#F8F8F8',alignSelf:'center'}}
          onPress={()=>{setSelectedCategory(item.id)}}>
          <Image source={item.img} style={{width:'100%',height:'100%',alignSelf:'center',borderRadius:7}}></Image>
          </TouchableOpacity>
          <View style={{}}>
          <Text style={{fontSize:11,color: (selectedCategory === item.id) ? '#FFC40C' : Mycolors.Black,marginTop:5,textAlign:'center',fontWeight:'bold'}}>{item.title}</Text>
          </View>
          </View>
                    )
                  }}
                  keyExtractor={item => item.id}
                />
         </View>
<ScrollView>
<View style={{width:'100%',alignSelf:'center',marginTop:20}}>
          <FlatList
                  data={upData?.filter(el=>el.catId === selectedCategory)}
                  numColumns={2}
                  renderItem={({item,index})=>{
                    return(
                      <>
                      <View style={{width:dimensions.SCREEN_WIDTH/2.2,marginHorizontal:5}}>
          <TouchableOpacity style={{width:dimensions.SCREEN_WIDTH/2.2,height:170,backgroundColor:'#fff',alignSelf:'center', borderRadius:15, overflow:'hidden'}}
          onPress={()=>{props.navigation.navigate('ShopProductDetails')}}>
          <Image source={item.img} style={{width:'100%',height:'100%',alignSelf:'center'}}></Image>
          </TouchableOpacity>
          <View style={{}}>
          <Text style={{fontSize:11,color:Mycolors.Black,marginTop:5,textAlign:'left',fontWeight:'bold'}}>{item.title}</Text>
          </View>
          <View style={{padding:5,paddingLeft:0,top:-5}}>
          <Text style={{fontSize:9,color:Mycolors.GrayColor,marginTop:5,textAlign:'left',}}>{item.price}</Text>
          </View>
          </View>
    </>  
                  )
                  }}
                  keyExtractor={item => item.id}
                />
         </View>
         <View style={{width:10,height:500}}></View>
  </ScrollView> 

 </View>
    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({

});
export default ShopProductDetails 
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

const ShopCategoryAll = (props) => {
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
      img:require('../../../assets/farmland.jpg'),
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
      img:require('../../../assets/farmland.jpg'),
    },
    {
      id: '4',
      title: 'Hardware',
      desc:'',
      time:'',
      img:require('../../../assets/farmland.jpg'),
    },
    {
      id: '5',
      title: 'Hand Tool',
      desc:'',
      time:'',
      img:require('../../../assets/farmland.jpg'),
    },
    {
      id: '6',
      title: 'Hardware',
      desc:'',
      time:'',
      img:require('../../../assets/farmland.jpg'),
    },
  ])
 
  const multiSliderValuesChange = (values) => {setMultiSliderValue(values)}
  useEffect(()=>{

 },[])


  return(
    <SafeAreaView scrollEnabled={scrollEnabled} style={{height:'100%', backgroundColor: '#F8F8F8'}}>
      {/* <ScrollView> */}
    <HomeHeader height={60}  paddingHorizontal={15}
   press1={()=>{props.navigation.goBack()}} img1={require('../../../assets/arrow.png')} img1width={18} img1height={15} 
   press2={()=>{}} title2={'Categories'} fontWeight={'500'} img2height={20}
   press3={()=>{}} />

<View style={{width:'96%',alignSelf:'center'}}>
<SearchInputEnt marginTop={10} placeholder={'Search Categories'} 
serchValue={searchValue}
searchIcon={require('../../../assets/product_search_icon.png')} 
onChangeText={(e)=>{setsearchValue(e)}} 
press={()=>{Alert.alert('Hi')}}
presssearch={()=>{Alert.alert('Search Pressed')}}
paddingLeft={50}/>
 

<View style={{width:'100%',alignSelf:'center',marginTop:20}}>
          <FlatList
                  data={categoryData}
                  showsVerticalScrollIndicator={false}
                  numColumns={2}
                  renderItem={({item,index})=>{
                    return(
                      <>
                      <View style={{width:dimensions.SCREEN_WIDTH/2.2,marginHorizontal:5,marginVertical:5}}>
          <TouchableOpacity style={{width:dimensions.SCREEN_WIDTH/2.2,height:200,backgroundColor:'#fff', alignItems:'center', borderRadius:15}}
          onPress={()=>{props.navigation.navigate('ShopCategoryProducts', {name: item.title})}}>
          <Image source={item.img} style={{width:120,height:120,borderRadius:60, marginTop:20}}></Image>
          <Text style={{fontSize:12,color:'#263238',marginTop:5,textAlign:'left',fontWeight:'600', marginTop:15}}>{item.title}</Text>
          </TouchableOpacity>
          </View>
          {categoryData.length-1==index ?
          <View style={{width:10,height:600}}></View>
        :null}
          </>
                    )
                  }}
                  keyExtractor={item => item.id}
                />
         </View>






 </View>
{/* <View style={{height:100}} /> */}

{/* </ScrollView> */}
    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({

});
export default ShopCategoryAll 
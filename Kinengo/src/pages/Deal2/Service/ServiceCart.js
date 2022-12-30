import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import HomeHeaderRoundBottom from 'src/component/HomeHeaderRoundBottom';
import SearchInput2 from 'src/component/SearchInput2';
import SearchInputEnt from 'src/component/SearchInputEnt';
import ServiceSearch from './Components/ServiceSearch';
import SerchInput from 'src/component/SerchInput';
import { dimensions, Mycolors } from 'src/utility/Mycolors';
import { ImageSlider,ImageCarousel } from "react-native-image-slider-banner";
import MyButtons from 'src/component/MyButtons';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import Modal from 'react-native-modal';
import Toast from 'react-native-simple-toast'
import LinearGradient from 'react-native-linear-gradient'
import AppIntroSlider from 'react-native-app-intro-slider';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const ServiceHome = (props) => {
  const [searchValue,setsearchValue]=useState('')
  const [scrollEnabled, setScrollEnabled] = useState(false)
  const myTextInput = useRef()
  const [multiSliderValue, setMultiSliderValue] = useState([0, 100])
  const [showChooseMilesModal, setShowChooseMilesModal] = useState(false)
  const [selectedCategory, setSelectedCategory]=useState('1')
  const [servicesList, setServicesList]=useState([
    {
        id: '1',
        title: 'Deep clean AC service (window)',
        price:949,
        desc:['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
        time:'45 mins',
        img:require('../../../assets/service-product-image.png'),
    },
    {
        id: '2',
        title: 'Deep clean AC service (window)',
        price:949,
        desc:['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
        time:'45 mins',
        img:require('../../../assets/service-product-image.png'),
    },
    {
        id: '3',
        title: 'Deep clean AC service (window)',
        price:949,
        desc:['Get 2x deeper dust removal with unique foam je technology', 'Recommended for ACs serviced more than 6 months ago'],
        time:'45 mins',
        img:require('../../../assets/service-product-image.png'),
    },
  ])
  const [categoryData, setCategoryData]=useState([
    {
      id: '1',
      title: 'Appliance Repair',
      desc:'',
      time:'',
      img:require('../../../assets/service-category-image.png'),
    },
    {
      id: '2',
      title: 'Appliance Repair',
      desc:'',
      time:'',
      img:require('../../../assets/service-category-image.png'),
    },
    {
      id: '3',
      title: 'Appliance Repair',
      desc:'',
      time:'',
      img:require('../../../assets/service-category-image.png'),
    },
    {
      id: '4',
      title: 'Appliance Repair',
      desc:'',
      time:'',
      img:require('../../../assets/service-category-image.png'),
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
      catId: '1',
      title: 'Intel 3rd Gen Motherboard',
      desc:'',
      price:'$140.00',
      time:'',
      img:require('../../../assets/intel_motherboard.png'),
    },
    {
      id: '6',
      catId: '2',
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

 const _renderItem = ({ item }) => {
  return (
      <Image source={{uri: item.image}} style={{width:'100%',height:170, borderRadius:20, alignSelf:'center'}}/>
    // <View key={item.key} style={styles.slide}>
    //   <Text style={styles.title}>{item.title}</Text>
    //   <Text style={styles.text}>{item.text}</Text>
    // </View>
  );
}

  return(
    <SafeAreaView scrollEnabled={scrollEnabled} style={{height:'100%', backgroundColor: '#F8F8F8'}}>
      <ScrollView>
    <HomeHeaderRoundBottom height={100} extraStyle={{paddingtop:10, paddingBottom:25}}  paddingHorizontal={15} borderBottomLeftRadius={20} borderBottomRightRadius={20} backgroundColor='#6D2F92'
   press1={()=>{props.navigation.goBack()}} img1={require('../../../assets/service-header-back-button.png')} img1width={25} img1height={18} 
   press2={()=>{}} title2={'Service'} fontWeight={'500'} img2height={20} color={'#fff'}
   press3={()=>{}} img3={require('../../../assets/service-cart-icon.png')} img3width={25} img3height={20} />

<View style={{width:'96%',alignSelf:'center',backgroundColor:'#F8F8F8'}}>
 
  <View style={{height:10}}/> 

<View style={{width:'100%',alignSelf:'center',marginTop:20}}>
<FlatList
                  data={servicesList}
                  numColumns={1}
                  renderItem={({item,index})=>{
                    return(
                      <View style={{width:dimensions.SCREEN_WIDTH*0.9, backgroundColor:'#fff',borderRadius:15, padding:10, marginBottom:10, alignSelf:'center'}}>
            <View style={{flexDirection:'row'}}>
                <View style={{flex:1}}>
                    <Image source={item.img} style={{width:60,height:60,borderRadius:60/2,alignSelf:'center'}}></Image>
                </View>
                
                <View style={{flex:4, marginLeft:10, marginTop:10}}>
                    <Text style={styles.unselectedTabText}>{item.title}</Text>
                    <View style={{flexDirection:'row', alignItems:'center', marginTop:5, marginBottom:3}}>
                        <Text style={styles.unselectedTabText}>${item.price}</Text>
                        <Text style={{fontSize:10,fontWeight:'400',color: '#455A64', marginLeft:10}}>${item.time}</Text>
                    </View>
                    {item.desc?.map((item, index)=>{
                        return (
                            <View style={{flexDirection:'row', alignItems:'center'}}>
                                <View style={{backgroundColor:'#263238', width:5, height:5, borderRadius:5/2}}/>
                                <Text style={[styles.bulletPoints, {marginLeft:5}]}>{item}</Text>
                            </View>
                        )
                    })}
                    <TouchableOpacity style={styles.addView}>
                        <Text style={{fontSize:14,fontWeight:'400',color:'#FFF'}}>Add</Text>
                    </TouchableOpacity>
                </View>

            </View>
          
          </View>
                    )
                  }}
                  keyExtractor={item => item.id}
                />
         </View>






 </View>
<View style={{height:100}} />

</ScrollView>
    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({
  bookingsView:{
    position:'absolute',
    bottom:20,
    right:20,
    paddingVertical:20,
    paddingHorizontal:10,
    // marginTop:30,
    borderRadius:25, 
    backgroundColor:'#6D2F91', 
    // width:'30%',
    alignSelf:'center', 
    // height:100, 
    // width:100, 
    // justifyContent:'center', 
    alignItems:'center',
    shadowColor: '#000',
    shadowOffset: {
    width: 0,
    height: 3
    },
    shadowRadius: 1,
    shadowOpacity: 0.1,
    justifyContent: 'center',
    elevation: 1,
  },
  bookingsText:{
    fontSize:14,
    fontWeight:'500',
    color:'#fff',
    marginTop:5
  },
  unselectedTabText:{
    fontSize:14,
    fontWeight:'500',
    color: '#263238'
  },
  bulletPoints:{
    fontSize:12,
    fontWeight:'400',
    color: '#263238'
  },
});
export default ServiceHome 
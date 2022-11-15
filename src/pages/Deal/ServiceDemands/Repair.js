import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import { ImageSlider,ImageCarousel } from "react-native-image-slider-banner";
import ServiceHeader from '../../../component/ServiceHeader';
import { Mycolors } from '../../../utility/Mycolors';


const Repair = (props) => {
 const [search,setsearch]=useState('')
 const [Press,setPress]=useState('')
 const [upData,setupData]=useState([
  {
    id: '1',
    title: 'Appliance Repair',
    desc:'',
    time:'',
    img:require('../../../assets/repair.png'), 
  },
  {
    id: '2',
    title: 'Home Painting',
    desc:'',
    time:'',
    img:require('../../../assets/cleaner.png'),
  },
  {
    id: '3',
    title: 'Cleaning & Pest',
    desc:'',
    time:'',
    img:require('../../../assets/cleaners.png'),
  },
  {
    id: '4',
    title: 'Disinfection',
    desc:'',
    time:'',
    img:require('../../../assets/cleanerss.png'),
  },
  {
    id: '5',
    title: 'Home Repairs',
    desc:'',
    time:'',
    img:require('../../../assets/engineer.png'),
  },
  {
    id: '6',
    title: 'Salon',
    desc:'',
    time:'',
    img:require('../../../assets/cleanerss.png'),
  },
  {
    id: '7',
    title: 'Therapies',
    desc:'',
    time:'',
    img:require('../../../assets/Group6273.png'),
  },
 
])
  useEffect(()=>{

 },[])


  return(
    <SafeAreaView style={{}}>

<View style={{alignSelf:'center',width:'100%'}}>
    <ServiceHeader 
    placeholder={'Search for service'} 
    serchValue={search} 
    onChangeText={(e)=>{setsearch(e)}} 
    press1={()=>{props.navigation.goBack()}}
    press2={()=>{Alert.alert('Searched')}}
     title={'Service'}
    />
</View>


    
<View style={{width:'95%',alignSelf:'center',marginTop:25}}>
              <FlatList
                      data={upData}
                    //   numColumns={3}
                      renderItem={({item,index})=>{
                        return(
                            <TouchableOpacity style={{width:'93%',marginTop:10,backgroundColor:Mycolors.BG_COLOR,borderRadius:10,padding:10,borderWidth:1,borderColor:Press==item ? Mycolors.ServiceHeader : 'transparent',alignSelf:'center',flexDirection:'row',alignItems:'center'}}
                            onPress={()=>{
                              setPress(item)
                              props.navigation.navigate('AddService')
                              }}>
                            <View style={{width:50,height:50,backgroundColor:Mycolors.LogininputBox,borderRadius:60,alignSelf:'center',justifyContent:'center',}}>
                            <Image source={item.img} style={{width:'100%',height:'100%',alignSelf:'center',borderRadius:40,overflow:'hidden'}}></Image>
                            </View>
                            <Text style={{fontSize:12,color:Mycolors.Black,textAlign:'center',fontWeight:'500',marginLeft:10}}>{item.title}</Text>
                      {Press==item ?
                      <View style={{width:30,height:30,borderRadius:20,backgroundColor:'transparent',justifyContent:'center',position:'absolute',right:10,top:20}}>
                      <Image source={require('../../../assets/CheckCircle.png')} style={{width:30,height:30,alignSelf:'center',borderRadius:20,overflow:'hidden'}}></Image>
                      </View>
                      : null
                      }
                            </TouchableOpacity>
                        )
                      }}
                      keyExtractor={item => item.id}
                    />
             </View>


    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({
  input: {
    height: 50,
    width: '100%',
    fontSize: 12,
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 5,
    color: Mycolors.TEXT_COLOR,
    paddingLeft: 15,
    paddingRight: 35,
    backgroundColor: Mycolors.BG_COLOR,
  },
});
export default Repair
import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import { ImageSlider,ImageCarousel } from "react-native-image-slider-banner";
import ServiceHeader from '../../../component/ServiceHeader';
import { Mycolors } from '../../../utility/Mycolors';


const AddService = (props) => {
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

<View style={{width:'90%',flexDirection:'row',justifyContent:'space-between',alignSelf:'center'}}>
   <View>
    <Text style={{fontSize:17,color:Mycolors.Black}}>Air Conditioner</Text>
    <View style={{flexDirection:'row',alignItems:'center',marginTop:5}}>
            <Image source={require('../../../assets/Star.png')} style={{width:20,height:20,alignSelf:'center',overflow:'hidden'}}></Image>
            <Text style={{fontSize:12,color:Mycolors.TEXT_COLOR,marginLeft:5}}>4.78</Text>
    </View>
   </View>
   <TouchableOpacity style={{width:120,height:40,justifyContent:'center',backgroundColor:Mycolors.ServiceHeader,borderRadius:25}}>
   <Text style={{fontSize:12,color:Mycolors.BG_COLOR,textAlign:'center'}}>Message</Text>
   </TouchableOpacity>
</View>

<Text style={{fontSize:15,color:Mycolors.ServiceHeader,fontWeight:'500',marginLeft:'5%',marginTop:30}}>Description</Text>

<View style={{width:'90%',alignSelf:'center'}}>
<Text style={{fontSize:12,color:'#455A64',lineHeight:17,textAlign:'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap</Text>
</View>
    
<Text style={{fontSize:15,color:Mycolors.Black,fontWeight:'500',marginLeft:'5%',marginTop:10}}>Add Service</Text>


<View style={{width:'95%',alignSelf:'center',marginTop:25}}>
              <FlatList
                      data={upData}
                    //   numColumns={3}
                      renderItem={({item,index})=>{
                        return(
                            <View style={{width:'93%',marginTop:10,backgroundColor:Mycolors.BG_COLOR,borderRadius:10,padding:10,alignSelf:'center',flexDirection:'row'}}>
                            <View style={{width:50,backgroundColor:Mycolors.Black,borderRadius:60,alignSelf:'center',justifyContent:'center',}}>
                            <Image source={item.img} style={{width:50,height:50,alignSelf:'center',borderRadius:40,overflow:'hidden'}}></Image>
                            </View>
                                <View style={{width:'80%',marginLeft:15}}>
                                <Text style={{fontSize:12,color:Mycolors.Black,fontWeight:'500'}}>{item.title}</Text>
                                <View style={{flexDirection:'row',marginVertical:10}}>
                                <Text style={{fontSize:12,color:Mycolors.Black,fontWeight:'500'}}>$949</Text>
                                <Text style={{fontSize:12,color:Mycolors.GrayColor,marginLeft:15}}>45 mins</Text>
                                </View>
                                <Text style={{fontSize:11,color:Mycolors.TEXT_COLOR,lineHeight:15,textAlign:'left'}}>Lorem Ipsum is simply dummy when arambled it to make a type specimen book. It has survived not only five centuries, but also the leap</Text>
 
                                <TouchableOpacity style={{width:70,height:30,backgroundColor:Mycolors.ServiceHeader,borderRadius:20,justifyContent:'center',marginTop:10}}>
                                <Text style={{fontSize:12,color:Mycolors.BG_COLOR,textAlign:'center'}}>Add</Text>
                                </TouchableOpacity>
                                </View>
                            </View>
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
export default AddService
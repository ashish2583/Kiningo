import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import { ImageSlider,ImageCarousel } from "react-native-image-slider-banner";
import ServiceHeader from '../../component/ServiceHeader';
import { Mycolors } from '../../utility/Mycolors';


const ServiceDemand = (props) => {
 const [search,setsearch]=useState('')
 const [Press,setPress]=useState('')
 const [upData,setupData]=useState([
  {
    id: '1',
    title: 'Appliance Repair',
    desc:'',
    time:'',
    img:require('../../assets/repair.png'),
  },
  {
    id: '2',
    title: 'Home Painting',
    desc:'',
    time:'',
    img:require('../../assets/cleaner.png'),
  },
  {
    id: '3',
    title: 'Cleaning & Pest',
    desc:'',
    time:'',
    img:require('../../assets/cleaners.png'),
  },
  {
    id: '4',
    title: 'Disinfection',
    desc:'',
    time:'',
    img:require('../../assets/cleanerss.png'),
  },
  {
    id: '5',
    title: 'Home Repairs',
    desc:'',
    time:'',
    img:require('../../assets/engineer.png'),
  },
  {
    id: '6',
    title: 'Salon',
    desc:'',
    time:'',
    img:require('../../assets/cleanerss.png'),
  },
  {
    id: '7',
    title: 'Therapies',
    desc:'',
    time:'',
    img:require('../../assets/Group6273.png'),
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

<View style={{width:'90%',alignSelf:'center'}}>
 <View style={{height:150,borderRadius:20,overflow:'hidden',marginTop:40,width:'100%',alignSelf:'center'}}>
     <ImageSlider 
    //  localImg={true}
    data={[
        // require('../../assets/Group75972.png'),
        {img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5a5uCP-n4teeW2SApcIqUrcQApev8ZVCJkA&usqp=CAU'},
        {img: 'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg'},
        {img: 'https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__340.jpg'}
    ]}
   // onClick={(item, index) => {alert('hello'+index)}}
    autoPlay={true}
   // onItemChanged={(item) => console.log("item", item)}
    closeIconColor="#fff"
/>
   </View>

<View style={{width:'100%',flexDirection:'row',justifyContent:'space-between',marginTop:20}}>
<Text style={{color:Mycolors.Black,fontWeight:'500'}}>Our Category</Text>
<Text style={{color:Mycolors.ServiceHeader,fontSize:11}} onPress={()=>{}}>View All</Text>
</View>

</View>
    
<View style={{width:'95%',alignSelf:'center'}}>
              <FlatList
                      data={upData}
                      numColumns={3}
                      renderItem={({item,index})=>{
                        return(
                            <TouchableOpacity style={{width:'29%',marginTop:10,backgroundColor:Mycolors.BG_COLOR,marginHorizontal:8,borderRadius:10,padding:10,borderWidth:1,borderColor:Press==item ? Mycolors.ServiceHeader : 'transparent'}}
                            onPress={()=>{
                              setPress(item)
                              props.navigation.navigate('ServiceStack')
                              }}>
                            <View style={{width:50,height:50,backgroundColor:Mycolors.LogininputBox,borderRadius:60,alignSelf:'center',justifyContent:'center',}}>
                            <Image source={item.img} style={{width:'100%',height:'100%',alignSelf:'center',borderRadius:40,overflow:'hidden'}}></Image>
                            </View>
                            <View style={{}}>
                            <Text style={{fontSize:10,color:Mycolors.TEXT_COLOR,textAlign:'center',fontWeight:'500'}}>{item.title}</Text>
                            </View>
                      
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
export default ServiceDemand
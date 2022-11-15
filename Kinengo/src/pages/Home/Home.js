import React, { useEffect, useState ,useRef} from 'react';
import { View, Image, Text, StyleSheet, SafeAreaView,ImageBackground, TextInput,Linking,BackHandler, FlatList, TouchableOpacity, Platform, Alert, PermissionsAndroid, ScrollView } from 'react-native';
import { Mycolors,dimensions } from '../../utility/Mycolors';
import HomeHeader from '../../component/HomeHeader';
import SerchInput from '../../component/SerchInput';
import LinearGradient from 'react-native-linear-gradient'
import MyButtons from '../../component/MyButtons';

const Home = (props) => {
 
const [homeList,setHomeList]=useState([{id:'1',bgImage:require('../../assets/homeImg.png'),text:'We Repair All Makes & Models of Air Conditioners',title:'Add Service'},{id:'2',bgImage:require('../../assets/homeImg.png'),text:'We Repair All Makes & Models of Air Conditioners',title:'Add Service'},{id:'3',bgImage:require('../../assets/homeImg.png'),text:'We Repair All Makes & Models of Air Conditioners',title:'Add Service'}])
const [searchValue,setsearchValue]=useState('')
  useEffect( () => { 
   
  }, [])
const Mydesign=(press,img,tital,h,w)=>{
  return(
   <View style={{
    borderRadius:7,
    marginTop:10,
    backgroundColor:'#fff',
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width:0,
      height:3
    }, 
    shadowRadius: 5,
    shadowOpacity: 1.0,
    justifyContent: 'center',
    elevation: 5,
    
   }}>
         <TouchableOpacity style={{width:'100%',height:50,flexDirection:'row',
    justifyContent:'space-between',alignItems:'center',
   
    paddingHorizontal:10 ,borderRadius:5,overflow:'hidden'   
    }} onPress={press}>
    <View style={{flexDirection:'row',alignItems:'center'}}>
    <Image source={img} style={{width:w,height:h,}}></Image>
    <Text style={{left:15,color:Mycolors.TEXT_COLOR,fontSize:13,fontWeight:'bold'}}>{tital}</Text>
    </View>

   <Image source={require('../../assets/Vector.png')} style={{width:8,height:16,}}></Image>


    </TouchableOpacity>
   
    </View>
  )
}

  return (
    <SafeAreaView style={styles.container}>
   <HomeHeader height={60}  paddingHorizontal={15}
   press1={()=>{props.navigation.openDrawer()}} img1={require('../../assets/List.png')} img1width={25} img1height={25} 
   press2={()=>{}} img2={require('../../assets/Kinengo_Green.png')} img2width={95} img2height={20}
   press3={()=>{}} img3={require('../../assets/Bell.png')} img3width={25} img3height={25} />
<View style={{alignSelf:'center'}}>
    <SerchInput marginTop={10} placeholder={'What are you looking for?'} serchValue={searchValue} onChangeText={(e)=>{setsearchValue(e)}} press={()=>{Alert.alert('Hi')}}/>
</View>
   
    <ScrollView style={{paddingHorizontal:15,flexGrow:1}} nestedScrollEnabled={true}>
         <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:15}}>
                  {homeList.map((item, index) => (
                    <View key={index} style={{backgroundColor:'transparent',height:170,width:dimensions.SCREEN_WIDTH-80,marginRight:10,borderRadius:20}}>
                            <ImageBackground source={item.bgImage}style={{height:170,width:dimensions.SCREEN_WIDTH-80,borderRadius:20,overflow:'hidden'}}resizeMode='cover'>
                            <LinearGradient
          colors={['#000', 'transparent' ]}
          style={{height:160,width:dimensions.SCREEN_WIDTH-80,borderRadius:20,paddingHorizontal:15,
          justifyContent: 'center'}}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
         >
<TouchableOpacity>
  <View style={{width:'52%'}}>
  <Text style={{color:Mycolors.BG_COLOR}}>{item.text}</Text>
</View>
<Text style={{fontSize:12,marginTop:14,color:Mycolors.SearchBoxColor}}>{item.title}</Text>                          
  
</TouchableOpacity>
</LinearGradient>
                          </ImageBackground>
                     </View>
                  ))}
            </ScrollView> 
  
  <View style={{width:'98%',padding:10,flexDirection:'row',marginVertical:15,backgroundColor:Mycolors.BG_COLOR,borderRadius:8,
shadowColor: 'rgba(0, 0, 0, 0.5)',
shadowOffset: {
  width:0,
  height:3
}, 
shadowRadius: 5,
shadowOpacity: 1.0,
justifyContent: 'center',
elevation: 5,
alignSelf:'center'
//marginHorizontal:6
}}>
    <View style={{width:50,height:50,borderRadius:25}}>
    <Image source={require('../../assets/images/profileimg.png')} style={{width:'100%',height:'100%',borderRadius:25}}></Image>
    </View>
<View style={{marginLeft:10,width:'70%'}}>
  <Text style={{fontWeight:'600',color:Mycolors.TEXT_COLOR}}>Dua Lipa Accepted your connect request</Text>
  <Text style={{fontSize:12,marginTop:10,color:Mycolors.TEXT_COLOR}}>4 Mile Away</Text>
  <MyButtons title="Send Message" height={30} width={130} borderRadius={30} press={()=>{}} 
   titlecolor={Mycolors.BG_COLOR} backgroundColor={Mycolors.GREEN} fontWeight={'500'} fontSize={13} marginVertical={10}/>
     
</View>
  </View>
<View style={{width:'98%',
    alignSelf:'center'}}>
{Mydesign(()=>{props.navigation.navigate('Connect',{from:'Home'})},require('../../assets/homeConnect.png'),'Connect',40,40)}
{Mydesign(()=>{props.navigation.navigate('Deal',{from:'Home'})},require('../../assets/homeDeal.png'),'Deal',40,40)}
{Mydesign(()=>{props.navigation.navigate('Talkie',{from:'Home'})},require('../../assets/homeTalkie.png'),'Talkie',40,40)}
{Mydesign(()=>{props.navigation.navigate('Creation',{from:'Home'})},require('../../assets/homeBulb.png'),'Creation',40,40)}
{Mydesign(()=>{props.navigation.navigate('Shop',{from:'Home'})},require('../../assets/homeBulb.png'),'Shop',40,40)}

</View>


<View style={{width:100,height:100}}></View>
</ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Mycolors.BG_COLOR
  },

});
export default Home
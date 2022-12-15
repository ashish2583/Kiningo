//react components
import React from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
//globals
//styles
import {styles} from './CarouselStyle';

const CarouselItem = ({item, onReject = () => {}, onLove = () => {}, onRefresh = () => {}}) => {
  //variables
  const navigation = useNavigation();
  //function : navigation function
  //UI
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.itemCon}>
      <Image source={{uri: item.slider}} style={styles.imageStyle} />
      <View style={styles.buttonsRow}>
        <TouchableOpacity onPress={()=>{onReject(1)}}>
          <Image source={require('../../../../../assets/dating-reject-image.png')} style={{width:90, height:90, top:-(90+20)/2,}} resizeMode='contain'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{onLove(1)}}>
          <Image source={require('../../../../../assets/dating-love-image.png')} style={{width:110, height:110, top:-(110+10)/2,}} resizeMode='contain'/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{onRefresh(1)}}>
          <Image source={require('../../../../../assets/dating-refresh-image.png')} style={{width:90, height:90, top:-(90+20)/2,}} resizeMode='contain'/>
        </TouchableOpacity>
      </View>
      <Text style={{fontSize:15, color:'#31313f', fontWeight:'bold', textAlign:'center', top:-60}}>Mary Burgees</Text>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center', top:-50}}>
        <Text style={{fontSize:10, color:'#e10f51'}}>@marry</Text>
        <View style={{height: '100%',width: 1,backgroundColor: '#4a4c52', marginHorizontal:20}}></View>
        <Text style={{fontSize:10, color:'#e1e1e1'}}>Age 23</Text>
        <View style={{height: '100%',width: 1,backgroundColor: '#4a4c52', marginHorizontal:20}}></View>
        <Text style={{fontSize:10, color:'#e1e1e1'}}>5 miles away</Text>
      </View>
    </TouchableOpacity>
    
  );
};

export default React.memo(CarouselItem);

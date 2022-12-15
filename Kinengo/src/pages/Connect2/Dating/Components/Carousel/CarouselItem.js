//react components
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
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
    </TouchableOpacity>
    
  );
};

export default React.memo(CarouselItem);

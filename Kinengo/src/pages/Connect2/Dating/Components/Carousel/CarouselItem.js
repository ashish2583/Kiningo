//react components
import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
//globals
//styles
import {styles} from './CarouselStyle';

const CarouselItem = ({item}) => {
  //variables
  const navigation = useNavigation();
  //function : navigation function
  //UI
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.itemCon}>
      <Image source={{uri: item.slider}} style={styles.imageStyle} />
    </TouchableOpacity>
  );
};

export default React.memo(CarouselItem);

import { dimensions } from 'src/utility/Mycolors';
import React from 'react';
import {Animated, Text, View} from 'react-native';

//styles
import {styles} from './CarouselStyle';

//global

const Dots = ({scrollX, index}) => {
  const inputRange = [
    (index - 1) * dimensions.SCREEN_WIDTH,
    index * dimensions.SCREEN_WIDTH,
    (index + 1) * dimensions.SCREEN_WIDTH,
  ];

  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0.3, 1, 0.3],
    extrapolate: 'clamp',
  });

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0.7, 1, 0.7],
    extrapolate: 'clamp',
  });

  const backgroundColor = scrollX.interpolate({
    inputRange,
    outputRange: [
      'rgba(225, 225, 225, 1)',
      'rgba(225, 25, 77, 1)',
      'rgba(225, 225, 225, 1)',
    ],
  });

  return (
    <Animated.View
      style={[styles.circle, {opacity, backgroundColor, transform: [{scale}]}]}
    />
  );
};

export default React.memo(Dots);

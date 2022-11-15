import {Dimensions} from 'react-native';

const entireScreenWidth = Dimensions.get('window').width;
const entireScreenHeight = Dimensions.get('window').height;
const {width, height} = Dimensions.get('window');

const FontSize = () => {
  if (entireScreenWidth * entireScreenHeight >= 719412) {
    //Samsung tab A works properly
    return (307326 / 230400) * 1.1;
  } else if (
    entireScreenWidth * entireScreenHeight >= 471509.13 &&
    entireScreenWidth * entireScreenHeight < 307326
  ) {
    return (307326 / 230400) * 1.37; // for one plus 7T and one plus 5T and one plus 7 pro;
  } else if (
    entireScreenWidth * entireScreenHeight >= 253980 &&
    entireScreenWidth * entireScreenHeight < 307326
  ) {
    return (307326 / 230400) * 0.98;
  } else if (
    entireScreenWidth * entireScreenHeight >= 307326 &&
    entireScreenWidth * entireScreenHeight < 334005
  ) {
    return (entireScreenWidth * entireScreenHeight) / 216000; //for m30
  } else if (
    entireScreenWidth * entireScreenHeight >= 307326 &&
    entireScreenWidth * entireScreenHeight < 253980
  ) {
    return 307326 / 230400;
  } else if (entireScreenWidth * entireScreenHeight <= 253980) {
    //For lava && honor 217440
    return 230400 / 182186;
  } else {
    if (entireScreenWidth < 500 && entireScreenHeight >= 926) {
      let hMultw = entireScreenHeight / entireScreenWidth;
      return (307326 / 230400) * 1.23;
    }
    return (entireScreenWidth * entireScreenHeight) / 230400; //For one plus 7 pro & redmi note 5 pro && sm A50 347637
  }
};

export {FontSize};




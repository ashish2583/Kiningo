import { Mycolors, dimensions } from 'src/utility/Mycolors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  row: {
    width: 51,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  itemCon: {
    height: dimensions.SCREEN_HEIGHT / 1.8,
    width: dimensions.SCREEN_WIDTH - 40,
    borderRadius: 20,
    // alignSelf:'center',
    // marginRight:10
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
    alignSelf:'center'
  },
  circle: {
    height: 12,
    width: 12,
    borderRadius: 12 / 2,
    backgroundColor: Mycolors.GrayColor,
    marginRight: 10,
  },
  dotsCon: {
    // width: dimensions.SCREEN_WIDTH - 40,
    height: 12,
    top: 40,
    alignItems: 'center',
    position:'absolute',
    // top:0,
    right:5,
    transform: [{ rotate: '90deg'}]
  },
  dotsFlatList: {
    height: 7,
    width: 85,
  },
});

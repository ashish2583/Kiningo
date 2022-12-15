//react components
import React from 'react';
import {View, Animated, FlatList} from 'react-native';
//custom components
import Dots from './Dots';
import CarouselItem from './CarouselItem';
import { dimensions } from 'src/utility/Mycolors';
//styles
import {styles} from './CarouselStyle';

const Carousel = ({data, onReject = () => {}, onLove = () => {}, onRefresh = () => {}}) => {
  //ref
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const interval = React.useRef(0);
  const activeIndex = React.useRef(0);
  const ref = React.useRef(null);
  const isAutoScrolling = React.useRef(true);
  const bottomRef = React.useRef(null);
  //variables

  const handleOnMomentumScrollEnd = ({nativeEvent}) => {
    if (!isAutoScrolling.current) {
      const index = Math.floor(nativeEvent.contentOffset.x / dimensions.SCREEN_WIDTH);
      activeIndex.current = index;
      bottomRef?.current?.scrollToIndex({
        animated: true,
        index: activeIndex.current,
        viewPosition: 0.5,
      });
      // startAutoScroll();
    }
  };
  const startAutoScroll = () => {
    interval.current = setInterval(() => {
      if (data.length > 0) {
        isAutoScrolling.current = true;
        activeIndex.current += 1;
        if (activeIndex.current > data.length - 1) {
          activeIndex.current = 0;
        }
        ref?.current?.scrollToIndex({
          animated: true,
          index: activeIndex.current,
          viewPosition: 0.5,
        });
        bottomRef?.current?.scrollToIndex({
          animated: true,
          index: activeIndex.current,
          viewPosition: 0.5,
        });
      }
    }, 7000);
  };
  const stopAutoScroll = () => {
    isAutoScrolling.current = false;
    clearInterval(interval.current);
  };
  //function : render function
  const renderItem = ({item}) => <CarouselItem item={item} onReject={onReject} onLove={onLove} onRefresh={onRefresh}/>;
  //useEffect
  // React.useEffect(() => {
  //   startAutoScroll();
  //   return () => {
  //     isAutoScrolling.current = true;
  //     activeIndex.current = 0;
  //     clearInterval(interval.current);
  //   };
  // }, []);
  //UI
  return (
    <View style={styles.container}>
      <Animated.FlatList
        ref={ref}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item?.id?.toString()}
        horizontal={true}
        pagingEnabled
        bounces={false}
        showsHorizontalScrollIndicator={false}
        disableIntervalMomentum={true}
        decelerationRate={0.6}
        snapToInterval={dimensions.SCREEN_WIDTH}
        onScrollBeginDrag={stopAutoScroll}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {x: scrollX}}}],
          {useNativeDriver: false},
        )}
        onMomentumScrollEnd={handleOnMomentumScrollEnd}
      />
      {data.length == 1 ? null : (
        <View style={styles.dotsCon}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            style={data.length >= 5 ? styles.dotsFlatList : {}}
            ref={bottomRef}
            data={data}
            renderItem={({item, index}) => (
              <Dots scrollX={scrollX} index={index} />
            )}
            keyExtractor={(_, index) => index.toString()}
          />
        </View>
      )}
    </View>
  );
};

export default React.memo(Carousel);

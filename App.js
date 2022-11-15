import React, { useEffect } from 'react';
import {SafeAreaView,LogBox,StatusBar,useColorScheme,View,} from 'react-native';
import MainNav from './src/navigators/MainNav'
import store from './src/redux/store/store';
import 'react-native-gesture-handler';
import 'react-native-get-random-values'

import { NavigationContainer,DefaultTheme } from '@react-navigation/native'
import {Provider} from 'react-redux';

const App = () => {
  LogBox.ignoreAllLogs()
  //UI
  return (
    <Provider store={store}>
    <NavigationContainer theme={DefaultTheme}>
    <MainNav/>
   </NavigationContainer>
  </Provider>
  );
};

export default App;

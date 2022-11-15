import React, { useEffect } from 'react';
import { useColorScheme, Dimensions, Text, StyleSheet, Appearance } from 'react-native';

export const dimensions = {
  SCREEN_WIDTH: Dimensions.get('window').width,
  SCREEN_HEIGHT: Dimensions.get('window').height
};

export const bgcolor = '#fff'
export const textcolor = '#000'

const myfun = (data) => {
  const colorScheme = Appearance.getColorScheme();
  if (colorScheme === 'dark') {
    return data.My_colors
  } else {
    // return data.MyDarkcolors 
    return data.My_colors
  }
}
export const Mycolors = myfun({
  My_colors: {
    BG_COLOR: '#fff',
    TimingColor:'#fff4f6',
    ServiceHeader:'#6D2F92',
    BG_LINEAR_START_COLOR: '#fffbe6',
    BG_LINEAR_END_COLOR: '#caf0c9',
    BTN_LINEAR_START_COLOR: '#508b1d',
    BTN_LINEAR_END_COLOR: '#81bd19',
    SearchBoxColor:'#FFD037',
    TEXT_COLOR: '#31313f',
    OTPBOX_Color:'#efe3a7',
    placeholdercolor:'#e1e1e1',
    InputBoxColor: 'rgba(100,100,100,0.5)',
    HomeScreenBoxColor: 'rgba(256,130,150,0.1)',
    THEME_COLOR: "#fff6e6",
    ORANGE: "#ff8c00",
    BLUE_DARK: "#3e5869",
    DrawerBGcolor: '#fff6e6',
    GrayColor: '#808080',
    QUE_COLOR: '#ffe3d2',
    White: '#FFFFFF',
    Black: '#000',
    BLUE: 'blue',
    SKY_BLUE: '#4186f5',
    LIGHT_SKY_BLUE: '#ccdefc',
    LITE_BLUE: '#0195ff',
    DARK_VIOLET: '#333145',
    VIOLET: '#511ac0',
    BORDER_COLOR: '#fcead2',
    LITE_ORANGE: '#fdb970',
    DARK_GREY: '#535659',
    LITE_SKIN: '#febc7f',
    SKIN: '#feab5f',
    CHOCOLATE: '#994604',
    RED: '#d00100',
    YELLOW: '#ffc006',
    GREEN: '#078e05'
  },
  MyDarkcolors: {
    BG_COLOR: '#000',
    TEXT_COLOR: '#3e5869',
    placeholdercolor:'#939393',
    InputBoxColor: 'rgba(100,100,100,0.5)',
    HomeScreenBoxColor: 'rgba(256,130,150,0.1)',
    THEME_COLOR: "#fff6e6",
    ORANGE: "#ff8c00",
    BLUE_DARK: "#3e5869",
    DrawerBGcolor: 'rgba(0,0,0,0.5)',
    GrayColor: '#808080',
    QUE_COLOR: '#ff8c00',
    White: '#FFFFFF',
    Black: '#000',
    BLUE: '#41598b',
    SKY_BLUE: '#4186f5',
    LIGHT_SKY_BLUE: '#ccdefc',
    LITE_BLUE: '#0195ff',
    DARK_VIOLET: '#333145',
    VIOLET: '#511ac0',
    BORDER_COLOR: '#fcead2',
    LITE_ORANGE: '#fdb970',
    DARK_GREY: '#535659',
    LITE_SKIN: '#febc7f',
    SKIN: '#feab5f',
    CHOCOLATE: '#994604',
    RED: '#d00100',
    YELLOW: '#ffc006',
    GREEN: '#078e05'
  }
})



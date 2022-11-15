import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Modal } from 'react-native';
import { dimensions } from '../utility/Mycolors';

export default class Loader extends Component {
    render() {

        
        return (
                <>
                  
                            <View style={{elevation:3,position:'absolute',height:dimensions.SCREEN_HEIGHT,width:'100%', flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'center', alignItems: 'center' }}>

                            {/* <View style={{ backgroundColor: 'white', borderRadius: 10, height: 130, width: 130, justifyContent: 'center', alignItems: 'center' }}>

                               
                                <Text style={{ textAlign: 'center', padding: 8 }} >Loading...</Text>

                            </View> */}
                            <ActivityIndicator size="large" color='#FFF' />
                            </View>

                </>
        );
    }
}


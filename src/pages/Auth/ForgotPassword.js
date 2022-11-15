import React from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView} from 'react-native';

const ForgotPassword = (props) => {

     return(
    <SafeAreaView style={styles.container}>
   <Text>ForgotPassword</Text>
    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({

  container: {
    flex: 1,  
    backgroundColor:'#fff'
  },
});
export default ForgotPassword
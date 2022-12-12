import React, {useState, useCallback} from "react";
import {View, Text, StyleSheet} from "react-native";

const postTextContent = (props) => {
    const [textShown, setTextShown] = useState(false); //To show ur remaining Text
    const [lengthMore,setLengthMore] = useState(false); //to show the "Read more & Less Line"
    const toggleNumberOfLines = () => { //To toggle the show text or hide it
        setTextShown(!textShown);
    }
    
    const onTextLayout = useCallback(e =>{
        setLengthMore(e.nativeEvent.lines.length >=1); //to check the text is more than 1 lines or not
        // console.log(e.nativeEvent);
    },[]);
        
      return (
        //   <View style={styles.mainContainer}>
          <View style={{width:'100%'}}>
              <Text
                  onTextLayout={onTextLayout}
                  numberOfLines={textShown ? undefined : 1}
                  style={styles.text1}>{props.text}</Text>
    
                  {
                      lengthMore ? <Text
                      onPress={toggleNumberOfLines}
                      style={[styles.text1, {color:'#B2B7B9'}]}>{textShown ? 'See Less' : 'See More'}</Text>
                      :null
                  }
          </View>
      )
    }

const styles = StyleSheet.create({
    text1:{
        fontSize:12, 
        fontWeight:'400', 
        color:'#455A64'
      }
})

export default postTextContent;    
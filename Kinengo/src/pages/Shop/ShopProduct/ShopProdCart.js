import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground} from 'react-native';
import HomeHeader from 'src/component/HomeHeader';
import SearchInput2 from 'src/component/SearchInput2';
import SerchInput from 'src/component/SerchInput';
import { dimensions, Mycolors } from 'src/utility/Mycolors';
import { ImageSlider,ImageCarousel } from "react-native-image-slider-banner";
import MyButtons from 'src/component/MyButtons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ShopProduct = (props) => {
  const [searchValue,setsearchValue]=useState('')
  let selectedIndex = -1;
  let row = [];
  let prevOpenedRow;
  const [cartItems, setCartItems] = useState([
    {
        id: '1',
        title: 'Intel 3rd Gen Motherboard',
        price: 140,
        quantity:1,
        img:require('../../../assets/images/images.png'),
    },
    {
        id: '2',
        title: 'Intel 3rd Gen Motherboard',
        price: 140,
        quantity:1,
        img:require('../../../assets/images/images.png'),
    },
    {
        id: '3',
        title: 'Intel 3rd Gen Motherboard',
        price: 140,
        quantity:1,
        img:require('../../../assets/images/images.png'),
    },
  ])

  const [upData,setupData]=useState([
    {
      id: '1',
      title: 'Hair Cut',
      desc:'',
      time:'',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '2',
      title: 'Shaving',
      desc:'',
      time:'',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '3',
      title: 'Facial',
      desc:'',
      time:'',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '4',
      title: 'Hair Color',
      desc:'',
      time:'',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '5',
      title: 'Hair wash',
      desc:'',
      time:'',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '6',
      title: 'Beard style',
      desc:'',
      time:'',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '7',
      title: 'Facial',
      desc:'',
      time:'',
      img:require('../../../assets/images/images.png'),
    },
  ])
  useEffect(()=>{

 },[])
 const deleteItem = ({item,  index}) =>{
    // console.log('deleteItem item', item);
    const cartItemsCopy = [...cartItems]
    const remainingItems = cartItemsCopy.filter(el=>el.id !== item.id)
    setCartItems(remainingItems)
 }

 const renderItem = ({ item, index }, onClick) => {
    const closeRow = (index) => {
        console.log('closerow');
        selectedIndex = index;
        if (prevOpenedRow && prevOpenedRow !== row[index]) {
          prevOpenedRow.close();
        }
        prevOpenedRow = row[index];
      };
      const renderRightActions = (progress, dragX, onClick) => {
        return (
          <View
            style={{
              backgroundColor: '#FFC40C',
              justifyContent: 'center',
              alignItems: 'flex-end',
              width:100,
              paddingRight:30,
              borderTopRightRadius:15,
              borderBottomRightRadius:15
            }}
            
          >
            <TouchableOpacity  onPress={onClick}>
                <Image resizeMode="contain" source={require('../../../assets/prod_delete_icon.png')} style={{width:40, height:40}}/>
            </TouchableOpacity>
          </View>
        );
      };
    return(
        <View style={{width:'90%', height:200, alignSelf:'center'}}>
           <Swipeable
            renderRightActions={(progress, dragX) =>
                renderRightActions(progress, dragX, onClick)
              }
              onSwipeableOpen={() => closeRow(index)}
        ref={(ref) => (row[index] = ref)}
        rightOpenValue={-100}
        >
            <View
            style={{
                paddingHorizontal: 10,
                paddingVertical: 20,
                backgroundColor: 'white',
                borderRadius:15,
                flexDirection:'row',
            }}
            >
                <View style={{borderWidth:5,borderRadius:5,borderColor:'rgba(255, 196, 12, 0.2)',marginRight:20, justifyContent:'center', borderRadius:20, height:100}}>
                    <Image source={require('../../../assets/images/images.png')} resizeMode='contain' style={{width:50, height:50, marginHorizontal:10}}/>
                </View>
                <View>
                    <Text style={{ fontSize: 16, color:'#263238' }}>{item.title}</Text>
                    <Text style={{ fontSize: 16, color:'#263238', marginTop:5 }}>${item.price}</Text>
                    <View style={{flexDirection:'row', alignItems:'center', marginTop:15}}>
                        <Text style={{ fontSize: 12, color:Mycolors.GrayColor, marginRight:10 }}>Quantity</Text>
                        <Text style={{ fontSize: 12, color:'#263238' }}>{item.quantity}</Text>
                    </View>
                    <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between',marginTop:10}}>
                        <Text style={{ fontSize: 12, color:'#263238', textDecorationColor:'#263238', textDecorationLine:'underline', fontWeight:'bold' }}>View Breakup Amount</Text>
                        {/* <Image resizeMode="contain" source={index == selectedIndex ? require('../../../assets/prod_unsel_circle.png') : require('../../../assets/prod_sel_circle.png')} style={{width:30, height:30}}/> */}
                        <Image resizeMode="contain" source={false ? require('../../../assets/prod_unsel_circle.png') : require('../../../assets/prod_sel_circle.png')} style={{width:30, height:30}}/>
                    </View>
                </View>
            </View>
        </Swipeable>         
        </View>
        )
 }

  return(
    <SafeAreaView style={{}}>
      <ScrollView>
    <HomeHeader height={60}  paddingHorizontal={15}
   press1={()=>{props.navigation.goBack()}} img1={require('../../../assets/arrow.png')} img1width={18} img1height={15} 
   press2={()=>{}} title2={'Cart'} fontWeight={'500'} img2height={20}
   press3={()=>{}} img3width={25} img3height={25} backgroundColor='#fff'/>

<View style={{width:'96%',alignSelf:'center', marginTop:20}}>
 
<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', paddingHorizontal:15}}>
    <Text style={{fontSize:16,color:Mycolors.Black,marginTop:5, fontWeight:'bold'}}>Total 3 items</Text>
    <Text style={{fontSize:13,color:'#FFC40C',marginTop:5, textDecorationColor:'#FFC40C', textDecorationLine:'underline'}}>Select All</Text>
</View>

<View style={{marginTop:40}}>
    <FlatList
    data={cartItems}
    numColumns={1}
    keyExtractor={item => item.id}
    renderItem={(v) =>
        renderItem(v, () => {
        //   console.log('Pressed', v);
          deleteItem(v);
        })
      }
    />

</View>


 </View>
<View style={{height:100}} />

</ScrollView>
    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({

});
export default ShopProduct 
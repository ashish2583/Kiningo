import React, { useEffect,useState ,useRef} from 'react';
import {View,Image,Text,StyleSheet,SafeAreaView,TextInput,FlatList,Alert,TouchableOpacity, ScrollView, ImageBackground, Modal as RNModal} from 'react-native';
import HomeHeader from 'src/component/HomeHeader';
import SearchInput2 from 'src/component/SearchInput2';
import { dimensions, Mycolors } from 'src/utility/Mycolors';
import MyButtons from 'src/component/MyButtons';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-datepicker';
import LinearGradient from 'react-native-linear-gradient'

const images = [
  'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_960_720.jpg',
  'https://cdn.pixabay.com/photo/2016/08/12/22/34/apple-1589869_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_960_720.jpg',
  'https://cdn.pixabay.com/photo/2016/08/12/22/34/apple-1589869_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/06/09/09/39/adler-2386314_960_720.jpg',
  'https://cdn.pixabay.com/photo/2017/06/02/18/24/fruit-2367029_960_720.jpg',
  'https://cdn.pixabay.com/photo/2016/08/12/22/34/apple-1589869_960_720.jpg',
]

const PurchasedTickets = (props) => {
  const [searchValue,setsearchValue]=useState('')
  const [selectedTab,setselectedTab]=useState('Purchased Tickets')
  const [selectedTime,setselectedTime]=useState('1')
  const [selectedTime2,setselectedTime2]=useState('1')
  const [counter,setcounter]=useState(1)
  const [date, setDate] = useState('')
  const [modlevisual1,setmodlevisual1] = useState(false)
  const [modlevisual2,setmodlevisual2] = useState(false)
  const [modlevisual3,setmodlevisual3] = useState(false)
  const [modlevisual4,setmodlevisual4] = useState(false)
  const [purchasedData, setPurchasedData]=useState([
    {
      id: '1',
      eventName: `Rock 'n' Roller Coaster`,
      eventType: 'Park',
      ticketNum: 'J54835',
      adults: '2',
      child: '1',
      desc:'',
      time:'10:00AM',
      date:'02 Feb 2021',
      location:'Disneyland Resort, 1313 Disneyland Drive Anaheim, California, U.S.',
      price:'140.00',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '2',
      eventName: `Rock 'n' Roller Coaster`,
      eventType: 'Park',
      ticketNum: 'J54835',
      adults: '2',
      child: '1',
      desc:'',
      time:'10:00AM',
      date:'02 Feb 2021',
      location:'Disneyland Resort, 1313 Disneyland Drive Anaheim, California, U.S.',
      price:'140.00',
      img:require('../../../assets/images/images.png'),
    },
  ])
  const [cancelledData, setCancelledData]=useState([
    {
      id: '1',
      eventName: `Rock 'n' Roller Coaster`,
      eventType: 'Park',
      ticketNum: 'J54835',
      adults: '2',
      child: '1',
      desc:'',
      time:'10:00AM',
      date:'02 Feb 2021',
      location:'Disneyland Resort, 1313 Disneyland Drive Anaheim, California, U.S.',
      price:'140.00',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '2',
      eventName: `Rock 'n' Roller Coaster`,
      eventType: 'Park',
      ticketNum: 'J54835',
      adults: '2',
      child: '1',
      desc:'',
      time:'10:00AM',
      date:'02 Feb 2021',
      location:'Disneyland Resort, 1313 Disneyland Drive Anaheim, California, U.S.',
      price:'140.00',
      img:require('../../../assets/images/images.png'),
    },
  ])
  const [upData,setupData]=useState([
    {
      id: '1',
      title: 'Hair Cut',
      desc:'',
      time:'10:00AM',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '2',
      title: 'Shaving',
      desc:'',
      time:'10:30AM',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '3',
      title: 'Facial',
      desc:'',
      time:'11:00AM',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '4',
      title: 'Hair Color',
      desc:'',
      time:'11:30AM',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '5',
      title: 'Hair wash',
      desc:'',
      time:'12:00PM',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '6',
      title: 'Beard style',
      desc:'',
      time:'12:30PM',
      img:require('../../../assets/images/images.png'),
    },
    {
      id: '7',
      title: 'Facial',
      desc:'',
      time:'01:00PM',
      img:require('../../../assets/images/images.png'),
    },
  ])
  useEffect(()=>{

 },[])

const flatliistDesign=(img,ti,rs,des,press,allpress)=>{
  return(
    <TouchableOpacity style={{width:'95%',height:120,marginHorizontal:5,marginVertical:5, padding:10,backgroundColor:'#fff',
    borderColor:'#dee4ec',
    borderWidth:1,
    elevation: 5,borderRadius:10,alignSelf:'center',flexDirection:'row',alignItems:'center'}}
    onPress={allpress}>
<View style={{width:60,height:75,alignSelf:'center',borderRadius:5,borderWidth:3,borderColor:'#dee4ec'}}>
<Image source={img}  style={{width:'100%',height:'100%',alignSelf:'center',borderRadius:5,resizeMode: 'stretch'}} ></Image>
</View>
<View style={{marginLeft:10}}>
<Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:12,marginTop:9}} >{ti}</Text>
<Text style={{color:Mycolors.RED,fontWeight:'600',fontSize:12,marginTop:9}} >{rs}</Text>
<View style={{flexDirection:'row'}}>
<Text style={{color:Mycolors.GrayColor,fontWeight:'600',fontSize:12,marginTop:9}} >Food Preparation Time:</Text>
<Text style={{color:Mycolors.Black,fontWeight:'600',fontSize:12,marginTop:9}} >{des}</Text>
</View>



{press ?
<View style={{width:70}}>
<MyButtons title="ADD" height={30} width={'100%'} borderRadius={5} alignSelf="center" press={press} marginHorizontal={20} fontSize={11}
titlecolor={Mycolors.BG_COLOR} backgroundColor={Mycolors.RED} marginVertical={0} />
</View>
: null
}
</View>
  <View style={{position:'absolute',width:20,height:20,top:10,right:10,borderRadius:3,backgroundColor:'red',justifyContent:'center'}}>
  <View style={{width:10,height:10,borderRadius:10,alignSelf:'center',backgroundColor:'#fff'}} />
  </View>
</TouchableOpacity>
  )
}

  return(
    <SafeAreaView style={{backgroundColor:'#F8F8F8'}}>
      <ScrollView>
   

<View style={{backgroundColor:'#F8F8F8',height:50,width:'100%'}}>
    {/* <ImageBackground source={require('../../../assets/images/layer_42.png')}style={{width:'100%',height:'100%',overflow:'hidden'}}resizeMode='cover'> */}
    <HomeHeader height={60}  paddingHorizontal={15} backgroundColor='#fff'
press1={()=>{props.navigation.goBack()}} img1={require('../../../assets/arrow.png')} img1width={18} img1height={15} 
press2={()=>{}} title2={'Entertainment'} fontWeight={'500'} img2height={20}
press3={()=>{}} img3width={25} img3height={25} />
     
    </View>
    
<View style={{width:'96%',alignSelf:'center',backgroundColor:'#F8F8F8'}}>

<View style={{width:'96%',flexDirection:'row',justifyContent:'space-between',alignItems:'center',alignSelf:'center',backgroundColor:'#F8F8F8',borderRadius:9,paddingHorizontal:15,paddingVertical:10}}>

</View>

<View style={{flexDirection:'row',justifyContent:'space-around', marginBottom:40}}>
<View style={{width:'40%'}}>
<MyButtons title="Purchased Tickets" height={37} width={'100%'} borderRadius={5} alignSelf="center" press={()=>{setselectedTab('Purchased Tickets')}} marginHorizontal={20} fontSize={12}
  titlecolor={selectedTab=='Purchased Tickets' ? Mycolors.BG_COLOR : Mycolors.Black} marginVertical={0} backgroundColor={selectedTab=='Purchased Tickets' ? Mycolors.ServiceHeader : 'transparent'}/>
</View>

<View style={{width:'40%'}}>
<MyButtons title="Cancelled Tickets" height={37} width={'100%'} borderRadius={5} alignSelf="center" press={()=>{setselectedTab('Cancelled Tickets')}} marginHorizontal={20} fontSize={12}
  titlecolor={selectedTab=='Cancelled Tickets' ? Mycolors.BG_COLOR : Mycolors.Black} marginVertical={0} backgroundColor={selectedTab=='Cancelled Tickets' ? Mycolors.ServiceHeader : 'transparent'}/>
</View>
</View>



{selectedTab=='Purchased Tickets' ? 
<View style={{top:-20}}>
<View style={{width:'95%',alignSelf:'center',top:-20}}>
</View>
<View style={{width:'95%',height:50,marginHorizontal:5,marginVertical:10, padding:10,backgroundColor:'#fff',
              borderColor:'#dee4ec',borderRadius:7,alignSelf:'center',flexDirection:'row',alignItems:'center',shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3
              },
              shadowRadius: 1,
              shadowOpacity: 0.1,
              justifyContent: 'center',
              elevation: 3,}}
            >

       <DatePicker
          customStyles={{
            dateInput: {borderColor:'transparent',left:-90},
            dateText: {color:Mycolors.Black},
            dateIcon: styles.dateIcon,
            dateplaceholder: {
              alignContent: 'flex-start',
             
            },
            placeholderText: {
              fontSize: 15,
              color: Mycolors.GrayColor,
              marginLeft: '5%',
              // left:100
            },
            zIndex:99999
          }}
         
          androidMode={'spinner'}
          readOnly={true}
          style={[styles.datePickerSelectInput]}
          date={date}
          mode="date"
          placeholder={'Select date'}
          minDate={new Date ()}
          format='YYYY-MM-DD'
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          iconSource={require ('../../../assets/shape_38.png')}
          onDateChange={date => {
            setDate(date)
          }}
        />



          </View>
<View style={{width:'95%',alignSelf:'center',marginTop:15,marginHorizontal:5}}>
<Text style={{color:Mycolors.Black,fontWeight:'bold', marginBottom:20, marginTop:5}}>Purchased Tickets</Text>

<View style={{width:'100%',alignSelf:'center',marginTop:5}}>
          <FlatList
                  data={purchasedData}
                  keyExtractor={item => item.id}
                  renderItem={({item,index})=>{
                    return(
                    //   <TouchableOpacity style={{width:'100%',height:740,marginHorizontal:5,backgroundColor:'#fff',
                    // borderRadius:10, alignSelf:'center', margin:15, paddingVertical:15, borderWidth:0.2, borderColor:Mycolors.GrayColor}}>
                    <>
                    <LinearGradient
                    colors={[Mycolors.White, '#F9F2EB' ]}
                    // style={{width:'100%',height: 'auto',alignItems: 'center',
                    // justifyContent: 'center'}}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{width:'100%',height:740,marginHorizontal:5,backgroundColor:'#fff',
                    borderRadius:15, alignSelf:'center', paddingVertical:15, borderWidth:0.2, borderColor:Mycolors.GrayColor}}
                  >
                    <View style={{flexDirection:'row',alignItems:'center', paddingHorizontal:15, paddingBottom:10, marginTop:10}}>
                      <View style={{marginHorizontal:10}}>
                        <Text style={{color:Mycolors.White,fontSize:12,fontWeight:'600', backgroundColor:Mycolors.ServiceHeader, paddingVertical:5,paddingHorizontal:5, borderRadius:5, marginRight:'auto', marginBottom:10}}>Ticket Number: {item.ticketNum}</Text>
                        <Text style={{color:Mycolors.Black,fontSize:16,fontWeight:'600'}}>{item.eventName}</Text>
                        <Text style={{color:Mycolors.GrayColor,fontSize:13,marginVertical:4}}>{item.eventType}</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10}}>
                          <View style={{width:'60%'}}>
                            <Text style={{color:Mycolors.Black,fontWeight:'bold'}}>Adults</Text>
                            <Text style={{color:Mycolors.GrayColor,fontSize:13,marginVertical:4}}>{item.adults}</Text>
                          </View>
                          <View style={{width:'40%'}}>
                            <Text style={{color:Mycolors.Black,fontWeight:'bold'}}>Child</Text>
                            <Text style={{color:Mycolors.GrayColor,fontSize:13,marginVertical:4}}>{item.child}</Text>
                          </View>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginTop:25}}>
                          <View style={{width:'60%'}}>
                            <Text style={{color:Mycolors.Black,fontWeight:'bold'}}>Date</Text>
                            <Text style={{color:Mycolors.GrayColor,fontSize:13,marginVertical:4}}>{item.date}</Text>
                          </View>
                          <View style={{width:'40%'}}>
                            <Text style={{color:Mycolors.Black,fontWeight:'bold'}}>Time</Text>
                            <Text style={{color:Mycolors.GrayColor,fontSize:13,marginVertical:4}}>{item.time}</Text>
                          </View>
                        </View>
                        <View style={{marginTop:25}}>
                          <Text style={{color:Mycolors.Black,fontWeight:'bold'}}>Location</Text>
                          <Text style={{color:Mycolors.GrayColor,fontSize:13,marginVertical:4}}>{item.location}</Text>
                          <Text style={{color:Mycolors.Black,fontWeight:'bold', marginTop:25}}>Price</Text>
                          <Text style={{color:Mycolors.ServiceHeader,fontWeight:'bold',fontSize:13,marginVertical:4}}>${item.price}</Text>
                        </View>
                      </View>
                    </View>
                    {/* <View style={{borderColor:Mycolors.GrayColor, borderBottomWidth:0.2, borderStyle: 'dashed'}}/> */}
                    <View style={{marginHorizontal:25,borderColor:Mycolors.GrayColor,borderWidth:1,borderStyle: 'dashed',marginTop:40,marginBottom:10,}}/>
                    <View style={{paddingHorizontal:25, alignItems:'center'}}>
                          <Image source={require('../../../assets/images/layer_42.png')}style={{width:'100%',height:220,overflow:'hidden', borderRadius:5, marginTop:20}} resizeMode='cover'/>
                    </View>
                    </LinearGradient>
                    <View style={{width:'80%', height:15, borderBottomLeftRadius:15,borderBottomRightRadius:15, backgroundColor:'#FCA3F7', alignSelf:'center'}}/>
                    <View style={{width:'60%', height:15, borderBottomLeftRadius:15,borderBottomRightRadius:15, backgroundColor:'#F76EF0', alignSelf:'center', marginBottom:55}}/>
                    </>
                    // </TouchableOpacity>
                    )
                  }}
                />
         </View>
</View>
</View>
:
selectedTab=='Cancelled Tickets' ? 
<View style={{top:-20}}>
<View style={{width:'95%',alignSelf:'center',top:-20}}>
</View>
<View style={{width:'95%',height:50,marginHorizontal:5,marginVertical:10, padding:10,backgroundColor:'#fff',
              borderColor:'#dee4ec',borderRadius:7,alignSelf:'center',flexDirection:'row',alignItems:'center',shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3
              },
              shadowRadius: 1,
              shadowOpacity: 0.1,
              justifyContent: 'center',
              elevation: 3,}}
            >

       <DatePicker
          customStyles={{
            dateInput: {borderColor:'transparent',left:-90},
            dateText: {color:Mycolors.Black},
            dateIcon: styles.dateIcon,
            dateplaceholder: {
              alignContent: 'flex-start',
             
            },
            placeholderText: {
              fontSize: 15,
              color: Mycolors.GrayColor,
              marginLeft: '5%',
              // left:100
            },
            zIndex:99999
          }}
         
          androidMode={'spinner'}
          readOnly={true}
          style={[styles.datePickerSelectInput]}
          date={date}
          mode="date"
          placeholder={'Select date'}
          minDate={new Date ()}
          format='YYYY-MM-DD'
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          iconSource={require ('../../../assets/shape_38.png')}
          onDateChange={date => {
            setDate(date)
          }}
        />



          </View>
<View style={{width:'95%',alignSelf:'center',marginTop:15,marginHorizontal:5}}>
<Text style={{color:Mycolors.Black,fontWeight:'bold', marginBottom:20, marginTop:5}}>Cancelled Tickets</Text>

<View style={{width:'100%',alignSelf:'center',marginTop:5}}>
          <FlatList
                  data={cancelledData}
                  keyExtractor={item => item.id}
                  renderItem={({item,index})=>{
                    return(
                    //   <TouchableOpacity style={{width:'100%',height:740,marginHorizontal:5,backgroundColor:'#fff',
                    // borderRadius:10, alignSelf:'center', margin:15, paddingVertical:15, borderWidth:0.2, borderColor:Mycolors.GrayColor}}>
                    <>
                    <LinearGradient
                    colors={[Mycolors.White, '#F9F2EB' ]}
                    // style={{width:'100%',height: 'auto',alignItems: 'center',
                    // justifyContent: 'center'}}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{width:'100%',height:740,marginHorizontal:5,backgroundColor:'#fff',
                    borderRadius:15, alignSelf:'center', paddingVertical:15, borderWidth:0.2, borderColor:Mycolors.GrayColor}}
                  >
                    <View style={{flexDirection:'row',alignItems:'center', paddingHorizontal:15, paddingBottom:10, marginTop:10}}>
                      <View style={{marginHorizontal:10}}>
                        <Text style={{color:Mycolors.White,fontSize:12,fontWeight:'600', backgroundColor:Mycolors.ServiceHeader, paddingVertical:5,paddingHorizontal:5, borderRadius:5, marginRight:'auto', marginBottom:10}}>Ticket Number: {item.ticketNum}</Text>
                        <Text style={{color:Mycolors.Black,fontSize:16,fontWeight:'600'}}>{item.eventName}</Text>
                        <Text style={{color:Mycolors.GrayColor,fontSize:13,marginVertical:4}}>{item.eventType}</Text>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop:10}}>
                          <View style={{width:'60%'}}>
                            <Text style={{color:Mycolors.Black,fontWeight:'bold'}}>Adults</Text>
                            <Text style={{color:Mycolors.GrayColor,fontSize:13,marginVertical:4}}>{item.adults}</Text>
                          </View>
                          <View style={{width:'40%'}}>
                            <Text style={{color:Mycolors.Black,fontWeight:'bold'}}>Child</Text>
                            <Text style={{color:Mycolors.GrayColor,fontSize:13,marginVertical:4}}>{item.child}</Text>
                          </View>
                        </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center',marginTop:25}}>
                          <View style={{width:'60%'}}>
                            <Text style={{color:Mycolors.Black,fontWeight:'bold'}}>Date</Text>
                            <Text style={{color:Mycolors.GrayColor,fontSize:13,marginVertical:4}}>{item.date}</Text>
                          </View>
                          <View style={{width:'40%'}}>
                            <Text style={{color:Mycolors.Black,fontWeight:'bold'}}>Time</Text>
                            <Text style={{color:Mycolors.GrayColor,fontSize:13,marginVertical:4}}>{item.time}</Text>
                          </View>
                        </View>
                        <View style={{marginTop:25}}>
                          <Text style={{color:Mycolors.Black,fontWeight:'bold'}}>Location</Text>
                          <Text style={{color:Mycolors.GrayColor,fontSize:13,marginVertical:4}}>{item.location}</Text>
                          <Text style={{color:Mycolors.Black,fontWeight:'bold', marginTop:25}}>Price</Text>
                          <Text style={{color:Mycolors.ServiceHeader,fontWeight:'bold',fontSize:13,marginVertical:4}}>${item.price}</Text>
                        </View>
                      </View>
                    </View>
                    {/* <View style={{borderColor:Mycolors.GrayColor, borderBottomWidth:0.2, borderStyle: 'dashed'}}/> */}
                    <View style={{marginHorizontal:25,borderColor:Mycolors.GrayColor,borderWidth:1,borderStyle: 'dashed',marginTop:40,marginBottom:10,}}/>
                    <View style={{paddingHorizontal:25, alignItems:'center'}}>
                          <Image source={require('../../../assets/images/layer_42.png')}style={{width:'100%',height:220,overflow:'hidden', borderRadius:5, marginTop:20}} resizeMode='cover'/>
                    </View>
                    </LinearGradient>
                    <View style={{width:'80%', height:15, borderBottomLeftRadius:15,borderBottomRightRadius:15, backgroundColor:'#FCA3F7', alignSelf:'center'}}/>
                    <View style={{width:'60%', height:15, borderBottomLeftRadius:15,borderBottomRightRadius:15, backgroundColor:'#F76EF0', alignSelf:'center', marginBottom:55}}/>
                    </>
                    // </TouchableOpacity>
                    )
                  }}
                />
         </View>
</View>
</View>
:
null
}
 </View>

<View style={{height:100}} />

</ScrollView>

    </SafeAreaView>
     );
  }
const styles = StyleSheet.create({
  input: {
    paddingLeft: 15,
    width:'100%',
    fontSize: 13,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth:0.5,
   // backgroundColor: '#34333a',
    color:'#fff',
    height:80,
    borderRadius:5,
    paddingHorizontal:15,
    paddingVertical:10,
    color:Mycolors.Black
  },
  dateIcon:{
    width:22,
    height:23,
    // marginRight:20
  },
  datePickerSelectInput:{
    height: 45,
    width:'100%',
    fontSize: 15,
    borderColor: null,
    backgroundColor: '#fff',
    borderRadius:10,
    color:'#fff',
  },
});
export default PurchasedTickets 
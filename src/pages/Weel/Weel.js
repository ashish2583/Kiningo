import React, { useEffect, ComponentProps, useState, useRef } from 'react';
import { View, StyleSheet, SafeAreaView, ImageBackground,Text, TextInput, Linking, BackHandler, FlatList, TouchableOpacity, Platform, Alert, PermissionsAndroid, ScrollView } from 'react-native';
import { Mycolors, dimensions } from '../../utility/Mycolors';
import HomeHeader from '../../component/HomeHeader';
import SerchInput from '../../component/SerchInput';
import LinearGradient from 'react-native-linear-gradient'
import MyButtons from '../../component/MyButtons';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryContainer, VictoryPie, Slice, VictoryLabel, VictoryTooltip } from "victory-native";
import { Circle, G, Path, TSpan, Svg, Image, Defs,Use, TextPath,Text as Ptext } from 'react-native-svg'
import * as d3 from 'd3'
import {v4 as uuidv4 ,uuid} from 'uuid';
import 'react-native-get-random-values'
import Hand2 from '../../assets/svgs/BottomTabIcons/hand2'
const Weel = (props) => {
  const [searchValue, setsearchValue] = useState('')
  const [goon,setgoon] = useState(false)
  const [goonName,setgoonName] = useState('')
  const [circle1Data, setcircle1Data] = useState(null)
  const [circle2Data, setcircle2Data] = useState(null)
  const [circle3Data, setcircle3Data] = useState(null)
  const [circle4Data, setcircle4Data] = useState(null)
  const [circle5Data, setcircle5Data] = useState(null)

  const [circle1color, setcircle1color] = useState(['#6f00a7', '#6f00a7', '#6f00a7', '#6f00a7', '#6f00a7', '#6f00a7'])
  const [circle2color, setcircle2color] = useState(['#0195ff', '#0195ff', '#0195ff', '#0195ff', '#0195ff', '#0195ff'])
  const [circle3color, setcircle3color] = useState(['#013220', '#013220', '#013220', '#013220', '#013220', '#013220'])
  const [circle4color, setcircle4color] = useState(['#FF7722', '#FF7722', '#FF7722', '#FF7722', '#FF7722', '#FF7722'])

  const myArrr=[ 
    { x: 1, y: 1, label: "Connect",Img:require('../../assets/svgs/BottomTabIcons/hand2.svg'), data: [
                                            {x: 1, y: 2,label:'Dating',data:[
                                                                              {x: 1, y: 3,label:'Mach Maker',data:null,pageName:'MachMaker'},
                                                                              {x: 2, y: 3,label:'Direct Chat',data:null,pageName:'DirectChat'},
                                                                              {x: 3, y: 3,label:'My Profile',data:null,pageName:'Myprofile'},
                                                                              {x: 4, y: 3,label:'Profile Search',data:null,pageName:'ProfileSearch'},
                                                                            ]
                                            },
                                            {x: 2, y: 2,label:'People',data:null,pageName:'People'},
                                            {x: 3, y: 2,label:'WhatUp',data:null,pageName:'WhatUp'},
                                            {x: 4, y: 2,label:'Transport',data:[
                                                                                    {x: 1, y: 3,label:'TravelTicket',data:[
                                                                                                                            {x: 1, y: 4,label:'Train',data:null,pageName:'Train'},
                                                                                                                            {x: 2, y: 4,label:'Boat',data:null,pageName:'Boat'},
                                                                                                                            {x: 3, y: 4,label:'Airplan',data:null,pageName:'Airplan'},
                                                                                                                            
                                                                                                                          ]
                                                                                    },
                                                                                    {x: 2, y: 3,label:'Map',data:null,pageName:'Map'},
                                                                                    {x: 3, y: 3,label:'Car',data:[
                                                                                                                  {x: 1, y: 4,label:'Independant',data:null,pageName:'Independant'},
                                                                                                                  {x: 2, y: 4,label:'Taxi Drive',data:null,pageName:'TaxiDrive'},
                                                                                                                 ]
                                                                                    },
                                                                                    ]
                                            },
                                            {x: 5, y: 2,label:'Email',data:null,pageName:'Email'},
                                            {x: 6, y: 2,label:'Event',data:[
                                              {x: 1, y: 3,label:'Public',data:null,pageName:'Public'},
                                              {x: 2, y: 3,label:'Private',data:null,pageName:'Private'},
                                            ]
                                            },
                                          ] 
    },

    { x: 2, y: 1, label: "Deal",Img:require('../../assets/svgs/BottomTabIcons/hand2.svg'), data: [
      { x: 1, y: 2, label: "C2C", data:[
                                          { x: 1, y: 3, label: "Offer", data:null,pageName:'C2COffer'},
                                          { x: 2, y: 3, label: "Demand", data:null,pageName:'C2CDemand'},
                                       ]
      },
      { x: 2, y: 2, label: "Service",data:[
                                              { x: 1, y: 3, label: "Offer", data:null,pageName:'ServiceOffer'},
                                              { x: 2, y: 3, label: "Demand", data:null,pageName:'ServiceDemand'},
                                          ]
      },
      { x: 3, y: 2, label: "Learn", data:[
                                              { x: 1, y: 3, label: "Offer", data:null,pageName:'LearnOffer'},
                                              { x: 2, y: 3, label: "Demand", data:null,pageName:'LearnDemand'},
                                          ]
      },
      { x: 4, y: 2, label: "Job",data:[
                                          { x: 1, y: 3, label: "Offer", data:null,pageName:'JobOffer'},
                                          { x: 2, y: 3, label: "Demand", data:null,pageName:'JobDemand'},
                                      ]
      },
      { x: 5, y: 2, label: "B2B", data:[
                                          { x: 1, y: 3, label: "Offer", data:null,pageName:'B2BOffer'},
                                          { x: 2, y: 3, label: "Demand", data:null,pageName:'B2BDemand'},
                                       ]
      },
      ]
    },

    { x: 3, y: 1, label: "Talkie",Img:require('../../assets/svgs/BottomTabIcons/hand2.svg'), data: [
                                            
                                            
                                            { x: 1, y: 2, label: "Video Game", data:null,pageName:'VideoGame'},
                                            { x: 2, y: 2, label: "Tube", data:[
                                                                                
                                                                                { x: 1, y: 3, label: "News" ,data:[ 
                                                                                                                        {x: 1, y: 4,label:'Weather',data:null,pageName:'Weather'},
                                                                                                                        {x: 2, y: 4,label:'Statistic',data:null,pageName:'Statistic'},
                                                                                                                        {x: 3, y: 4,label:'Sport',data:null,pageName:'Sport'},
                                                                                                                        {x: 4, y: 4,label:'Finenc',data:null,pageName:'Finenc'},
                                                                                                                        {x: 5, y: 4,label:'General',data:null,pageName:'General'},
                                                                                                                  ]
                                                                                },
                                                                                { x: 2, y: 3, label: "Search", data:null,pageName:'Search'},
                                                                                { x: 3, y: 3, label: "Go to Home", data:null,pageName:'Home'},
                                                                              ]
                                            },  
                                            { x: 3, y: 2, label: "Music", data:null,pageName:'Music'},
                                            { x: 4, y: 2, label: "Movie", data:null,pageName:'Movie'},
                                        ]
    },

    { x: 4, y: 1, label: "Creation",Img:require('../../assets/svgs/BottomTabIcons/hand2.svg'), data: [
      { x: 1, y: 2, label: "Art", data:null,pageName:'Art'},
      { x: 2, y: 2, label: "StartUp",data:[
                                              { x: 1, y: 3, label: "Info", data:null,pageName:'StartUpInfo'},
                                              { x: 2, y: 3, label: "Capital", data:null,pageName:'StartUpCapital'},
                                          ]
      },
      { x: 3, y: 2, label: "Invention",data:[
                                              { x: 1, y: 3, label: "Info", data:null,pageName:'InventionInfo'},
                                              { x: 2, y: 3, label: "Capital", data:null,pageName:'InventionCapital'},
                                            ]
      },
      { x: 4, y: 2, label: "Cooking", data:null,pageName:'Cooking'},
      { x: 5, y: 2, label: "Fashion", data:null,pageName:'Fashion'},
      ]
    },
   
    { x: 5, y: 1, label: "Memory",Img:require('../../assets/svgs/BottomTabIcons/hand2.svg'), data: [
                                            
                                            { x: 1, y: 2, label: "My Activities", data:[
                                                                                            { x: 1, y: 3, label: "My Order", data:null,pageName:'MyActivitiesOrder'},
                                                                                            { x: 2, y: 3, label: "My Meeting", data:null,pageName:'MyActivitiesMeeting'},
                                                                                        ]
                                            },
                                            { x: 2, y: 2, label: "My Calendre", data:[
                                                                                            { x: 1, y: 3, label: "Private", data:null,pageName:'MyCalendrePrivate'},
                                                                                            { x: 2, y: 3, label: "Public", data:null,pageName:'MyCalendrePublic'},
                                                                                      ]
                                            },
                                            { x: 3, y: 2, label: "My Footage",  data:[
                                                                                        { x: 1, y: 3, label: "My Picture", data:null,pageName:'MyFootagePicture'},
                                                                                        { x: 2, y: 3, label: "My Video", data:null,pageName:'MyFootageVideo'},
                                                                                    ]
                                            },
                                        ]
    },

    { x: 6, y: 1, label: "Shop",Img:require('../../assets/svgs/BottomTabIcons/hand2.svg'), data: [
      { x: 1, y: 2, label: "Entertainment", data:null,pageName:'ShopIntertenment'},
      { x: 2, y: 2, label: "Product", data:null,pageName:'ShopProduct'},
      { x: 3, y: 2, label: "Eat/Drink", data:null,pageName:'ShopEat'},
      ]
    },
]
const datas=[ 
  { x: 1, value:1 , y :1, name: "Connect", data: [
                                          {x: 1, value:1 , y: 2,name:'Dating',data:[
                                                                            {x: 1, value:1 , y: 3,name:'Mach Maker',data:null,pageName:'MachMaker'},
                                                                            {x: 2, value:1 , y: 3,name:'Direct Chat',data:null,pageName:'DirectChat'},
                                                                            {x: 3, value:1 , y: 3,name:'My Profile',data:null,pageName:'Myprofile'},
                                                                            {x: 4, value:1 , y: 3,name:'Profile Search',data:null,pageName:'ProfileSearch'},
                                                                          ]
                                          },
                                          {x: 2, value:1 , y: 2,name:'People',data:null,pageName:'People'},
                                          {x: 3, value:1 , y: 2,name:'WhatUp',data:null,pageName:'WhatUp'},
                                          {x: 4, value:1 , y: 2,name:'Transport',data:[
                                                                                  {x: 1, value:1 , y: 3,name:'TravelTicket',data:[
                                                                                                                          {x: 1, value:1 , y: 4,name:'Train',data:null,pageName:'Train'},
                                                                                                                          {x: 2, value:1 , y: 4,name:'Boat',data:null,pageName:'Boat'},
                                                                                                                          {x: 3, value:1 , y: 4,name:'Airplan',data:null,pageName:'Airplan'},
                                                                                                                          
                                                                                                                        ]
                                                                                  },
                                                                                  {x: 2, value:1 , y: 3,name:'Map',data:null,pageName:'Map'},
                                                                                  {x: 3, value:1 , y: 3,name:'Car',data:[
                                                                                                                {x: 1, value:1 , y: 4,name:'Independant',data:null,pageName:'Independant'},
                                                                                                                {x: 2, value:1 , y: 4,name:'Taxi Drive',data:null,pageName:'TaxiDrive'},
                                                                                                               ]
                                                                                  },
                                                                                  ]
                                          },
                                          {x: 5, value:1 , y: 2,name:'Email',data:null,pageName:'Email'},
                                          {x: 6, value:1 , y: 2,name:'Event',data:[
                                            {x: 1, value:1 , y: 3,name:'Public',data:null,pageName:'Public'},
                                            {x: 2, value:1 , y: 3,name:'Private',data:null,pageName:'Private'},
                                          ]
                                          },
                                        ] 
  },

  { x: 2, value:1 , y: 1, name: "Deal", data: [
    { x: 1, value:1 , y: 2, name: "C2C", data:[
                                        { x: 1, value:1 , y: 3, name: "Offer", data:null,pageName:'C2COffer'},
                                        { x: 2, value:1 , y: 3, name: "Demand", data:null,pageName:'C2CDemand'},
                                     ]
    },
    { x: 2, value:1 , y: 2, name: "Service",data:[
                                            { x: 1, value:1 , y: 3, name: "Offer", data:null,pageName:'ServiceOffer'},
                                            { x: 2, value:1 , y: 3, name: "Demand", data:null,pageName:'ServiceDemand'},
                                        ]
    },
    { x: 3, value:1 , y: 2, name: "Learn", data:[
                                            { x: 1, value:1 , y: 3, name: "Offer", data:null,pageName:'LearnOffer'},
                                            { x: 2, value:1 , y: 3, name: "Demand", data:null,pageName:'LearnDemand'},
                                        ]
    },
    { x: 4, value:1 , y: 2, name: "Job",data:[
                                        { x: 1, value:1 , y: 3, name: "Offer", data:null,pageName:'JobOffer'},
                                        { x: 2, value:1 , y: 3, name: "Demand", data:null,pageName:'JobDemand'},
                                    ]
    },
    { x: 5, value:1 , y: 2, name: "B2B", data:[
                                        { x: 1, value:1 , y: 3, name: "Offer", data:null,pageName:'B2BOffer'},
                                        { x: 2, value:1 , y: 3, name: "Demand", data:null,pageName:'B2BDemand'},
                                     ]
    },
    ]
  },

  { x: 3, value:1 , y: 1, name: "Talkie", data: [
                                          
                                          
                                          { x: 1, value:1 , y: 2, name: "Video Game", data:null,pageName:'VideoGame'},
                                          { x: 2, value:1 , y: 2, name: "Tube", data:[
                                                                              
                                                                              { x: 1, value:1 , y: 3, name: "News" ,data:[ 
                                                                                                                      {x: 1, value:1 , y: 4,name:'Weather',data:null,pageName:'Weather'},
                                                                                                                      {x: 2, value:1 , y: 4,name:'Statistic',data:null,pageName:'Statistic'},
                                                                                                                      {x: 3, value:1 , y: 4,name:'Sport',data:null,pageName:'Sport'},
                                                                                                                      {x: 4, value:1 , y: 4,name:'Finenc',data:null,pageName:'Finenc'},
                                                                                                                      {x: 5, value:1 , y: 4,name:'General',data:null,pageName:'General'},
                                                                                                                ]
                                                                              },
                                                                              { x: 2, value:1 , y: 3, name: "Search", data:null,pageName:'Search'},
                                                                              { x: 3, value:1 , y: 3, name: "Go to Home", data:null,pageName:'Home'},
                                                                            ]
                                          },  
                                          { x: 3, value:1 , y: 2, name: "Music", data:null,pageName:'Music'},
                                          { x: 4, value:1 , y: 2, name: "Movie", data:null,pageName:'Movie'},
                                      ]
  },

  { x: 4, value:1 , y: 1, name: "Creation", data: [
    { x: 1, value:1 , y: 2, name: "Art", data:null,pageName:'Art'},
    { x: 2, value:1 , y: 2, name: "StartUp",data:[
                                            { x: 1, value:1 , y: 3, name: "Info", data:null,pageName:'StartUpInfo'},
                                            { x: 2, value:1 , y: 3, name: "Capital", data:null,pageName:'StartUpCapital'},
                                        ]
    },
    { x: 3, value:1 , y: 2, name: "Invention",data:[
                                            { x: 1, value:1 , y: 3, name: "Info", data:null,pageName:'InventionInfo'},
                                            { x: 2, value:1 , y: 3, name: "Capital", data:null,pageName:'InventionCapital'},
                                          ]
    },
    { x: 4, value:1 , y: 2, name: "Cooking", data:null,pageName:'Cooking'},
    { x: 5, value:1 , y: 2, name: "Fashion", data:null,pageName:'Fashion'},
    ]
  },
 
  { x: 5, value:1 , y: 1, name: "Memory", data: [
                                          
                                          { x: 1, value:1 , y: 2, name: "My Activities", data:[
                                                                                          { x: 1, value:1 , y: 3, name: "My Order", data:null,pageName:'MyActivitiesOrder'},
                                                                                          { x: 2, value:1 , y: 3, name: "My Meeting", data:null,pageName:'MyActivitiesMeeting'},
                                                                                      ]
                                          },
                                          { x: 2, value:1 , y: 2, name: "My Calendre", data:[
                                                                                          { x: 1, value:1 , y: 3, name: "Private", data:null,pageName:'MyCalendrePrivate'},
                                                                                          { x: 2, value:1 , y: 3, name: "Public", data:null,pageName:'MyCalendrePublic'},
                                                                                    ]
                                          },
                                          { x: 3, value:1 , y: 2, name: "My Footage",  data:[
                                                                                      { x: 1, value:1 , y: 3, name: "My Picture", data:null,pageName:'MyFootagePicture'},
                                                                                      { x: 2, value:1 , y: 3, name: "My Video", data:null,pageName:'MyFootageVideo'},
                                                                                  ]
                                          },
                                      ]
  },

  { x: 6, value:1 , y: 1, name: "Shop", data: [
                                              { x: 1, value:1 , y: 2, name: "Entertainment", data:null,pageName:'ShopIntertenment'},
                                              { x: 2, value:1 , y: 2, name: "Product", data:null,pageName:'ShopProduct'},
                                              { x: 3, value:1 , y: 2, name: "Eat/Drink", data:null,pageName:'ShopEat'},
                                              ]
  },
]

 const cColor2Set=()=>{
  setcircle2color(['#0195ff', '#0195ff', '#0195ff', '#0195ff', '#0195ff', '#0195ff']) 
}
const cColor3Set=()=>{
  setcircle3color(['#013220', '#013220', '#013220', '#013220', '#013220', '#013220']) 
}
const cColor4Set=()=>{
  setcircle4color(['#FF7722', '#FF7722', '#FF7722', '#FF7722', '#FF7722', '#FF7722']) 
}
const Mynav=(screen)=>{
props.navigation.navigate(screen,{from:'Weel'})
}

// position:'absolute',
  const InnerCircle = (datas, Ir, R, Fs,zin,colorScal,lredious,origin) => {
    return (
    //  <View style={{zIndex:zin }}> 
        <VictoryPie
          data={datas}
          colorScale={colorScal}
          origin={origin}
          labelRadius={({ innerRadius }) => lredious ? lredious : innerRadius + 5}
          labelPlacement={({ index }) => index
            ? "perpendicular"
            : "perpendicular"
          }
          // radius={({ datum }) => 10 + datum.y * 2}
          innerRadius={Ir}
          radius={R}
          padAngle={1}
          events={[
            {
              target: 'data',
              eventHandlers: {
                onPressIn: () => {
                  return [
                    {
                      target: "data",
                      mutation: (props) => {
                        console.log('item selected in is', props)
                        if(props.slice.data._y=='2'){
                            if(props.slice.data.data==null){
                              setcircle3Data(null)
                              setcircle4Data(null)
                              setgoon(true)
                              setgoonName(props.slice.data.pageName)
                             // Mynav(props.slice.data.pageName)
                            }else{
                              setcircle3Data(props.slice.data.data)
                              setcircle4Data(null)
                              setgoon(false)
                            }
                            cColor3Set()
                            var vColor = []
                            for (let i = 0; i < circle2color.length; i++) {
                              if (i == props.index) {
                                vColor.push('#ffc000')
                              } else {
                                vColor.push('#0195ff') 
                              }
                            }
                            setcircle2color(vColor)
                         }

                         if(props.slice.data._y=='3'){
                          if(props.slice.data.data==null){
                            setcircle4Data(null)
                            setgoon(true)
                            setgoonName(props.slice.data.pageName)
                           
                           // Mynav(props.slice.data.pageName)
                          }else{
                            setcircle4Data(props.slice.data.data)
                            setgoon(false)
                           
                          }
                          cColor4Set()
                          var vColor = []
                          for (let i = 0; i < circle3color.length; i++) {
                            if (i == props.index) {
                              vColor.push('#ffc000')
                            } else {
                              vColor.push('#013220') 
                            }
                          }
                          setcircle3color(vColor)
                         }


                         if(props.slice.data._y=='4'){
                          if(props.slice.data.data==null){
                            setgoon(true)
                            setgoonName(props.slice.data.pageName)
                          //  Mynav(props.slice.data.pageName)
                          }else{
                            setgoon(false)
                          }
                          var vColor = []
                          for (let i = 0; i < circle4color.length; i++) {
                            if (i == props.index) {
                              vColor.push('#ffc000')
                            } else {
                              vColor.push('#FF7722') 
                            }
                          }
                          setcircle4color(vColor)
                         } 


                         if(props.slice.data._y=='15'){
                          if(goon){ 
                            Mynav(goonName)
                          //  Alert.alert('Clicked for Go on',goonName)
                          }else{
                          //  Alert.alert('Please Select any Last point')
                          }
                         } 

                       // Alert.alert(props.index)
                        // var vColor = []
                        // for (let i = 0; i < circle1color.length; i++) {
                        //   if (i == props.index) {
                        //     vColor.push('black')
                        //   } else {
                        //     vColor.push('red')
                        //   }
                        // }
                        // setcircle1color(vColor)
                        // const fill = props.style && props.style.fill;
                      //  return fill === "black" ? null : { style: { fill: "black" } };
                        return {};
                      }
                    }
                    // , {
                    //   target: "labels",
                    //   mutation: (props) => {
                    //     console.log('item selected lable', props)
                    //     const fill = props.style && props.style.fill;
                    //       return fill === "black" ? null : { style: { fill: "white" } };
                    //     //return props.text === "clicked" ? null : { text: "clicked" };
                    //   } 
                    // }
                  ];
                },

              }
            }
          ]}
          style={{
            parent: {
             
            },
            data: {
              fillOpacity: 0.9, stroke: "#000", strokeWidth: 1,
              opacity: ({ datum }) => datum.opacity
            },
            labels: {
              fontSize: Fs,
              fill: "#fff",
              //  stroke:"#fff",
              fontWeight: "bold",
              // dx:'0',
              // dy:'0,-2,-3,3'

              // x:"100",
              // y:"20",
              // textAnchor="middle"
            },
          }}
        // startAngle={90}
        // endAngle={450}

        />
   // </View>

    )
  }
const ChartClick = Platform.select({
    ios: TouchableOpacity,
    android: Svg
  });
  const CustomLabel = props => {
    console.log('mydatata is==>>', props)
    const rotation = `rotate(45 ${props.x} ${props.y})`
    console.log('rotation is==>>', rotation)

    return (



      <G x={props.x} y={props.y}>
        <Defs>
          <Path id="path" d="M 100,75 C 125,50 150,50 175,75" />
        </Defs>
        <Ptext>

          <TSpan
            fill={
              '#7A858C'
            }
            inlineSize={70}
            textAnchor="middle"
            angle={'45'}
            onPress={() => console.log('vh')}
          >
            <Image
              x={-10}
              y={-10}
              width={20}
              height={20}
              preserveAspectRatio="xMidYMid slice"
              opacity="1"
              href={require('../../assets/bin.png')}
              style={{}}
            />
            <Ptext
              dx='40'
              dy='5'>{props.text}</Ptext>
          </TSpan>
        </Ptext>
      </G>


    )
  }

  const myClickFun = (item) => {

  

          if(item.data.y=='1'){
            setcircle2Data(item.data.data)
          
            setcircle3Data(null)
            setcircle4Data(null)
            setgoon(false)

        cColor2Set()
        var vColor = []
        for (let i = 0; i < circle1color.length; i++) {
        if (i == item.index) {
          vColor.push('#ffc000')
        } else {
          vColor.push('#6f00a7') 
        }
        }
        setcircle1color(vColor)
        }
       


    if(item.data.y=='2'){
      if(item.data.data==null){
        setcircle3Data(null)
        setcircle4Data(null)
        setgoon(true)
        setgoonName(item.data.pageName)
       // Mynav(props.slice.data.pageName)
      }else{
        setcircle3Data(item.data.data)
        setcircle4Data(null)
        setgoon(false)
          }
      cColor3Set()
      var vColor = []
      for (let i = 0; i < circle2color.length; i++) {
        if (i == item.index) {
          vColor.push('#ffc000')
        } else {
          vColor.push('#0195ff') 
        }
      }
      setcircle2color(vColor)
   }


   if(item.data.y=='3'){
    if(item.data.data==null){
      setcircle4Data(null)
      setgoon(true)
      setgoonName(item.data.pageName)
     
     // Mynav(props.slice.data.pageName)
    }else{
      setcircle4Data(item.data.data)
      setgoon(false)
     
    }
    cColor4Set()
    var vColor = []
    for (let i = 0; i < circle3color.length; i++) {
      if (i == item.index) {
        vColor.push('#ffc000')
      } else {
        vColor.push('#013220') 
      }
    }
    setcircle3color(vColor)
   }


   if(item.data.y=='4'){
    if(item.data.data==null){
      setgoon(true)
      setgoonName(item.data.pageName)
    //  Mynav(props.slice.data.pageName)
    }else{
      setgoon(false)
    }
    var vColor = []
    for (let i = 0; i < circle4color.length; i++) {
      if (i == item.index) {
        vColor.push('#ffc000')
      } else {
        vColor.push('#FF7722') 
      }
    }
    setcircle4color(vColor)
   } 


   if(item.data.y=='15'){
    if(goon){ 
      Mynav(goonName)
    }else{
    //  Alert.alert('Please Select any Last point')
    }
   } 

  }

  // const scaleOrdinal = d3.scaleOrdinal;
  // const schemeCategory10 = d3.schemeCategory10;
  const Pie = d3.pie;
  const arc = d3.arc;
  
 
  const pie = new Pie()
    .sort(d => d)
    .value(d => d.value)
    .padAngle(.02);

  const styles = {
    label: {
      textAnchor: 'middle',
      dominantBaseline: 'middle',
     
       
        // stroke:"#fff",
       fontWeight: "bold",
       
    },
  };
  
  function PieChart({ data, size = 300, thickness = 30 ,Colors=circle1color,fSize=18}) {
    const outerRadius = size / 2;
    const innerRadius = outerRadius - thickness+10;
    const midPoint = outerRadius - (thickness / 2);
    const id = uuidv4();
    
    const transform = `translate(${size / 2}, ${size / 2})`;
  
    const segmentArc = arc()
      .outerRadius(outerRadius)
      .innerRadius(innerRadius);
  
    const textArc = arc()
      .innerRadius(midPoint)
      .outerRadius(midPoint);
    const segments = (pie(data)).map((d, i) => (
      <G key={i} onPress={()=>{myClickFun(d)}} 
      >
        <Defs>
          <Path d={textArc(d)} id={`${id}-${i}`}  />
        </Defs>
        
        <Path fill={Colors[i]} d={segmentArc(d)} stroke="#000" stroke-width="10"/>

        <Ptext style={[styles.label,{fontSize: fSize,fill: "#fff",}]}>
          <TextPath startOffset="25%" xlinkHref={`#${id}-${i}`}>
            {d.data.name}
            {/* <d.data.Img 
              width="35"
              height="35"
              // backgroundColor="#fff" 
            /> */}
            {/* <Svg width="40" height="40">
              <Image href={d.data.Img } />
            </Svg> */}
             <Image
              // x={-45}
              // y={-150}
             width={30}
             height={30}
              preserveAspectRatio="xMidYMid slice"
              // opacity="1"
              href={d.data.Img}
              //style={{transform: [{ rotate: '45deg' }]}}
             />
          </TextPath>
          </Ptext>
           
      </G>
    ));
  
    return (
      <Svg width={size} height={size}>
        <G transform={transform}>
          {segments}
        </G>
      </Svg>
    );
  }
  
 
  return (
    <SafeAreaView style={styles.container}>
      <HomeHeader height={60} paddingHorizontal={15}
        press1={() => { props.navigation.openDrawer() }} img1={require('../../assets/List.png')} img1width={25} img1height={25}
        press2={() => { }} img2={require('../../assets/Kinengo_Green.png')} img2width={95} img2height={20}
        press3={() => { }} img3={require('../../assets/Bell.png')} img3width={25} img3height={25} />
      <View style={{ alignSelf: 'center' }}>
        <SerchInput marginTop={10} placeholder={'What are you looking for?'} serchValue={searchValue} onChangeText={(e) => { setsearchValue(e) }} press={() => { Alert.alert('Hi') }} />
      </View>
     
      <ScrollView>
        <View style={{ alignSelf: 'center', marginVertical: 30 }}>
          <Text style={{ textAlign: 'center', fontSize: 18, color: Mycolors.TEXT_COLOR, fontWeight: '500' }}>Select From</Text>
          <Text style={{ textAlign: 'center', fontSize: 24, color: Mycolors.SearchBoxColor, fontWeight: '600' }}>KinenGo Wheel</Text>
        </View>
<View>
<View style={{alignSelf:'center',borderColor:'#000',borderWidth:1,borderRadius:200,padding:4}}>
 <PieChart data={datas} size={dimensions.SCREEN_WIDTH-30} thickness={circle3Data ? 40 : 70} Colors={circle1color}/>
 
{ circle2Data ?
 <View style={{position:'absolute',alignSelf:'center',top:circle3Data? 39 :72,overflow:'hidden',zIndex:-777}}>
<PieChart data={circle2Data} size={circle3Data?dimensions.SCREEN_WIDTH-100:dimensions.SCREEN_WIDTH-165} thickness={circle3Data ? 40 : 70} Colors={circle2color} fSize={circle3Data ? 16 : 13}/>
</View>
: null }

{ circle3Data ?
 <View style={{position:'absolute',alignSelf:'center',top:76,overflow:'hidden',borderRadius:0,}}>
<PieChart data={circle3Data} size={dimensions.SCREEN_WIDTH-173} thickness={40} Colors={circle3color}fSize={14}/>
</View>
: null }

{ circle4Data ?
 <View style={{position:'absolute',alignSelf:'center',top:113,overflow:'hidden',zIndex:99}}>
<PieChart data={circle4Data} size={dimensions.SCREEN_WIDTH-245} thickness={40} Colors={circle4color}fSize={14}/>
</View>
: null }

<View style={{position:'absolute',alignSelf:'center',borderRadius:25,justifyContent:'center',alignItems:'center',overflow:'hidden',top:151,zIndex:999}}>
<PieChart data={[{ name: "", value: 1, y:15 }]} size={55} thickness={40} Colors={goon ? ['green'] : ['red']}/>
<Text style={{position:'absolute',top:15,textAlign:'center',color:'#fff',fontWeight:'bold',fontSize:22}} onPress={()=>{goon ? props.navigation.navigate(goonName,{from:'Weel'}): null}}>Go</Text>
</View> 

</View>

  {/* <View style={{width:352,height:352,alignSelf:'center',borderRadius:180,justifyContent:'center',alignItems:'center',overflow:'hidden',borderColor:Mycolors.Black,borderWidth:1.5}}>

            <VictoryPie
              data={myArrr}
              colorScale={circle1color}
              labelRadius={({ innerRadius }) => innerRadius + 3}
              // startAngle={450}
              // endAngle={90}
             // origin={{x:175.5,y:175.5}} 
             
              // labelComponent={
              // <CustomLabel />
              // }

              // labelComponent={
              //   <VictoryLabel
              //     //dy={-20}
              //    // backgroundStyle={{opacity: 0.6 }}
              //    // backgroundPadding={{ bottom: 5, top: 5 }}
              //   />
              // }
              labelPlacement={({ index }) => index
                ? "perpendicular"
                : "perpendicular"
              }

              innerRadius={circle3Data ? 140 : 100}
              radius={170}
              padAngle={1}
              events={[
                {
                  target: 'data',
                  eventHandlers: {
                    onPressIn: () => {
                      return [
                        {
                          target: "data",
                          mutation: (props) => {
                            console.log('item selected is', props.slice.data.label)
                              if(props.slice.data._y=='1'){
                                 setcircle2Data(props.slice.data.data)
                                
                                 setcircle3Data(null)
                                 setcircle4Data(null)
                                 setgoon(false)
                              }
                              cColor2Set()
                            var vColor = []
                            for (let i = 0; i < circle1color.length; i++) {
                              if (i == props.index) {
                                vColor.push('#ffc000')
                              } else {
                                vColor.push('#6f00a7') 
                              }
                            }
                            setcircle1color(vColor)
                           
                           // const fill = props.style && props.style.fill;
                          //  return fill === "black" ? null : { style: { fill: "black" } };
                            return {};
                          }
                        }
                        // , {
                        //   target: "labels",
                        //   mutation: (props) => {
                        //     console.log('item selected lable', props)
                        //     const fill = props.style && props.style.fill;
                        //       return fill === "black" ? null : { style: { fill: "white" } };
                        //     //return props.text === "clicked" ? null : { text: "clicked" };
                        //   } 
                        // }
                      ];
                    },

                  }
                }
              ]}
              // labels={({ datum }) => {
              //   `x: ${datum.x*10}`
              //   `y: ${datum.y*10}`
              // }}
          

              style={{
                parent: { border: "6px solid red" },
                data: {
                  fillOpacity: 0.9, stroke: "#000", strokeWidth: 1,
                  opacity: ({ datum }) => {
                    datum.opacity
                  }
                },

                labels: {
                 
                  fontSize: 18,
                  fill: "#fff",
                  //  stroke:"#fff",
                  fontWeight: "bold",
                  // dx:'0',
                  // dy:'0,-2,-3,3,4,5',
                  // x:"100",
                  // y:"20",
                  // textAnchor:"middle"
                  // angle:20,
                }
                
              }}
             
            />
  </View>

 { circle2Data ?
<View style={{width:circle3Data ? 270 : 190,height:circle3Data ? 270 : 190,position:'absolute',alignSelf:'center',borderRadius:140,justifyContent:'center',alignItems:'center',overflow:'hidden',top:circle3Data ? 40 : 80}}>
 {InnerCircle(circle2Data,circle3Data ? 100 : 50,circle3Data ? 135 : 95,14,-666,circle2color,null,{ }) }
</View>
: null } 

{ circle3Data ?
<View style={{width:190,height:190,position:'absolute',alignSelf:'center',borderRadius:100,justifyContent:'center',alignItems:'center',overflow:'hidden',top:80}}>
 {InnerCircle(circle3Data,65,95,12,-777,circle3color,null,{}) }
</View>
: null }

{ circle4Data ?
<View style={{width:120,height:120,position:'absolute',alignSelf:'center',borderRadius:60,justifyContent:'center',alignItems:'center',overflow:'hidden',top:115}}>
 {InnerCircle(circle4Data,30,60,10,-888,circle4color,null,{}) }
</View>
: null }

<View style={{width:50,height:50,position:'absolute',alignSelf:'center',borderRadius:25,justifyContent:'center',alignItems:'center',overflow:'hidden',top:150}}>
{InnerCircle([{ x: "Go", y: 15 }],0,25,24,-999, goon ? ['green'] : ['red'],-12,{ })}
</View>  
  */}







  
</View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
export default Weel
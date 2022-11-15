// import React, { Component } from 'react';
// import { Path, } from 'react-native-svg';
// import * as shape from 'd3-shape';
// const d3 = { shape };

// const myArrr=[ 
//     { x: 1, y: 1, label: "Connect", data: [
//                                             {x: 1, y: 2,label:'Dating',data:[
//                                                                               {x: 1, y: 3,label:'Profile Search',data:null},
//                                                                               {x: 2, y: 3,label:'Mach Maker',data:null},
//                                                                               {x: 3, y: 3,label:'Direct Chat',data:null},
//                                                                               {x: 4, y: 3,label:'My Profile',data:null},
//                                                                             ]
//                                             },
//                                             {x: 2, y: 2,label:'Event',data:[
//                                                                               {x: 1, y: 3,label:'Public',data:null},
//                                                                               {x: 2, y: 3,label:'Private',data:null},
//                                                                             ]
//                                             },
//                                             {x: 3, y: 2,label:'People',data:null},
//                                             {x: 4, y: 2,label:'Email',data:null},
//                                             {x: 5, y: 2,label:'WhatUp',data:null},
//                                             {x: 6, y: 2,label:'Transportation',data:[
//                                                                                     {x: 1, y: 3,label:'Car',data:[
//                                                                                                                   {x: 1, y: 4,label:'Independant',data:null},
//                                                                                                                   {x: 2, y: 4,label:'Taxi Drive',data:null},
//                                                                                                                  ]
//                                                                                     },
//                                                                                     {x: 2, y: 3,label:'TravelTicket',data:[
//                                                                                                                             {x: 1, y: 4,label:'Train',data:null},
//                                                                                                                             {x: 2, y: 4,label:'Airplan',data:null},
//                                                                                                                             {x: 3, y: 4,label:'Boat',data:null},
//                                                                                                                           ]
//                                                                                     },
//                                                                                     {x: 3, y: 3,label:'Map',data:null},
//                                                                                     ]
//                                             },

//                                           ] 
//     },
//     { x: 2, y: 1, label: "Shop", data: [
//                                         { x: 1, y: 2, label: "Eat/Drink", data:null},
//                                         { x: 2, y: 2, label: "Intertenment", data:null},
//                                         { x: 3, y: 2, label: "Product", data:null},
//                                         ]
//     },
//     { x: 3, y: 1, label: "Deal", data: [
//                                         { x: 1, y: 2, label: "B2B", data:[
//                                                                             { x: 1, y: 3, label: "Offer", data:null},
//                                                                             { x: 2, y: 3, label: "Demand", data:null},
//                                                                          ]
//                                         },
//                                         { x: 2, y: 2, label: "C2C", data:[
//                                                                             { x: 1, y: 3, label: "Offer", data:null},
//                                                                             { x: 2, y: 3, label: "Demand", data:null},
//                                                                          ]
//                                         },
//                                         { x: 3, y: 2, label: "Job",data:[
//                                                                             { x: 1, y: 3, label: "Offer", data:null},
//                                                                             { x: 2, y: 3, label: "Demand", data:null},
//                                                                         ]
//                                         },
//                                         { x: 4, y: 2, label: "Service",data:[
//                                                                                 { x: 1, y: 3, label: "Offer", data:null},
//                                                                                 { x: 2, y: 3, label: "Demand", data:null},
//                                                                             ]
//                                         },
//                                         { x: 5, y: 2, label: "Learn", data:[
//                                                                                 { x: 1, y: 3, label: "Offer", data:null},
//                                                                                 { x: 2, y: 3, label: "Demand", data:null},
//                                                                             ]
//                                         },
//                                         ]
//     },
//     { x: 4, y: 1, label: "Memory", data: [
//                                             { x: 1, y: 2, label: "My Footage",  data:[
//                                                                                         { x: 1, y: 3, label: "My Picture", data:null},
//                                                                                         { x: 2, y: 3, label: "My Video", data:null},
//                                                                                     ]
//                                             },
//                                             { x: 2, y: 2, label: "My Activities", data:[
//                                                                                             { x: 1, y: 3, label: "My Order", data:null},
//                                                                                             { x: 2, y: 3, label: "My Meeting", data:null},
//                                                                                         ]
//                                             },
//                                             { x: 3, y: 2, label: "My Calendre", data:[
//                                                                                             { x: 1, y: 3, label: "Private", data:null},
//                                                                                             { x: 2, y: 3, label: "Public", data:null},
//                                                                                       ]
//                                             },
//                                         ]
//     },
//     { x: 5, y: 1, label: "Talkie", data: [
//                                             { x: 1, y: 2, label: "Movie", data:null},
//                                             { x: 2, y: 2, label: "Music", data:null},
//                                             { x: 3, y: 2, label: "Video Game", data:null},
//                                             { x: 4, y: 2, label: "Tube", data:[
//                                                                                 { x: 1, y: 3, label: "Search", data:null},
//                                                                                 { x: 2, y: 3, label: "News" ,data:[
//                                                                                                                         {x: 1, y: 4,label:'General',data:null},
//                                                                                                                         {x: 2, y: 4,label:'Weather',data:null},
//                                                                                                                         {x: 3, y: 4,label:'Sport',data:null},
//                                                                                                                         {x: 4, y: 4,label:'Finenc',data:null},
//                                                                                                                   ]
//                                                                                 },
//                                                                               ]
//                                             },
//                                         ]
//     },
//     { x: 6, y: 1, label: "Creation", data: [
//                                         { x: 1, y: 2, label: "Fashion", data:null},
//                                         { x: 2, y: 2, label: "Art", data:null},
//                                         { x: 3, y: 2, label: "Cooking", data:null},
//                                         { x: 4, y: 2, label: "StartUp",data:[
//                                                                                 { x: 1, y: 3, label: "Info", data:null},
//                                                                                 { x: 2, y: 3, label: "Capital", data:null},
//                                                                             ]
//                                         },
//                                         { x: 5, y: 2, label: "Invention",data:[
//                                                                                 { x: 1, y: 3, label: "Info", data:null},
//                                                                                 { x: 2, y: 3, label: "Capital", data:null},
//                                                                               ]
//                                         },
//                                         ]
//     },
// ]

// export default class CoustomWeelTest extends Component {
//     constructor(props) {
//         super(props);
//         this.arcGenerator = d3.shape.arc()
//             .outerRadius(100)
//             .padAngle(0)
//             .innerRadius(0);
//     }

    

//     createPieSlice = (index, endAngle, data) => {

//         const arcs = d3.shape.pie()
//             .value((item) => item.number)
//             .startAngle(10)
//             .endAngle(endAngle)
//             .centroid()
//             (data);

//         let arcData = arcs[index];

//         return this.arcGenerator(arcData);
//     };

//     render() {

//         const {
//             endAngle,
//             color,
//             index,
//             data,
//             onPress
//         } = this.props;

//         return (
//             <Path
//                 onPress={onPress}
//                 d={this.createPieSlice(index, endAngle, data)}
//                 fill={color}
//             />
//         )

//     }
// }







// // import React, { Component } from 'react';
// // import Svg from 'react-native-svg';
// // import {
// //   StyleSheet,
// //   View,
// // } from 'react-native';
// // import CoustomWeelTest from "./CoustomWeelTest";

// // const demoData = [
// //   {
// //     number: 150,
// //     color: '#28BD8B'
// //   },
// //   {
// //     number: 110,
// //     color: '#366A6A'
// //   },
// //   {
// //     number: 60,
// //     color: '#1d2f51'
// //   },
// //   {
// //     number: 40,
// //     color: '#466B6A'
// //   },
// // ];


// // export default class Weel extends Component {

// //   constructor(props) {
// //     super(props);
// //   }

// //   render() {
// //     return (
// //       <View style={styles.container}>
// //           <Svg
// //             width={200}
// //             style={{
// //               shadowOffset: {
// //                 width: 0,
// //                 height: 32
// //               },
// //               elevation: 12,
// //               shadowRadius: 12.5,
// //               shadowOpacity: 1,
// //             }}
// //             height={200}
// //             viewBox={`-100 -100 200 200`}
// //           >
// //             {
// //               demoData.map((item, index) =>
// //                 <CoustomWeelTest
// //                   index={index}
// //                   endAngle={Math.PI * 2}
// //                   color={item.color}
// //                   data={demoData}
// //                   key={'pie_shape_' + index}
// //                 />
// //               )
// //             }
// //           </Svg>
// //       </View>
// //     );
// //   }
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// // });
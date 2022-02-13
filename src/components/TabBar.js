import { Ionicons } from '@expo/vector-icons';
import React from 'react'; 

import {View, Pressable, Dimensions, StyleSheet} from 'react-native'
import { TouchableNativeFeedback } from 'react-native';
import Colors from '../constants/Colors';
import { TabBg } from './TabBg';


const size = (Dimensions.get('window').width - 75.2)/2; 
const {width} = Dimensions.get('window')

const TabBar = ({ state, descriptors, navigation, centerButtonIcon, centerButtonRoute}) =>{

 // console.log(descriptors);

  const onCenterButtonPress =()=>{
    const centerButtonItem = state.routes.find((item)=> item.name == "centerButtonRoute");
    //console.log("center button pressed");

    
   /* const event = navigation.emit({
      type: 'tabPress',
      target: centerButtonItem.key,
    });*/


   // if (!event.defaultPrevented) {
      navigation.navigate(centerButtonRoute);
   // }
  }

  return (

    <>

    <View style={styles.bottomTabBg}>
            <TabBg />
        </View>
    <View style={styles.mainContainer}>
       

      {state.routes.map((route , index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const icon =  options.tabBarIcon;

        const isFocused = state.index === index;

        console.log(index)
        console.log(state.routes.length)

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (

          
          <>
          {route.name != "centerButtonRoute"? 
          <View key = {index} style = {[styles.mainItemContainer, {borderRightWidth: label=="notes"? 3:0}]}>
            
            <Pressable
              onPress = {onPress}
              style = {{backgroundColor: isFocused?"transparent": "transparent", borderRadius: 0, width:"100%",height:"100%", alignItems:'center'}}>
              <View style = {{justifyContent: 'center', alignItems: 'center', flex: 1, padding: 5}}>
                {icon("")}
              </View>
             
              <View style={{backgroundColor:isFocused?'white':'transparent',  borderRadius:10,width:"50%", height: 3}}/>
            </Pressable>
          
          </View> : null}

          {index+1==Math.floor(state.routes.length/2) ? state.routes.length==3?
          <>
            <View key="placeholder" style={{flex:1 ,height:"100%"}}/>
            <View key="placeholder2" style={{flex:1 ,height:"100%"}}/>
          </> : <View key="placeholder" style={{flex:1 ,height:"100%"}}/>: <></>}
          </>
        );
      })}

    </View>
    <View style={styles.centerButtonContainer}>
    <View style={{borderRadius:26, width: 52, height:52, overflow:'hidden', elevation:5}}>
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('white')} onPress={onCenterButtonPress}>
          <View style={styles.centerButton}>
           {centerButtonIcon()}
        </View>
        </TouchableNativeFeedback>
        </View>
      </View>
    </>
  );



}

const styles = StyleSheet.create({

  centerButtonContainer:{
    backgroundColor: 'transparent',
    width: 75.2,
    aspectRatio:1,
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    left:size,
    bottom:15,
    zIndex:1
  },
  centerButton:{
    backgroundColor: Colors.darkGray,
    width: 52,
    aspectRatio:1,
    borderRadius:26,
    alignItems:'center',
    justifyContent:'center',
 

  },
    bottomTabBg:{
        position:'absolute',
        bottom:0,
        left:0
    },
  mainContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    backgroundColor:'transparent',
    elevation:10,
    alignItems:'center',
    justifyContent:'center',
    paddingBottom:8,
   
  },
  mainItemContainer: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-evenly',
    borderColor: "#333B42",
  }, 
})


export default TabBar; 
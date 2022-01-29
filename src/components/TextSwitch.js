import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import { useState } from 'react';
import { TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

const TextSwitch = props => {

    const [switchState, setSwitchState] = useState(0);

    const changeSwitchState = (newState) =>{
        if(switchState != newState){
            setSwitchState(newState)

            if(newState==0){
                props.onItem0Selected();
            }else{
                props.onItem1Selected();
            }

        }    
    }

  return (
    <View style={[styles.container, props.style]}>
       

        <View style={{borderRadius: 10, overflow:'hidden'}}>
            <TouchableWithoutFeedback 
            style={styles.touchable} 
                onPress={()=>{changeSwitchState(0)}}  >
                <View style={switchState ? styles.textItemInactive :styles.textItemActive}>
                    <Text style={styles.text1}>{props.text0}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>

        <View style={{borderRadius: 10, overflow:'hidden'}}>
            <TouchableWithoutFeedback onPress={()=>{changeSwitchState(1)}}>
                <View style={switchState ? styles.textItemActive :styles.textItemInactive}>
                    <Text style={styles.text2}>{props.text1}</Text>
                </View>
            </TouchableWithoutFeedback>
        </View>
    </View>
  );
}

export default TextSwitch;

const styles = StyleSheet.create({

    touchable:{
        borderRadius: 10,
    },
    textItemActive:{
        backgroundColor: Colors.white,
        //borderRadius: 10,
        padding: 5
    },

    textItemInactive:{
        //backgroundColor: Colors.white,
        //borderRadius: 10,
        padding: 5
    },

    selector:{
        position:'absolute',
        backgroundColor: 'black',
        },

    text1:{
        paddingRight:5,
        fontFamily:'red-hat-medium'
    },
    text2:{
        paddingLeft:5,
        fontFamily:'red-hat-medium'
    },
  container: {
      padding: 5,
    alignSelf:'center',
    flexDirection:'row',
    backgroundColor:Colors.lightGray,
    borderRadius: 10,
  },
});

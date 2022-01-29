import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const ChatBubble = props => {
  return (
    <View style={[styles.container,{justifyContent: props.side?'flex-start':'flex-end'}]}>

        {/*props.side? 
        <View style={{height:50, width:50, backgroundColor:Colors.lightBlue, borderRadius:25}}>

        </View>: null*/}

        <View style={[styles.bubbleContainer, {backgroundColor: props.side? Colors.lightGray:Colors.lightBlue}]}>
             <Text style={[styles.bubbleText, {color:props.side? Colors.black:Colors.white}]}>{props.text}</Text>

             <View style={{flexDirection:'row', justifyContent:'flex-end', paddingTop:5}}>
                 <Text style={{color:props.side? Colors.black:Colors.white, fontFamily:'red-hat-regular', opacity:1}}>{props.time}</Text>
             </View>
        </View>

        {/*!props.side? 
        <View style={{height:50, width:50, backgroundColor:Colors.lightPurple, borderRadius:25}}>

        </View>: null*/}
     
    </View>
  );
}

export default ChatBubble;

const styles = StyleSheet.create({

bubbleText:{
    fontSize:15,
    fontFamily:'red-hat-regular',
},
  container: {
    
    flexDirection:'row',
    alignItems: 'center',
    padding:5
    //justifyContent:'flex-end',
  },

  bubbleContainer:{
    padding:10,
    marginHorizontal:5,
    paddingHorizontal:15,
    maxWidth:"80%",
    backgroundColor:Colors.lightBlue,
    borderRadius:20
  }
});

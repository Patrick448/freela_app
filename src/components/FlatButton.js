import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import Colors from '../constants/Colors';

const FlatButton = props => {
  return (
      
    <TouchableNativeFeedback 
    contentContainerStyle={props.style}
    background={TouchableNativeFeedback.Ripple(Colors.secondaryColor)}
    useForeground={true} 
    onPress={ props.onPress ? () =>props.onPress() : ()=>{}}>
    <View style={styles.container}>

        {props.children}
      <View>
          <Text style={{...styles.text, ...props.textStyle}}>{props.title}</Text>
        </View>

    </View>
    </TouchableNativeFeedback>
  );
}

export default FlatButton;

const styles = StyleSheet.create({

    text:{
        fontSize:20,
        marginLeft:5,
    },
  container: {
    padding:7,
    flex: 1,
    backgroundColor: 'white',
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

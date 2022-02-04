import { StyleSheet, Text, View, TouchableNativeFeedback } from 'react-native';
import Colors from '../constants/Colors';

const RoundButton = props => {
  return (
    <View style={styles.container}>
    <TouchableNativeFeedback 
    background={TouchableNativeFeedback.Ripple(Colors.primaryColor)}
    useForeground={true} 
    onPress={ props.onPress ? () =>props.onPress() : ()=>{}}>
    <View style={{...styles.container, ...props.style}}>

        {props.children}
      
    </View>
    </TouchableNativeFeedback>
    </View>
  );
}

export default RoundButton;

const styles = StyleSheet.create({
  container: {
    elevation:5,
    overflow:'hidden',
    height:55,
    width:55,
    borderRadius:30,
    backgroundColor: Colors.secondaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

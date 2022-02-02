import { StatusBar } from 'expo-status-bar';
import { StatusBar as RNStatusBar} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Stars from '../components/Stars';
import TextSwitch from '../components/TextSwitch';
import Colors from '../constants/Colors';


const PagamentoScreen = props=> {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{flexDirection:'column', alignItems:'center'}}>

      </View>      
    </View>   
  );
}

export default PagamentoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    //alignItems: 'center',
    //justifyContent: 'center',
  },


});

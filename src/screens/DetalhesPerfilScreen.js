import { StatusBar } from 'expo-status-bar';
import { StatusBar as RNStatusBar} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import Stars from '../components/Stars';
import TextSwitch from '../components/TextSwitch';
import Colors from '../constants/Colors';


const DetalhesPerfilScreen = props=> {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{flexDirection:'column', alignItems:'center'}}>

          <View style={{height:150, width: 150, backgroundColor:Colors.lightBlue, borderRadius: 75}}/>
            <Text style={styles.name}>Nome da Pessoa da Silva</Text>
            <Stars stars={4} size={24} side="left"/>
      </View>      
    </View>   
  );
}

export default DetalhesPerfilScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  name:{
      padding:10,
    fontFamily:"red-hat-medium", 
    fontSize:20
  }

});

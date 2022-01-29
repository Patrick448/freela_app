import { StatusBar } from 'expo-status-bar';
import { StatusBar as RNStatusBar} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView, Dimensions } from 'react-native';
import ListItem from '../components/ListItem';
import { TabBg } from '../components/TabBg';
import TextSwitch from '../components/TextSwitch';
import Colors from '../constants/Colors';


const CadastroServicoScreen = props=> {


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{paddingBottom:10}}>
        <TextSwitch 
        text0="Contrate" 
        text1="Ofereça" 
        onItem0Selected={()=>{console.log("0")}} 
        onItem1Selected={()=>{console.log("1")}}/>
      </View>

       
    </View>

    
  );
}

export default CadastroServicoScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: RNStatusBar.currentHeight + 10,
    flex: 1,
    backgroundColor: Colors.white,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

});

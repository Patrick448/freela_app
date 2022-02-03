import { StatusBar } from 'expo-status-bar';
import { StatusBar as RNStatusBar} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView, Dimensions, Button } from 'react-native';
import ListItem from '../components/ListItem';
import { TabBg } from '../components/TabBg';
import TextSwitch from '../components/TextSwitch';
import Colors from '../constants/Colors';

import FormTextInput from '../components/FormTextInput';
import { TextInput } from 'react-native-gesture-handler';
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

      <View style={{flex:1,  alignItems:'center'}}>
      <TextInput
          style={styles.titleInput}
          placeholderTextColor='#AFAFAF'
          placeholder='Título'
          autoCapitalize='none'
          returnKeyType='go'
          selectionColor={Colors.primaryColor}
        />
          <TextInput
          style={styles.descriptionInput}
          placeholderTextColor='#AFAFAF'
          placeholder='Descrição'
          autoCapitalize='none'
          returnKeyType='go'
          selectionColor={Colors.primaryColor}
        />

       
      
      </View>
      <Button title="Publicar"/>

       
    </View>

    
  );
}

export default CadastroServicoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  titleInput:{
    width: "85%", 
    height:40,
    padding:5, 
    borderRadius:10, 
    backgroundColor:Colors.lightGray
  },
  descriptionInput:{
    marginTop:15,
    width: "85%", 
    height:"70%",
    padding:5, 
    borderRadius:10, 
    backgroundColor:Colors.lightGray
  }

});

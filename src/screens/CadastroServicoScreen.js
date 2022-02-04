import { StatusBar } from 'expo-status-bar';
import { StatusBar as RNStatusBar} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView, Dimensions, Button } from 'react-native';
import ListItem from '../components/ListItem';
import TextSwitch from '../components/TextSwitch';
import FlatButton from '../components/FlatButton';
import Colors from '../constants/Colors';
import {useState} from 'react'
import FormTextInput from '../components/FormTextInput';
import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


const CadastroServicoScreen = props=> {

  const [titleInputText, setTitleInputText] = useState("");
  const [descriptionInputText, setDescriptionInputText] = useState("");
  const [priceInputText, setPriceInputText] = useState("");
  const [switchState, setSwitchState] = useState(0);



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />


      <ScrollView contentContainerStyle={{flexGrow:1}}>
      <View style={{paddingBottom:10}}>   
        <TextSwitch 
        text0="Contrate" 
        text1="Ofereça" 
        state={switchState}
        onSwitch={(state)=>setSwitchState(state)}/>
      </View>

      <View style={{ alignItems:'center'}}>
      <TextInput
          onChangeText={(value)=>setTitleInputText(value)}
          value={titleInputText}
          style={styles.titleInput}
          placeholderTextColor='#AFAFAF'
          placeholder='Título'
          autoCapitalize='none'
          returnKeyType='go'
          selectionColor={Colors.primaryColor}
        />
          <TextInput
          textAlignVertical='top'
          multiline={true}
          onChangeText={(value)=>setDescriptionInputText(value)}
          value={descriptionInputText}
          style={styles.descriptionInput}
          placeholderTextColor='#AFAFAF'
          placeholder='Descrição'
          autoCapitalize='none'
          returnKeyType='go'
          selectionColor={Colors.primaryColor}
        />

        <TextInput
          keyboardType='numeric'         
          onChangeText={(value)=>setPriceInputText(value)}
          value={priceInputText}
          style={styles.valueInput}
          placeholderTextColor='#AFAFAF'
          placeholder='Valor'
          autoCapitalize='none'
          returnKeyType='go'
          selectionColor={Colors.primaryColor}
        />

        <View style={{width:"85%", alignItems:'flex-start', paddingTop: 25}}>

            <FlatButton title='Local' style={{paddingTop:50}} textStyle={{color:Colors.primaryColor, fontSize:18}}>
              <Ionicons name="ios-location-outline" size={24} color={Colors.primaryColor}/>          
            </FlatButton>
          
        </View>
        
      

      </View>

      </ScrollView>

      
      <Button title="Pronto"/>

       
    </View>

    
  );
}

export default CadastroServicoScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingTop:25
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  titleInput:{
    width: "85%", 
    height:40,
    padding:5, 
    borderRadius:10, 
    backgroundColor:Colors.lightGray,
    fontFamily:'red-hat-regular',
    fontSize:18
  },
  descriptionInput:{
    marginTop:15,
    width: "85%", 
    minHeight:120,
    padding:5, 
    borderRadius:10, 
    backgroundColor:Colors.lightGray,
    fontFamily:'red-hat-regular',
    fontSize:16
  },
  valueInput:{
    marginTop:15,
    width: "85%", 
    height:40,
    padding:5, 
    borderRadius:10, 
    backgroundColor:Colors.lightGray,
    fontFamily:'red-hat-regular',
    fontSize:16
  }

});

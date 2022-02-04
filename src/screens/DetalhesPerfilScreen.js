import { StatusBar } from 'expo-status-bar';
import { StatusBar as RNStatusBar} from 'react-native';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Stars from '../components/Stars';
import TextSwitch from '../components/TextSwitch';
import Colors from '../constants/Colors';
import {useState} from 'react'
import RoundButton from '../components/RoundButton';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


const DetalhesPerfilScreen = props=> {

  const [editable, setEditable] = useState(false);
  const [emailInputText, setEmailInputText] = useState("pessoa.silva@gmail.com");
  const [numberInputText, setNumberInputText] = useState("21 9 0357 8475");
  const [birthDateInputText, setBirthDateInputText] = useState("21/10/1999");

  const editButtonPressHandler=()=>{
    setEditable(!editable);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{flexDirection:'column', alignItems:'center', paddingTop:15}}>

          <View style={{height:150, width: 150, backgroundColor:Colors.lightBlue, borderRadius: 75}}/>
            <Text style={styles.name}>Nome da Pessoa da Silva</Text>
            <Stars stars={4} size={24} side="left"/>
      </View>    

      <View style={styles.inputsView}>
      <TextInput
          editable={editable}
          onChangeText={(value)=>setEmailInputText(value)}
          value={emailInputText}
          style={styles.input}
          placeholderTextColor='#AFAFAF'
          placeholder='Título'
          autoCapitalize='none'
          returnKeyType='go'
          selectionColor={Colors.primaryColor}
        />
        <TextInput
          editable={editable}
          onChangeText={(value)=>setNumberInputText(value)}
          value={numberInputText}
          style={styles.input}
          placeholderTextColor='#AFAFAF'
          placeholder='Título'
          autoCapitalize='none'
          returnKeyType='go'
          selectionColor={Colors.primaryColor}
        />

        <TextInput
          editable={editable}
          onChangeText={(value)=>setBirthDateInputText(value)}
          value={birthDateInputText}
          style={styles.input}
          placeholderTextColor='#AFAFAF'
          placeholder='Título'
          autoCapitalize='none'
          returnKeyType='go'
          selectionColor={Colors.primaryColor}
        />
        </View> 
        <View style={{position:"absolute", bottom:30, width:'100%', alignItems:'center'}}>
          <RoundButton onPress={editButtonPressHandler}>

            {editable?
            <MaterialIcons name="check" size={26} color={Colors.white}/>:
            <MaterialIcons name="edit" size={26} color={Colors.white}/> }
        </RoundButton>
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
  },

  input:{
    marginTop: 20,
    width: "85%", 
    height:40,
    padding:5, 
    borderRadius:10, 
    backgroundColor:Colors.lightGray,
    fontFamily:'red-hat-regular',
    fontSize:18
  },

  inputsView:{
    alignItems:'center'
  }

});

import { StatusBar } from 'expo-status-bar';
import { StatusBar as RNStatusBar} from 'react-native';
import { FlatList, ScrollView, Dimensions, StyleSheet, Text, View, TextInput } from 'react-native';
import Colors from '../constants/Colors';
import ChatBubble from '../components/ChatBubble';
import { useState } from 'react'
import RoundButton from '../components/RoundButton';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';


const data = [
    { sent: 1,
        status:1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget\
      rutrum diam. Curabitur consectetur suscipit urna, et accumsan sapien dapibus id. Sed id ornare diam.",
      time:"08:54",
      image:""},
      { sent: 0,
        status:1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget\
        rutrum diam. Curabitur consectetur suscipit urna, et accumsan sapien dapibus id. Sed id ornare diam.",
        time:"08:54",
        image:""},
    { sent: 0,
        status:1,
        text: "Alô?",
        time:"08:54",
        image:""},

    { sent: 1,
        status:1,
        text: "Se vira aí, meu querido",
        time:"08:54",
        image:""},
    { sent: 1,
        status:1,
        text: "Aaaa bbbb ccckfjfdofhfhidh ",
        time:"08:54",
        image:""},

    { sent: 0,
        status:1,
        text: "kkkkkkkkkkkkkkkkkkkkkkkkk",
        time:"08:54",
        image:""},
    { sent: 0,
        status:0,
        text: "Aaaa bbbb ccckfjfdofhfhidh ",
        time:"08:54",
        image:""},
     ]

const ChatScreen = props=> {
  const [inputText, setInputText] = useState("");

  const sendButtonPressHandler = ()=>{
    data.unshift({ sent: 0,
      status:0,
      text: inputText,
      time:"08:54",
      image:""})

      setInputText("");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

        <View style={{paddingBottom:0}}>
            <FlatList
            inverted={true}
            data={data}
            contentContainerStyle={{paddingBottom:100}}
            renderItem={({item})=> 
                    (<ChatBubble
                    onPress={()=>{}}
                    text={item.text}
                    side={item.sent}
                    time={item.time}
                    status={item.status}/>)}
            keyExtractor={(item) => item.id}/> 
        </View>

        <View style={styles.textBoxContainer}>
        <TextInput
        multiline={true}
            onChangeText={(value) => setInputText(value)}
            value={inputText}
            style={styles.input}
            placeholderTextColor='#AFAFAF'
            placeholder='Mensagem'
            autoCapitalize='none'
            selectionColor={Colors.primaryColor}
          />

          <RoundButton onPress={sendButtonPressHandler}>
          <MaterialIcons name="send" size={26} color={Colors.white}/>
          </RoundButton>

        </View>       
    </View>

    
  );
}

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:'column',
    backgroundColor: Colors.white,
    justifyContent:'flex-end',

  },
  input: {
    flex:1,
    flexGrow:1,
    minHeight: 55,
    maxHeight:100,
    marginRight:10,
    paddingHorizontal:15,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: Colors.lightGray,
    fontFamily: 'red-hat-regular',
    fontSize: 15,


  },
  textBoxContainer:{
    paddingHorizontal:10,
    paddingVertical:5,
    alignItems:'center',
    flexDirection:'row',
    width:"100%",
    marginVertical:5
  }

});

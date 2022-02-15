import { StatusBar } from 'expo-status-bar';
import { StatusBar as RNStatusBar} from 'react-native';
import { FlatList, ScrollView, Dimensions, StyleSheet, Text, View, TextInput } from 'react-native';
import Colors from '../constants/Colors';
import ChatBubble from '../components/ChatBubble';
import { useState } from 'react'
import RoundButton from '../components/RoundButton';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import SockJS from 'sockjs-client';
import Stomp from 'stompjs';
import Localhost from "../constants/Localhost";

import firebase from 'firebase/app';
import 'firebase/firestore'
import * as auth from 'firebase/auth'
//import {getDatabase} from 'firebase/database'
import {useAuthState} from "react-firebase-hooks/auth";
import {useCollectionData} from "react-firebase-hooks/firestore";

const data = [
    { id:0,
        sent: 1,
        status:1,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget\
      rutrum diam. Curabitur consectetur suscipit urna, et accumsan sapien dapibus id. Sed id ornare diam.",
      time:"08:54",
      image:""},
      { id:1,sent: 0,
        status:1,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget\
        rutrum diam. Curabitur consectetur suscipit urna, et accumsan sapien dapibus id. Sed id ornare diam.",
        time:"08:54",
        image:""},
    { id:2,sent: 0,
        status:1,
        text: "Alô?",
        time:"08:54",
        image:""},

    { id:3,sent: 1,
        status:1,
        text: "Se vira aí, meu querido",
        time:"08:54",
        image:""},
    { id:4,sent: 1,
        status:1,
        text: "Aaaa bbbb ccckfjfdofhfhidh ",
        time:"08:54",
        image:""},

    { id:5,sent: 0,
        status:1,
        text: "kkkkkkkkkkkkkkkkkkkkkkkkk",
        time:"08:54",
        image:""},
    { id:6,sent: 0,
        status:0,
        text: "Aaaa bbbb ccckfjfdofhfhidh ",
        time:"08:54",
        image:""},
     ]

firebase.initializeApp({
    apiKey: "AIzaSyBEUKJRmFe7g966JT7qYlxW1Gj909XwIR4",
    authDomain: "freela-chat.firebaseapp.com",
    projectId: "freela-chat",
    storageBucket: "freela-chat.appspot.com",
    messagingSenderId: "564846707862",
    appId: "1:564846707862:web:f581751573310b2af1eeb7",
    measurementId: "G-LNEF47Y32C"
})

const firestore  = firebase.firestore();

const ChatScreen = props=> {
  const [inputText, setInputText] = useState("");
    let stompClient;
    //const db = getDatabase();

    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt');
    const [messages] = useCollectionData(query, {idField:'id'});


    const connect = (userId) => {

        if (userId) {
            const socket = new SockJS(`http://${Localhost.address}:${Localhost.port}/websocket`);
            stompClient = Stomp.over(socket);

            stompClient.connect({}, onConnected, onError);

        }
    }

    const onConnected = () => {
        console.log("onConnected");
        // Subscribe to the Public Topic
        stompClient.subscribe("/chat-response/response", onMessageReceived);

        // Tell your username to the server
        stompClient.send(
            "/app-chat/send",
            {},
            JSON.stringify({ conteudo: "hello"})
        );
    }

    const onMessageReceived = (payload) => {
        console.log("onMessageReceived");
        var message = JSON.parse(payload.body);
        console.log(message);
    }
    const onError = (error) => {
        console.log("Erro");
        console.log(error);
    };


  const sendButtonPressHandler = ()=>{
      connect(1);
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
                    text={JSON.stringify(messages)}
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

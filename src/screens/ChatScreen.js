import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StatusBar as RNStatusBar} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView, Dimensions } from 'react-native';
import ListItem from '../components/ListItem';
import { TabBg } from '../components/TabBg';
import TextSwitch from '../components/TextSwitch';
import Colors from '../constants/Colors';
import HistoryListItem from '../components/HistoryListItem'
import ChatBubble from '../components/ChatBubble';

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


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

    
      
        <View>
            <FlatList
            inverted={true}
            data={data}
            contentContainerStyle={{paddingBottom:70}}
            renderItem={({item})=> 
                    (<ChatBubble
                    onPress={()=>{}}
                    text={item.text}
                    side={item.sent}
                    time={item.time}
                    status={item.status}/>)}
            keyExtractor={(item) => item.id}/> 
        </View>

        <View style={styles.textBoxPlaceHolder}>

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
  textBoxPlaceHolder:{
      width:"100%",
      height:"10%",

  }

});

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

const data = [
    {id: 1,
      title:"Serviço de Design de Interiores",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget\
      rutrum diam. Curabitur consectetur suscipit urna, et accumsan sapien dapibus id. Sed id ornare diam.",
      date:"28 de jan de 2020",
      name:"João José da Silva",
      image:"", status: 3, rating: 1},
      {id: 2,
        title:"Serviço de Marceneiro",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget\
      rutrum diam. Curabitur consectetur suscipit urna, et accumsan sapien dapibus id. Sed id ornare diam.",
      date:"28 de jan de 2020",
      name:"Maria Joaquina Heisenberg",
      image:"",  status: 2, rating: 2},
      {id: 3,
      title:"Serviço de Design de Interiores",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget\
      rutrum diam. Curabitur consectetur suscipit urna, et accumsan sapien dapibus id. Sed id ornare diam.",
      date:"28 de jan de 2020",
      name:"Armando Augusto Arantes",
      image:"", status:0, rating: 3},
      {id: 4,
      title:"Serviço de Marceneiro",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget\
      rutrum diam. Curabitur consectetur suscipit urna, et accumsan sapien dapibus id. Sed id ornare diam.",
      date:"28 de jan de 2020",
      name:"João José da Silva",
      image:"",  status: 0, rating: 4},
      {id: 5,
      title:"Serviço de Design de Interiores",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget\
      rutrum diam. Curabitur consectetur suscipit urna, et accumsan sapien dapibus id. Sed id ornare diam.",
      date:"28 de jan de 2020",
      name:"João José da Silva",
      image:"", status: 3, rating: 5},
      {id: 6,
      title:"Serviço de Marceneiro",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget\
      rutrum diam. Curabitur consectetur suscipit urna, et accumsan sapien dapibus id. Sed id ornare diam.",
      date:"28 de jan de 2020",
      name:"João José da Silva",
      image:"", status: 1, rating: 0}]

const HistoricoServicosScreen = props=> {


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{padding:15, flexDirection:'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize:20, fontFamily:'red-hat-medium'}}>Histórico de serviços</Text>
        <Ionicons name="search-sharp" size={26} color={Colors.secondaryColor} />
        
      </View>


      <FlatList
        contentContainerStyle={{paddingBottom:70}}
        data={data}
        renderItem={({item})=> 
                  (<HistoryListItem
                  onPress={()=>{}}
                  title={item.title}
                  body={item.body}
                  timeInfo={item.timeInfo}
                  image={item.image}
                  id={item.id}
                  status={item.status}
                  name={item.name}
                  date={item.date}
                  rating={item.rating}/>)}
          keyExtractor={(item) => item.id}/> 

       
    </View>

    
  );
}

export default HistoricoServicosScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: RNStatusBar.currentHeight + 10,
    flex: 1,
    backgroundColor: Colors.white,
    //alignItems: 'center',
    //justifyContent: 'center',
  },

});

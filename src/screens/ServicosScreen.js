import { StatusBar } from 'expo-status-bar';
import { StatusBar as RNStatusBar} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView } from 'react-native';
import ListItem from '../components/ListItem';
import TextSwitch from '../components/TextSwitch';
import Colors from '../constants/Colors';


const data = [
  {id: 1,
    title:"Procuro Serviço de Design de Interiores",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget\
    rutrum diam. Curabitur consectetur suscipit urna, et accumsan sapien dapibus id. Sed id ornare diam.",
    timeInfo:"2 horas atrás",
    image:""},
    {id: 2,
      title:"Procuro Serviço de Marceneiro",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget\
    rutrum diam. Curabitur consectetur suscipit urna, et accumsan sapien dapibus id. Sed id ornare diam.",
    timeInfo:"1 horas atrás",
    image:""},
    {id: 3,
    title:"Procuro Serviço de Design de Interiores",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget\
    rutrum diam. Curabitur consectetur suscipit urna, et accumsan sapien dapibus id. Sed id ornare diam.",
    timeInfo:"2 horas atrás",
    image:""},
    {id: 4,
    title:"Procuro Serviço de Marceneiro",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget\
    rutrum diam. Curabitur consectetur suscipit urna, et accumsan sapien dapibus id. Sed id ornare diam.",
    timeInfo:"1 horas atrás",
    image:""},
    {id: 5,
    title:"Procuro Serviço de Design de Interiores",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget\
    rutrum diam. Curabitur consectetur suscipit urna, et accumsan sapien dapibus id. Sed id ornare diam.",
    timeInfo:"2 horas atrás",
    image:""},
    {id: 6,
    title:"Procuro Serviço de Marceneiro",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget\
    rutrum diam. Curabitur consectetur suscipit urna, et accumsan sapien dapibus id. Sed id ornare diam.",
    timeInfo:"1 horas atrás",
    image:""}]


const ServicosScreen = props=> {
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
     
        
        <FlatList
        data={data}
        renderItem={({item})=> 
                  (<ListItem 
                  title={item.title}
                  body={item.body}
                  timeInfo={item.timeInfo}
                  image={item.image}/>)}
          keyExtractor={(item) => item.id}/>    
    </View>

    
  );
}

export default ServicosScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: RNStatusBar.currentHeight + 10,
    flex: 1,
    backgroundColor: Colors.white,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});

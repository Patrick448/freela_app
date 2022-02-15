import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import {RefreshControl, StatusBar as RNStatusBar} from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, ScrollView, Dimensions } from 'react-native';
import ListItem from '../components/ListItem';
import { TabBg } from '../components/TabBg';
import TextSwitch from '../components/TextSwitch';
import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Colors from '../constants/Colors';
import HistoryListItem from '../components/HistoryListItem'
import * as contratosActions from "../store/actions/contratosActions";
import * as servicosActions from "../store/actions/servicosActions";
import * as DateTimeUtils from "../utils/DateTimeUtils"


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
  const dispatch = useDispatch();
  const historicoServicos = useSelector(state=> state.servicos.historico);
  const historicoContratos  = useSelector(state=> state.contratos.historico);
  const [switchState, setSwitchState] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);

  const tryFetchHistorico =async ()=>{
    setError(null);

    try {
      setLoading(true);
      console.log("trying to fetch history")
      await dispatch(servicosActions.fetchServicosUsuarioAtual());
      await dispatch(contratosActions.fetchContratosUsuarioAtual());
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }finally {
      setLoading(false);
      console.log(historicoServicos);
      console.log(historicoServicos);
    }
  }

  const tryRefreshHistorico =async ()=>{
    setError(null);

    try {
      setRefreshing(true);
      console.log("trying to refresh history")
      await dispatch(servicosActions.fetchServicosUsuarioAtual());
      await dispatch(contratosActions.fetchContratosUsuarioAtual());
    } catch (err) {
      setRefreshing(false);
      setError(err.message);
    }finally {
      setRefreshing(false);
      console.log(historicoServicos);
      console.log(historicoServicos);
    }
  }

  useEffect(() => {
    tryFetchHistorico();

  }, []);


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{padding:15, flexDirection:'row', justifyContent: 'space-between'}}>
        <Text style={{fontSize:20, fontFamily:'red-hat-medium'}}>Histórico</Text>
        <Ionicons name="search-sharp" size={26} color={Colors.secondaryColor} />
        
      </View>


      <FlatList
        contentContainerStyle={{paddingBottom:70}}
        refreshControl={
          <RefreshControl
              refreshing={refreshing}
              onRefresh={tryRefreshHistorico}
              colors={[Colors.secondaryColor]}
          />
        }
        data={historicoServicos}
        renderItem={({item})=> 
                  (<HistoryListItem
                  onPress={()=>{}}
                  title={item.titulo}
                  body={item.descricao}
                  timeInfo={DateTimeUtils.formatDate(Date.parse(item.data))}
                  image={"xx"}
                  id={item.id}
                  status={0}
                  name={""}
                  date={DateTimeUtils.formatDate(Date.parse(item.data))}
                  rating={0}/>)}
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

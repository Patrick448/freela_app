import { StatusBar } from 'expo-status-bar';
import {Button, StatusBar as RNStatusBar} from 'react-native';
import { StyleSheet, Text, View, RefreshControl, ActivityIndicator} from 'react-native';
import { FlatList, ScrollView, Dimensions } from 'react-native';
import ListItem from '../components/ListItem';
import { TabBg } from '../components/TabBg';
import TextSwitch from '../components/TextSwitch';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import * as servicosActions from "../store/actions/servicosActions";
import * as userActions from "../store/actions/userActions";
import {TouchableOpacity} from "react-native-gesture-handler";


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

  const dispatch = useDispatch();
  const servicosProcuradosFeed = useSelector(state=> state.servicos.servicosProcurados.lista);
  const servicosOferecidosFeed = useSelector(state=> state.servicos.servicosOferecidos.lista);
  const onItemPress = (key)=>{ console.log(`Item ${key} pressed`)}
  const [switchState, setSwitchState] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);


  const onSwitchHandler = (state)=>{
      setSwitchState(state);
  }

  const endReachedHandler =(e)=>{
    console.log("end");
    tryLoadMoreServicos();

  }


   const tryFetchServicos =async ()=>{
    setError(null);

    try {
      setLoading(true);
      console.log("trying to fetch servicos")
      await dispatch(servicosActions.fetchServicos(3, true));
      await dispatch(servicosActions.fetchServicos(3, false));
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }finally {
      setLoading(false);
      console.log(servicosProcuradosFeed);
      console.log(servicosOferecidosFeed);
    }
  }

  const tryRefreshServicos =async ()=>{
    setError(null);

    try {
      //setLoading(true);
      console.log("trying to fetch servicos")
      await dispatch(servicosActions.fetchServicos(3, true));
      await dispatch(servicosActions.fetchServicos(3, false));
    } catch (err) {
      //setLoading(false);
      setError(err.message);
    }finally {
      console.log(servicosProcuradosFeed);
      console.log(servicosOferecidosFeed);
    }
  }

  const tryLoadMoreServicos =async ()=>{
    setError(null);

    try {
      setLoading(true)
      console.log("trying to fetch servicos")
      await dispatch(servicosActions.loadMoreServicos(3, !switchState));
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }finally {
      setLoading(false);

     // console.log(servicosProcuradosFeed);
    }
  }


  useEffect(() => {
   tryFetchServicos();

  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <View style={{paddingBottom:10, paddingHorizontal:15, flexDirection:'row'}}>

      <View style={{flex:1, flexDirection:'row', justifyContent:'flex-end'}}/>

      <View style={{flex:1, flexDirection:'row', justifyContent:'center'}}>
         <TextSwitch 
        text0="Contrate" 
        text1="Ofereça" 
        state={switchState}
        onSwitch={(state)=>onSwitchHandler(state)}/>
        </View>
        
      <View style={{flex:1, flexDirection:'row', alignItems:'center', justifyContent:'flex-end'}}>
        <Ionicons name="search-sharp" size={26} color={Colors.secondaryColor}  />
      </View>


 
      </View>
     
        <FlatList
            onEndReached={endReachedHandler}
            onEndReachedThreshold={0.1}
            contentContainerStyle={{paddingBottom:70}}
            ListFooterComponent={
              //<TouchableOpacity onPress={()=>{}}>
             //   <Text style={{color:Colors.secondaryColor}}>CARREGAR MAIS</Text>
             // </TouchableOpacity>

              <View style={{height: 70}}>
                {loading?
                <ActivityIndicator visible={loading} size="large" color={Colors.secondaryColor}/>:
                    null}
              </View>

        }
        refreshControl={
          <RefreshControl
              refreshing={refreshing}
              onRefresh={tryRefreshServicos}
              colors={[Colors.secondaryColor]}
          />
        }
        data={switchState? servicosProcuradosFeed: servicosOferecidosFeed}
        renderItem={({item})=> 
                  (<ListItem 
                  onPress={onItemPress}
                  title={item.titulo}
                  body={item.descricao}
                  timeInfo={item.data}
                  image={"xx"}
                  id={item.id}/>)}
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

  bottomTabBg:{
    shadowColor: "#000",      
    shadowOffset: {      
      width: 0,      
      height: 1,      
    },      
    shadowOpacity: 0.1,      
    shadowRadius: 2.22, 
    position:'absolute',
    bottom:0
  }
});

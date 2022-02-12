import { StyleSheet, Text, View } from 'react-native';
import ServicosScreen from './src/screens/ServicosScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from './src/components/TabBar';
import { Ionicons, Entypo, MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import HistoricoServicosScreen from './src/screens/HistoricoServicosScreen';
import ChatScreen from './src/screens/ChatScreen';
import ChatListScreen from './src/screens/ChatListScreen';
import { createStackNavigator } from '@react-navigation/stack';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';
import * as Font from 'expo-font';
import AppNavigator from './src/navigation/Navigation';

//Redux
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

//Reducers
import userReducer from "./src/store/reducers/userReducer"


const appReducer = combineReducers({
    user: userReducer,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

const store = createStore(
    rootReducer,
    compose(applyMiddleware(ReduxThunk))
);

const homeTabOptions = {headerShown: false,
  tabBarIcon: ({tintColor})=>(  
    <Ionicons name="home-outline" size={24} color="white" />
)  
}

const chatTabOptions = {headerShown: false,

  tabBarIcon: ({tintColor})=>(  
    <MaterialIcons name="chat-bubble-outline" size={24} color="white" />
)  
}

const servicesTabOptions = {headerShown: false,

  tabBarIcon: ({tintColor})=>(  
    <FontAwesome name="handshake-o" size={24} color="white" />
)  
}

const optionsTabOptions = {headerShown: false,

  tabBarIcon: ({tintColor})=>(  
    <MaterialCommunityIcons name="dots-horizontal" size={24} color="white" />
)  
}



const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const MainStackNavigator = () => {
    const navigationOptions = {
        headerShown:false
         
     }

     const otherNavigationOptions = {
      headerShown:true,
      headerTitleStyle: {
        fontFamily:'red-hat-medium'
      },
   }
     
    return (
        <Stack.Navigator >
            <Stack.Screen  name="HomeTabs" options={navigationOptions} component={HomeTabs}/>
            <Stack.Screen  name="Chat"  options={otherNavigationOptions} component={ChatScreen} />
                        <Stack.Screen  name="Chat"  options={otherNavigationOptions} component={ChatScreen} />

        </Stack.Navigator>
    )
}

function HomeTabs(){

  const navigationOptions = {
    headerShown:true
     
 }

  return(
    <Tab.Navigator 
    barStyle={{backgroundColor:'red'}} 
    tabBar={(props)=> 
    <TabBar {...props} centerButtonRoute="Chat" centerButtonIcon={()=> <Entypo name="plus" size={24} color="white" />}/>
   }>
   <Tab.Screen options={homeTabOptions} name="Home" component={ServicosScreen} />
   <Tab.Screen options={chatTabOptions} name="Chats" component={ChatListScreen} />
   <Tab.Screen options={servicesTabOptions} name="Historico" component={HistoricoServicosScreen} />
   <Tab.Screen options={optionsTabOptions} name="Home3" component={CadastroScreen} />
 </Tab.Navigator>
  )
}

const fetchFonts =()=>{
  return Font.loadAsync({
    'red-hat':require('./assets/fonts/RedHatDisplay-VariableFont_wght.ttf'),
    'red-hat-bold':require('./assets/fonts/RedHatDisplay-Bold.ttf'),
    'red-hat-regular': require('./assets/fonts/RedHatDisplay-Regular.ttf'),
    'red-hat-medium': require('./assets/fonts/RedHatDisplay-Medium.ttf')


  })
}


export default function App() {
  const [dataLoaded, setDataLoaded]=useState(false);
 

  if(!dataLoaded){
    return <AppLoading 
              startAsync={fetchFonts} 
              onFinish={()=>setDataLoaded(true)}
              onError={(error)=>console.log(error)}/>;}

  return (
      <Provider store={store}>
          <AppNavigator/>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
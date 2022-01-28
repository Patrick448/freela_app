import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListItem from './src/components/ListItem';
import ServicosScreen from './src/screens/ServicosScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabBg } from './src/components/TabBg';
import TabBar from './src/components/TabBar';
import { Ionicons, Entypo, MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';



const Tab = createBottomTabNavigator();

export default function App() {

  const homeTabOptions = {headerShown: false,
    tabBarLabel: 'aa',
    tabBarIcon: ({tintColor})=>(  
      <Ionicons name="home-outline" size={24} color="white" />
  )  
  }

  const chatTabOptions = {headerShown: false,
    tabBarLabel: 'aa',
    tabBarIcon: ({tintColor})=>(  
      <MaterialIcons name="chat-bubble-outline" size={24} color="white" />
  )  
  }

  const servicesTabOptions = {headerShown: false,
    tabBarLabel: 'aa',
    tabBarIcon: ({tintColor})=>(  
      <FontAwesome name="handshake-o" size={24} color="white" />
  )  
  }

  const optionsTabOptions = {headerShown: false,
    tabBarLabel: 'aa',
    tabBarIcon: ({tintColor})=>(  
      <MaterialCommunityIcons name="dots-horizontal" size={24} color="white" />
  )  
  }

  return (

    <NavigationContainer>
    <Tab.Navigator 
       barStyle={{backgroundColor:'red'}} 
       tabBar={(props)=> 
       <TabBar {...props} centerButtonIcon={()=> <Entypo name="plus" size={24} color="white" />}/>
      }>
      <Tab.Screen options={homeTabOptions} name="Home" component={ServicosScreen} />
      <Tab.Screen options={chatTabOptions} name="Settings" component={ServicosScreen} />
      <Tab.Screen options={chatTabOptions} name="centerButtonRoute" component={ServicosScreen} />
      <Tab.Screen options={servicesTabOptions} name="Home2" component={ServicosScreen} />
      <Tab.Screen options={optionsTabOptions} name="Home3" component={ServicosScreen} />
    </Tab.Navigator>

   { /*<View style={styles.bottomTabBg}>
        
  </View>*/}
  </NavigationContainer>
    

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

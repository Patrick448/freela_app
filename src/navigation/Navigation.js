
import ServicosScreen from '../screens/ServicosScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBar from '../components/TabBar';
import { Ionicons, Entypo, MaterialIcons, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import HistoricoServicosScreen from '../screens/HistoricoServicosScreen';
import ChatScreen from '../screens/ChatScreen';
import { createStackNavigator } from '@react-navigation/stack';
import ChatListScreen from '../screens/ChatListScreen';
import OptionsScreen from '../screens/OptionsScreen';
import DetalhesServicoScreen from '../screens/DetalhesServicoScreen';
import LoginScreen from '../screens/LoginScreen';
import CadastroScreen from '../screens/CadastroScreen';
import StartupLogin from '../screens/StartupLogin';
import DetalhesPerfilScreen from '../screens/DetalhesPerfilScreen';
import CadastroServicoScreen from '../screens/CadastroServicoScreen';



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
const MainStack = createStackNavigator();
const MainStackNavigator = () => {
    const navigationOptions = {
        headerShown:false
         
     }

     const perfilNavOptions = {
        headerShown:true,
        title:"Perfil"
         
     }

     const novoServicoNavOptions = {
      headerShown:true,
      title:"Novo serviço"
       
   }


     const otherNavigationOptions = {
      headerShown:true,
      headerTitleStyle: {
        fontFamily:'red-hat-medium'
      },
   }
     
    return (
        <MainStack.Navigator >
            <MainStack.Screen  name="HomeTabs" options={navigationOptions} component={HomeTabs}/>
            <MainStack.Screen  name="Chat"  options={otherNavigationOptions} component={ChatScreen}/>
            <MainStack.Screen  name="DetalhesServico"  options={otherNavigationOptions} component={DetalhesServicoScreen}  />
            <MainStack.Screen  name="DetalhesPerfil"  options={perfilNavOptions} component={DetalhesPerfilScreen}  />
            <MainStack.Screen  name="CadastroServico"  options={novoServicoNavOptions} component={CadastroServicoScreen}  />


        </MainStack.Navigator>
    )
}

const LoginStack = createStackNavigator();
const LoginStackNavigator = () => {
    const navigationOptions = {
        headerShown:false
         
     }

     
    return (
        <LoginStack.Navigator >
            <LoginStack.Screen  name="Login" options={navigationOptions} component={LoginScreen}/>
            <LoginStack.Screen  name="Startup" options={navigationOptions} component={StartupLogin}/>    
            <LoginStack.Screen  name="Cadastro"  options={navigationOptions} component={CadastroScreen}/>
        </LoginStack.Navigator>
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
    <TabBar {...props} centerButtonRoute="CadastroServico" centerButtonIcon={()=> <Entypo name="plus" size={24} color="white" />}/>
   }>
   <Tab.Screen options={homeTabOptions} name="Home" component={ServicosScreen} />
   <Tab.Screen options={chatTabOptions} name="ChatList" component={ChatListScreen} />
   <Tab.Screen options={servicesTabOptions} name="Historico" component={HistoricoServicosScreen} />
   <Tab.Screen options={optionsTabOptions} name="Options" component={OptionsScreen} />
 </Tab.Navigator>
  )
}


export default function AppNavigator() {

   const loggedIn =1; 
  
    return (
  
    <NavigationContainer>
    {loggedIn? <MainStackNavigator/> :<LoginStackNavigator/>}
        
    </NavigationContainer>
      
    );
  }
  

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ListItem from './src/components/ListItem';
import ServicosScreen from './src/screens/ServicosScreen';



export default function App() {
  return (
    
    <ServicosScreen/>

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

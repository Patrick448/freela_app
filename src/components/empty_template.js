import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';

const Template = props => {
  return (
    <View style={styles.container}>
      <Text>Text</Text>
    </View>
  );
}

export default Template;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

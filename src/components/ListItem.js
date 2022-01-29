import { StyleSheet, Text, View } from 'react-native';
import { TouchableNativeFeedback } from 'react-native';
import Colors from '../constants/Colors';

 const ListItem = props => {

   console.log(props);

  return (

    <TouchableNativeFeedback useForeground={true} onPress={ props.onPress ? () =>props.onPress(props.id) : ()=>{}}>
    <View style={styles.container}>
      <View><Text style={styles.timeInfoText}>{props.timeInfo}</Text></View>

       <View style={styles.mainTextImageView} >
        <View style={styles.textContainer}>
            <Text style={styles.titleText}>{props.title}</Text>
            <Text style={styles.bodyText}>{props.body}</Text>
        </View>
          
          <View style={styles.image}>
             
          </View>  
      </View>

    </View>
    </TouchableNativeFeedback>
   
  );
}

export default ListItem;

const styles = StyleSheet.create({
  container:{
    padding:15
  },
  timeInfoText:{
    color: Colors.secondaryColor
  },
  mainTextImageView: {
    backgroundColor: Colors.white,
    //alignItems:'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap:'wrap',
    //alignItems:'center',
   
  },
  titleText:{
    fontSize:18,
  },
  textContainer:{
    flex: 2,
  },
  bodyText:{
    marginTop:10,
    fontSize:14,
    opacity:0.75
  },
  image:{
    flex: 1,
    height: 100,
    backgroundColor: Colors.secondaryColor,
    flexDirection:'column',
    justifyContent:'center',
    borderRadius: 10
  }
});

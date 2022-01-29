import { StyleSheet, Text, View } from 'react-native';
import { TouchableNativeFeedback } from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

 const HistoryListItem = props => {

   console.log(props);

    const StarsRating = (props) =>{


        const starColor= (isActive)=>{
            return isActive? Colors.secondaryColor : Colors.lightGray;
        }

        return(<View style={{flexDirection:'row'}}>
            <Ionicons name="star" size={18} color={starColor(props.rating>=5)} />
            <Ionicons name="star" size={18} color={starColor(props.rating>=4)} />
            <Ionicons name="star" size={18} color={starColor(props.rating>=3)} />
            <Ionicons name="star" size={18} color={starColor(props.rating>=2)} />
            <Ionicons name="star" size={18} color={starColor(props.rating>=1)} />

        </View>)
    }

   const getBubbleText = (status)=>{

    if(status===0){
        return "";

    }else if(status===1){
        return "Sei lá!";
    }
    else if(status===2){
        return "Avalie!";
        
    }else if(status===3){
        return "Finalizar";
    }

   }

   const getBubbleColor = (status)=>{

    if(status===0){
        return "";

    }else if(status===1){
        return Colors.lightGray;
    }
    else if(status===2){
        return Colors.primaryColor;
        
    }else if(status===3){
        return Colors.orange;
    }

   }

  return (

    <TouchableNativeFeedback 
    background={TouchableNativeFeedback.Ripple(Colors.secondaryColor)}

    useForeground={true} 
    onPress={ props.onPress ? () =>props.onPress(props.id) : ()=>{}}>
    <View style={styles.container}>

       <View style={styles.mainTextImageView} >
        <View style={styles.leftContainer}>
            <Text style={styles.titleText}>{props.title}</Text>

            <View style={{flexDirection:'row', width:'100%', justifyContent:'space-between', alignItems:'flex-end'}}>
                <View style={styles.nameDateContainer}>
                    <Text style={styles.bodyText}>{props.name.length <=18? props.name : props.name.substring(0, 18) + "..."}</Text>
                    <Text style={styles.bodyText}>{props.date}</Text>
                </View>
               
               {props.status==0?
               <View style={{flexDirection:'row', justifyContent:'center'}}>
                    <StarsRating rating={props.rating}/>
               </View>:null
                }
                

            </View>

           

        </View>

      
      <View style={{alignSelf:'center'}}>
        <View style={styles.image}>
           {props.status? 
           <View style={{position:'absolute', bottom: -10, right:0, backgroundColor:getBubbleColor(props.status),paddingVertical:5, paddingHorizontal: 10, borderRadius: 20}}>
                <Text style={{color: Colors.white, fontFamily:'red-hat-medium'}}>{getBubbleText(props.status)}</Text>
            </View> : null}
            </View>        
        </View>
      </View>

    </View>
    </TouchableNativeFeedback>
   
  );
}

export default HistoryListItem;

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
   
    //alignItems:'center',
   
  },
  titleText:{
    fontSize:18,
    fontFamily:'red-hat-medium'

    
  },
  leftContainer:{

    maxWidth:'70%'

  },

  nameDateContainer:{
      paddingTop: 10, 
  },
  bodyText:{
    fontFamily:'red-hat-medium',
    fontSize:14,
    opacity:0.65
  },
  image:{
    
    height: 80,
    width:80,
    backgroundColor: Colors.secondaryColor,
    flexDirection:'column',
    justifyContent:'center',
    borderRadius: 10
  }
});

import { StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';


const Stars = (props) =>{

    const compare=(valA, valB)=>{

        if(props.side == "left"){
            return (valA<=valB)
        }else if(props.side == "right"){
            return (valA>=valB)
        }
    }


    const starColor= (isActive)=>{
        return isActive? Colors.secondaryColor : Colors.lightGray;
    }

    return(<View style={{flexDirection:'row'}}>
        <Ionicons name="star" size={props.size} color={starColor(props.side=="left"? props.stars>=1 : props.stars>=5)} />
        <Ionicons name="star" size={props.size} color={starColor(props.side=="left"? props.stars>=2 : props.stars>=4)} />
        <Ionicons name="star" size={props.size} color={starColor(props.side=="left"? props.stars>=3 : props.stars>=3)} />
        <Ionicons name="star" size={props.size} color={starColor(props.side=="left"? props.stars>=4 : props.stars>=2)} />
        <Ionicons name="star" size={props.size} color={starColor(props.side=="left"? props.stars>=5 : props.stars>=1)} />
    </View>)
}

export default Stars;

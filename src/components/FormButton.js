import React from 'react';
import { TouchableOpacity, StyleSheet, ActivityIndicator, Text } from 'react-native';

import Colors from '../constants/Colors';

const FormButton = props => {

    return (

        <TouchableOpacity activeOpacity={0.4} onPress={props.onPress} style={{...styles.buttonContainer, backgroundColor: props.colorBack, width: props.width}}>
            {props.loading ? 
                <ActivityIndicator size='large' color={Colors.primaryColor} />
                :
                <Text style={{...styles.buttonText}}>{props.title}</Text>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer:
    {
        marginTop: 15,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: '30%',
        height: 60,
        backgroundColor: Colors.secondaryColor,
        borderRadius: 8,
    },
    buttonText:
    {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default FormButton;
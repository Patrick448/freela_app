import React from 'react';
import { TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';

import DefaultText from '../DefaultText';
import Colors from '../../constants/Colors'

const FormButton = props => {

    return (

        <TouchableOpacity activeOpacity={0.4} onPress={props.onPress} style={{...styles.buttonContainer, backgroundColor: props.backColor, borderColor: props.borderColor}}>
            {props.loading ? 
                <ActivityIndicator size='large' color={Colors.primaryColor} />
                :
                <DefaultText style={{...styles.buttonText, color: props.textColor}}>{props.title}</DefaultText>
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonContainer:
    {
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        height: 48,
        backgroundColor: Colors.primaryColor,
        borderWidth: 2,
        borderRadius: 25,
    },
    buttonText:
    {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default FormButton;
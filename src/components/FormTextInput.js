import React from 'react';
import { StyleSheet, TextInput, View, Text } from 'react-native';

import Colors from '../constants/Colors';

const FormTextInput = props => {

    return (
        <View style={styles.inputContainer}>
            <TextInput
                {...props}
                style={props.error && props.touched ? styles.error : styles.input}
            />
            {props.error && props.touched &&
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{props.error}</Text>
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:
    {
        width: '90%',
        marginBottom: 25
    },
    title: 
    {
        alignSelf: 'flex-start',
        marginLeft: 4,
        marginBottom: 2,
        fontWeight: 'bold',
        fontSize: 20,
        color: Colors.primaryColor
    },
    input:
    {
        height: 40,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.primaryColor,
        borderRadius: 5,
    },
    error:
    {
        height: 40,
        backgroundColor: Colors.secondaryColor,
        paddingHorizontal: 10,
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderColor: Colors.redError,
        borderRadius: 5,
    },
    errorContainer:
    {
        marginHorizontal: 20,
        paddingBottom: 2,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderBottomStartRadius: 12,
        borderBottomEndRadius: 12,
        backgroundColor: Colors.redError,
        elevation: 1
    },
    errorText:
    {
        fontSize: 12,
        color: Colors.secondaryColor,
        textAlign: 'center',
    },
});

export default FormTextInput;
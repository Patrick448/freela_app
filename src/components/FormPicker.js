import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

const gender = {
    masc: {
        value: 'M',
        placeholder: "Homem",
    },
    fem: {
        value: 'F',
        placeholder: "Mulher"
    },
    none: {
        value: 'N',
        placeholder: "Não informar"
    }
} 

const GenderButton = props => {
    
    return (
        <TouchableOpacity
            style={styles.pickerData}
            onPress={props.onTouch}
            activeOpacity={0.4}
        >
            <Text>{props.value}</Text>
        </TouchableOpacity>
    )
}

const FormPicker = props => {

    const [isOpen, setIsOpen] = useState(false);
    const [chosenGender, setChosenGender] = useState();

    return (
        <View style={{...styles.pickerContainer, ...props.style}}>
            <Text style={styles.title}>{props.title}</Text>
            <View style={props.error && props.touched ? styles.error : styles.picker}>
                <TouchableOpacity 
                    style={styles.pickerContent}
                    activeOpacity={0.4}
                    onPress={() => setIsOpen(!isOpen)}
                >
                    <Text>{props.value == null ? "Escolha" : `${chosenGender}`}</Text>
                    <Ionicons 
                        name={isOpen ? 'ios-arrow-up' :'ios-arrow-down'}
                        size={24}
                        color={Colors.primaryColor}
                    />
                </TouchableOpacity>
                {isOpen &&
                    <View>
                        <GenderButton 
                            onTouch={() => {
                                props.onValueChange(gender.masc.value)
                                setChosenGender(gender.masc.placeholder)
                                setIsOpen(!isOpen)
                            }} 
                            value={gender.masc.placeholder} 
                        />
                        <GenderButton 
                            onTouch={() => {
                                props.onValueChange(gender.fem.value)
                                setChosenGender(gender.fem.placeholder)
                                setIsOpen(!isOpen)
                            }} 
                            value={gender.fem.placeholder} 
                        />
                        <GenderButton 
                            onTouch={() => {
                                props.onValueChange(gender.none.value)
                                setChosenGender(gender.none.placeholder)
                                setIsOpen(!isOpen)
                            }} 
                            value={gender.none.placeholder} 
                        />
                    </View>
                }
            </View>
            {props.error && props.touched &&
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{props.error}</Text>
            </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    pickerContainer:
    {
        width: '100%',
        marginBottom: 15,
    },
    title: 
    {
        alignSelf: 'flex-start',
        marginLeft: 4,
        marginBottom: 2,
        color: Colors.primaryColor,
    },
    picker:
    {
        justifyContent: 'center',
        minHeight: 40,
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 10,
        borderWidth: StyleSheet.hairlineWidth,
        borderRadius: 5,
    },
    pickerContent:
    {
        width: '100%',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    pickerData:
    {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        alignItems: 'flex-start',
        borderTopWidth: StyleSheet.hairlineWidth,
    },
    error:
    {
        justifyContent: 'center',
        minHeight: 40,
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

export default FormPicker;
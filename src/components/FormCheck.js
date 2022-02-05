import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Checkbox from '@react-native-community/checkbox'

import DefaultText from '../DefaultText';
import Colors from '../../constants/Colors';
import Traducao from '../Traducao/Traducao';

const FormCheck = props => {

    const [isTrue, setIsTrue] = useState(false)
    const [isFalse, setIsFalse] = useState(false)

    return (
        <View style={styles.container}>
            <DefaultText style={styles.title}>{props.title}</DefaultText>
            <View style={styles.checkBoxContainer}>

                <View style={styles.checkBox}>
                    <Checkbox
                        tintColors={{ true: Colors.secondaryColor, false: Colors.secondaryColor }}
                        value={isTrue}
                        onValueChange={() => {
                            if (isTrue) {
                                setIsTrue(false)
                                setIsFalse(false)
                                props.onChange('')
                            } else {
                                setIsTrue(true)
                                setIsFalse(false)
                                props.onChange(true)
                            }
                        }}
                    />
                    <DefaultText style={styles.text}>Feminino</DefaultText>
                </View>

                <View style={{...styles.checkBox, marginLeft: 20}}>
                    <Checkbox
                        tintColors={{ true: Colors.secondaryColor, false: Colors.secondaryColor }}
                        value={isFalse}
                        onValueChange={() => {
                            if (isFalse) {
                                setIsFalse(false)
                                setIsTrue(false)
                                props.onChange('')
                            } else {
                                setIsFalse(true)
                                setIsTrue(false)
                                props.onChange(false)
                            }
                        }}
                    />
                    <DefaultText style={styles.text}>Masculino</DefaultText>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:
    {
        width: '80%',
        marginBottom: 25
    },
    title: 
    {
        alignSelf: 'flex-start',
        marginLeft: 4,
        marginBottom: 2,
        color: Colors.secondaryColor,
        fontWeight: 'bold'
    },
    text:
    {
        color: Colors.secondaryColor
    },
    checkBoxContainer:
    {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    checkBox:
    {
        flexDirection: 'row',
        alignItems: 'center',
    },
    errorContainer:
    {

        marginTop: 5,
        marginHorizontal: 20,
        paddingBottom: 2,
        borderWidth: 1,
        borderRadius: 12,
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

export default FormCheck;
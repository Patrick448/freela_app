import React from 'react';
import { View, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const LineSeparator = props => {

    return (
        <View style={styles.lineSeparator}>
            <View style={styles.line}/>
        </View>
    )
}

const styles = StyleSheet.create({
    lineSeparator:
    {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        marginVertical: 10,
    },
    line:
    {
        width: "90%",
        borderBottomWidth: 1,
        borderColor: "#808080"
    },
});

export default LineSeparator;
import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
import Colors from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';

const ChatContact = props => {
    return (
        <View style={{flex: 1}}>
            <TouchableOpacity onPress={props.onSelectItem} style={styles.container}>

                <View style={styles.userIcon}>
                    <FontAwesome 
                        name="user-circle" 
                        size={30} 
                        color="#808080"
                    />
                </View>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>{props.name}</Text>
                </View>
                
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: Dimensions.get('window').width * 0.95,
        marginVertical: 5,
        marginHorizontal: 5,
        backgroundColor: "#FFFFFF"
    },
    containerTitle: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
        margin: 10
    },
    title: {
        color: "#808080",
        fontSize: 20,
        textAlign: 'left'
    },
    userIcon: {
        flexDirection: "row",
        justifyContent: 'flex-start',
        margin: 10,
    },
});

export default ChatContact;
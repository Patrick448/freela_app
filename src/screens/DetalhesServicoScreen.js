import { Feather, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, { useState, useEffect, useCallback } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	KeyboardAvoidingView,
	StatusBar,
	Alert,
	Dimensions,
	ActivityIndicator,
	Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import LineSeparator from '../components/LineSeparator';

import { FontAwesome } from '@expo/vector-icons';

import Colors from '../constants/Colors';
import FormButton from '../components/FormButton';

const DetalhesServicoScreen = (props) => {

	return (
		<View style={{flex: 1, backgroundColor: Colors.white}}>
			<View style={{paddingTop: 40, paddingLeft: 15, justifyContent: 'center', alignContent: 'center'}}>
			<Text style={{fontSize:18, fontFamily:'red-hat-medium'}}>Ofereço serviço de design de interiores</Text>
      		</View>
			<Image>
			</Image>
			<View style={styles.description}>
				<Text style={styles.title}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent ac pretium eros, non condimentum turpis. Quisque vulputate velit non ultrices faucibus. Morbi eu rutrum ligula, in tempus tortor. Ut vel tempus velit. In id lacus at odio varius semper. Ut in nisl sed metus consequat placerat. Donec dictum metus eget turpis porttitor pretium. Aenean mollis lacinia nisi non dignissim.
				</Text>
			</View>
			<LineSeparator></LineSeparator>
			<View>
            <View style={styles.containerText}>

                <View style={{...styles.userIcon, marginLeft: 10}}>
                    <FontAwesome 
                        name="user" 
                        size={20} 
                        color="#808080"
                    />
                </View>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>  Michael Northon</Text>
                </View>
                
            </View>
        	</View>
			<View>
            <View style={styles.containerText}>

                <View style={styles.userIcon}>
                    <MaterialIcons 
                        name="attach-money" 
                        size={22} 
                        color="#808080"
                    />
                </View>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>R$500,00</Text>
                </View>
                
            </View>
        	</View>
			<View>
            <View style={styles.containerText}>

                <View style={styles.userIcon}>
                    <Feather 
                        name="clock" 
                        size={20} 
                        color="#808080"
                    />
                </View>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}> Horário</Text>
                </View>
                
            </View>
        	</View>
			<View>
            <View style={styles.containerText}>

                <View style={styles.userIcon}>
                    <MaterialCommunityIcons 
                        name="map-marker" 
                        size={20} 
                        color="#808080"
                    />
                </View>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}> Local</Text>
                </View>
                
            </View>
        	</View>

			<View style={{justifyContent: "center", alignItems: "center", marginTop: 40}}>
				<FormButton title="Contratar" colorBack={Colors.secondaryColor} width="30%"></FormButton>
			</View>
        </View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.primaryColor,
	},
    logoContainer: {
		alignItems: 'center',
	},
	logo: {
		width: Dimensions.get('window').width * 0.8,
		height: Dimensions.get('window').height * 0.15,
		resizeMode: 'contain',
		marginBottom: 10,
	},
	containerText: {
        marginTop: 5,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: Dimensions.get('window').width * 0.95,
        marginHorizontal: 15,
        backgroundColor: "#FFFFFF"
    },
    containerTitle: {
        justifyContent: "flex-end",
        alignItems: "flex-end",
		marginVertical: 10
    },
    title: {
        color: "#808080",
        fontSize: 15,
        textAlign: 'left'
    },
    userIcon: {
        flexDirection: "row",
        justifyContent: 'flex-start',
        marginHorizontal: 8,
		marginVertical: 10
    },
	description: {
		margin: 15
	}
});

export default DetalhesServicoScreen;
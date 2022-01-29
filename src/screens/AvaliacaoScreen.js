import React, { useState, useEffect, useCallback } from 'react';
import {
	StyleSheet,
	TextInput,
	View,
	TouchableOpacity,
	Image,
	KeyboardAvoidingView,
	StatusBar,
	Alert,
	Dimensions,
	ActivityIndicator,
	Platform,
	Text
} from 'react-native';

import Colors from '../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const AvaliacaoScreen = (props) => {

	return (
		<View style={styles.container}>
			<View style={styles.textBox}>
						<Text style={styles.title}>Escreva uma avaliação</Text>
			</View>
			<View style={styles.avaliacaoContainer}>
				<TextInput
				placeholderTextColor='#AFAFAF'
				placeholder='O que achou do serviço?'>

				</TextInput>
			</View>		
			<View style={{flexDirection: 'row', width:'80%', marginTop: 10}}>
				<Ionicons
				name='md-star'
				size={25}
				color={Colors.secondaryColor}
				/>
				<Ionicons
				name='md-star'
				size={25}
				color={Colors.secondaryColor}
				/>
				<Ionicons
				name='md-star'
				size={25}
				color={Colors.secondaryColor}
				/>
				<Ionicons
				name='md-star-outline'
				size={25}
				color={Colors.secondaryColor}
				/>
				<Ionicons
				name='md-star-outline'
				size={25}
				color={Colors.secondaryColor}
				/>
			</View>

			<TouchableOpacity onPress={() => {}} style={styles.buttonContainer}>
            	<Text style={styles.buttonText}>Submeter</Text>
            </TouchableOpacity>

		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#FFFFFF',
	},
    avaliacaoContainer: {
		marginHorizontal: 10,
		marginTop: 10,
		padding: 30,
		borderRadius: 10,
		backgroundColor:'rgba(0, 169, 169, 0.4)',
		width: Dimensions.get('window').width * 0.85,
		height: '40%'
	},
	buttonContainer: {
		marginTop: 250,
		backgroundColor: Colors.secondaryColor,
		paddingVertical: 15,
		borderRadius: 10,
		elevation: 1,
        width: '30%',
        alignItems:'center',
        justifyContent: 'center'
	},
	buttonText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontWeight: '700',
	},
	title: {
		marginBottom: 10,
		fontSize: 18,
		color: '#000000',
        fontWeight: 'bold'
	},
    textBox: {
        alignItems: 'flex-start',
		justifyContent:'flex-start',
		width:'90%'
    },
});

export default AvaliacaoScreen;
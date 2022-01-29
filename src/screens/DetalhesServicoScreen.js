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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../constants/Colors';

const DetalhesServicoScreen = (props) => {

	return (
		<View style={styles.container}>
			<View style={styles.logoContainer}>
				
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
});

export default DetalhesServicoScreen;
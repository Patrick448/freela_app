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
import { Formik } from 'formik';
import {useDispatch} from "react-redux";
import moment from "moment";
import * as userActions from "../store/actions/userActions";
import AvaliacaoNova from "../model/AvaliacaoNova";

import * as avaliacoesActions from "../store/actions/avaliacoesActions";

const AvaliacaoScreen = (props) => {

	const dispatch = useDispatch();

	const [loading, setLoading] = useState(false);

	const initialValues = {
		texto: '',
		estrelas: 0,
		data: '',
		servico: ''
	}

	const onSubmit = async (values, actions) => {
		console.log('values: ')
		console.log(values);
		// servico vem por props?
		const avaliacao = new AvaliacaoNova(values.estrelas, values.texto, moment(), props.servico)
		console.log(avaliacao);
		setLoading(true);
		try {
			//await dispatch(avaliacoesActions.registrarAvaliacao(avaliacao));
			setLoading(false);
			Alert.alert("Avaliação feita com sucesso!");
		} catch (error) {
			setLoading(false);
			Alert.alert("Falha na avaliação.");
			// console.error(error)
		}
	}

	const [starPressed1, setStarPressed1] = useState(false);
	const [starPressed2, setStarPressed2] = useState(false);
	const [starPressed3, setStarPressed3] = useState(false);
	const [starPressed4, setStarPressed4] = useState(false);
	const [starPressed5, setStarPressed5] = useState(false);

	return (
		<View style={styles.container}>
			<View style={styles.textBox}>
						<Text style={styles.title}>Escreva uma avaliação</Text>
			</View>

			<Formik initialValues={initialValues}
					onSubmit={onSubmit}>
				{(formikProps) => (
					<View style={{width: '100%', paddingHorizontal: 20,}}>
						<View style={styles.avaliacaoContainer}>
							<TextInput
								placeholderTextColor='#AFAFAF'
								placeholder='O que achou do serviço?'
								multiline={true}
								onChangeText={formikProps.handleChange('texto')}
								onBlur={formikProps.handleBlur('texto')}
								value={formikProps.values.texto}
								touched={formikProps.touched.texto}
							>
							</TextInput>
						</View>
						<View style={{flexDirection: 'row', width:'80%', marginTop: 10}}>
							<TouchableOpacity onPress={() => {
								setStarPressed1(!starPressed1);
								if(starPressed1) {
									formikProps.setFieldValue('estrelas', 1)
									setStarPressed2(false)
									setStarPressed3(false)
									setStarPressed4(false)
									setStarPressed5(false)
								}
								else {
									formikProps.setFieldValue('estrelas', 0)
									setStarPressed2(false)
									setStarPressed3(false)
									setStarPressed4(false)
									setStarPressed5(false)
								}
							}}>
								{starPressed1 ?
									<Ionicons
									name='md-star'
									size={25}
									color={Colors.secondaryColor}
									/> :
									<Ionicons
										name='md-star-outline'
										size={25}
										color={Colors.secondaryColor}
									/>
								}
							</TouchableOpacity>
							<TouchableOpacity onPress={() => {
								setStarPressed2(!starPressed2);
								if(starPressed2) {
									formikProps.setFieldValue('estrelas', 2)
									setStarPressed1(true)
									setStarPressed3(false)
									setStarPressed4(false)
									setStarPressed5(false)
								}
								else {
									formikProps.setFieldValue('estrelas', 1)
									setStarPressed1(true)
									setStarPressed3(false)
									setStarPressed4(false)
									setStarPressed5(false)
								}
							}}>
								{starPressed2 ?
									<Ionicons
										name='md-star'
										size={25}
										color={Colors.secondaryColor}
									/> :
									<Ionicons
										name='md-star-outline'
										size={25}
										color={Colors.secondaryColor}
									/>
								}
							</TouchableOpacity>
							<TouchableOpacity onPress={() => {
								setStarPressed3(!starPressed3);
								if(starPressed3) {
									formikProps.setFieldValue('estrelas', 3)
									setStarPressed1(true)
									setStarPressed2(true)
									setStarPressed4(false)
									setStarPressed5(false)
								}
								else {
									formikProps.setFieldValue('estrelas', 2)
									setStarPressed2(true)
									setStarPressed1(true)
									setStarPressed4(false)
									setStarPressed5(false)
								}
							}}>
								{starPressed3 ?
									<Ionicons
										name='md-star'
										size={25}
										color={Colors.secondaryColor}
									/> :
									<Ionicons
										name='md-star-outline'
										size={25}
										color={Colors.secondaryColor}
									/>
								}
							</TouchableOpacity>
							<TouchableOpacity onPress={() => {
								setStarPressed4(!starPressed4);
								if(starPressed4) {
									formikProps.setFieldValue('estrelas', 4)
									setStarPressed1(true)
									setStarPressed2(true)
									setStarPressed3(true)
									setStarPressed5(false)
								}
								else {
									formikProps.setFieldValue('estrelas', 3)
									setStarPressed2(true)
									setStarPressed1(true)
									setStarPressed3(true)
									setStarPressed5(false)
								}
							}}>
								{starPressed4 ?
									<Ionicons
										name='md-star'
										size={25}
										color={Colors.secondaryColor}
									/> :
									<Ionicons
										name='md-star-outline'
										size={25}
										color={Colors.secondaryColor}
									/>
								}
							</TouchableOpacity>
							<TouchableOpacity onPress={() => {
								setStarPressed5(!starPressed5);
								if(starPressed5) {
									formikProps.setFieldValue('estrelas', 5)
									setStarPressed1(true)
									setStarPressed2(true)
									setStarPressed3(true)
									setStarPressed4(true)
								}
								else {
									formikProps.setFieldValue('estrelas', 4)
									setStarPressed2(true)
									setStarPressed1(true)
									setStarPressed3(true)
									setStarPressed4(true)
								}
							}}>
								{starPressed5 ?
									<Ionicons
										name='md-star'
										size={25}
										color={Colors.secondaryColor}
									/>
									:
									<Ionicons
										name='md-star-outline'
										size={25}
										color={Colors.secondaryColor}
									/>
								}
							</TouchableOpacity>
						</View>

						<View style={{alignItems: 'center'}}>
							<TouchableOpacity
								onPress={() => {
									formikProps.handleSubmit()
								}}
								style={styles.buttonContainer}>
								<Text style={styles.buttonText}>Submeter</Text>
							</TouchableOpacity>
						</View>
					</View>
				)}
			</Formik>
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
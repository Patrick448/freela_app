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
	Text,
	TouchableWithoutFeedback,
	ScrollView, Keyboard
} from 'react-native';
import { StatusBar as RNStatusBar} from 'react-native';
import moment from 'moment'
import { Formik } from 'formik'

import Colors from '../constants/Colors';
import FormTextInput from '../components/FormTextInput';
import FormButton from '../components/FormButton';
import FormPicker from '../components/FormPicker';
import FormDate from '../components/FormDate';

import * as userActions from '../store/actions/userActions';
import { useDispatch } from "react-redux";


const CadastroScreen = (props) => {

	const [loading, setLoading] = useState(false);
	const [date, setDate] = useState('');

	const dispatch = useDispatch();

	const initialValues = {
		nome: '',
		email: '',
		senha: '',
		telefone: '',
		dataNascimento: '',
		genero: null,
		dataCadastro: ''
	}

	const onSubmit = async (values, actions) => {
		console.log('values: ')
		console.log(values);
		const registerValues = new Usuario(values.nome, values.email, values.senha, values.telefone, values.dataNascimento, values.genero, moment())

		setLoading(true);
		try {
			await dispatch(userActions.signup(registerValues));
			setLoading(false);
			props.navigation.navigate('Login');
			Alert.alert("Cadastro feito com sucesso!");
		} catch (error) {
			setLoading(false);
			Alert.alert("Falha no cadastro.");
			// console.error(error)
		}
	}

	return (
		<ScrollView contentContainerStyle={styles.container}>

			<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
				<Formik
					initialValues={initialValues}
					onSubmit={onSubmit}
				>
					{(formikProps) => (

					)}
				</Formik>
			</TouchableWithoutFeedback>
			<View style={styles.textBox}>
				<Text style={styles.title}>Dados Pessoais</Text>
			</View>

			<Text style={{ marginLeft: 4, marginBottom: 2, color: Colors.primaryColor, textAlign: "left" }}>
				Nome
			</Text>
			<TextInput
				placeholderTextColor='#AFAFAF'
				placeholder='Digite seu nome'
				style={{ ...styles.input, marginBottom: 12 }}
				onSubmitEditing={() => {}}
				keyboardType='email-address'
				autoCapitalize='none'
				autoCorrect={false}
				returnKeyType='next'
				selectionColor={Colors.primaryColor}
			/>

			<View style={styles.textBox}>
				<Text style={{ marginLeft: 4, marginBottom: 2, color: Colors.primaryColor }}>
					Gênero
				</Text>
			</View>

			<FormPicker style={{width:"100%"}}></FormPicker>

			<Text style={{ marginLeft: 4, marginBottom: 2, color: Colors.primaryColor }}>
				Data de Nascimento
			</Text>
			<FormDate></FormDate>

			<Text style={{ marginLeft: 4, marginBottom: 2, color: Colors.primaryColor }}>
				Telefone
			</Text>
			<TextInput
				placeholderTextColor='#AFAFAF'
				placeholder='Digite seu telefone'
				style={{ ...styles.input, marginBottom: 12 }}
				onSubmitEditing={() => {}}
				keyboardType='email-address'
				autoCapitalize='none'
				autoCorrect={false}
				returnKeyType='next'
				selectionColor={Colors.primaryColor}
			/>

			<View style={styles.textBox}>
						<Text style={styles.title}>Dados de Acesso</Text>
			</View>

			<Text style={{ marginLeft: 4, marginBottom: 2, color: Colors.primaryColor }}>
				E-mail
			</Text>
			<TextInput
				placeholderTextColor='#AFAFAF'
				placeholder='Digite seu e-mail'
				style={{ ...styles.input, marginBottom: 12 }}
				onSubmitEditing={() => {}}
				keyboardType='email-address'
				autoCapitalize='none'
				autoCorrect={false}
				returnKeyType='next'
				selectionColor={Colors.primaryColor}
			/>

			<Text style={{ marginLeft: 4, marginBottom: 2, color: Colors.primaryColor }}>
				Senha
			</Text>

			<View style={styles.inputContainerPassword}>
				<TextInput
					placeholderTextColor='#AFAFAF'
					placeholder='Digite sua senha'
					style={styles.inputPassword}
					secureTextEntry
					autoCapitalize='none'
					returnKeyType='go'
					selectionColor={Colors.primaryColor}
				/>
			</View>

			<Text style={{ marginLeft: 4, marginBottom: 2, color: Colors.primaryColor }}>
				Repetir Senha
			</Text>

			<View style={styles.inputContainerPassword}>
				<TextInput
					placeholderTextColor='#AFAFAF'
					placeholder='Repita sua senha'
					style={styles.inputPassword}
					secureTextEntry
					autoCapitalize='none'
					returnKeyType='go'
					selectionColor={Colors.primaryColor}
				/>
			</View>
			<View style={{width:"100%", alignItems:'center'}}>
				<FormButton title="Criar conta" colorBack={Colors.primaryColor} width="60%"></FormButton>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-start',
		backgroundColor: '#FFFFFF',
		padding:15,
		paddingTop: RNStatusBar.currentHeight
	},
	bordaLogin: {
		marginHorizontal: 10,
		marginTop: 10,
		padding: 30,
		borderRadius: 10,
		backgroundColor:'#FFFFFF',
		elevation: 5,
	},
	formContainer: {
		width: Dimensions.get('window').width * 0.95,
	},
	input: {
		height: 50,
		backgroundColor: '#FFFFFF',
		marginBottom: 5,
		paddingHorizontal: 5,
		borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.primaryColor,
		borderRadius: 5,
		elevation: 1,
		width: '100%'
	},
	inputContainerPassword: {
		flexDirection: 'row',
		height: 50,
		backgroundColor: '#FFFFFF',
		marginBottom: 5,
		paddingHorizontal: 5,
		borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.primaryColor,
		borderRadius: 5,
		elevation: 1,
	},
	inputPassword: {
		width: '100%',
	},
	buttonView: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonContainer: {
		marginTop: 15,
		backgroundColor: Colors.primaryColor,
		paddingVertical: 15,
		borderRadius: 5,
		elevation: 1,
        width: '30%',
        alignItems:'center',
        justifyContent: 'center'
	},
	buttonForgotPassword: {
		marginTop: 5,
	},
	buttonTextSignIn: {
		textAlign: 'center',
		color: Colors.primaryColor,
		fontWeight: '700',
	},
	buttonText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontWeight: '700',
	},
	forgotPassword: {
		textAlign: 'center',
		color: Colors.primaryColor,
		fontWeight: '700',
	},
	errorContainer: {
		paddingHorizontal: 5,
		marginBottom: 10,
		marginTop: -5,
	},
	errorText: {
		color: 'red',
		fontSize: 13,
	},
	loading: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: Colors.primaryColor,
	},
    title: {
		marginBottom: 10,
		fontSize: 18,
		color: Colors.primaryColor,
        fontWeight: 'bold'
	},
    textBox: {
		width:"100%",
        alignItems: 'center',
		justifyContent: 'center'
    },
    cadastrarBox: {
        marginTop: 10,
    }
});

export default CadastroScreen;
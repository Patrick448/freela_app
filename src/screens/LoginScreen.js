import React, { useState, useEffect, useCallback } from 'react';
import {
	StyleSheet,
	View,
	Image,
	Dimensions,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity,
	ActivityIndicator,
	Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import * as userActions from "../store/actions/userActions";
import FormTextInput from '../components/FormTextInput';
import { useSelector, useDispatch } from 'react-redux'

import Colors from '../constants/Colors';

const LoginScreen = (props) => {
	const dispatch = useDispatch();

	const [passwordInputText, setPasswordInputText] = useState("");
	const [emailInputText, setEmailInputText] = useState("");

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	const onEmailChange = (emailInput) => {
		setEmailInputText(emailInput);
	};

	const onPasswordChange = (passwordInput) => {
		setPasswordInputText(passwordInput);
	};

	const signinHandler = useCallback(async () => {
		setError(null);

		try {
			console.log("trying to sign in")
			setLoading(true);
			await dispatch(userActions.signin(emailInputText, passwordInputText));
			/*
			await dispatch(recordActions.fetchRecord());
			await dispatch(recordActions.fetchDailyLogs());
			await dispatch(challengeActions.fetchChallenges());
			await dispatch(challengeActions.fetchUserChallenges());
			await dispatch(tipActions.fetchTips());
			await dispatch(tipActions.fetchUserTips());
			await dispatch(optionsActions.fetchOptions());
			await dispatch(messageActions.fetchChat());
			*/
			//props.navigation.navigate('StartupLogin');
		} catch (err) {
			setLoading(false);
			setError(err.message);
		}
	}, [dispatch, emailInputText, passwordInputText]);

	useEffect(() => {
		if (error) {
			Alert.alert('Um erro ocorreu!', error, [{ text: 'Ok' }]);
		}
	}, [error]);

	if (loading) {
		return (
			<View style={styles.loading}>
				<ActivityIndicator size='large' color={Colors.secondaryColor} />
			</View>
		);
	}

	return (
		<LinearGradient colors={['#9932CC', '#00A9A9']} style={styles.container}>
			<View style={styles.logoContainer}>
				<Image style={styles.logo} source={require('../../assets/imagens/logo2.png')} />
			</View>		
            <View style={styles.formContainer}>
				<View style={styles.bordaLogin}>
					<View style={styles.textBox}>
						<Text style={styles.title}>Bem-vindo!</Text>
                        <Text style={styles.title}>J?? possui conta?</Text>
					</View>

					<KeyboardAvoidingView enabled behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
						<Text style={{ marginLeft: 4, marginBottom: 2, color: Colors.primaryColor }}>
							E-mail
						</Text>
						<TextInput
							value={emailInputText}
							onChangeText={onEmailChange}
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
								value={passwordInputText}
								onChangeText={onPasswordChange}
                                placeholderTextColor='#AFAFAF'
                                placeholder='Digite sua senha'
                                style={styles.inputPassword}
                                secureTextEntry
                                autoCapitalize='none'
                                returnKeyType='go'
                                selectionColor={Colors.primaryColor}
                            />
                        </View>
					</KeyboardAvoidingView>

                    <View style={styles.buttonView}>
                        <TouchableOpacity onPress={signinHandler} style={styles.buttonContainer}>
                            <Text style={styles.buttonText}>Entrar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {props.navigation.navigate("Cadastro")}}
                            style={styles.cadastrarBox}
                        >
                            <Text style={styles.buttonTextSignIn}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
					
				</View>
			</View>

		</LinearGradient>
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
		width: Dimensions.get('window').width * 0.3,
		height: Dimensions.get('window').height * 0.3,
		resizeMode: 'contain',
		marginBottom: 10,
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
		width: '90%',
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
        alignItems: 'center',
    },
    cadastrarBox: {
        marginTop: 10,
    }
});

export default LoginScreen;
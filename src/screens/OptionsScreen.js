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

import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import LineSeparator from '../components/LineSeparator';
import * as usuarioActions from '../store/actions/userActions';
import {useDispatch} from "react-redux";

const OptionsScreen = (props) => {
	const [pressed, setPressed] = useState(false);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    const logout = useCallback(() => {
        setError(null);

        try {
            setLoading(true);
            //dispatch(usuarioActions.logout());
        } catch (err) {
            setLoading(false);
            setError(err.message);
        }
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            Alert.alert('Um erro ocorreu!', error, [{ text: 'Ok' }]);
        }
    }, [error]);

    if (loading) {
        return (
            <View style={styles.loading}>
                <ActivityIndicator size='large' color={Colors.primaryColor} />
            </View>
        );
    }

	return (
		<View style={{flex: 1, backgroundColor: Colors.white}}>
			<View style={{paddingTop: 40, paddingLeft: 15, flexDirection:'row', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
			<Text style={{fontSize:20, fontFamily:'red-hat-medium'}}>Opções</Text>
      		</View>

			<TouchableOpacity onPress={() => {props.navigation.navigate("DetalhesPerfil")}}>
            <View style={styles.containerText}>

                <View style={styles.userIcon}>
                    <FontAwesome 
                        name="user" 
                        size={20} 
                        color="#808080"
                    />
                </View>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Perfil</Text>
                </View>
                
            </View>
        	</TouchableOpacity>
			<LineSeparator></LineSeparator>
			<View>
            <View style={{...styles.containerText, alignItems: "space-between"}}>

                <View style={styles.userIcon}>
                    <FontAwesome 
                        name="bell" 
                        size={20} 
                        color="#808080"
                    />
                </View>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Notificações</Text>
                </View>
				<TouchableOpacity onPress={() => setPressed(!pressed) }style={{...styles.userIcon, alignSelf: "flex-end"}}>
					
                    {pressed? <FontAwesome 
                        name="toggle-on" 
                        size={22} 
                        color={Colors.primaryColor}
                    /> :
					<FontAwesome 
                        name="toggle-off" 
                        size={22} 
                        color="#808080"
                    />}
                </TouchableOpacity>
                
            </View>
        	</View>
			<LineSeparator></LineSeparator>
			<TouchableOpacity onPress={logout}>
            <View style={styles.containerText}>

                <View style={{...styles.userIcon}}>
                    <MaterialCommunityIcons 
                        name="logout" 
                        size={22} 
                        color={Colors.primaryColor}
                    />
                </View>
                <View style={styles.containerTitle}>
                    <Text style={{...styles.title, color: Colors.primaryColor}}>Sair</Text>
                </View>
                
            </View>
        	</TouchableOpacity>
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
});

export default OptionsScreen;
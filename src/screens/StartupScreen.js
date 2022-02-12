import React, { useEffect } from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { useDispatch } from "react-redux";
import * as userActions from "../store/actions/userActions";

import Colors from "../constants/Colors";

const StartupScreen = (props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        const tryLogin = async () => {
            // AsyncStorage.removeItem("userData");
            const userData = await AsyncStorage.getItem("userData");

            if (!userData) {
                props.navigation.navigate("Login");
                return;
            }
            let parsedData = JSON.parse(userData);
            const { token, id, nome, email, dataNascimento, genero, telefone, estrelas, admin } = parsedData;

            if (!token || !id || !email || !nome) {
                props.navigation.navigate("Login");
                return;
            }

            await dispatch(userActions.authenticate(token, id, nome, email, dataNascimento, genero, telefone, estrelas, admin));
        };

        tryLogin();
    }, [dispatch]);

    return (
        <View style={styles.loading}>
            <ActivityIndicator size='large' color={Colors.secondaryColor} />
        </View>
    );
};

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
    },
});

export default StartupScreen;

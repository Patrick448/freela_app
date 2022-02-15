import React, { useState, useEffect, useCallback } from 'react';
import {
	StyleSheet,
	Text,
	View,
	FlatList,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import ChatContact from '../components/ChatContact';

import Colors from '../constants/Colors';

const data = [
    {
		id: 1,
    	name: "Luciana Nascimento"
	},
	{
		id: 2,
    	name: "Patrick Carvalho"
	},
	{
		id: 3,
    	name: "Alexandre Pacelli"
	},
]

const ChatListScreen = (props) => {

	return (
		
		<View style={{flex: 1, backgroundColor: Colors.white}}>
			<View style={{paddingTop: 40, paddingLeft: 15, flexDirection:'row', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
			<Text style={{fontSize:20, fontFamily:'red-hat-medium'}}>Conversas</Text>
      		</View>
			<FlatList
				contentContainerStyle={{paddingBottom:70}}
				data={data}
				renderItem={({item})=> 
						(<ChatContact
						onSelectItem={()=>{props.navigation.navigate("Chat")}}
						id={item.id}
						name={item.name}
						/>)}
				keyExtractor={(item) => item.id}/> 
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-start',
		alignItems: 'center',
		backgroundColor: "#FFFFFF",
	}
});

export default ChatListScreen;
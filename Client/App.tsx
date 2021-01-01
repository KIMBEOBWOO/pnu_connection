/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import { SafeAreaView, StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';

import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { Button } from 'react-native-paper';

/**
 * 페이지 컴포넌트
 */
import MainPage from './src/page/MainPage';
import SignPage from './src/page/SignPage';

/**
 * 스택 및 페이지 네비게이션
 */
// import 'react-native-gesture-handler';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

// const Stack = createStackNavigator();

export default function App(): JSX.Element {
	return (
		// <NavigationContainer>
		// 	<Stack.Navigator>
		// 		<Stack.Screen name="Sign" component={SignPage} />
		// 		<Stack.Screen name="Main" component={MainPage} />
		// 	</Stack.Navigator>
		// </NavigationContainer>
		<SafeAreaView>
			<SignPage/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	scrollView: {
		backgroundColor: Colors.lighter,
	},
	engine: {
		position: 'absolute',
		right: 0,
	},
	body: {
		backgroundColor: Colors.white,
	},
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
		color: Colors.black,
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
		color: Colors.dark,
	},
	highlight: {
		fontWeight: '700',
	},
	footer: {
		color: Colors.dark,
		fontSize: 12,
		fontWeight: '600',
		padding: 4,
		paddingRight: 12,
		textAlign: 'right',
	},
});

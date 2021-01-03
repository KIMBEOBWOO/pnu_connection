import React from 'react';

import { SafeAreaView, StyleSheet, ScrollView, View, StatusBar } from 'react-native';
import { Button, Title, TextInput, Text } from 'react-native-paper';

/**
 * hooks
 */
import useEventTargetValue from '../../utils/hooks/useEventTargetValue';
import { useNavigation } from "@react-navigation/native";
export interface LoginLayoutProps {
	handleLoginPage: (pageState: boolean) => void;
}

export default function LoginLayout(props: LoginLayoutProps): JSX.Element {
	const { handleLoginPage } = props;
	const id = useEventTargetValue();
	const pw = useEventTargetValue();

	const navigate = useNavigation();
	

	return (
		<SafeAreaView
			style={{
				display: 'flex',
				height: '100%',
				justifyContent: 'center',
				marginLeft: 16,
				marginRight: 16,
			}}
		>
			<Title
				style={{
					textAlign: 'center',
					marginBottom: 16,
				}}
			>
				로그인 테스트 어플리케이션
			</Title>

			<TextInput
				label="id"
				mode="outlined"
				value={id.value}
				onChangeText={id.handleTextChange}
				style={{
					marginBottom: 8,
				}}
			/>
			<TextInput
				label="pw"
				mode="outlined"
				secureTextEntry={true}
				value={pw.value}
				onChangeText={pw.handleTextChange}
				style={{
					marginBottom: 16,
				}}
			/>

			<Button
				mode="contained"
				onPress={() => {
					console.log(id.value, pw.value);
					// navigate.navigate('Main');
				}}
				style={{
					marginBottom: 8,
				}}
			>
				로그인
			</Button>
			<Button
				mode="outlined"
				onPress={() => {
					// handleLoginPage(false);
					navigate.navigate('SignUp');
				}}
			>
				회원가입
			</Button>
		</SafeAreaView>
	);
}

import React from 'react';

import { SafeAreaView, StyleSheet, ScrollView, View, StatusBar } from 'react-native';
import { Button, Title, TextInput, Text } from 'react-native-paper';

/**
 * hooks
 */
import useEventTargetValue from '../../utils/hooks/useEventTargetValue';

export interface RegistLayoutProps {
	handleLoginPage: (pageState: boolean) => void;
}

export default function RegistLayout(props: RegistLayoutProps): JSX.Element {
	const { handleLoginPage } = props;
	const name = useEventTargetValue();
	const id = useEventTargetValue();
	const pw = useEventTargetValue();

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
				회원가입 테스트
			</Title>

			<TextInput
				label="name"
				mode="outlined"
				value={name.value}
				onChangeText={name.handleTextChange}
				style={{
					marginBottom: 8,
				}}
			/>
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
					console.log(name.value, id.value, pw.value);
				}}
				style={{
					marginBottom: 8,
				}}
			>
				회원가입
			</Button>

			<Text
				onPress={() => {
					handleLoginPage(true);
				}}
				style={{
					fontSize: 16,
					textAlign: 'right',
				}}
			>
				로그인으로
			</Text>
		</SafeAreaView>
	);
}

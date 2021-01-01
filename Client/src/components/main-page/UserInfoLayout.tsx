import React from 'react';

import { SafeAreaView, StyleSheet, ScrollView, View, StatusBar } from 'react-native';
import { Button, Title, TextInput, Text } from 'react-native-paper';

export default function UserInfoLayout(): JSX.Element {
	return (
		<View
			style={{
				display: 'flex',
				flexDirection: 'column',
				height: '100%',
			}}
		>
			<Title
				style={{
					textAlign: 'center',
				}}
			>
				로그인 완료
			</Title>
		</View>
	);
}

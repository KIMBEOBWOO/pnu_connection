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
 * 자식 컴포넌트
 */
import LoginLayout from '../components/login-page/LoginLayout';
import RegistLayout from '../components/login-page/RegistLayout';

export default function SignPage(): JSX.Element {
	const [loginPage, setLoginPage] = React.useState<boolean>(true);

	const handleLoginPage = (pageState: boolean): void => {
		setLoginPage(pageState);
	};

	return (
		<>
			{loginPage ? (
				<LoginLayout handleLoginPage={handleLoginPage} />
			) : (
				<RegistLayout handleLoginPage={handleLoginPage} />
			)}
		</>
	);
}

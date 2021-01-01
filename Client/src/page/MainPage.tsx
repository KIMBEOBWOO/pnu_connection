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
import UserInfoLayout from '../components/main-page/UserInfoLayout';

export default function MainPage(): JSX.Element {
	return (
		<>
			<UserInfoLayout />
		</>
	);
}

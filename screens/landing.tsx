import {
	Image,
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

const Landing = () => {
	const [search, setSearch] = useState("");
	const [appIsReady, setAppIsReady] = useState(false);


	return (
		<View >
			<Text>
				Meow meow
			</Text>
		</View>
	);
};
export default Landing;
import {
	Image,
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import StickyParallaxHeader from "react-native-sticky-parallax-header";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

const Landing = () => {
	const [search, setSearch] = useState("");
	const [appIsReady, setAppIsReady] = useState(false);
	return (
		<View style={styles.container}>
			<StickyParallaxHeader
				headerType="AvatarHeader"
				backgroundColor="#D55828"
				title="Burger Overflow"
				headerHeight={40}
				hasBorderRadius={false}
				subtitle="Welcome to Burger Overflow"
				image = {require("../assets/Boorgir2.png")}
				contentContainerStyles = {styles.container}
			>
				<Text style={styles.container}>huhigoehoirg</Text>
			</StickyParallaxHeader>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	image2: {
		flex: 1,
		justifyContent: "center",
	},
	fonts: {
		marginBottom: 8,
	},
	user: {
		flexDirection: "row",
		marginBottom: 6,
	},
	image: {
		width: 30,
		height: 30,
		marginRight: 10,
	},
	name: {
		fontSize: 16,
		marginTop: 5,
	},
});

export default Landing;

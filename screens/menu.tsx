import {
	Image,
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	FlatList,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import StickyParallaxHeader from "react-native-sticky-parallax-header";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import Carousel, {
	ParallaxImage,
	Pagination,
} from "react-native-snap-carousel";
import * as Font from "expo-font";
import * as axios from "axios";
import { Card } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const renderItem2 = ({ item }) => {
	console.log("aaaaaa",item.name);
	return (
		<View>
			<Card>
				<Text style={{ fontFamily: "Brush", fontSize: 38, color: "white" }}>
					{item.name}
				</Text>
				<View style={{ flexDirection: "row" }}>
					<Text>{item.description}</Text>
				</View>
			</Card>
		</View>
	);
};
const Menu = () => {
	const [menu, setMenu] = useState<Menuu[]>();

	useEffect(() => {
		// Promise.all([axios.default.get(`http://192.168.2.244:3000/menu`)]).then(
			Promise.all([axios.default.get(`http://localhost:3000/menu`)]).then(
			([{ data: menuResults }]) => {
				if (menuResults)
				 setMenu(menuResults);
				// console.log(menu)
			}
		);
		console.log(menu)
		// meow()
	},[]);

	const meow = ()=>{
		console.log("zzzzzzz",menu)
	}

	return (
		// <ParallaxScrollView
		// 	backgroundColor="#D55828"
		// 	contentBackgroundColor="#131216"
		// 	parallaxHeaderHeight={0}
		// >\
		<View>
			<ImageBackground
				style={{ height: 1000 }}
				source={require("../assets/bckgrnd1-01.png")}
			>
				<View>
					<View style={{ backgroundColor: "#242424" }}>
						<Text
							style={{
								alignSelf: "center",
								fontFamily: "Brush",
								fontSize: 38,
								padding: 10,
								margin: 10,
								bottom: 10,
								color: "white",
							}}
						>
							Menu
						</Text>
						<FlatList
							data={menu}
							renderItem={renderItem2}
							keyExtractor={(item) => item.name}

						/>
					</View>
				</View>
			</ImageBackground>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	container2: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		bottom: 70,
	},
	container3: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		width: 400,
		height: 400,
		left: -9,
	},
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
	image2: {
		flex: 1,
		resizeMode: "cover",
		width: 250,
		top: 50,
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
	appButtonContainer: {
		elevation: 8,
		backgroundColor: "#D55828",
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 12,
		width: 100,
		top: 0,
		margin: 10,
		alignSelf: "center",
	},
	appButtonContainer2: {
		elevation: 8,
		backgroundColor: "#242424",
		borderRadius: 10,
		paddingVertical: 10,
		paddingHorizontal: 12,
		margin: 10,
		width: 340,
		alignSelf: "center",
	},
	appButtonText: {
		fontSize: 18,
		color: "#fff",
		fontWeight: "bold",
		alignSelf: "center",
		textTransform: "uppercase",
	},
});
type Menuu = {
	name: string;
	description: string;
	image: string;
	price: string;
	type: string;
};
export default Menu;

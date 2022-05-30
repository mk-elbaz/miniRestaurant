import {
	Image,
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	FlatList,
	Text,
	TouchableOpacity,
	View,
	ScrollView,
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
	console.log("aaaaaa", item.name);
	return (
		<View style={{}}>
			<Card
				containerStyle={{
					flex: 1,
					// alignItems: "center",
					justifyContent: "center",
					height: 180,
				}}
			>
				<Text style={{ fontFamily: "Brush", fontSize: 30, color: "black" ,paddingBottom:10}}>
					{item.name}
				</Text>
				<View style={{ flexDirection: "row", width: 255 ,alignContent:"center"}}>
					<Text style={{ fontSize: 15,width:250 }}>{item.description}</Text>
					<Image
						style={{ height: 90, width: 80,bottom:20,left:5 }}
						source={{ uri: item.image }}
					/>
					
				</View>
				<Card.Divider></Card.Divider>
				<View style={{ flexDirection: "row",bottom:10,left:5}}>
				<Text style={{ fontSize: 15 }}>Price: </Text>
				<Text style={{color:"green",fontSize: 15}}>{item.price}$</Text>
				</View>
			</Card>
		</View>
	);
};
const Menu = () => {
	const [menu, setMenu] = useState<Menuu[]>();

	useEffect(() => {
		Promise.all([axios.default.get(`http://192.168.2.244:3000/menu`)]).then(
			([{ data: menuResults }]) => {
				if (menuResults) setMenu(menuResults);
				// console.log(menu)
			}
		);
		console.log(menu);
		// meow()
	}, []);

	const meow = () => {
		console.log("zzzzzzz", menu);
	};

	return (
		<View>
			<ImageBackground
				style={{ height: 1000 }}
				source={require("../assets/bckgrnd1-01.png")}
			>
				<View style={styles.container4}>
					<Text
						style={{
							alignSelf: "center",
							fontFamily: "Brush",
							fontSize: 38,
							padding: 10,
							margin: 10,
							top: 20,
							color: "white",
						}}
					>
						Menu
					</Text>
					<FlatList
						data={menu}
						renderItem={renderItem2}
						keyExtractor={(item) => item.name}
						// style={{ height: "100%", paddingBottom: 50 }}
						contentContainerStyle={{paddingBottom:250}}
					/>
					<Card.Divider></Card.Divider>
				</View>
			</ImageBackground>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		// alignItems: "center",
		justifyContent: "center",
		height: 230,
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
	container4: {
		flex: 1,
		// alignItems: "center",
		justifyContent: "center",
		height: 230,
		top:10
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

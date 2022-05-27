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
import ParallaxScrollView from "react-native-parallax-scroll-view";
import Carousel, {
	ParallaxImage,
	Pagination,
} from "react-native-snap-carousel";
import * as Font from "expo-font";
import * as axios from "axios";

const Landing = () => {
	const [search, setSearch] = useState("");
	const [appIsReady, setAppIsReady] = useState(false);
	const images = [
		require("../assets/bbc5448d2ae0ac08526b7e523b4f6012.png"),
		require("../assets/bbc5448d2ae0ac08526b7e523b4f6012.png"),
		require("../assets/fce09e6a80b59a8cf77275475988c79a.png"),
	];
	const [index, setIndex] = useState(0);
	// const [menu, setMenu] = useState<Menu[]>();

	// useEffect(() => {
	// 	Promise.all([axios.default.get(`http://192.168.2.244:3000/menu`)]).then(
	// 		([{ data: menuResults }]) => {
	// 			if (menuResults) setMenu(menuResults);
	// 		}
	// 	);
	// }, []);
	const renderItem = (item: any) => {
		return (
			<View style={styles.container}>
				<Image
					style={{ resizeMode: "cover", width: 300, height: 30 }}
					source={item}
				></Image>
			</View>
		);
	};

	return (
		<ParallaxScrollView
			backgroundColor="#D55828"
			contentBackgroundColor="white"
			parallaxHeaderHeight={235}
			renderForeground={() => (
				<View
					style={{
						height: 300,
						flex: 1,
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					<Image
						style={styles.image2}
						source={require("../assets/logo2-01.png")}
					/>
				</View>
			)}
		>
			<View style={styles.container}>
				<Carousel
					layout="default"
					data={images}
					renderItem={renderItem}
					itemWidth={300}
					itemHeight={100}
					sliderWidth={300}
					onSnapToItem={(index) => setIndex(index)}
				/>

				<Pagination
					activeDotIndex={index}
					dotsLength={images.length}
					dotColor={"#ea4335"}
					inactiveDotColor={"gray"}
					inactiveDotOpacity={1}
					containerStyle={{ margin: -20 }}
				/>
			</View>
		</ParallaxScrollView>
	);
};
type Menu = {
	name: string;
	description: string;
	image: string;
	price: string;
	type: string;
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		height: 1000,
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
});

export default Landing;

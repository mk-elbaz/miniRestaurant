import {
	Image,
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	View,
	TouchableOpacity,
	Button,
} from "react-native";
import useForm from "react-hook-form";
import { IconButton, BottomNavigation } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from "react";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import DateTimePicker from "@react-native-community/datetimepicker";
import RNPickerSelect from "react-native-picker-select";
import RNDateTimePicker from "@react-native-community/datetimepicker";
const axios = require("axios");
import moment from "moment";
import RNPicker from "@bahmanbinary/rnpicker";
import { Card, Divider } from "react-native-elements";
import { Value } from "react-native-reanimated";
import ParallaxScrollView from "react-native-parallax-scroll-view";
import { Picker, onOpen } from "react-native-actions-sheet-picker";

const Reserve = () => {
	const [dateOfReservation, setDate] = useState(new Date());
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [noOfPersons, setPersons] = useState("select number of persons");
	const [appIsReady, setAppIsReady] = useState(false);
	const [open, setOpen] = useState(false);

	useEffect(() => {});

	const data = {
		name: name,
		email: email,
		phone: phone,
		noOfPersons: noOfPersons,
		date: dateOfReservation,
	};

	const submit = async () => {
		console.log(data);
		await axios
			// .post("http://192.168.2.244:3000/reserve", data, {
			.post("http://localhost:3000/reserve", data, {
				headers: {
					Accept: "application/json",
				},
			})
			.then((res) => {
				console.log(res);
				alert(
					"Reservation Successful! please check your email for confirmation(maybe in junk folder)"
				);
			})
			.catch((e) => {
				console.log(e);
				alert(
					"Invalid info/Connection Error. Make sure all the information is correct/try again later"
				);
			});
	};
	return (
		<ParallaxScrollView
			backgroundColor="#D55828"
			contentBackgroundColor="#131216"
			parallaxHeaderHeight={0}
		>
			<ImageBackground
				style={{ height: 1000 }}
				source={require("../assets/bckgrnd1-01.png")}
			>
				<View style={styles.container}>
					<View style={{ backgroundColor: "white" }}>
						<Text
							style={{
								alignSelf: "center",
								fontFamily: "Brush",
								fontSize: 38,
								padding: 10,
								margin: 10,
								bottom: 10,
							}}
						>
							Reservation
						</Text>
						<Text style={{ left: 10 }}>Please enter your name</Text>
						<TextInput
							placeholder="Enter your name"
							value={name}
							style={styles.input}
							onChangeText={(text: string) => setName(text)}
						/>
						<Card.Divider></Card.Divider>
						<Text style={{ left: 10 }}>Please enter your email</Text>
						<TextInput
							placeholder="Email"
							value={email}
							style={styles.input}
							onChangeText={(text: string) => setEmail(text)}
						/>
						<Card.Divider></Card.Divider>
						<Text style={{ left: 10 }}>Please enter your phone number</Text>
						<TextInput
							placeholder="Phone Number"
							value={phone}
							style={styles.input}
							onChangeText={(text: string) => setPhone(text)}
						/>
						<Card.Divider></Card.Divider>
						<Text style={{ left: 10 }}>Please choose the number of people</Text>
						<RNPicker
							data={[
								{ label: "people: 1", value: 1 },
								{ label: "people: 2", value: 2 },
								{ label: "people: 3", value: 3 },
								{ label: "people: 4", value: 4 },
								{ label: "people: 5", value: 5 },
								{ label: "people: 6", value: 6 },
							]}
							onSelect={(value) => {
								setPersons(value["value"]);
							}}
							placeholder="Please choose"
						/>
						{/* <Picker
							id="country"
							data={filteredData}
							inputValue={query}
							searchable={true}
							label="Select Country"
							setSelected={setSelected}
							onSearch={onSearch}
							renderListItem={function (
								item: unknown,
								index: number
							): ReactElement<any, string | JSXElementConstructor<any>> {
								throw new Error("Function not implemented.");
							}}
						/> */}
						<select>
							<option>
								<Text>ay zeft</Text>
							</option>
						</select>
						<Card.Divider></Card.Divider>
						<Text style={{ left: 10 }}>
							Please choose the date of your reservation
						</Text>
						{open ? (
							<RNDateTimePicker
								style={{ width: 200, height: 200 }}
								value={new Date(dateOfReservation)}
								mode="datetime"
								minimumDate={new Date(2022, 5, 27)}
								themeVariant="dark"
								onChange={(_: any, date?: Date) => {
									setOpen(false);
									setDate(date);
									// console.log("aaaa", dateOfReservation);
								}}
							/>
						) : null}

						<TouchableOpacity
							style={styles.appButtonContainer2}
							onPress={() => setOpen(true)}
						>
							<Text style={{ alignSelf: "center", color: "white" }}>
								Click to open calendar
							</Text>
						</TouchableOpacity>
						<Card.Divider></Card.Divider>
						<TouchableOpacity
							onPress={submit}
							style={styles.appButtonContainer}
						>
							<Text style={{ alignSelf: "center" }}>Reserve</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ImageBackground>
		</ParallaxScrollView>
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
export default Reserve;

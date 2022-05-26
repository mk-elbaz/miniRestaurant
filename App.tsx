import landing from "./screens/landing";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen
				name="Landing"
				component={landing}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="MapScreen"
				component={MapScreen}
				options={{
					headerShown: true,
					title: "Map",
					headerTitleAlign:"center",
					headerTitleStyle:{color:"#FFFFFF"},
					headerStyle:{backgroundColor:"#242424"},
					headerTintColor: 'white'
				}}
			/>
			<Stack.Screen
				name="ListScreen"
				component={ListScreen}
				options={{
					headerShown: true,
					title: "Universities",
					headerTitleAlign:"center",
					headerTitleStyle:{color:"#FFFFFF"},
					headerStyle:{backgroundColor:"#242424"},
					headerTintColor: 'white'
				}}
			/>
		</Stack.Navigator>
	</NavigationContainer>
);

export default App;

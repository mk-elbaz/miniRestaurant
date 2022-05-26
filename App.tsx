import landing from "./screens/landing";
import reserve from "./screens/reserve";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const App = () => (
	<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen
				name="reserve"
				component={reserve}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="Landing"
				component={landing}
				options={{
					headerShown: false,
				}}
			/>
		</Stack.Navigator>
	</NavigationContainer>
);

export default App;

import {
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import {
    IconButton,
    TextInput,
    BottomNavigation,
    Button,
} from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect, useState } from 'react';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

const Reserve = () => {
    const [search, setSearch] = useState("");
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {

    })

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Name"
                style={{
                    width: 350,
                    height: 25,
                    padding: 12,
                    borderTopRightRadius: 47,
                    borderTopLeftRadius: 47,
                    borderBottomLeftRadius: 47,
                    borderBottomRightRadius: 47,
                    borderWidth: 0.4,
                    backgroundColor: "white",
                    position: "absolute",
                }}
                value={search}
                onChangeText={(text: string) => setSearch(text)}
                underlineColor="transparent"
                activeUnderlineColor="blue"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        flex: 1,
        justifyContent: "center",
    },
    button: {
        backgroundColor: "#f8f9fa",
        padding: 10,
    },
});
export default Reserve;
import {
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from "react-native";
import Form from 'react-native-form';
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
import DatePicker from 'react-native-datepicker';


const Reserve = () => {
    const [date, setDate] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {

    })

    return (
        <View style={styles.container}>
            <Form>
            <DatePicker
        style={{width: 200}}
        date={date}
        mode="date"
        placeholder="select date"
        format="YYYY-MM-DD"
        minDate="2022-05-27"
        maxDate="2023-06-01"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date)=>setDate(date)}
      />
            </Form>
            <TextInput
                placeholder="Name"
                style={styles.textInput}
                value={name}
                onChangeText={(text: string) => setName(text)}
                underlineColor="transparent"
                activeUnderlineColor="blue"
            /><TextInput
                placeholder="Email"
                style={styles.textInput}
                value={email}
                onChangeText={(text: string) => setEmail(text)}
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
    textInput: {
        width: 350,
        height: 25,
        padding: 12,
        borderTopRightRadius: 47,
        borderTopLeftRadius: 47,
        borderBottomLeftRadius: 47,
        borderBottomRightRadius: 47,
        borderWidth: 0.4,
        backgroundColor: "white",
        // position: "absolute",
    },
});
export default Reserve;
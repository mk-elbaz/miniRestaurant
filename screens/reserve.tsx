import {
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from "react-native";
import useForm from 'react-hook-form';
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
import RNPickerSelect from 'react-native-picker-select';
const axios = require("axios");




const Reserve = () => {
    const [dateOfReservation, setDate] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [noOfPersons, setPersons] = useState(0);
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
    })

    const data = {
        "name": name,
        "email": email,
        "phone": phone,
        "noOfPersons": noOfPersons,
        "date": dateOfReservation,
    }

    const submit = async () => {
        console.log(data);
        await axios.post("http://localhost:3000/reserve", data, {
            headers: {
                Accept: "application/json",
            },
        }
        ).then(res => console.log(res)).catch(e => console.log(e))
    }

    return (
        <View style={styles.container}>
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
            /><TextInput
                placeholder="Phone Number"
                style={styles.textInput}
                value={phone}
                onChangeText={(text: string) => setPhone(text)}
                underlineColor="transparent"
                activeUnderlineColor="blue"
            />
            <RNPickerSelect
                placeholder={"select number of persons"}
                onValueChange={(value) => setPersons(value)}
                items={[
                    { label: '1', value: '1' },
                    { label: '2', value: '2' },
                    { label: '3', value: '3' },
                    { label: '4', value: '4' },
                    { label: '5', value: '5' },
                    { label: '6', value: '6' },
                ]}
            >
                <Text>Select number of persons</Text>
            </RNPickerSelect>
            <DatePicker
                style={{ width: 200 }}
                date={dateOfReservation}
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
                onDateChange={(date) => {
                    setDate(date);
                    console.log("aaaa", dateOfReservation);
                }}
            />
            <TouchableOpacity
                onPress={submit}
                style={styles.button}>
                <Text style={styles.text}>submit</Text>
            </TouchableOpacity>

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
    text: {
        color: "black",
        textAlign: "center",
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
import {
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
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


const aboutUs = () => {
    return (

        <ParallaxScrollView
            backgroundColor="#D55828"
            contentBackgroundColor="#131216"
            parallaxHeaderHeight={0}>
            <ImageBackground
                style={{ height: 1000 }}
                source={require("../assets/bckgrnd1-01.png")}>
                <Text style={{
                    fontFamily: "Brush",
                    fontSize: 30,
                    padding: 20,
                    marginTop: 50,
                    color: "white",
                }}>
                    About Us:
                </Text>
                <Text style={{
                    fontFamily: "Brush",
                    fontSize: 22,
                    padding: 20,

                    color: "white",
                }}>
                    “Tasty, delicious, and has me craving more on the first bite.” or even "Juicy, big, loaded with toppings of my choice.", Burger Overflow is known to have entered the burger cuisine market fiercly and silently. Either picking our tender fan favorite "One For All" designed after the famous All Might or even going for the strong tasty blue cheese signature burger "Reaper" you'll always find a way to delighted with the variety of tastes in our menu.
                </Text>
                <Text style={{
                    fontFamily: "Brush",
                    fontSize: 30,
                    padding: 20,
                    marginTop: 50,
                    color: "white",
                }}>
                    Our Mission:
                </Text>
                <Text style={{
                    fontFamily: "Brush",
                    fontSize: 22,
                    padding: 20,

                    color: "white",
                }}>
                    We re-imagine everyday foods made with better ingredients to share love with everyone by providing nourishing delicious foods. This enables us to form a connection with our friends all around town who choose to dine in our restaurants. This makes us understand the consumer better and provide better burgers and service.
                </Text>
                <Text style={{
                    fontFamily: "Brush",
                    fontSize: 30,
                    padding: 20,
                    marginTop: 50,
                    color: "white",
                }}>
                    Find Us on Instagram: burgeroverflow_eg
                </Text>
                <Text style={{
                    fontFamily: "Brush",
                    fontSize: 22,
                    padding: 20,
                    color: "white",
                }}>
                    Instagram: burgeroverflow_eg
                </Text>
            </ImageBackground>


        </ParallaxScrollView>

    )
};
export default aboutUs;
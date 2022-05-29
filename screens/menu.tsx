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
import { useNavigation } from '@react-navigation/native'

const Menu = () => {



    return(
        <View>
            <Text>Hi</Text>
        </View>
    )
}

export default Menu;
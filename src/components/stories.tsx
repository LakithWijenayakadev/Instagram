import * as React from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { Styles } from "../styles/Styles";
import COLORS from '../styles/Colors';


export default function Stories({ ProPicSource }) {
    return (
        <View style={{ alignItems: 'center', paddingVertical: 5 }}>

            <TouchableOpacity style={Styles.storyRing}>
                <View style={Styles.storyOutline}>
                    <View style={Styles.storyProfilePic}>
                        <Image source={ProPicSource} resizeMode='cover' style={Styles.storyProfilePic} ></Image>
                    </View>
                </View>

            </TouchableOpacity>

            <Text style={{ fontSize: 13, color: COLORS.black }}>name</Text>

        </View>
    )
}
import * as React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Styles } from "../styles/Styles";
import COLORS from '../styles/Colors';


export default function Stories() {
    return (
        <View style={{ alignItems: 'center' }}>

            <TouchableOpacity style={Styles.storyRing}>
                <View style={Styles.storyOutline}>
                    <View style={Styles.storyProfilePic}>

                    </View>
                </View>

            </TouchableOpacity>
            
            <Text style={{ fontSize: 13, color: COLORS.black }}>name</Text>

        </View>
    )
}
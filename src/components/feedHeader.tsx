import * as React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { Styles } from "../styles/Styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import COLORS from "../styles/Colors";


export default function FeedHeader() {
    return (
        <View style={Styles.header}>
            <View style={{ flex: 0.8 }}>
                <Text style={Styles.logoFont}>Instagram</Text>
            </View>
            <View style={Styles.headerIcons}>
                <TouchableOpacity style={Styles.headerIconAline}>
                    <MaterialCommunityIcons name="heart-outline" color={COLORS.black} size={30} />

                </TouchableOpacity>
                <TouchableOpacity style={Styles.headerIconAline}>
                    <MaterialCommunityIcons name="facebook-messenger" color={COLORS.black} size={30} />

                </TouchableOpacity>
            </View>
        </View>
    )
}
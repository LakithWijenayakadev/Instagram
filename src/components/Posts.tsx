import * as React from "react";
import { TouchableOpacity, Text, View, Dimensions, Image } from "react-native";
import { Styles } from "../styles/Styles";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Feather from "react-native-vector-icons/Feather";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import sampleProfilePic from './../images/sampleProfilePic.jpg'
import samplePostImage from './../images/sample.jpg'
import Ionicons from "react-native-vector-icons/Ionicons";

import COLORS from "../styles/Colors";

const window = Dimensions.get('window');
export default function Posts() {
    return (
        <View>

            {/* Posts top */}
            <View style={Styles.PostsMainStyle}>
                <View style={{ flex: 0.95, flexDirection: 'row', alignItems: 'center', }}>

                    <View style={Styles.postProfilePic}>
                        <View style={[Styles.postProfilePic, { height: 37, width: 37, backgroundColor: COLORS.white }]}>
                            <View style={[Styles.postProfilePic, { height: 34, width: 34, backgroundColor: COLORS.yellow }]}>
                                <Image source={sampleProfilePic} resizeMode='cover' style={[Styles.postProfilePic, { height: 34, width: 34, }]} ></Image>
                            </View>
                        </View>
                    </View>
                    <Text style={{ marginHorizontal: 8, fontWeight: '600', color: COLORS.black }}>sonyxperia</Text>
                </View>

                <View style={Styles.postTopIcons}>

                    <TouchableOpacity style={Styles.headerIconAline}>
                        <Feather name="more-vertical" color={COLORS.black} size={23} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Post */}
            <View >
                <Image source={samplePostImage} resizeMode='cover' style={Styles.postStyle} ></Image>
            </View>

            {/* Post Like ,share,comment, save */}

            <View style={Styles.PostsButtonstyle}>
                <View style={Styles.postButtonList}>

                    <TouchableOpacity style={Styles.headerIconAline}>
                        <MaterialCommunityIcons name="heart-outline" color={COLORS.black} size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.headerIconAline}>
                        <Feather name="message-circle" color={COLORS.black} size={25} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.headerIconAline}>
                        <MaterialCommunityIcons name="navigation-variant-outline" color={COLORS.black} size={25} />
                    </TouchableOpacity>
                </View>

                <View style={Styles.saveIconPost}>

                    <TouchableOpacity style={Styles.headerIconAline}>
                        <FontAwesome name="bookmark-o" color={COLORS.black} size={25} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* postDetails */}

            <View style={{ paddingBottom: 10, paddingHorizontal: 10 }}>

                {/* First row */}

                <View style={Styles.postDetailsMain}>
                    <View style={{ height: 20, width: 20, backgroundColor: 'red', borderRadius: 100 }}></View>
                    <View style={{ marginHorizontal: 5 }}>
                        <Text style={Styles.postFontRegular}>Liked by <Text style={Styles.postFontBold}>supun_madushanka
                        </Text> and <Text style={Styles.postFontBold}>6,217 others</Text></Text>
                    </View>
                </View>

                {/* Other rows */}

                <View style={Styles.postDetailsMain}>

                    <View style={{ marginHorizontal: 5 }}>
                        <Text style={Styles.postFontRegular}><Text style={Styles.postFontBold}>photographers.team </Text>Awsome video by. @keylenutt - follow him for more awsome content... <Text style={Styles.postmore}>more</Text></Text>
                    </View>
                </View>

            </View>

        </View>
    )
}
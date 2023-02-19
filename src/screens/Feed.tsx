import React from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet,FlatList, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from "../styles/Colors";
import { Styles } from "../styles/Styles";
import Stories from "../components/stories";
import FeedHeader from "../components/feedHeader";
import { useDispatch, useSelector } from "react-redux";


const window = Dimensions.get('window');




function Feed(): JSX.Element {

    const storyList = useSelector(state => state.StoryList.storyList)
   
    const dispatch = useDispatch()

    return (
        <SafeAreaView style={{backgroundColor:COLORS.white}}>

            {/* Header */}
            <FeedHeader />


            <ScrollView>

                {/* Story */}
                <View style={Styles.storyContainer}>

                <FlatList
                    contentContainerStyle={{ }}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={storyList}
                    renderItem={({ item }) => <Stories  />}
                />
                  
                </View>



            </ScrollView>




        </SafeAreaView>
    );
}



export default Feed;
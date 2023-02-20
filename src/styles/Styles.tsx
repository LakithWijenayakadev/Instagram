import { StyleSheet, Dimensions } from 'react-native';
import COLORS from './Colors';

const window = Dimensions.get('window');

export const Styles = StyleSheet.create({

    // Feed

    header: {
        paddingHorizontal: 15,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderColor: COLORS.borders
    },
    logoFont: {
        fontSize: 24,
        color: COLORS.black,
        fontFamily: 'Fontspring-DEMO-blue_vinyl_bold_ps_ot',
        height: 60,
        verticalAlign: 'middle'
    },
    headerIcons: {
        flex: 0.24,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    headerIconAline: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    storyContainer: {
        borderBottomWidth: 0.5,
        borderColor: COLORS.borders
    },

    // story styles

    storyRing: {
        backgroundColor: COLORS.red,
        height: (window.width) * 0.16,
        width: (window.width) * 0.16,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        marginHorizontal: 5
    },
    storyOutline: {
        backgroundColor: COLORS.white,
        height: (window.width) * 0.15,
        width: (window.width) * 0.15,
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    storyProfilePic: {
        backgroundColor: COLORS.white,
        height: (window.width) * 0.14,
        width: (window.width) * 0.14,
        borderRadius: 100
    },
    // Posts
    PostsMainStyle: {
        padding: 7,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderColor: COLORS.borders
    },
    postProfilePic: {
        backgroundColor: COLORS.red,
        height: 40,
        width: 40,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center'
    },
    postTopIcons: {
        flex: 0.05,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    postStyle: {
        width: (window.width) * 1,
        height: (window.width) * 1
    },
    saveIconPost: {
        flex: 0.1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    PostsButtonstyle: {
        paddingHorizontal: 7,
        paddingVertical: 9,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderBottomWidth: 0.5,
        // borderColor: COLORS.borders
    },
    postFontRegular: {
        color: COLORS.black,
        fontSize: 13
    },
    postFontBold: {
        color: COLORS.black,
        fontSize: 13,
        fontWeight: '700'
    },
    postmore: {

        fontSize: 13,
        color: COLORS.grayFont
    },
    postButtonList: {
        flex: 0.26,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    postDetailsMain: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 3
    }
});
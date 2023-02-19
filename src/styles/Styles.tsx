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
        // alignItems: 'center',
        // flexDirection: 'row'
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
        marginHorizontal:5
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
        backgroundColor: "red",
        height: (window.width) * 0.14,
        width: (window.width) * 0.14,
        borderRadius: 100
    }
});
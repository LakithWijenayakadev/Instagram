import { createSlice } from '@reduxjs/toolkit';
import sampleProfilePic from './../src/images/sampleProfilePic.jpg'
import sampleProfilePic2 from './../src/images/Profile.jpg'
import sampleProfilePic3 from './../src/images/Profile2.jpg'
import sampleProfilePic4 from './../src/images/Profile3.jpg'
import sampleProfilePic5 from './../src/images/ProfileMy.jpg'

const initialState = {

    storyList: [

        {
            id: 1,
            Image: sampleProfilePic2

        },
        {
            id: 2,
            Image: sampleProfilePic
        },
        {
            id: 3,
            Image: sampleProfilePic3
        },
        {
            id: 4,
            Image: sampleProfilePic4
        },
        {
            id: 5,
            Image: sampleProfilePic5
        },
        {
            id: 6,
            Image: sampleProfilePic3
        },
        {
            id: 7,
            Image: sampleProfilePic4
        },
        {
            id: 8,
            Image: sampleProfilePic2

        },

    ]

}

export const StoryListSlice = createSlice({
    name: 'StoryList',
    initialState,

});

export const { } = StoryListSlice.actions
export default StoryListSlice.reducer
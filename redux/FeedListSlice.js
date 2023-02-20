import { createSlice } from '@reduxjs/toolkit';
import sampleProfilePic from './../src/images/sampleProfilePic.jpg'
import sampleProfilePic2 from './../src/images/Profile.jpg'
import sampleProfilePic3 from './../src/images/Profile2.jpg'
import sampleProfilePic4 from './../src/images/Profile3.jpg'
import sampleProfilePic5 from './../src/images/ProfileMy.jpg'
import animal from './../src/images/animal.jpg'
import nature from './../src/images/natureImage_1.jpg'
import people from './../src/images/people_1.jpg'

const initialState = {

    feedList: [

        {
            id: 1,
            Image: sampleProfilePic2,
            Story: true,
            PostImage: animal,
            likeStatus: false

        },
        {
            id: 2,
            Image: sampleProfilePic,
            Story: true,
            PostImage: nature,
            likeStatus: false
        },
        {
            id: 3,
            Image: sampleProfilePic3,
            Story: true,
            PostImage: people,
            likeStatus: false
        },
        {
            id: 4,
            Image: sampleProfilePic4,
            Story: true,
            PostImage: animal,
            likeStatus: false
        },
        {
            id: 5,
            Image: sampleProfilePic5,
            Story: true,
            PostImage: people,
            likeStatus: false
        },
        {
            id: 6,
            Image: sampleProfilePic3,
            Story: true,
            PostImage: nature,
            likeStatus: false
        },
        {
            id: 7,
            Image: sampleProfilePic4,
            Story: true,
            PostImage: animal,
            likeStatus: false
        },
        {
            id: 8,
            Image: sampleProfilePic2,
            Story: true,
            PostImage: people,
            likeStatus: false

        },

    ]
}

export const FeedListSlice = createSlice({
    name: 'FeedList',
    initialState,
    reducers: undefined
});

export const { } = FeedListSlice.actions
export default FeedListSlice.reducer
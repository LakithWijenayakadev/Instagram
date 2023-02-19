import { createSlice } from '@reduxjs/toolkit';


const initialState = {

    storyList:[
      
        {
            id:1,
    
        },
        {
            id:2
        },
       
       
    ]

}

export const StoryListSlice = createSlice({
    name: 'StoryList',
    initialState,

});

export const { } = StoryListSlice.actions
export default StoryListSlice.reducer
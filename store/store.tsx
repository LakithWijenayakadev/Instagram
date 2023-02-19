import { configureStore } from '@reduxjs/toolkit';


import FeedListReducer from '../redux/FeedListSlice';
import StoryListReducer from '../redux/StoryListSlice';

export default configureStore({
  reducer: {

    FeedList: FeedListReducer,
    StoryList: StoryListReducer
  }
})

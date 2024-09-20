import { configureStore } from '@reduxjs/toolkit';
import subRedditSlice from './subRedditSlice';
import redditReducer from './redditSlice'

const store =  configureStore({
  reducer:{
    subreddits: subRedditSlice,
    reddit: redditReducer
  }
});


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;
export default store
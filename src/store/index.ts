import { configureStore } from '@reduxjs/toolkit';
import subRedditSlice from './subRedditSlice';

const store =  configureStore({
  reducer:{
    subreddits: subRedditSlice
  }
});


export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;
export default store
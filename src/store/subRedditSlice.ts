import { AppDispatch, RootState } from ".";
import { getSubreddits, subreddit_type } from "../api/redditApi"
 import { createSlice } from "@reduxjs/toolkit";

interface SubredditsState {
    subreddits: Array<subreddit_type>; // Tipar mejor si sabes la estructura del subreddit
    error: boolean;
    isLoading: boolean;
  }

const initialState = {
    subreddits: [],
    error: false,
    isLoading: false,
  };
  

const subRedditSlice = createSlice({
    name:'subreddits',
    initialState,
    reducers: {
        startGetSubreddits(state:SubredditsState){
            state.isLoading = true
            state.error = false
        },
        getSubredditsSuccess(state, action) {
          state.isLoading = false;
          state.subreddits = action.payload;
        },
        getSubredditsFailed(state) {
          state.isLoading = false;
          state.error = true;
        },
    }
})

export const {
    getSubredditsFailed,
    getSubredditsSuccess,
    startGetSubreddits,
  } = subRedditSlice.actions;

export default subRedditSlice.reducer

export const fetchSubreddits = () => async (dispatch:AppDispatch) => {
    try {
        dispatch(startGetSubreddits());
        const subreddits = await getSubreddits();
        dispatch(getSubredditsSuccess(subreddits));
      } catch (error) {
        dispatch(getSubredditsFailed());
        console.error(error)
      }
}

export const selectSubreddits = (state: RootState) => state.subreddits.subreddits



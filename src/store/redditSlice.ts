import { createSlice,createSelector } from "@reduxjs/toolkit";
import { getSubredditPosts, subreddit_type } from "../api/redditApi";
import { AppDispatch } from ".";

const initialState = {
    posts: [],
    error:false,
    isLoading:false,
    searchTerm: '',
    selectedSubreddit:'r/pic/'
}


const redditSlice = createSlice({
    name:'redditPosts',
    initialState,
    reducers:{
        setPosts(state,action){
            state.posts = action.payload
        },
        startGetPosts(state){
            state.isLoading = true
            state.error = false
        },
        getPostsSuccess(state,action){
            state.isLoading = false
            state.posts = action.payload
        },
        getPostsFailed(state){
            state.error = true
            state.isLoading = false
        },
        setSearchTerm(state, action) {
            state.searchTerm = action.payload;
          },
        setSelectedSubreddit(state, action) {
            state.selectedSubreddit = action.payload;
            state.searchTerm = '';
          },
    }
})

export const{
    setPosts,
    getPostsFailed,
    getPostsSuccess,
    startGetPosts,
    setSearchTerm,
    setSelectedSubreddit,
} = redditSlice.actions

export default redditSlice.reducer


// This is a Redux Thunk that gets posts from a subreddit.
export const fetchPosts = (subreddit:subreddit_type) => async (dispatch:AppDispatch) => {
    try {
      dispatch(startGetPosts());
      const posts = await getSubredditPosts(subreddit);
  
      // We are adding showingComments and comments as additional fields to handle showing them when the user wants to. We need to do this because we need to call another API endpoint to get the comments for each post.
      const postsWithMetadata = posts.map((post) => ({
        ...post,
        showingComments: false,
        comments: [],
        loadingComments: false,
        errorComments: false,
      }));
      dispatch(getPostsSuccess(postsWithMetadata));
    } catch (error) {
        console.error(error)
      dispatch(getPostsFailed());
    }
  };
  

  const selectPosts = (state) => state.reddit.posts;
const selectSearchTerm = (state) => state.reddit.searchTerm;
export const selectSelectedSubreddit = (state) =>
  state.reddit.selectedSubreddit;

export const selectFilteredPosts = createSelector(
  [selectPosts, selectSearchTerm],
  (posts, searchTerm) => {
    if (searchTerm !== '') {
      return posts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return posts;
  }
);
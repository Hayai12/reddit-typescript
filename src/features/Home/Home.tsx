import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {
    fetchPosts,
    selectFilteredPosts,
  } from '../../store/redditSlice';
import { AppDispatch, RootState } from "../../store";
import { post } from "../../types/types";



const Home = () =>{
  const reddit = useSelector((state:RootState) => state.reddit);
  const { selectedSubreddit } = reddit;
  const posts = useSelector(selectFilteredPosts);
  const dispatch:AppDispatch = useDispatch();

  
    useEffect(()=>{
        dispatch(fetchPosts(selectedSubreddit))
        console.log(selectedSubreddit)
    },[dispatch, selectedSubreddit])

    return(
        <div className="flex flex-col  shadow-lg w-3/4 space-y-4 p-4 m-4 bg-zinc-800">
        {posts.map((post:post) => (
          <article
            key={post.id}
            className="bg-white rounded-lg shadow-lg p-4 w-full "
          >
            <div className="flex items-start space-x-4">
              {/* Voting Section */}
              <div className="flex flex-col items-center">
                <button
                  type="button"
                  className="icon-action-button up-vote text-gray-500 hover:text-red-500"
                  aria-label="Up vote"
                >
                  ⬆️
                </button>
                <p className="text-sm font-bold text-gray-800">
                  {post.ups || 0}
                </p>
                <button
                  type="button"
                  className="icon-action-button down-vote text-gray-500 hover:text-blue-500"
                  aria-label="Down vote"
                >
                  ⬇️
                </button>
              </div>
  
              {/* Post Content Section */}
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
  
                {/* Image Section */}
                {post.url && (
                  <div className="my-3">
                    <img
                      src={post.url}
                      alt=""
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  </div>
                )}
  
                {/* Post Details */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="flex items-center space-x-2">
                    <img
                      src={`https://api.adorable.io/avatars/25/${post.author}`}
                      alt={`${post.author}`}
                      className="rounded-full w-6 h-6"
                    />
                    <span>{post.author}</span>
                  </span>
                  <span>{new Date(post.created_utc * 1000).toLocaleDateString()}</span>
                  <span className="flex items-center space-x-1">
                    <button
                      type="button"
                      className="icon-action-button"
                      aria-label="Show comments"
                    >
                      💬
                    </button>
                    <span>{post.num_comments} comments</span>
                  </span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    )

}
export default Home
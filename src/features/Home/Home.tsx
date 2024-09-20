import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import {
    fetchPosts,
    selectFilteredPosts,
    setSearchTerm,
  } from '../../store/redditSlice';



const Home = () =>{
    const reddit = useSelector((state) => state.reddit);
  const { isLoading, error, searchTerm, selectedSubreddit } = reddit;
  const posts = useSelector(selectFilteredPosts);
  const dispatch = useDispatch();

  
    useEffect(()=>{
        dispatch(fetchPosts(selectedSubreddit))
    },[selectedSubreddit])

    return(
        <>
        {posts.map((post,index)=>(
            <div className="w-2/3" key={post.id}>
                {post.name}
            </div>
        ))}
        </>
    )

}
export default Home
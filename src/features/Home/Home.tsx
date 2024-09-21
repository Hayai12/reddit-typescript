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
        <div className="flex flex-col w-3/4 space-y-4 m-4 bg-zinc-800" >
        {posts.map((post,index)=>(
            <div className="bg-white rounded-lg p-4 text-black" key={post.id}>
                {post.title}
                <div>
                    <img src={post.url} alt="" />
                    {post.author}
                </div>
            </div>
        ))}
        </div>
    )

}
export default Home
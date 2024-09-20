import React, { useEffect } from 'react'
import { fetchSubreddits, selectSubreddits } from '../../store/subRedditSlice'
import { useDispatch, useSelector } from 'react-redux'
import { subreddit_type } from '../../api/redditApi'
import { AppDispatch } from '../../store'
import { setSelectedSubreddit } from '../../store/redditSlice'

const Subreddits = () => {
    const dispatch = useDispatch<AppDispatch>()
    const subreddits  = useSelector(selectSubreddits)
    console.log(subreddits)

    useEffect(() => {
        dispatch(fetchSubreddits())
    },[dispatch])

  return (
    
    <div className='flex flex-col items-center font-semibold cursor-pointer w-full p-4 border rounded-lg shadow-md bg-gray-800'>
    <ul className='list-none w-full'>
        {subreddits.map((subreddit:subreddit_type) => (
            <li className='flex m-2 w-full' key={subreddit.id}>
                <img width={50} height={50} className='rounded-full mr-1'
                src={
                  subreddit.icon_img ||
                  `https://api.adorable.io/avatars/25/${subreddit.display_name}`
                }
                alt={`${subreddit.display_name}`}
              />
                <button className='w-full p-2 text-left hover:bg-gray-200 transition'
                onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}
                >
                    {subreddit.display_name}
                </button>
            </li>
        ))}
    </ul>
    </div>
  )
}

export default Subreddits

import React, { useEffect } from 'react'
import { fetchSubreddits, selectSubreddits } from '../../store/subRedditSlice'
import { useDispatch, useSelector } from 'react-redux'
import { subreddit_type } from '../../api/redditApi'
import { AppDispatch } from '../../store'

const Subreddits = () => {
    const dispatch = useDispatch<AppDispatch>()
    const subreddits  = useSelector(selectSubreddits)
    console.log(subreddits)

    useEffect(() => {
        dispatch(fetchSubreddits())
    },[dispatch])

  return (
    <ul>
        {subreddits.map((subreddit:subreddit_type) => (
            <li key={subreddit.id}>
                <button>
                    {subreddit.display_name}
                </button>
            </li>
        ))}
    </ul>
  )
}

export default Subreddits

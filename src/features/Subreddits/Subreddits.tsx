import { useEffect } from 'react'
import { fetchSubreddits, selectSubreddits } from '../../store/subRedditSlice'
import { useDispatch, useSelector } from 'react-redux'
import { subreddit_type } from '../../api/redditApi'
import { AppDispatch } from '../../store'
import { setSelectedSubreddit } from '../../store/redditSlice'

const Subreddits = () => {
    const dispatch = useDispatch<AppDispatch>()
    const subreddits  = useSelector(selectSubreddits)

    useEffect(() => {
        dispatch(fetchSubreddits())
    },[dispatch])

  return (
    
    <div className='flex flex-col m-10 bg-zinc-800 shadow-lg items-center rounded-lg w-1/4'>
    <h2 className='text-lg font-bold mb-4'>Subreddits</h2>
    <ul className='space-y-4 w-full'>
        {subreddits.map((subreddit:subreddit_type) => (
            <li className='flex items-center p-2 hover:bg-zinc-700 rounded-lg cursor-pointer w-full ' key={subreddit.id} onClick={() => dispatch(setSelectedSubreddit(subreddit.url))}>
                <img width={50} height={50} className='rounded-full mr-3'
                src={
                  subreddit.icon_img ||
                  `https://api.adorable.io/avatars/25/${subreddit.display_name}`
                }
                alt={`${subreddit.display_name}`}
              />
          
          <span className="text-2xl font-medium">{subreddit.display_name}</span>
            </li>
        ))}
    </ul>
    </div>
  )
}

export default Subreddits

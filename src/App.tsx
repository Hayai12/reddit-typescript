import './App.css'
import Home from './features/Home/Home'
import SearchBar from './features/SearchBar/SearchBar'
import Subreddits from './features/Subreddits/Subreddits'

function App() {

  return (
    <div className='flex flex-col w-full bg-zinc-800'>
    <SearchBar/>
    <div className='flex flex-row '>
     <Home/>
     <Subreddits/>
     </div>
    </div>
  )
}

export default App

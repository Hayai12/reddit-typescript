import './App.css'
import Home from './features/Home/Home'
import Subreddits from './features/Subreddits/Subreddits'

function App() {

  return (
    <div className='flex min-h-screen bg-zinc-900'>
     <Home/>
     <Subreddits/>
    </div>
  )
}

export default App

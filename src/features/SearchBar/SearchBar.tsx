import  { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchTerm } from '../../store/redditSlice'
import { RootState } from '../../store'

const SearchBar = () => {
    const [searchTermLocal, setSearchTermLocal] = useState('')
    const searchTerm = useSelector((state:RootState)=> state.reddit.searchTerm)
    const dispatch = useDispatch()


const onSearchTermChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value
    setSearchTermLocal(newSearchTerm)
    dispatch(setSearchTerm(newSearchTerm))

}

useEffect(()=>{
    setSearchTermLocal(searchTerm)
},[searchTerm])



const onSearchTermSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(setSearchTerm(searchTermLocal))
}

return(
    <header className='bg-zinc-800 shadow-lg h-20 w-auto flex flex-col justify-center items-center m-10'>
        <div className='flex space-x-4 items-center w-auto'>
        <p className="text-white text-2xl w-80 font-bold">Reddit Minimal</p>
            <form className='flex space-x-2 w-full' onSubmit={onSearchTermSubmit}>
                <input 
                className="p-2 mr-20 w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-700 text-white placeholder-gray-400"
                type='text'
                placeholder='search'
                value={searchTermLocal}
                onChange={onSearchTermChange}
                />
            </form>
        </div>
    </header>
)

}

export default SearchBar
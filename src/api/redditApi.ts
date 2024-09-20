export interface subreddit_type{
    id: string
    name: string
    url: string
    data: []
    display_name:string
}

export const getSubreddits = async () => {
    const response = await fetch('https://www.reddit.com/subreddits.json')
    const data = await response.json()
    return data.data.children.map((subreddit:subreddit_type) => subreddit.data)
}




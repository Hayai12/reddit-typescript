import { post } from "../types/types"

export interface subreddit_type{
    id: string
    name: string
    url: string
    data: []
    display_name:string
    icon_img:string
    primary_color: string
}

export const API_ROOT = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit:string) => {
  const response = await fetch(`${API_ROOT}${subreddit}.json`);
  const json = await response.json();

  return json.data.children.map((post:post) => post.data);
};

export const getSubreddits = async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`);
  const json = await response.json();

  return json.data.children.map((subreddit:subreddit_type) => subreddit.data);
};

export const getPostComments = async (permalink:string) => {
  const response = await fetch(`${API_ROOT}${permalink}.json`);
  const json = await response.json();

  return json[1].data.children.map((subreddit:subreddit_type) => subreddit.data);
};



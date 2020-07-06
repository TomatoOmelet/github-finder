import axios from 'axios'

let github_token;
if(process.env.NODE_ENV !== "production"){
  github_token = process.env.REACT_APP_GITHUB_TOKEN
}
else{
  github_token = process.env.GITHUB_TOKEN
}

const github = axios.create({
  baseURL: 'https://api.github.com',
  timeout: 1000,
  headers: { Authorization: github_token}
})

export const searchUsersFromGithub = async text => {
  const res = await github.get(`/search/users?q=${text}`)
  return res.data.items
}

export const getUserAndReposFromGithub = async username => {
  const repos = await github.get(
    `/users/${username}/repos?per_page=5&sort=created:asc?`
  )
  const user = await github.get(`/users/${username}?`)
  return { user: user.data, repos: repos.data }
}

export default github
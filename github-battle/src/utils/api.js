import axios from 'axios'

const id = "6c27df399bafa74dec59";
const sec = "72f06c052bf1c8477174a99dc59544a71f92e97b";
const API_KEY = "?client_id=" + id + "&client_secret=" + sec

const getProfile = (username) => {
  return axios.get(`https://api.github.com/users/${username}${API_KEY}`)
    .then(res => {
      // an object of user profile
      console.log(res.data)
    })
}

const getRepos = (username) => {
  return axios.get(`https://api.github.com/users/${username}/repos${API_KEY}&per_page=100`)
}

const getStarCount = (username) => {
  return getRepos(username).then(repos => {
    return repos.reduce((count, repo)=>{
      return count + repo.stargazers_count
    }, 0)
  })
}

const calculateScore = (profile, repos) => {
  const followers = profile.followers
  const totalStars = getStarCount(repos)
  return followers*3 + totalStars
}

const getUserData = (player) => {
  return axios.all([
    getProfile(player),
    getRepos(player)
  ]).then(res => {
    const profile = res[0]
    const repos = res[1]
    return {
      profile,
      score: calculateScore(profile, repos)
    }
  })
}

const sortPlayers = (players) => {
  return players.sort((a, b) => b.score - a.score)
}

const handleErros = (err) => {
  console.warn(err)
  return null
}

export const api = {
  fetchPopularRepos: function(language){
    const encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI)
      .then(res => {
        return res.data.items
      }, err => {
        console.log(err)
      })
  },
  battle: function(players){
    return axios.all(players.map( player => getUserData(player)))
      .then(sortPlayers)
      .catch(handleErros)
  }
}
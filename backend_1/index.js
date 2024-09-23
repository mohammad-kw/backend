require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000

const githubData = {
    "login": "mohammad-kw",
    "id": 121497353,
    "node_id": "U_kgDOBz3nCQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/121497353?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/mohammad-kw",
    "html_url": "https://github.com/mohammad-kw",
    "followers_url": "https://api.github.com/users/mohammad-kw/followers",
    "following_url": "https://api.github.com/users/mohammad-kw/following{/other_user}",
    "gists_url": "https://api.github.com/users/mohammad-kw/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/mohammad-kw/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/mohammad-kw/subscriptions",
    "organizations_url": "https://api.github.com/users/mohammad-kw/orgs",
    "repos_url": "https://api.github.com/users/mohammad-kw/repos",
    "events_url": "https://api.github.com/users/mohammad-kw/events{/privacy}",
    "received_events_url": "https://api.github.com/users/mohammad-kw/received_events",
    "type": "User",
    "site_admin": false,
    "name": "mohammad khachrod wala",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "full stack web developer",
    "twitter_username": null,
    "public_repos": 5,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2022-12-27T12:51:49Z",
    "updated_at": "2024-09-22T07:24:53Z"
  }


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/instagram', (req, res) => {
    res.send('mr.saifee__')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
// app.listen(process.env.PORT, () => {
//     console.log(`Example app listening on port ${port}`)
// })
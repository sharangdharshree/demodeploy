require("dotenv").config();
const express = require("express");
const app = express();

const githubData = {
  login: "sharangdharshree",
  id: 70096201,
  node_id: "MDQ6VXNlcjcwMDk2MjAx",
  avatar_url: "https://avatars.githubusercontent.com/u/70096201?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/sharangdharshree",
  html_url: "https://github.com/sharangdharshree",
  followers_url: "https://api.github.com/users/sharangdharshree/followers",
  following_url:
    "https://api.github.com/users/sharangdharshree/following{/other_user}",
  gists_url: "https://api.github.com/users/sharangdharshree/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/sharangdharshree/starred{/owner}{/repo}",
  subscriptions_url:
    "https://api.github.com/users/sharangdharshree/subscriptions",
  organizations_url: "https://api.github.com/users/sharangdharshree/orgs",
  repos_url: "https://api.github.com/users/sharangdharshree/repos",
  events_url: "https://api.github.com/users/sharangdharshree/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/sharangdharshree/received_events",
  type: "User",
  site_admin: false,
  name: "Sharangdhar Shree",
  company: null,
  blog: "https://www.linkedin.com/in/sharangdharshree/",
  location: "India",
  email: null,
  hireable: null,
  bio: null,
  twitter_username: "Sharangdhar7984",
  public_repos: 5,
  public_gists: 0,
  followers: 1,
  following: 5,
  created_at: "2020-08-23T11:19:12Z",
  updated_at: "2024-06-26T04:56:46Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("sharangdhar7984");
});

app.get("/login", (req, res) => {
  res.send("use your credentials ");
});

app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

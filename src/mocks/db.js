const autoCompleteSearchDash = require("./data/searchResults.json");
const profile = require("./data/profile.json");
const posts = require("./data/posts.json");
const imgtitle = require("./data/imgtitle.json")
const profilePosts = require('./data/profilePosts.json')
const login=require('./data/login.json')
module.exports = () => ({
  profile,    
  autoCompleteSearchDash,
  posts,
  profilePosts,
  imgtitle,
  login
});
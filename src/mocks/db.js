const autoCompleteSearchDash = require("./data/searchResults.json");
const profile = require("./data/db.json");
const posts= require("./data/posts.json");
const dashBoard= require("./data/dashBoard.json");
const features=require("./data/features.json");
const activity=require("./data/activity.json");
const createPost = require("./data/createPost.json");
const interests = require("./data/interests.json");
 
 
module.exports = () => ({
  profile,
  autoCompleteSearchDash,
  posts,
  dashBoard,
  features,
  activity,
  createPost,
  interests,
});
 


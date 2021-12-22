const autoCompleteSearchDash = require("./data/searchResults.json");
const userData = require("./data/db.json");
const posts= require("./data/posts.json");
const features=require("./data/features.json");
const activity=require("./data/activity.json");
module.exports = () => ({
  userData,    
  autoCompleteSearchDash,
  posts,
  features,
  activity
});
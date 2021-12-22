const autoCompleteSearchDash = require("./data/searchResults.json");
const profile = require("./data/db.json");
const posts= require("./data/posts.json");
const features=require("./data/features.json");
const activity=require("./data/activity.json");
module.exports = () => ({
  profile,    
  autoCompleteSearchDash,
  posts,
  features,
  activity
});
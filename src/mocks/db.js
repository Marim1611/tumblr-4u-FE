const autoCompleteSearchDash = require("./data/searchResults.json");
const profile = require("./data/db.json");
const posts= require("./data/posts.json");
module.exports = () => ({
  profile,    
  autoCompleteSearchDash,
  posts
});
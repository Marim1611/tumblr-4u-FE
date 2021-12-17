const autoCompleteSearchDash = require("./data/searchResults.json");
const userData = require("./data/db.json");
const posts= require("./data/posts.json");
module.exports = () => ({
  userData,    
  autoCompleteSearchDash,
  posts
});
const autoCompleteSearchDash = require("./data/searchResults.json");
const profile = require("./data/db.json");
const posts= require("./data/posts.json");
const dashBoard= require("./data/dashBoard.json");
module.exports = () => ({
  profile,    
  autoCompleteSearchDash,
  posts,
  dashBoard
});
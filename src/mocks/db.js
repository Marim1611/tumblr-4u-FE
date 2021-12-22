const autoCompleteSearchDash = require("./data/searchResults.json");
const profile = require("./data/db.json");
const posts = require("./data/posts.json");
const createPost = require("./data/createPost.json");
const interests = require("./data/interests.json");
module.exports = () => ({
  profile,
  autoCompleteSearchDash,
  posts,
  createPost,
  interests,
});

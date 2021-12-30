const autoCompleteSearchDash = require("./data/searchResults.json");
 
const posts = require("./data/posts.json");
const dashboard  = require("./data/dashBoard.json");
const features = require("./data/features.json");
const activity = require("./data/activity.json");
const create_post = require("./data/createPost.json");
const imageUpload = require("./data/imageUpload.json");
const getInterestsFromUser = require("./data/interests.json");
const ranBlogs = require("./data/checkoutBlogs.json");
const ranPosts = require("./data/randomPosts.json");
const notes = require("./data/notes.json"); 
const like_press = require("./data/like_press.json")
const comment = require("./data/comment.json")
const reblog_post = require("./data/reblog_post.json")
const blog= require("./data/blog.json");
const follow= require("./data/follow.json");
const unfollow= require("./data/unfollow.json");
const updateColor= require("./data/updateColor.json");
const profile = require("./data/db.json");
const profilePosts= require("./data/profilePosts.json");
const imgtitle = require("./data/imgtitle.json")
const login=require('./data/login.json')
 
module.exports = () => ({
  autoCompleteSearchDash,
  posts,
  dashboard,
  features,
  activity,
  create_post,
  imageUpload,
  getInterestsFromUser,
  ranBlogs,
  ranPosts,
  unfollow,
  notes,
  like_press,
  comment,
 
  reblog_post,
 
  blog,
  follow,updateColor,
  profile,
  profilePosts,
  imgtitle,
  login
 
});

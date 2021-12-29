import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { getField, updateField } from 'vuex-map-fields';
import Browser from '../mocks/browser'
 

Vue.use(Vuex);

export const store = new Vuex.Store({

    strict: true,
    state: {
      status: "",
      msg:"",
        token: localStorage.getItem('token') || "",
      user: {
        email: "",
        password: "",
        blogname:"", 
        id:"",
        primaryBlogId:"",
        blogsId: [],
        blockedBlogsId: [],
        },
        age:0,
        // we need to replace this with bodyColor in DB as each user has his theme color
       
         homeThemeIndex:0,
        homeTheme: [ 

          {backgroundColor: '#001935',fontColor:'white', cardColor:'#5c7e97' ,fontColor2:'#1A314D', fontStyle: 'Helvetica', focused:'cyan',shadow:'rgb(163, 162, 162)'},
          {backgroundColor: 'linear-gradient(to top right, #ffff99 0%, #ffcc99 100%)',fontColor:'#840000', cardColor:'linear-gradient(to top right, #ffff99 0%, #cc3300 100%)' ,fontColor2:'white', fontStyle: 'Helvetica', focused:'#840000',shadow:'rgb(163, 162, 162)'},
          {backgroundColor: 'black',fontColor:'lime', cardColor:'#222222',fontColor2:'black', fontStyle: 'Times New Roman',focused:'#64FF00',shadow:'#273224'},
          {backgroundColor: 'linear-gradient(to top left, #33ccff 0%, #ff99cc 100%)',fontColor:'white', cardColor:'linear-gradient(to bottom, #3399ff 0%, #ff99cc 100%)' ,fontColor2:'#1A314D', fontStyle: 'Helvetica', focused:'pink',shadow:'rgb(163, 162, 162)'},
          {backgroundColor: 'black',fontColor:'#ff6400', cardColor:'#221000', fontColor2:'black',fontStyle: 'Lucida Console', focused:'#ff6400',shadow:'#321600'},
          {backgroundColor: '#1A2735',fontColor:'#BFBFBF', cardColor:'#36465D', fontColor2:'#BFBFBF',fontStyle: 'Fantasy',focused:'#49A9EE',shadow:'#273224'},
          {backgroundColor: 'black',fontColor:'#CF43ED', cardColor:'#0C0C0C',fontColor2:'#CF43ED', fontStyle: 'Garamond',focused:'#CF43ED',shadow:'#16131b'}, 
          {backgroundColor: '#1a1a00',fontColor:'#ffff66', cardColor:'#808000',fontColor2:'#1a1a00', fontStyle: 'Georgia', focused:'#1a1a00',shadow:'#b8d15c'}, 
 
              
 
        ]      , 
        exploreCards:[{
            tag:'photography',
            color:'salmon',
            imgs:['https://64.media.tumblr.com/24df9cff9e69d1d44fa04a3ddc3d9cd6/71b567e6ee69be1a-3e/s400x600/ac34cf5e3182ce4026554369a0b232fd999e4b2e.jpg','https://64.media.tumblr.com/72424fd76f4e4d8a560d7b441a1cd4a2/00aac923bd3df1f9-74/s400x600/c3fb7836bae4669cb89775078f05763b7cbe1d06.jpg','https://64.media.tumblr.com/43e40c52989b17d40c35fa6670ea0003/00aac923bd3df1f9-6d/s400x600/b86103a8e75504ac924a4ae5c2a80ae27bcb918e.jpg','https://64.media.tumblr.com/7ed22734280b98b5f077f207c74f007a/00aac923bd3df1f9-2c/s400x600/e4691d822958bf32606fcee164b532d76a87686c.jpg']
        },
        {
            tag:'cat',
            color:'peru',
            imgs:['https://64.media.tumblr.com/fac5c6a2db42277881f503777f2c197e/37d6b92c3301c2d7-37/s250x250_c1/410a950704b97536e6433c8e919ae7c03b6d6211.jpg','https://64.media.tumblr.com/484b480818fa3bc687410bef3efa5316/ffbfeafe5f8cb1cb-06/s250x250_c1/b2e967b99097633e591b9c866b46c1a184c102ea.jpg']
        },
        {
            tag:'trees',
            color:'teal',
            imgs:['https://64.media.tumblr.com/b5358fc009466df1bacb981196f3a07b/cd8594cf82ba4ed7-a8/s250x250_c1/29ed4459137544a163e725a95c5ae2f405be251d.jpg','https://64.media.tumblr.com/54bd1594edf5f304e0ece685a5ad35d8/00aac923bd3df1f9-32/s400x600/b4b682389068c5c9bacc260991af17d2692e8299.jpg','https://64.media.tumblr.com/d6a8e57141a539d2a56412ff65045fdb/00aac923bd3df1f9-a5/s400x600/4ce247d9edb1a38e18428218ae20a5ee7de32c0a.jpg']
        },{
            tag:'photography',
            color:'salmon',
            imgs:['https://64.media.tumblr.com/24df9cff9e69d1d44fa04a3ddc3d9cd6/71b567e6ee69be1a-3e/s400x600/ac34cf5e3182ce4026554369a0b232fd999e4b2e.jpg','https://64.media.tumblr.com/72424fd76f4e4d8a560d7b441a1cd4a2/00aac923bd3df1f9-74/s400x600/c3fb7836bae4669cb89775078f05763b7cbe1d06.jpg','https://64.media.tumblr.com/43e40c52989b17d40c35fa6670ea0003/00aac923bd3df1f9-6d/s400x600/b86103a8e75504ac924a4ae5c2a80ae27bcb918e.jpg','https://64.media.tumblr.com/7ed22734280b98b5f077f207c74f007a/00aac923bd3df1f9-2c/s400x600/e4691d822958bf32606fcee164b532d76a87686c.jpg']
        },
        {
            tag:'cat',
            color:'peru',
            imgs:['https://64.media.tumblr.com/fac5c6a2db42277881f503777f2c197e/37d6b92c3301c2d7-37/s250x250_c1/410a950704b97536e6433c8e919ae7c03b6d6211.jpg','https://64.media.tumblr.com/484b480818fa3bc687410bef3efa5316/ffbfeafe5f8cb1cb-06/s250x250_c1/b2e967b99097633e591b9c866b46c1a184c102ea.jpg']
        },
        {
            tag:'trees',
            color:'teal',
            imgs:['https://64.media.tumblr.com/b5358fc009466df1bacb981196f3a07b/cd8594cf82ba4ed7-a8/s250x250_c1/29ed4459137544a163e725a95c5ae2f405be251d.jpg','https://64.media.tumblr.com/54bd1594edf5f304e0ece685a5ad35d8/00aac923bd3df1f9-32/s400x600/b4b682389068c5c9bacc260991af17d2692e8299.jpg','https://64.media.tumblr.com/d6a8e57141a539d2a56412ff65045fdb/00aac923bd3df1f9-a5/s400x600/4ce247d9edb1a38e18428218ae20a5ee7de32c0a.jpg']
        },{
            tag:'photography',
            color:'salmon',
            imgs:['https://64.media.tumblr.com/24df9cff9e69d1d44fa04a3ddc3d9cd6/71b567e6ee69be1a-3e/s400x600/ac34cf5e3182ce4026554369a0b232fd999e4b2e.jpg','https://64.media.tumblr.com/72424fd76f4e4d8a560d7b441a1cd4a2/00aac923bd3df1f9-74/s400x600/c3fb7836bae4669cb89775078f05763b7cbe1d06.jpg','https://64.media.tumblr.com/43e40c52989b17d40c35fa6670ea0003/00aac923bd3df1f9-6d/s400x600/b86103a8e75504ac924a4ae5c2a80ae27bcb918e.jpg','https://64.media.tumblr.com/7ed22734280b98b5f077f207c74f007a/00aac923bd3df1f9-2c/s400x600/e4691d822958bf32606fcee164b532d76a87686c.jpg']
        },
        {
            tag:'cat',
            color:'peru',
            imgs:['https://64.media.tumblr.com/fac5c6a2db42277881f503777f2c197e/37d6b92c3301c2d7-37/s250x250_c1/410a950704b97536e6433c8e919ae7c03b6d6211.jpg','https://64.media.tumblr.com/484b480818fa3bc687410bef3efa5316/ffbfeafe5f8cb1cb-06/s250x250_c1/b2e967b99097633e591b9c866b46c1a184c102ea.jpg']
        },
        {
            tag:'trees',
            color:'teal',
            imgs:['https://64.media.tumblr.com/b5358fc009466df1bacb981196f3a07b/cd8594cf82ba4ed7-a8/s250x250_c1/29ed4459137544a163e725a95c5ae2f405be251d.jpg','https://64.media.tumblr.com/54bd1594edf5f304e0ece685a5ad35d8/00aac923bd3df1f9-32/s400x600/b4b682389068c5c9bacc260991af17d2692e8299.jpg','https://64.media.tumblr.com/d6a8e57141a539d2a56412ff65045fdb/00aac923bd3df1f9-a5/s400x600/4ce247d9edb1a38e18428218ae20a5ee7de32c0a.jpg']
        },{
            tag:'photography',
            color:'salmon',
            imgs:['https://64.media.tumblr.com/24df9cff9e69d1d44fa04a3ddc3d9cd6/71b567e6ee69be1a-3e/s400x600/ac34cf5e3182ce4026554369a0b232fd999e4b2e.jpg','https://64.media.tumblr.com/72424fd76f4e4d8a560d7b441a1cd4a2/00aac923bd3df1f9-74/s400x600/c3fb7836bae4669cb89775078f05763b7cbe1d06.jpg','https://64.media.tumblr.com/43e40c52989b17d40c35fa6670ea0003/00aac923bd3df1f9-6d/s400x600/b86103a8e75504ac924a4ae5c2a80ae27bcb918e.jpg','https://64.media.tumblr.com/7ed22734280b98b5f077f207c74f007a/00aac923bd3df1f9-2c/s400x600/e4691d822958bf32606fcee164b532d76a87686c.jpg']
        },
        {
            tag:'cat',
            color:'peru',
            imgs:['https://64.media.tumblr.com/fac5c6a2db42277881f503777f2c197e/37d6b92c3301c2d7-37/s250x250_c1/410a950704b97536e6433c8e919ae7c03b6d6211.jpg','https://64.media.tumblr.com/484b480818fa3bc687410bef3efa5316/ffbfeafe5f8cb1cb-06/s250x250_c1/b2e967b99097633e591b9c866b46c1a184c102ea.jpg']
        }
    ],
        blogs:[{
          blogId:'university',
          postHtml:'<img width="100%" src="https://64.media.tumblr.com/35a13ef447be78b3c788db46fccba531/2683e2d8b1202812-f2/s400x600/7fab18f04e0464b61d566f0883109f930d6274a0.jpg" alt=""><img width="100%" src="https://64.media.tumblr.com/6de581d8cc0dabe8c30caf5c316b1e28/2683e2d8b1202812-99/s400x600/00de12543f36c67fdb1eda3d8ab1f9cd9ccf2671.jpg" alt=""><img width="100%" src="https://64.media.tumblr.com/0d26cdbcc83ecfc21240862339005bf5/2683e2d8b1202812-61/s400x600/32952990e61bb6af88fd7eb6edc04c76ae29568a.jpg" alt=""><img width="100%" src="https://64.media.tumblr.com/54f4dcdcd3226149234e33b5169f5cba/2683e2d8b1202812-31/s400x600/be6e8b3c8b39f36a575da53203627b0b84b1320d.jpg" alt="">',
          tags:['nature','fanart','cherry blossoms','water','rocks'],
          notes_cnt:18910,
          likes_cnt:18000,
          reblogs_cnt:900,
          URL: "https://dankmemeuniversity.tumblr.com/post/670879085514358784",
          comments: [{
              avatar:'https://assets.tumblr.com/images/default_avatar/pyramid_closed_64.png',
              name:'bees-in-the-machine',
              content:'♥♥♥♥'
          },
          {
              avatar:'https://assets.tumblr.com/images/default_avatar/cone_open_64.png',
              name:'bees-in-the-machine',
              content:'so pretty'
          },
          {
              avatar:'https://assets.tumblr.com/images/default_avatar/pyramid_closed_64.png',
              name:'bees-in-the-machine',
              content:'how wonderful'
          },
          {
              avatar:'https://assets.tumblr.com/images/default_avatar/cone_open_64.png',
              name:'bees-in-the-machine',
              content:'so WOW'
          },
          {
              avatar:'https://assets.tumblr.com/images/default_avatar/pyramid_closed_64.png',
              name:'bees-in-the-machine',
              content:'I can’t believe there are people on earth who can draw like this'
          },
          {
              avatar:'https://assets.tumblr.com/images/default_avatar/cone_open_64.png',
              name:'doctor-jodie',
              content:'this is so my humour I live it'
          },
          {
              avatar:'https://assets.tumblr.com/images/default_avatar/cone_open_64.png',
              name:'doctor-jodie',
              content:'*love'
          }]},
          {
            blogId:'university',
            postHtml:'<img width="100%" src="https://64.media.tumblr.com/94d47f2a348e420a4027a727446200c7/e2ff9c994d64544a-9b/s400x600/9a49e3d57d5745cebac87493880ae1fa232548a8.jpg" alt="">',
            tags:[],
            notes_cnt:18910,
            likes_cnt:18000,
            reblogs_cnt:900,
            URL: "https://dankmemeuniversity.tumblr.com/post/670879085514358784",
            comments: []
            },
          {
          blogId:'university',
          postHtml:'<img width="100%" src="https://64.media.tumblr.com/56bf68dab228b3f39dcd6bcdef4bbc83/b3b2c4400e57caa1-17/s400x600/b724f4a30108da4cca303eec1d130a8874212bb8.png" alt="">',
          tags:['wholesome','kids','comfortable','school','funny'],
          notes_cnt:18910,
          likes_cnt:18000,
          reblogs_cnt:900,
          URL: "https://dankmemeuniversity.tumblr.com/post/670879085514358784",
          comments: []
          },
          {
          blogId:'university',
          postHtml:'<img width="100%" src="https://64.media.tumblr.com/45dde30f17353eb13ca1be55063e3484/1ef148912162fc2f-7e/s400x600/739708b94fe41c6b50eee06fd95d8d08eeaa0cb4.jpg" alt="">',
          tags:['wholesome'],
          notes_cnt:18910,
          likes_cnt:18000,
          reblogs_cnt:900,
          URL: "https://dankmemeuniversity.tumblr.com/post/670879085514358784",
          comments: []
          },
          {
          blogId:'onlypositive',
          postHtml:'<img width="100%" src="https://64.media.tumblr.com/59c510e0df411afe28a473cea2d4688d/0dc62628d204ab8c-83/s400x600/bf01b9297a94090eb252d52b0856da3c8af799ab.jpg" alt=""><p>Make sure to rest and drink enough water ♥ </p>',
          tags:['wholesome','positive','positivity'],
          notes_cnt:91,
          likes_cnt:1,
          reblogs_cnt:90,
          URL: "https://onlypositivememes.tumblr.com/post/670859709615620096/make-sure-to-rest-and-drink-enough-water",
          comments: []
          },
          {
          blogId:'cataster',
          postHtml:'<img width="100%" src="https://64.media.tumblr.com/eb7f04ce18aa06c84b653829eea3a252/3e53fe6da9921150-fb/s640x960/7e1cb8b752e64ab2180513c5f01b92211d72a77d.jpg" alt=""><strong>Every morning, we get a chance to be different.</strong> A chance to change. A chance to be better. Your past is your past. Leave it there. Get on with the future part. Nicole Williams',
          tags:['Nicole Williams','relationship','love','breakup','heartbreak','moving on','strength'],
          notes_cnt:2962,
          likes_cnt:1800,
          reblogs_cnt:900,
          URL: "https://catasters.tumblr.com/post/669903012557373440",
          comments: []
          },
          {
          blogId: 'sillydegu',
          postHtml:'<img width="100%" src="https://www.theme-junkie.com/wp-content/uploads/Old-Black-and-White-Backgrounds-1.jpg" alt=""><strong>Every morning, we get a chance to be different.</strong> A chance to change. A chance to be better. Your past is your past. Leave it there. Get on with the future part. Nicole Williams',
          tags:['Nicole Williams','relationship','love','breakup','heartbreak','moving on','strength','recovery','healing','self compassion','self respect','personal development','personal growth'],
          notes_cnt:5138,
          likes_cnt:1800,
          reblogs_cnt:900,
          URL:"https://akiema.tumblr.com/post/669598235133886464/december-is-here-and-this-cutie-loves-it",
          comments: []
          },
          {
          blogId: 'sillydegu',
          postHtml:'<img width="100%" src="https://64.media.tumblr.com/0a7d4276e280f559b87a6f0bcb9808dd/4b9142b138008417-25/s400x600/7b9ffef56dfbff0a32bd4a44103d8525ae7aa420.jpg" alt=""><strong>Every morning, we get a chance to be different.</strong> A chance to change. A chance to be better. Your past is your past. Leave it there. Get on with the future part. Nicole Williams',
          tags:['breaking patterns','second chance','new chance','new day','let go of the past','it’s not too late','leave the past in the past','quotes'],
          notes_cnt:5138,
          likes_cnt:1800,
          reblogs_cnt:900,
          URL:"https://akiema.tumblr.com/post/669598235133886464/december-is-here-and-this-cutie-loves-it",
          comments: []
          },
          {
          blogId: 'sillydegu',
          postHtml:'-It’s funny that parents think kids will be honest with them about the big things when we all saw Danny Fenton hide his own death at 14 as kids and agreed with him that it was the right decision',
          tags:['danny phantom','danny fenton'],
          notes_cnt:5138,
          likes_cnt:1800,
          reblogs_cnt:900,
          URL:"https://akiema.tumblr.com/post/669598235133886464/december-is-here-and-this-cutie-loves-it",
          comments: []
          },
          {
          blogId: 'sillydegu',
          postHtml:'<img width="100%" src="https://www.theme-junkie.com/wp-content/uploads/Old-Black-and-White-Backgrounds-1.jpg" alt=""><strong>Every morning, we get a chance to be different.</strong> A chance to change. A chance to be better. Your past is your past. Leave it there. Get on with the future part. Nicole Williams',
          tags:[],
          notes_cnt:5138,
          likes_cnt:1800,
          reblogs_cnt:900,
          URL:"https://akiema.tumblr.com/post/669598235133886464/december-is-here-and-this-cutie-loves-it",
          comments: []
          }
      ]
        
     },
    getters: {
        getField,
        isLoggedIn: state => !!state.token,
        authStatus: state => state.status,

    },
    mutations: {
        updateField,
        async changePalette( state) {
      
            if (state.homeThemeIndex < 7){
                state.homeThemeIndex+=1;
            }    
         else if (state.homeThemeIndex >= 7){
            state.homeThemeIndex=0;
         } 
         try {
          await axios.put( Browser().baseURL+'/updateColor',
          {
            bodyColor:  state.homeThemeIndex,
          },
          { headers: { 'Authorization':   `Bearer ${localStorage.getItem('token')}` } }
         
          ) 
     } catch (e) {
       console.error(e);
     }
        },
        async setBrimaryBlogId(state, id){
        state.user.primaryBlogId= id
        console.log("%%%setBrimaryBlogId%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
       console.log( state.user.primaryBlogId)

      },

      async updateBodyColor(state, newColor) {
          state.homeThemeIndex= newColor
        },
        
        async stBlockedBlogsId(state, Ids) {
          state.user.blockedBlogsId= Ids
         // console.log("%% BLOCKED blogs IDs %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
          //console.log( state.user.blockedBlogsId)
           
        },
        async setBlogIds(state, Ids) {
          state.user.blogsId= Ids
          console.log("%%blogs IDs %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
          console.log( state.user.blogsId)
           
        },
        setUserId(state, id) {
        state.user.id= id
         // console.log("%%%USER ID%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
       //  console.log( state.user.id)
        },  
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token, user) {
      state.status = "success";
      state.token = token;
      state.user = user;
    },
    auth_init(state,id,name,email,password,age,blogsId,followedTags,following_blogs,bodyColor) {
      state.user.id = id;
      state.user.name = name;
      state.user.email = email;
      state.user.password = password;
      state.user.age = age;
      state.user.blogsId = blogsId;
      state.user.followedTags = followedTags;
      state.user.followingBlogs = following_blogs;
      state.homeThemeIndex = bodyColor;
    },
    blog_init(state,id,name,blogsId,followedTags,following_blogs,likes_posts_id,isBlocked) {
      state.user.primaryBlogId=id;
      state.blog.name=name;
      state.blog.blogsId=blogsId;
      state.blog.followedTags=followedTags;
      state.blog.followingBlogs=following_blogs;   
      state.blog.likesPostsId=likes_posts_id;
      state.blog.isBlocked=isBlocked;
    },
    auth_error(state) {
      state.status = "error";
    },
    actions: {
      async login({ commit }, user) {
       return new Promise((resolve, reject) => {
          commit('auth_request')
          
          axios.post( Browser().baseURL+'/login',{
            email: user.email,
            password: user.password,
          })
          .then((res) => {
            const token = res.data.res.data.token;
            const user = res.data.res.data.user;
            //console.log("******** log in store")
            //console.log(res.data.res.data)
            console.log("******** log in user")
            console.log(res.data.res.data.user)
            console.log("******** log in blog")
            console.log(res.data.res.data.blog)
            // ------------------------ User -------------------------
            commit("auth_init",res.data.res.data.user._id, res.data.res.data.user.name , res.data.res.data.user.email,res.data.res.data.user.password
            ,res.data.res.data.user.age
            , res.data.res.data.user.blogsId
            ,res.data.res.data.user.followedTags
            ,res.data.res.data.user.following_blogs
            ,res.data.res.data.user.bodyColor)
            // ------------------------ blog -------------------------
            
            commit("blog_init",res.data.res.data.blog._id,
            res.data.res.data.blog.name,
            res.data.res.data.blogsId,
            res.data.res.data.blog.followedTags,
            res.data.res.data.blog.following_blogs,   
            res.data.res.data.blog.likes_posts_id,
            res.data.res.data.blog.isBlocked,
            )
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token, user);
            resolve(res);
            //this.state.primaryBlogId="61c9d6b82569f9abb33ebe04"
            //

          })
          .catch(err => {
            alert(err)
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          
          })
        })

        /*return new Promise((resolve, reject) => {
          commit('auth_request')
          axios.post(browser().baseURL+'/login',{
            email: user.email,
            password: user.password
          })
          .then(res => {
            const token = res.data.login.id
            alert(res.data.login)
            alert(token)
            const user = res.data.email
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token 
            commit('auth_success', token, user)
            resolve(res)
          })
          .catch(err => {
            alert(err)
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          
          })
        })*/
  },
  signup({ commit }, user) {
    return new Promise((resolve, reject) => {
          commit('auth_request')
          axios.post( Browser().baseURL+'/signup',{
            email:this.state.user.email,
            password: this.state.user.password,
            blogName: this.state.user.blogname,
            age:user.age,
          })
            .then(res => {
            const token = res.data.res.data
            const user = res.data.res.data.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(res)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
        })
    
  },
    async  forgotpassword({ commit }, user) {
    alert(user.email)
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios.post( Browser().baseURL+'/forgot_password', {
        Email:user.email
      })
        .then(resp => {
          
          console.log(resp)
          this.state.msg = resp.message;

          resolve(resp)
        })
        .catch(err => {
          console.log(err)
          //alert(err.error)
          reject(err)
      })
    })
  }}}
});

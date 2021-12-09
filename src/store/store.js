import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { getField, updateField } from 'vuex-map-fields';


Vue.use(Vuex);
//const baseURL = "http://localhost:3001/Users";
const baseURL = "http://localhost:3001";
export const store = new Vuex.Store({
    strict: true,
    state: {

        status: "",
        token: localStorage.getItem('token') || "",
      user: {
        email: "",
        password: "",
        blogname:""
        },
 
        // we need to replace this with bodyColor in DB as each user has his theme color
        homeThemeIndex:0,
        homeTheme: [
 
            {backgroundColor: '#001935',fontColor:'white', cardColor:'#4080bf', fontStyle: 'Helvetica'},
            {backgroundColor: 'black',fontColor:'lime', cardColor:'#222222', fontStyle: 'Times New Roman'},
            {backgroundColor: 'black',fontColor:'#ff6400', cardColor:'#221000', fontStyle: 'Lucida Console'},
            {backgroundColor: '#1A2735',fontColor:'#BFBFBF', cardColor:'#36465D', fontStyle: 'Fantasy'},
            {backgroundColor: 'black',fontColor:'#CF43ED', cardColor:'#0C0C0C', fontStyle: 'Garamond'}, 
            {backgroundColor: '#1a1a00',fontColor:'#ffff66', cardColor:'#808000', fontStyle: 'Georgia'}, 
               
 
        ]      , 
        blogs:[ {
            id:'cataster',
            content:['It\'s his egg now','Source: reddit.com','<img width="100%" src="https://64.media.tumblr.com/eb7f04ce18aa06c84b653829eea3a252/3e53fe6da9921150-fb/s640x960/7e1cb8b752e64ab2180513c5f01b92211d72a77d.jpg" alt=""><strong>Every morning, we get a chance to be different.</strong> A chance to change. A chance to be better. Your past is your past. Leave it there. Get on with the future part. Nicole Williams'],
            Tags:['#Nicole Williams','#relationship','#love','#breakup','#heartbreak','#moving on','#strength','#recovery','#healing','#self compassion','#self respect','#personal development','#personal growth','#growth mindset','#mindfulness','#live in the now','#live in the present','#change','#breaking patterns','#second chance','#new chance','#new day','#let go of the past','#it’s not too late','#leave the past in the past','#quotes'],
            notes:['2,962','5,138','1,439']
            },
            {
                id: 'sillydegu',
                content:['It\'s his egg now','Source: reddit.com','<img width="100%" src="https://www.theme-junkie.com/wp-content/uploads/Old-Black-and-White-Backgrounds-1.jpg" alt=""><strong>Every morning, we get a chance to be different.</strong> A chance to change. A chance to be better. Your past is your past. Leave it there. Get on with the future part. Nicole Williams'],
                Tags:['#Nicole Williams','#relationship','#love','#breakup','#heartbreak','#moving on','#strength','#recovery','#healing','#self compassion','#self respect','#personal development','#personal growth','#growth mindset','#mindfulness','#live in the now','#live in the present','#change','#breaking patterns','#second chance','#new chance','#new day','#let go of the past','#it’s not too late','#leave the past in the past','#quotes'],
                notes:['2,962','5,138','1,439']
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
        changePalette: state => {
            if (state.homeThemeIndex < 5){
                state.homeThemeIndex+=1;
            }    
         else if (state.homeThemeIndex >= 5){
            state.homeThemeIndex=0;
         }
         
        },
        auth_request(state){
            state.status = 'loading'
          },
          auth_success(state, token, user){
            state.status = 'success'
            state.token = token
            state.user = user
          },
          auth_error(state){
            state.status = 'error'
          },
        
 
       
    },
    actions: {
        login({commit}, user){
            return new Promise((resolve, reject) => {
              commit('auth_request')
              axios.post(baseURL+"/Users",{
                Email: user.email,
                Password: user.password

              })
              .then(resp => {
                const token = resp.data.token
                const user = resp.data.user
                localStorage.setItem('token', token)
                axios.defaults.headers.common['Authorization'] = token
                commit('auth_success', token, user)
                resolve(resp)
              })
              .catch(err => {
                commit('auth_error')
                localStorage.removeItem('token')
                reject(err)
              })
            })
      },
      signup({ commit }, user) {
        return new Promise((resolve, reject) => {
              commit('auth_request')
              axios.post(baseURL+"/Users",{
                Email: user.email,
                Password: user.password,
                Blog_Name:user.blogname,

              })
              .then(resp => {
                const token = resp.data.token
                const user = resp.data.user
                localStorage.setItem('token', token)
                axios.defaults.headers.common['Authorization'] = token
                commit('auth_success', token, user)
                resolve(resp)
              })
              .catch(err => {
                commit('auth_error')
                localStorage.removeItem('token')
                reject(err)
              })
            })
        
      }
    }
});

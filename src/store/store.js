import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export const store = new Vuex.Store({
    strict: true,
    state: {
        homeThemeIndex:0,
        homeTheme: [
            {backgroundColor: 'navy',fontColor:'white', cardColor:'#add8e6', fontStyle: 'normal'},
            {backgroundColor: 'black',fontColor:'lime', cardColor:'#222222', fontStyle: 'italic'},
            {backgroundColor: 'black',fontColor:'#ff6400', cardColor:'#221000', fontStyle: 'oblique'},
            {backgroundColor: '1A2735',fontColor:'BFBFBF', cardColor:'36465D', fontStyle: 'Arial'},
            {backgroundColor: 'black',fontColor:'#CF43ED', cardColor:'#0C0C0C', fontStyle: 'italic'},   
        ]
        
    },
    getters: {
         
    },
    mutations: {
       
    },
    actions: {
        
    }
});

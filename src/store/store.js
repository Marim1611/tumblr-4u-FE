import Vue from 'vue';
import Vuex from 'vuex';
import { getField, updateField } from 'vuex-map-fields';


Vue.use(Vuex);
export const store = new Vuex.Store({
    strict: true,
    state: {

       user: [
          {
            email: '',
            password: '',
            blogName: ''
            
          }

      ],
 
        // we need to replace this with bodyColor in DB as each user has his theme color
        homeThemeIndex:0,
        homeTheme: [
            {backgroundColor: 'navy',fontColor:'white', cardColor:'#add8e6', fontStyle: 'normal'},
            {backgroundColor: 'black',fontColor:'lime', cardColor:'#222222', fontStyle: 'italic'},
            {backgroundColor: 'black',fontColor:'#ff6400', cardColor:'#221000', fontStyle: 'oblique'},
            {backgroundColor: '#1A2735',fontColor:'#BFBFBF', cardColor:'#36465D', fontStyle: 'Arial'},
            {backgroundColor: 'black',fontColor:'#CF43ED', cardColor:'#0C0C0C', fontStyle: 'italic'},   
        ]      
 
    },
    getters: {
         getField,
    },
    mutations: {
 
        updateField,
        changePalette: state => {
            if (state.homeThemeIndex < 4){
                state.homeThemeIndex+=1;
            }    
         else if (state.homeThemeIndex >= 4){
            state.homeThemeIndex=0;
         }
         
        }
 
       
    },
    actions: {
        
    }
});

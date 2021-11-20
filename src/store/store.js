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
 
            {backgroundColor: '#001935',fontColor:'white', cardColor:'#add8e6', fontStyle: 'normal'},
            {backgroundColor: 'black',fontColor:'lime', cardColor:'#222222', fontStyle: 'italic'},
            {backgroundColor: 'black',fontColor:'#ff6400', cardColor:'#221000', fontStyle: 'oblique'},
            {backgroundColor: '#1A2735',fontColor:'#BFBFBF', cardColor:'#36465D', fontStyle: 'Arial'},
            {backgroundColor: 'black',fontColor:'#CF43ED', cardColor:'#0C0C0C', fontStyle: 'italic'},   
 
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
         getField
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

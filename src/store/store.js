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
        
    },
    getters: {
         getField,
    },
    mutations: {
        updateField,
       
    },
    actions: {
        
    }
});

import Vue from "vue";
import Vuex from "vuex";
//import Vuetify from "vuetify";
//import VueRouter from "vue-router";
import NewPost from "../../src//componentshomePage/HomePageNewPost.vue";
 import SearchBar from "../../src//componentshomePage/HomePageSearchBar.vue";
import DropdownList from "../../src/components/homePage/AccountDropDownList.vue";
import {  mount} from '@vue/test-utils';
import NavBar from '../../src/components/homePage/HomePageNavBar.vue';
describe(' home page navigation bar test ' , () => {
    let wrapper;
    let store;
    let state;
    beforeEach(() => {
      Vue.use(Vuex);
              state = {
        homeThemeIndex:0,
        homeTheme: [],
      };
      store = new Vuex.Store({
        store:{
            state
        }
          
      });
      wrapper = mount(NavBar, {
        store,
        components:{
          'DropdownList':DropdownList,
          'NewPost':NewPost,
          'SearchBar':SearchBar,
        },
          data:{
            accountItems:[
              {
                title: 'Likes',
               route:"/likes",
                icon:"Heart-fill"
              },
              {
                title: 'Follwings',
                route:"/followings",
                icon:'person-plus-fill'
              },
              {
                title: 'Settings',
                route:"/settings",
                icon: 'gear-fill'
              },
               {
                title: 'Help',
                 route:"/help",
                icon:"question-circle-fill"
              },
               {
                title: 'Keyboard shortcuts',
                route:" ",
                icon:"grip-horizontal"
              },
               {
                title: 'Change palette',
                route: ' ',
                icon:"brush-fill"
              }
            ],
            newPost:false

          }
      });
    });
 
    //--------------------------------------------------
    //              Test Rendering
    //--------------------------------------------------
    it("renders", () => {
      expect(wrapper.exists()).toBeTruthy(true);
    });
 
    it("renders a vue instance", () => {
      expect(wrapper.vm).toBeTruthy(true);
    });   

});   
      

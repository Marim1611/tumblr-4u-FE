import Vue from "vue";
import Vuex from "vuex";
//import Vuetify from "vuetify";
//import VueRouter from "vue-router";
//import NewPost from "../../src/homePage/HomePageNewPost.vue";
 //import SearchBar from "../../src/homePage/HomePageSearchBar.vue";
import DropdownList from "../../src/components/homePage/AccountDropDownList";
import {mount} from '@vue/test-utils';
//import NavBar from '../../src/homePage/HomePageNavBar.vue';
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
      wrapper = mount(DropdownList, {
        store,
          data:{
            isOpen: false
          },
          props:{
            accountItems:[]
          }
      });
    });
    const changePalete=jest.fn();
    const toggleDropdown=jest.fn();
    const close=jest.fn();
    wrapper.setMethods({
        changePalete:changePalete,
        close:close,
        toggleDropdown:toggleDropdown,

    });
    it(" ", () => {
         
        wrapper.find('.toggle').trigger('click');
           expect(toggleDropdown).toHaveBeenCalled();
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
      

import Vue from "vue";
import Vuex from "vuex";
//import Vuetify from "vuetify";
//import VueRouter from "vue-router";
import { mount } from '@vue/test-utils';
import KeyDrawer from '../../src/components/homePage/KeyboardShortcutsDrawer.vue';

describe('KeyboardShortcutsDrawer Unit Test', () => {
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
      wrapper = mount(KeyDrawer, {
        store,
        propsData:{
            showMe:true,
          },
          method: {
            hideDrawer: jest.fn()
          },
      });
    });
 
    //--------------------------------------------------
    //              Test Rendering
    //--------------------------------------------------
    it("renders", () => {
      expect(wrapper.exists()).toBe(true);
    });
 
    it("renders a vue instance", () => {
      expect(wrapper.isVueInstance()).toBe(true);
    });

    
  //------------------------------------------------
  //            Test component methods
//   //-----------------------------------------------
//   it("toggle folow/unfollow button", () => {
//       const toggleFollow=jest.fn();
//        wrapper.setMethods({
//         toggleFollow:toggleFollow
//       });
//       wrapper.find('v-btn').trigger('click');
//          expect( toggleFollow).toHaveBeenCalled();
//   });
//   it("show drop down list when click on dotted icon", () => {
//     wrapper.setData({ isOpendotted: true})
//    expect(wrapper.find(".sub-menu")).toBeTruthy()
  
   
// });
// it("show drop down list when click on share icon", () => {
//     wrapper.setData({ isOpenShare: true})
//    expect(wrapper.find(".sub-menu-share")).toBeTruthy()
  
   
// });
// it("search bar disappearing in the drawer", () => {
//     wrapper.setData({ isOpenSearch: false})
//    expect(wrapper.find(".searchLi")).toBeTruthy()
  
   
// });
// it("search bar appearing in the drawer", () => {
//     wrapper.setData({ isOpenSearch: true})
//    expect(wrapper.find(".searchDP")).toBeTruthy()
  
   
// });
// it("render name, avatar and cover image of drawer test ", () => {

//   expect(wrapper.props().tumblrsObj).toEqual(mockUder)  

 
// });

   

});   
      

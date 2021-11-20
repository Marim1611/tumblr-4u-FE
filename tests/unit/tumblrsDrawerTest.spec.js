import Vue from "vue";
import Vuex from "vuex";
//import Vuetify from "vuetify";
//import VueRouter from "vue-router";
import { mount } from '@vue/test-utils';
import TumblrDrawer from '../../src/components/TumblrsDrawer.vue';
describe('Tumblr Drawer Unit Test', () => {
    let wrapper;
    let store;
    let state;
    const mockUder={
         name:'ahmed',
         avatar:'https://icon-library.com/images/small-icon-images/small-icon-images-4.jpg',
         coverImage:'https://icon-library.com/images/small-icon-images/small-icon-images-4.jpg'
    }
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
      wrapper = mount(TumblrDrawer, {
        store,
        propsData:{
            tumblrsObj:{
                name:"ahmed",
                avatar:'https://icon-library.com/images/small-icon-images/small-icon-images-4.jpg',
                coverImage:'https://icon-library.com/images/small-icon-images/small-icon-images-4.jpg'
            }
          },
          method: {
            toggleFollow: jest.fn()
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
  //-----------------------------------------------
  it("toggle folow/unfollow button", () => {
      const toggleFollow=jest.fn();
       wrapper.setMethods({
        toggleFollow:toggleFollow
      });
      wrapper.find('v-btn').trigger('click');
         expect( toggleFollow).toHaveBeenCalled();
  });
  it("show drop down list when click on dotted icon", () => {
    wrapper.setData({ isOpendotted: true})
   expect(wrapper.find(".sub-menu")).toBeTruthy()
  
   
});
it("show drop down list when click on share icon", () => {
    wrapper.setData({ isOpenShare: true})
   expect(wrapper.find(".sub-menu-share")).toBeTruthy()
  
   
});
it("search bar disappearing in the drawer", () => {
    wrapper.setData({ isOpenSearch: false})
   expect(wrapper.find(".searchLi")).toBeTruthy()
  
   
});
it("search bar appearing in the drawer", () => {
    wrapper.setData({ isOpenSearch: true})
   expect(wrapper.find(".searchDP")).toBeTruthy()
  
   
});
it("render name, avatar and cover image of drawer test ", () => {

  expect(wrapper.props().tumblrsObj).toEqual(mockUder)  

 
});

   

});   
      


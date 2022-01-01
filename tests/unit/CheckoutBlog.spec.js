//import { shallowMount, mount } from "@vue/test-utils";
//import Vue from "vue";
//import Vuetify from "vuetify";
import { shallowMount, createLocalVue } from '@vue/test-utils'

import Vuex from "vuex";

import CheckBlogs from "@/components/general/CheckOutBlogs.vue";
const localVue = createLocalVue();
localVue.use(Vuex);


describe("CheckBlogs component Test", () => {
//  let wrapper;
  //let vuetify;
  let state;
  let store;
  beforeEach(() => {
    state = {
        homeThemeIndex:0,
        homeTheme: [{
            backgroundColor: "#001935",
            fontColor: "white",
            cardColor: "#5c7e97",
            fontColor2: "#1A314D",
            fontStyle: "Helvetica",
            focused: "cyan",
            shadow: "rgb(163, 162, 162)",
          }],
    }
    store = new Vuex.Store({
      state
    })
  })
  
  it('renders',() =>{
    const wrapper = shallowMount(CheckBlogs, {store,localVue})
    const goToExplore= jest.fn();
    const followed= jest.fn();
    const remove= jest.fn();
    wrapper.setMethods({
      followed: followed,
    });
    expect(wrapper.exists()).toBe(true);
});

it("renders a vue instance", () => {
    const wrapper = shallowMount(CheckBlogs, {store,localVue})
    expect(wrapper.vm).toBeTruthy();
  });
  });

  


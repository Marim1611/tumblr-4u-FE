import Vue from "vue";
import Vuex from 'vuex';
import { mount,createLocalVue } from '@vue/test-utils';
import exploreRelatedBlogs from '../../src/components/explore/ExploreRelatedBlogs.vue';
const localVue = createLocalVue();
localVue.use(Vuex);

describe('exploreRelatedBlogs unit tests: ', () =>{
    let wrapper;
    beforeEach(() => {
        Vue.use(Vuex);
    });
    wrapper = mount(exploreRelatedBlogs,{
        methods:{
         //   followed: jest.fn()
        }
    });
    it("renders", () => {
        expect(wrapper.exists()).toBe(true);
      });
   
    
 //   test('calls followed when follow is clicked', () =>{


  //  });

});
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ExploreRelatedBlogs from'../../src/components/explore/ExploreRelatedBlogs.vue'


//import Vuex from 'vuex';
//import { mount,createLocalVue } from '@vue/test-utils';
const localVue = createLocalVue();
//import { shallow } from 'vue-test-utils'
//import Explore from'../../src/components/explore/Explore.vue'
localVue.use(Vuex);

describe('ExploreRelatedBlogs.vue', () => {
    let store
    let state
    let i
    let status

    beforeEach(() => {
        i = 0
        status = "Follow"
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

    it('Is called HomePage',() =>{
        const wrapper = shallowMount(ExploreRelatedBlogs, {store,localVue})//,
       // methods:
         //   {
           //     followed: jest.fn(status,i)
            //}})
        const followed = jest.fn(status,i);
        wrapper.setMethods({
          followed: followed,
        });
        wrapper.find('#fButton').trigger('click')
        expect(followed).toHaveBeenCalled()
        //expect(wrapper.name()).toEqual('HomePage');
    });
})



// import Vue from "vue";
// import Vuex from 'vuex';
// import { mount,createLocalVue } from '@vue/test-utils';
// import exploreRelatedBlogs from '../../src/components/explore/ExploreRelatedBlogs.vue';
// const localVue = createLocalVue();
// localVue.use(Vuex);

// describe('exploreRelatedBlogs unit tests: ', () =>{
//     let wrapper;
//     let store;
//         let state;
//         state = {
//             homeThemeIndex:0,
//             homeTheme: [],
//           };
//           store = new Vuex.Store({
//             store:{
//                 state
//             }});
//     beforeEach(() => {
//         Vue.use(Vuex);
//     });
//     wrapper = mount(exploreRelatedBlogs,{
//         methods:{
//             followed: jest.fn()
//         }
//     });
//     it("renders", () => {
//         expect(wrapper.exists()).toBe(true);
//       });
   
    
//  //   test('calls followed when follow is clicked', () =>{


//   //  });

// });
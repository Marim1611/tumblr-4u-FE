import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Explore from '../../src/components/explore/Explore.vue'
import ExploreBar from '../../src/components/explore/ExploreBar.vue'

//import Vuex from 'vuex';
//import { mount,createLocalVue } from '@vue/test-utils';
const localVue = createLocalVue();
//import { shallow } from 'vue-test-utils'
//import Explore from'../../src/components/explore/Explore.vue'
localVue.use(Vuex);

describe('Explore.vue', () => {
    let store
    let state
    let clse


    beforeEach(() => {
        clse = "true"
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
        const wrapper = shallowMount(Explore, {store,localVue,
        components:{
            ExploreBar: ExploreBar
        }})//,
       // methods:
         //   {
           //     followed: jest.fn(status,i)
            //}})
        const multiCol = jest.fn(clse);
        wrapper.setMethods({
            multiCol: multiCol,
        });
        wrapper.findComponent(ExploreBar).trigger('singCol')
        expect(multiCol).toHaveBeenCalled()
        //expect(wrapper.name()).toEqual('HomePage');
    });
})






// import { shallowMount, createLocalVue } from '@vue/test-utils'
// import Vuex from 'vuex'
// import Explore from'../../src/components/explore/Explore.vue'


// //import Vuex from 'vuex';
// //import { mount,createLocalVue } from '@vue/test-utils';
// const localVue = createLocalVue();
// //import { shallow } from 'vue-test-utils'
// //import Explore from'../../src/components/explore/Explore.vue'
// localVue.use(Vuex);

// describe('Explore.vue', () => {
//     let store
//     let state

//     beforeEach(() => {
//         state = {
//             homeThemeIndex:0,
//             homeTheme: [{
//                 backgroundColor: "#001935",
//                 fontColor: "white",
//                 cardColor: "#5c7e97",
//                 fontColor2: "#1A314D",
//                 fontStyle: "Helvetica",
//                 focused: "cyan",
//                 shadow: "rgb(163, 162, 162)",
//               }],
//         }
//         store = new Vuex.Store({
//           state
//         })
//       })

//     it('Is called HomePage',() =>{
//         const wrapper = shallowMount(Explore, {store,localVue})
            
//         expect(wrapper.name()).to.equal('HomePage');
//     });
// })
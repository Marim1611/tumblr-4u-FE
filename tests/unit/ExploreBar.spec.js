import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ExploreBar from'../../src/components/explore/ExploreBar.vue'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ExploreBar.vue', () => {
    let store
    let state

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

    it('Is called HomePage',() =>{
        const wrapper = shallowMount(ExploreBar, {store,localVue})
        const moreDropdown = jest.fn();
        wrapper.setMethods({
            moreDropdown: moreDropdown,
        });
        wrapper.find('.clickable.barItem.grow').trigger('click')
        expect(moreDropdown).toHaveBeenCalled()
    });

    it('Is called HomePage',() =>{
        const wrapper = shallowMount(ExploreBar, {store,localVue})//,
        const foryou = jest.fn();
        wrapper.setMethods({
            foryou: foryou,
        });
        wrapper.find('.clickable.barItem').trigger('click')
        expect(foryou).toHaveBeenCalled()
    });

    it('Is called HomePage',() =>{
        const wrapper = shallowMount(ExploreBar, {store,localVue})//,
        const textOnly = jest.fn();
        wrapper.setMethods({
            textOnly: textOnly,
        });
        wrapper.find('.dropdownItem').trigger('click')
        expect(textOnly).toHaveBeenCalled()
    });
    
})
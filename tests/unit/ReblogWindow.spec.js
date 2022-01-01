import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ReblogWindow from'../../src/components/general/ReblogWindow.vue'

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ReblogWindow.vue', () => {
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
        const wrapper = shallowMount(ReblogWindow, {store,localVue,
            propsData:
        {
            name: "name",
            postName: "postName",
            post:{
                
                "_id": "61c35d1eac19df9274f9a2b5",
                "blogId": "619957113df6b45019c42d07",
                "postHtml":	"<img width='100%' src='https://64.media.tumblr.com/f865cdf68f134ffcbf911507b857711f/68ae925735582341-32/s640x960/0030b5e77af53286e7b2ca1906ffd439987353c0.jpg'> ",
                "type": "link",
                "state": "published",
                "tags": [
                    "cmp"
                ],
                "notesId": "61c35d1eac19df9274f9a2b4",
                "__v": 0
            }
        }})
        const reblogWind = jest.fn();
        wrapper.setMethods({
          reblogWind: reblogWind,
        });
        wrapper.find('#button-close').trigger('click')
        expect(reblogWind).toHaveBeenCalled()
        //expect(wrapper.name()).toEqual('HomePage');
    });


    it('Is called HomePage',() =>{
        const wrapper = shallowMount(ReblogWindow, {store,localVue,
            propsData:
        {
            name: "name",
            postName: "postName",
            post:{
                
                "_id": "61c35d1eac19df9274f9a2b5",
                "blogId": "619957113df6b45019c42d07",
                "postHtml":	"<img width='100%' src='https://64.media.tumblr.com/f865cdf68f134ffcbf911507b857711f/68ae925735582341-32/s640x960/0030b5e77af53286e7b2ca1906ffd439987353c0.jpg'> ",
                "type": "link",
                "state": "published",
                "tags": [
                    "cmp"
                ],
                "notesId": "61c35d1eac19df9274f9a2b4",
                "__v": 0
            }
        }})
        const reblogging = jest.fn();
        wrapper.setMethods({
            reblogging: reblogging,
        });
        wrapper.find('#button-reblog').trigger('click')
        expect(reblogging).toHaveBeenCalled()
        //expect(wrapper.name()).toEqual('HomePage');
    });
})

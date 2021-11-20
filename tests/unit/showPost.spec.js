import Vuex from 'vuex';
import { mount,createLocalVue } from '@vue/test-utils';
import showPost from '@/components/homePage/HomePageViewPost.vue';
const localVue = createLocalVue();
localVue.use(Vuex);

describe('showPost unit tests: ', () =>{
    test('calls postOption when the ... is clicked', () =>{
        const store = new Vuex.Store({
            state: {
            homeThemeIndex:0,
            homeTheme: {backgroundColor: '#001935',fontColor:'white', cardColor:'#4080bf', fontStyle: 'Helvetica'},
            }
        });
        const wrapper = mount(showPost, {localVue,store});
        const postOption = jest.fn();
        wrapper.setMethods({
            postOption: postOption
        });
        wrapper.find('.options').trigger('click');
        expect(postOption).toHaveBeenCalled();
    });
    test('calls closeDropDown when the close button is clicked', () =>{
        const wrapper = mount(showPost, {
            data:{
                homeTheme:{backgroundColor: '#001935',fontColor:'white', cardColor:'#4080bf', fontStyle: 'Helvetica'},
                homeThemeIndex:0,
                showDropDown: false
            }
        });
        const closeDropDown = jest.fn();
        wrapper.setMethods({
            closeDropDown:closeDropDown
        });
        wrapper.find('.closeButton').trigger('click');
        expect(closeDropDown).toHaveBeenCalled();
    });
});


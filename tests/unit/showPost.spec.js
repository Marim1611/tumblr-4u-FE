import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import ViewPostCard from'../../src/components/general/ViewPostCard.vue'


//import Vuex from 'vuex';
//import { mount,createLocalVue } from '@vue/test-utils';
const localVue = createLocalVue();
//import { shallow } from 'vue-test-utils'
//import Explore from'../../src/components/explore/Explore.vue'
localVue.use(Vuex);

describe('ViewPostCard.vue', () => {
    let store
    let state
   // let i
    //let status

    beforeEach(() => {
      //  i = 0
        //status = "Follow"
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

    it('is the dropdown menu fun being called on clicking the 3-dots icon',() =>{
        const wrapper = shallowMount(ViewPostCard, {store,localVue,
        propsData:
    {
        maxWidth: "100px",
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
        const postOption = jest.fn();
        wrapper.setMethods({
            postOption: postOption,
        });
        wrapper.find('.header .dropdown .options').trigger('click')
        expect(postOption).toHaveBeenCalled()
    });
    
    
    it('is the comment window fun being called clicking on notes',() =>{
        const wrapper = shallowMount(ViewPostCard, {store,localVue,
        propsData:
    {
        maxWidth: "100px",
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
        const commentShow = jest.fn();
        wrapper.setMethods({
            commentShow: commentShow,
        });
        wrapper.find('.dropdown .notes').trigger('click')
        expect(commentShow).toHaveBeenCalled()
        wrapper.find('.footer-flex div .options') 
        expect(commentShow).toHaveBeenCalled()
    });
    
    
    it('is the share window fun being called clicking on share icon',() =>{
        const wrapper = shallowMount(ViewPostCard, {store,localVue,
        propsData:
    {
        maxWidth: "100px",
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
        const shareShow = jest.fn();
        wrapper.setMethods({
            shareShow: shareShow,
        });
        wrapper.find('.footer-flex .dropdown .options').trigger('click')
        expect(shareShow).toHaveBeenCalled()
    });


    it('is the commenting fun being called when clicking reply button',() =>{
        const wrapper = shallowMount(ViewPostCard, {store,localVue,
        propsData:
    {
        maxWidth: "100px",
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
        const commenting = jest.fn();
        wrapper.setMethods({
            commenting: commenting
        });
        wrapper.find('.h-flex button').trigger('click')
        expect(commenting).toHaveBeenCalled()
    });
    

    it('is the commenting fun being called when clicking reply button',() =>{
        const wrapper = shallowMount(ViewPostCard, {store,localVue,
        propsData:
    {
        maxWidth: "100px",
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
        const commenting = jest.fn();
        wrapper.setMethods({
            commenting: commenting
        });
        wrapper.find('.h-flex button').trigger('click')
        expect(commenting).toHaveBeenCalled()
    });


    it('is the commenting fun being called when clicking reply button',() =>{
        const wrapper = shallowMount(ViewPostCard, {store,localVue,
        propsData:
    {
        maxWidth: "100px",
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
        const closeDropDown = jest.fn();
        wrapper.setMethods({
            closeDropDown: closeDropDown
        });
        wrapper.find('.closeButton').trigger('click')
        expect(closeDropDown).toHaveBeenCalled()
    });


    it('is the commenting fun being called when clicking reply button',() =>{
        const wrapper = shallowMount(ViewPostCard, {store,localVue,
        propsData:
    {
        maxWidth: "100px",
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
        const copy = jest.fn();
        wrapper.setMethods({
            copy: copy
        });
        wrapper.find('.dropdown-content button').trigger('click')
        expect(copy).toHaveBeenCalled()
    });


    it('is the commenting fun being called when clicking reply button',() =>{
        const wrapper = shallowMount(ViewPostCard, {store,localVue,
        propsData:
    {
        maxWidth: "100px",
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
        const copyShare = jest.fn();
        wrapper.setMethods({
            copyShare: copyShare
        });
        wrapper.find('.out-share div').trigger('click')
        expect(copyShare).toHaveBeenCalled()
    });


    it('is the commenting fun being called when clicking reply button',() =>{
        const wrapper = shallowMount(ViewPostCard, {store,localVue,
        propsData:
    {
        maxWidth: "100px",
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
        const subscribeConversation = jest.fn();
        wrapper.setMethods({
            subscribeConversation: subscribeConversation
        });
        wrapper.find('.no-padding .clickable').trigger('click')
        expect(subscribeConversation).toHaveBeenCalled()
    });


    it('is the commenting fun being called when clicking reply button',() =>{
        const wrapper = shallowMount(ViewPostCard, {store,localVue,
        propsData:
    {
        maxWidth: "100px",
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
        const noComment = jest.fn();
        wrapper.setMethods({
            noComment: noComment
        });
        wrapper.find('.h-flex.border-bottom .clickable').trigger('click')
        expect(noComment).toHaveBeenCalled()
    });
})




        
        


        
        
        



        

        
        
        
// import Vuex from 'vuex';
// import { mount,createLocalVue } from '@vue/test-utils';
// import showPost from '@/components/general/ViewPostCard.vue';
// const localVue = createLocalVue();
// localVue.use(Vuex);

// describe('showPost unit tests: ', () =>{
//     test('calls postOption when the ... is clicked', () =>{
//         let store;
//         let state;
//         state = {
//             homeThemeIndex:0,
//             homeTheme: [],
//           };
//           store = new Vuex.Store({
//             store:{
//                 state
//             }
//       //  const store = new Vuex.Store({
//         //    state: {
//           //  homeThemeIndex:0,
//             //homeTheme: {backgroundColor: '#001935',fontColor:'white', cardColor:'#4080bf', fontStyle: 'Helvetica'},
//             //}
//         });
//         const wrapper = mount(showPost, {localVue,store});
//         const postOption = jest.fn();
//         wrapper.setMethods({
//             postOption: postOption
//         });
//         wrapper.find('.drodown .options').trigger('click');
//         expect(postOption).toHaveBeenCalled();
//     });
//     // test('calls closeDropDown when the close button is clicked', () =>{
//     //     const wrapper = mount(showPost, {
//     //         data:{
//     //             homeTheme:{backgroundColor: '#001935',fontColor:'white', cardColor:'#4080bf', fontStyle: 'Helvetica'},
//     //             homeThemeIndex:0,
//     //             showDropDown: false
//     //         }
//     //     });
//     //     const closeDropDown = jest.fn();
//     //     wrapper.setMethods({
//     //         closeDropDown:closeDropDown
//     //     });
//     //     wrapper.find('.closeButton').trigger('click');
//     //     expect(closeDropDown).toHaveBeenCalled();
//     // });
// });


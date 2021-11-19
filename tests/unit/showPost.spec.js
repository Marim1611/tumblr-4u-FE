import { mount } from '@vue/test-utils';
import showPost from '@/components/search.vue';

describe('showPost unit tests: ', () =>{
    test('calls postOption when the ... is clicked', () =>{
        const wrapper = mount(showPost, {
            data:{
                blogs: {
                    id:['cataster','sillydegu','iamstrongallonmyown'],
                    photos:['https://64.media.tumblr.com/eb7f04ce18aa06c84b653829eea3a252/3e53fe6da9921150-fb/s640x960/7e1cb8b752e64ab2180513c5f01b92211d72a77d.jpg'],
                    content:['It\'s his egg now','Source: reddit.com','<img width="100%" src="https://64.media.tumblr.com/eb7f04ce18aa06c84b653829eea3a252/3e53fe6da9921150-fb/s640x960/7e1cb8b752e64ab2180513c5f01b92211d72a77d.jpg" alt=""><strong>Every morning, we get a chance to be different.</strong> A chance to change. A chance to be better. Your past is your past. Leave it there. Get on with the future part. Nicole Williams'],
                    tags:['#Nicole Williams','#relationship','#love','#breakup','#heartbreak','#moving on','#strength','#recovery','#healing','#self compassion','#self respect','#personal development','#personal growth','#growth mindset','#mindfulness','#live in the now','#live in the present','#change','#breaking patterns','#second chance','#new chance','#new day','#let go of the past','#it’s not too late','#leave the past in the past','#quotes'],
                    notes:['2,962','5,138','1,439']
                    },
                    showDropDown: false
            }
        })
        const showPost = jest.fn();
        wrapper.setMethods({
            showPost:showPost
        });
        wrapper.find('.options').trigger('click');
        expect(showPost).toHaveBeenCalled();
    });
    test('calls closeDropDown when the close button is clicked', () =>{
        const wrapper = mount(showPost, {
            data:{
                blogs: {
                    id:['cataster','sillydegu','iamstrongallonmyown'],
                    photos:['https://64.media.tumblr.com/eb7f04ce18aa06c84b653829eea3a252/3e53fe6da9921150-fb/s640x960/7e1cb8b752e64ab2180513c5f01b92211d72a77d.jpg'],
                    content:['It\'s his egg now','Source: reddit.com','<img width="100%" src="https://64.media.tumblr.com/eb7f04ce18aa06c84b653829eea3a252/3e53fe6da9921150-fb/s640x960/7e1cb8b752e64ab2180513c5f01b92211d72a77d.jpg" alt=""><strong>Every morning, we get a chance to be different.</strong> A chance to change. A chance to be better. Your past is your past. Leave it there. Get on with the future part. Nicole Williams'],
                    tags:['#Nicole Williams','#relationship','#love','#breakup','#heartbreak','#moving on','#strength','#recovery','#healing','#self compassion','#self respect','#personal development','#personal growth','#growth mindset','#mindfulness','#live in the now','#live in the present','#change','#breaking patterns','#second chance','#new chance','#new day','#let go of the past','#it’s not too late','#leave the past in the past','#quotes'],
                    notes:['2,962','5,138','1,439']
                    },
                    showDropDown: false
            }
        })
        const showPost = jest.fn();
        wrapper.setMethods({
            closeDropDown:closeDropDown
        });
        wrapper.find('.closeButton').trigger('click');
        expect(closeDropDown).toHaveBeenCalled();
    });
});


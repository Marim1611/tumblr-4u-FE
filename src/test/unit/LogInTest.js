import { shallowMount  } from '@vue/test-utils'
import LogIn from './components/SignIn.vue'

describe('LogIn Validation', () => {

    test('LogIn', () => {
    
    const wrapper = shallowMount(LogIn)
    wrapper.setData({
        form:
        {
            email: 'example@gmail.com',
            password: 'aaaaaaaa1a',
            blogName: 'userblog'
        }
    })
    expect(wrapper.find('.error').exists()).toBe(false)
});

    
});


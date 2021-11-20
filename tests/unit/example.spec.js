import { shallowMount } from '@vue/test-utils'
import SignIn from '@/components/registerPages/SignIn.vue'

describe('SignIn.vue', () => {
  it('See if fucntion clicked', () => {

    const wrapper = shallowMount(SignIn, {
      data(){
        return{
        userEmail: '',
        userPassword: '',
      }
    }
        
    });
    wrapper.setData({ userEmail: 'asdsadsa@gmail.g' })
    
    expect(userEmail).toMatch(msg)
  })
})

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
    
    expect(this.userEmail).toBe('asdsadsa@gmail.g')
  })
})

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
    wrapper.setData({ userEmail: '' })
    
    expect(this.userEmail).toBe('')
  })
})

it("calls the onHabitDone method", async () => {
  const wrapper = mount(SignIn, {
    data() {
      return {
        userEmail: '',
        userPassword: '',

      }
      
    }
  });
  wrapper.setMethods({
    Validation: jest.fn(),
  });
  const submit = wrapper.find("buttonTop")
  await submit.triger("click")

  
  expect(wrapper.vm.Validation).toHaveBeenCalled();
});

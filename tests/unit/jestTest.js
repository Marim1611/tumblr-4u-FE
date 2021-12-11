import { mount } from '@/vue/test-utils'
import SignIn from '../../src/components/registerPages/SignIn'

const wrapper = mount(SignIn)
const vm = wrapper.vm
console.log(wrraper)

 it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

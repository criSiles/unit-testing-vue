import LoginForm from '@/components/LoginForm'
import { mount } from '@vue/test-utils'

describe('LoginFrom', () => {
    // it is the same as test
    it('emits an event with a user data payload', () => {
        const wrapper = mount(LoginForm)
        // Find the text input
        const input = wrapper.find('input[type="text"]')
        // Set value for text input
        input.setValue('Adam Jahr')
        // Simulate form submission
        // Instead of trigger the button like in the RandomNumber test, we trigger the method 'submit', in case that the button is removed for other thing
        wrapper.trigger('submit')
        // Assert event has been emitted 
        // We're using Vue Test Utils’ emitted API to store any calls of the formSubmitted event in a const, and asserting that we expect array length=1
        const formSubmittedCalls = wrapper.emitted('formSubmitted')
        expect(formSubmittedCalls).toHaveLength(1)
        // Asert the payload is correct
        // We use the emitted API to confirm that the event was emitted with the proper payload (component's name data value)
        const expectedPayload = { name: 'Adam Jahr' }
        // If we console.log wrapper.emitted('formSubmitted') we'll see this: [[], [{ 'name': 'Adam Jahr' }]] to see only the name I have to acces inside
        expect(wrapper.emitted('formSubmitted')[0][0]).toMatchObject(expectedPayload)
    })
})
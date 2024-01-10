import RandomNumber from '@/components/RandomNumber'
import { mount } from '@vue/test-utils'

describe('RandomNumber', () => {
    test('By default, randomNumber data value should be 0', () => {
        const wrapper = mount(RandomNumber)
        // html: wrapper function to acces the component html
        // toContain: wrapper function to search something that the component should have in their code
        expect(wrapper.html()).toContain('<span>0</span>')
    })
    test('If the button is clicked, randomNumber should be between 1 and 10', async () => {
        // Mount the component
        const wrapper = mount(RandomNumber)
        // Triggers the click event, wait until the randomNumber is created to continue
        await wrapper.find('button').trigger('click')
        // Fetch the randomNumber and convert it into a integer
        const randomNumber = parseInt(wrapper.find('span').text())
        // Expecting randomNumber to be equal or bigger than 1 and equal or less than 10
        expect(randomNumber).toBeGreaterThanOrEqual(1)
        expect(randomNumber).toBeLessThanOrEqual(10)
    })
    test('If the button is clicked, randomNumber should be between 200 and 300', async () => {
        const wrapper = mount(RandomNumber, {
            // Changing the main and max via props
            props: {
                min: 200,
                max:300
            }
        })
        await wrapper.find('button').trigger('click')
        const randomNumber = parseInt(wrapper.find('span').text())
        expect(randomNumber).toBeGreaterThanOrEqual(200)
        expect(randomNumber).toBeLessThanOrEqual(300)
    })
})
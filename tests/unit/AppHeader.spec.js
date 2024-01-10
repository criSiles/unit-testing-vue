import AppHeader from '@/components/AppHeader'

//Before this test can be launch we need our component mounted
import { mount } from '@vue/test-utils'

// describe: Jest function that creates a block of test (test suite), inside will be our test
describe('AppHeader', () => {
    // test: Jest function that creates a Jest test, 1arg str specify what we're testing, 2arg function that actually run the test
    test('If user is not logged in, do not show logout button', () => {
        // wrapper in addition to mounting the component, creates a wrapper that includes methods to test the component
        const wrapper = mount(AppHeader)
        // expect: Jest function that create an assertion about the expected outcome, inside we'll be the value to apply matchers against
        // find(): is a wrapper method will search through our template for a matching selector in order to locate our button in this case
        // isVisible(): is a wrapper method that will return a boolean, telling us if that button is visible in our component or not
        // toBe(): Jest common matcher, function that checks if the value is what I'm expecting
        expect(wrapper.find('button').isVisible()).toBe(false)
    })
    test('If user is not logged in, do not show logout button', async () => {
        const wrapper = mount(AppHeader)
        // setData(): is a wrapper method that set our data to fit the correct scenario that we're testing, bc in the code in AppHeader is always false
        // loggedIn value changed but test is running before our button can render to the DOM. We make our test async to force it to wait for DOM updates
        await wrapper.setData({ loggedIn: true })
        expect(wrapper.find('button').isVisible()).toBe(true)
    })
})
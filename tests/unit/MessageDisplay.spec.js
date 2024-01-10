import MessageDisplay from '@/components/MessageDisplay'
import { mount } from '@vue/test-utils'

// In order to mock the request, we have to import it
import { getMessage } from '@/services/axios'

// Third-party library which allows us to flush the promises, ensuring they’re all resolved prior to running our assertions
import flushPromises from 'flush-promises'

// Feed the getMessage function to jest.mock() by passing it the path for where that function lives
jest.mock('@/services/axios')

describe('MessageDisplay', () => {
  it('Calls getMessage and displays message', async () => {
    // Mock the API call
    const mockMessage = 'Hello from the db' 
    getMessage.mockResolvedValueOnce({ text: mockMessage }) // Calling our mocked getMessage function and run a method on it
    const wrapper = mount(MessageDisplay)
    // wait for promise to resolve, ensured promises will be resolved before our assertions are run
    await flushPromises()
    // check that call happened once
    expect(getMessage).toHaveBeenCalledTimes(1)
    // check that component displays message
    const message = wrapper.find('[data-testid="message"]').text()
    expect(message).toEqual(mockMessage)
  })

  it('Displays an error when getMessage call fails', async () => {
    // mock the failed API call
    const wrapper = mount(MessageDisplay)
    // wait for promise to resolve
    // check that call happened once
    // check that component displays error
  })
})
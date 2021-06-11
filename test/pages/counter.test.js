import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import CounterPage from '../../pages/counter'

Enzyme.configure({ adapter: new Adapter() });

// ** factory function to create shallow wrapper for counter page component **
// ** @function setup
// ** @params {object} props - component props specific to this setup
// ** @return {ShallowWrapper}
const setup = (props = {}, state = null) => {
    const wrapper = shallow(<CounterPage {...props} />)
    if(state) wrapper.setState(state)
    return wrapper

}

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`)
}


test('renders without error', () => {
    const wrapper = setup()
    const counterPageComponent = findByTestAttr(wrapper, 'component-counter-page')
    // ** خط پایین یعنی مطمعن میشود که ایا این تگ وجود دارد یا خیر یعنی 
    // ** ایا این تگ در دام قرار دارد یاخیر ممکن است به هر دلیلی این تگ  نشان داده نشود یا در دام قرار نگیرد
    // ** با این کار مطمعن میشویم که این تگ قرار دارد در صفحه به درستی
    expect(counterPageComponent.length).toBe(1)
})

test('renders increment button', () => {
    const wrapper = setup()
    const button = findByTestAttr(wrapper, 'increment-button')
    expect(button.length).toBe(1)
})

test('renders decrement button', () => {
    const wrapper = setup()
    const decrementButton = findByTestAttr(wrapper, 'decrement-button')
    expect(decrementButton.length).toBe(1)
})

test('render counter display', () => {
    const wrapper = setup()
    const displayCounter = findByTestAttr(wrapper, 'display-counter')
    expect(displayCounter.length).toBe(1)
})

test('counter start at zero', () => {
    const wrapper = setup()
    const initialState = wrapper.state('counter')
    expect(initialState).toBe(0)
})

test('clicking button increment counter', () => {
    const counter = 7
    const wrapper = setup(null, {counter: counter})

    const button = findByTestAttr(wrapper, 'increment-button')
    button.simulate('click')

    const displayCounter = findByTestAttr(wrapper, 'display-counter')
    expect(displayCounter.text()).toContain(`${counter + 1}`)
})

test('clicking decrement button for decrement counter', () => {
    const counter = 21
    const wrapper = setup(null, {counter: counter})

    const decrementButton = findByTestAttr(wrapper, 'decrement-button')
    decrementButton.simulate('click')

    const displayCounter = findByTestAttr(wrapper, 'display-counter')
    expect(displayCounter.text()).toContain(`${counter - 1}`)
})

// ** test for must not be bellow than zero
test('must not be bellow than zero', () => {
    const counter = 0
    const wrapper = setup(null, {counter})
    
    const decrementButton = findByTestAttr(wrapper, 'decrement-button')
    decrementButton.simulate('click')

    const errorMessage = findByTestAttr(wrapper, 'error-message')
    expect(errorMessage.length).toBe(1)
})


// ** test to not show error message from not zero
test('must not show error message for not negative numbers', () => {
    const counter = 1
    const wrapper = setup(null, {counter})


    const decrementButton = findByTestAttr(wrapper, 'decrement-button')
    decrementButton.simulate('click')

    const errorMessage = findByTestAttr(wrapper, 'error-message')
    expect(errorMessage.length).toBe(0)
})
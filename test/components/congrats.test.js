import Congrats from '../../components/congrats'
import { findByTestAttr, setupFunctionComponentTest, testCheckPropTypes } from '../test.util'


test('renders without error --- it mean show element in Dom without error', () => {
    // ** initial test and find element and check if exist in Dom or not
    const wrapper = setupFunctionComponentTest(Congrats, { success: false })
    const component = findByTestAttr(wrapper, 'component-congrats')
    expect(component.length).toBe(1)
})

test('renders no message when success props is false', () => {
    const wrapper = setupFunctionComponentTest(Congrats, { 'success': false })
    const component = findByTestAttr(wrapper, 'component-congrats')

    expect(component.text()).toBe('')
})

test('renders not empty message when success props is true', () => {
    const wrapper = setupFunctionComponentTest(Congrats, { 'success': true })
    const message = findByTestAttr(wrapper, 'congrats-message')

    expect(message.text().length).not.toBe('')
})

test('does not throw warning with expected props', () => {
    const expectedProps = { success: false }
    testCheckPropTypes(Congrats, expectedProps)
})

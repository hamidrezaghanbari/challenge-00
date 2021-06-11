import Input from "../../components/input"
import guessedWordsReducer from "../../lib/redux/guessed-words/guessed-words.reducer"
import { findByTestAttr, setupClassComponentWithReduxStoreTest } from './../test.util'

// describe('render', () => {
//     describe('word has not been guest', () => {
//         let wrapper
//         beforeEach(() => {
//             // wrapper = setupClassComponentWithReduxStoreTest(Input).children().dive()
//             wrapper = setupClassComponentWithReduxStoreTest(Input)
//             // ** به دلیل این که انزایم با ری اکت ریداکس بالای 6 درست کار نمیکند میبایست خط زیر را بتنویسم
//             // ** تا درست کار کند و بتوانیم عناصر را تشخیص دهیم
//             wrapper = wrapper.children().dive()
//         })

//         test('render component without error', () => {

//             const component = findByTestAttr(wrapper, 'component-input')
//             expect(component.length).toBe(1)
//         })

//         test('render input box', () => {
//             const inputBox = findByTestAttr(wrapper, 'input-box')
//             expect(inputBox.length).toBe(1)
//         })

//         test('render submit button', () => {
//             const submitButton = findByTestAttr(wrapper, 'submit-button')
//             expect(submitButton.length).toBe(1)
//         })
//     })

//     describe('word has been guest', () => {
//         let wrapper
//         beforeEach(() => {
//             // wrapper = setupClassComponentWithReduxStoreTest(Input).children().dive()
//             wrapper = setupClassComponentWithReduxStoreTest(Input, {}, null, {
//                 guessedWords: {
//                     success: true,
//                     guessedWords: []
//                 }
//             })
//             // ** به دلیل این که انزایم با ری اکت ریداکس بالای 6 درست کار نمیکند میبایست خط زیر را بتنویسم
//             // ** تا درست کار کند و بتوانیم عناصر را تشخیص دهیم
//             wrapper = wrapper.children().dive()
//         })


//         test('render component without error for situation that success is true', () => {

//             const component = findByTestAttr(wrapper, 'component-input')
//             expect(component.length).toBe(1)
//         })

//         test('does not render input box', () => {
//             const inputBox = findByTestAttr(wrapper, 'input-box')
//             expect(inputBox.length).toBe(0)
//         })

//         test('does not render submit button', () => {
//             const submitButton = findByTestAttr(wrapper, 'submit-button')
//             expect(submitButton.length).toBe(0)
//         })

//     })
// })

describe('redux props', () => {
    test('has success piece of state as prop', () => {
        const success = true
        const wrapper =
            setupClassComponentWithReduxStoreTest(Input, {}, null, 
                { guessedWords: { guessedWords: [], success: success } })

        const successProp = wrapper.dive().props().success
        expect(successProp).toBe(success)
    })
})
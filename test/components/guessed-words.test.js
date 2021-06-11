import GuessedWords from '../../components/guessed-words'
import { findByTestAttr, setupFunctionComponentTest, testCheckPropTypes } from '../test.util'

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 2 }]
}


test('does not throw warning with expected props', () => {
    testCheckPropTypes(GuessedWords, defaultProps)
})

describe('if there are no words guessed', () => {

    let wrapper
    beforeEach(() => {
        wrapper = setupFunctionComponentTest(GuessedWords, { guessedWords: [] })
    })

    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words')
        expect(component.length).toBe(1)
    })

    test('renders instruction to guess word', () => {
        const instruction = findByTestAttr(wrapper, 'guess-instruction')
        expect(instruction.text().length).not.toBe(0)
    })
})

describe('if there are words guessed', () => {
    const words = {
        guessedWords: [
            { guessedWord: 'train', letterMatchCount: 3 },
            { guessedWord: 'encompass', letterMatchCount: 0 },
            { guessedWord: 'shoulders', letterMatchCount: 1 }
        ]
    }
    let wrapper
    beforeEach(() => {
        wrapper = setupFunctionComponentTest(GuessedWords, words)
    })

    // ** this is same as empty list of guessed words
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words')
        expect(component.length).toBe(1)
    })

    test('renders guessed word section', () => {
        const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words')
        expect(guessedWordsNode.length).toBe(1)
    })

    test('show correct line of guess word', () => {
        const guessedWordNodes = findByTestAttr(wrapper, 'guessed-word')
        expect(guessedWordNodes.length).toBe(words.guessedWords.length)
    })
})
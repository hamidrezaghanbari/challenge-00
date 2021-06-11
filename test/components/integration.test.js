import { guessWord } from "../../lib/redux/guessed-words/guessed-words.actions";
import { initStore } from "../../lib/redux/store";

describe('guess word action dispatcher', () => {
    const secretWord = { secretWord: 'party' }
    const unSuccessfulGuess = 'train'

    describe('no guessed word before guess now (empty guessed words)', () => {
        let store
        const initialState = { guessedWords: { guessedWords: [], success: false } }
        beforeEach(() => {
            store = initStore(initialState)
        })
        test('update state correctly for unsuccessful guest', () => {
            store.dispatch(guessWord(unSuccessfulGuess))
            const newStore = store.getState()

            const expectedState = [{ 'guessedWord': unSuccessfulGuess, 'letterMatchCount': 3 }]

            expect(newStore.guessedWords.success).toBe(false)
            expect(newStore.guessedWords.guessedWords).toEqual(expectedState)

        })
        test('update state correctly for successful guest', () => {

            store.dispatch(guessWord(secretWord.secretWord))
            const newStore = store.getState()

            const expectedState = [{ 'guessedWord': secretWord.secretWord, 'letterMatchCount': 5 }]

            expect(newStore.guessedWords.success).toBe(true)
            expect(newStore.guessedWords.guessedWords).toEqual(expectedState)

        })
    })

    describe('some guessed word is exist but now new guess is fired', () => {
        const guessedWords = [{ guessedWord: 'agile', letterMatchCount: 1 }]
        const initialState = { guessedWords: { guessedWords, success: false }, secretWord }
        let store
        beforeEach(() => {
            store = initStore(initialState)
        })
        test('update state correctly for unsuccessful guest', () => {
            store.dispatch(guessWord(unSuccessfulGuess))
            const newState = store.getState()
            const expectedState = [...guessedWords, { guessedWord: unSuccessfulGuess, letterMatchCount: 3 }]


            expect(newState.guessedWords.success).toBe(false)
            expect(newState.guessedWords.guessedWords).toEqual(expectedState)
        })
        test('update state correctly for successful guest', () => {
            store.dispatch(guessWord(secretWord.secretWord))
            const newState = store.getState()
            const expectedState = [...guessedWords, { guessedWord: secretWord.secretWord, letterMatchCount: 5 }]

            expect(newState.guessedWords.success).toBe(true)
            expect(newState.guessedWords.guessedWords).toEqual(expectedState)
        })
    })
})
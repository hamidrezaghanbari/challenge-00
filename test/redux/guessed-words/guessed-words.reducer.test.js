import { correctGuess } from "../../../lib/redux/guessed-words/guessed-words.actions"
import guessedWordsReducer, { INITIAL_STATE as GUESS_INITIAL_STATE } from "../../../lib/redux/guessed-words/guessed-words.reducer"

test('return initial state when no action is passed', () => {
    const newState = guessedWordsReducer()
    expect(newState).toEqual(GUESS_INITIAL_STATE)
})

test('update state when action CORRECT_GUESS is fired', () => {
    const action = correctGuess()
    const newState = guessedWordsReducer(GUESS_INITIAL_STATE, action)
    expect(newState).toEqual({ ...GUESS_INITIAL_STATE, success: true })
})
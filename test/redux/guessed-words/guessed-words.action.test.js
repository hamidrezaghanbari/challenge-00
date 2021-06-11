import { correctGuess } from "../../../lib/redux/guessed-words/guessed-words.actions"
import GuessedWordsTypes from "../../../lib/redux/guessed-words/guessed-words.types"

describe('correctGuess action creator', () => {
    test('return an action with CORRECT_GUESS', () => {
        const action = correctGuess()
        expect(action).toEqual({ type: GuessedWordsTypes.CORRECT_GUESS })
    })
})

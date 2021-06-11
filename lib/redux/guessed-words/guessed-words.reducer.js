import GuessedWordsTypes from './guessed-words.types'

export const INITIAL_STATE = {
    guessedWords: [],
    success: false,
}

const guessedWordsReducer = (state = INITIAL_STATE, action) => {
    switch (action?.type) {
        case GuessedWordsTypes.CORRECT_GUESS:
            return { ...state, 'success': true }
            break
        case GuessedWordsTypes.GUESS_WORDS:
            return {
                ...state,
                guessedWords: [...state.guessedWords, action.payload]
            }
            break
        default:
            return state
    }
}

export default guessedWordsReducer
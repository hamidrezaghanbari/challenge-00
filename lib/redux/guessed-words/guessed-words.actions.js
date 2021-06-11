import GuessedWordsTypes from "./guessed-words.types"
import { getLetterMatchingCount } from "./../../utils/word-matching.util"

export const correctGuess = () => ({
    type: GuessedWordsTypes.CORRECT_GUESS
})


// ** use redux thunk 
export const guessWord = (guessWord) => {
    return (dispatch, getState) => {
        const secretWord = getState().secretWord.secretWord
        const letterMatchCount = getLetterMatchingCount(guessWord, secretWord)

        dispatch({
            type: GuessedWordsTypes.GUESS_WORDS,
            payload: { guessedWord: guessWord, letterMatchCount: letterMatchCount }
        })

        if (guessWord === secretWord) {
            dispatch({ type: GuessedWordsTypes.CORRECT_GUESS })
        }
    }
}



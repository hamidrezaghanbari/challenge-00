import PropTypes from "prop-types"
const GuessedWords = ({ guessedWords }) => {
    return (
        <div data-test="component-guessed-words">
            {
                guessedWords.length === 0 ? <span data-test="guess-instruction">please guess word!</span> : (
                    <div data-test="guessed-words">
                        {
                            guessedWords.map(({ guessedWord, letterMatchCount }, index) => {
                                return (
                                    <div key={index} data-test="guessed-word">
                                        <h1>{guessedWord}</h1>
                                        <b>{letterMatchCount}</b>
                                        <hr />
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }

        </div>
    )
}

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
}

export default GuessedWords

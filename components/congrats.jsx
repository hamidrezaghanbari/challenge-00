import PropTypes from 'prop-types'
const Congrats = ({ success }) => {
    return (
        <div data-test="component-congrats">
            {
                success ? <span data-test="congrats-message">Congrajulation! you guessed the word</span> : ''
            }
        </div>
    )
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congrats

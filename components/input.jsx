import { Component } from 'react'
import { connect } from 'react-redux'

class Input extends Component {
    render() {
        return (

            <div data-test="component-input">
                {
                    this.props.success ? '' : (
                        <form>
                            <input type="text" name="input" data-test="input-box" />
                            <button data-test="submit-button">submit</button>
                        </form>
                    )
                }
            </div>

        )
    }
}

const mapStateToProps = (store) => {
    return {
        success: store.guessedWords.success
    }
}

export default connect(mapStateToProps)(Input)
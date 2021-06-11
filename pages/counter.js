import React, { Component } from 'react'

export default class CounterPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0,
            error: ''
        }
    }

    decrementOrIncrement = (val) => {
        if(this.state.counter === 0 && val === -1) {
            this.setState({'error': 'counter can not be bellow than zero'})
        } else {
            this.setState((prevState) => ({ 'counter': prevState.counter + val, 'error': ''}))
        }
    }
    render() {
        return (
            <div data-test="component-counter-page">
                <h1 data-test="display-counter">counter is {this.state.counter}</h1>
                {
                    this.state.error ? <p data-test="error-message">{this.state.error}</p> : ''
                }
                <button onClick={() => this.decrementOrIncrement(1)} data-test="increment-button">button</button>
                <hr />
                <button onClick={() => this.decrementOrIncrement(-1)}data-test="decrement-button">decrement button</button>
            </div>
        )
    }
}


import { createStore, applyMiddleware, combineReducers } from 'redux'
import { HYDRATE, createWrapper } from 'next-redux-wrapper'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import guessedWordsReducer from './guessed-words/guessed-words.reducer'
import secretWordReducer from './secret/secret.reducer'

const bindMiddleware = (middleware) => {
    if (process.env.NODE_ENV !== 'production') {
        const { composeWithDevTools } = require('redux-devtools-extension')
        return composeWithDevTools(applyMiddleware(...middleware))
    }
    return applyMiddleware(...middleware)
}

const combinedReducer = combineReducers({
    guessedWords: guessedWordsReducer,
    secretWord: secretWordReducer
})

const reducer = (state, action) => {
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        }
        // todo check this line if (state.count.count) nextState.count.count = state.count.count // preserve count value on client side navigation
        return nextState
    } else {
        return combinedReducer(state, action)
    }
}

export const initStore = (initialStore = null) => {
    // if (initialStore === null) return createStore(reducer, bindMiddleware([thunkMiddleware, logger]))
    // else return createStore(reducer, initialStore, bindMiddleware([thunkMiddleware, logger]))


    // ** without logger for testing 
    if (initialStore === null) return createStore(reducer, bindMiddleware([thunkMiddleware]))
    else return createStore(reducer, initialStore, bindMiddleware([thunkMiddleware]))
}

export const wrapper = createWrapper(initStore)
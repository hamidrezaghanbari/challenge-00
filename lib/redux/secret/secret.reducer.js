import SecretWordTypes from './secret.types'

export const INITIAL_STATE = {
    secretWord: 'party',
    secret: ''
}

const secretWordReducer = (state = INITIAL_STATE, action) => {
    switch (action?.type) {
        case SecretWordTypes.SET_SECRET_WORD:
            return { ...state, 'secret': action.payload }
            break
        default:
            return state
    }
}

export default secretWordReducer
import BasketTypes from './basket.types'
import { addToBasket, decreaseFromBasket, removeFromBasket } from './basket.util'

const INITIAL_STATE = {
    guessedWords: []
}

const successReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case BasketTypes.ADD_TO_BASKET:
            return {...state, 'products': addToBasket(state.products, action.payload)}
            break
        case BasketTypes.REMOVE_FROM_BASKET:
            return {...state, 'products': removeFromBasket(state.products, action.payload)}
            break
        case BasketTypes.DECREASE_FROM_BASKET:
            return {...state, 'products': decreaseFromBasket(state.products, action.payload)}
            break
        default:
            return state
    }
}

export default successReducer
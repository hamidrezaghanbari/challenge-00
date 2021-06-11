import axios from "axios"
import SecretWordTypes from './secret.types'

// ** use redux thunk for get secret word
export const getSecretWord = () => {
    return (dispatch) => {
        return axios.get('http://localhost:3030')
            .then(response => {
                dispatch({
                    type: SecretWordTypes.SET_SECRET_WORD,
                    payload: response.data
                })
            })
    }
}

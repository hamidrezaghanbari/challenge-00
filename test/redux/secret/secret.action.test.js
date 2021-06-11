import moxios from "moxios"
import { getSecretWord } from "../../../lib/redux/secret/secret.actions"
import { initStore } from "../../../lib/redux/store"

// ** test with moxios for testing axios request
// ** this is example of integrations test integratinos test is test both action and reducer
// ** together
describe('getSecretWord action creator', () => {
    beforeEach(() => {
        moxios.install()
    })

    afterEach(() => {
        moxios.uninstall()
    })

    test('add response word to the state', () => {
        const secret = 'party'
        const store = initStore()

        moxios.wait(() => {
            const request = moxios.requests.mostRecent()
            request.respondWith({
                status: 200,
                response: secret
            })
        })


        // ** به این دلیل از ریترن استفاده میکنیم در تست که میخاهیم تا زمانی که قسمت دن انجام نشده است تست پایان داده نشود
        return store.dispatch(getSecretWord())
            .then(() => {
                const newState = store.getState()
                expect(newState.secretWord.secret).toBe(secret)
            })
    })
})
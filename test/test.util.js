import { shallow } from 'enzyme'
import { checkPropTypes } from 'prop-types'
import { initStore } from '../lib/redux/store'


// ** factory function to create shallow wrapper for counter page component **
// ** @function setup
// ** @params {object} props - component props specific to this setup
// ** @return {ShallowWrapper}
export const setupClassComponentTest = (Component, props = {}, state = null) => {
    const wrapper = shallow(<Component {...props} />)
    if (state) wrapper.setState(state)
    return wrapper
}

export const setupClassComponentWithReduxStoreTest = (Component, props = {}, state = null, initialStore = null) => {
    const store = initStore(initialStore)


    const wrapper = shallow(<Component store={store} {...props} />)
    if (state) wrapper.setState(state)
    return wrapper
}

export const setupFunctionComponentTest = (Component, props = {}) => {
    const wrapper = shallow(<Component {...props} />)
    return wrapper
}

export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`)
}

export const testCheckPropTypes = (component, confirmingProps) => {
    const propError = checkPropTypes(component.propTypes, confirmingProps,
        'prop', component.name)
    expect(propError).toBeUndefined()    
}

// ** some code for redux testing **

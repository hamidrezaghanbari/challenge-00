import IndexPage from '../../pages/index'
import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'

Enzyme.configure({ adapter: new Adapter() });

test('my first test', () => {
    const wrapper = shallow(<IndexPage />)
    // ** .debug() return component jsx as string
    // console.log(wrapper.debug())

    // ** expect(wrapper).toBeTruthy() pass if wrapper is not falsy
    // expect(wrapper).toBeTruthy()

    // ** expect(wrapper).toBeFalsy() pass if wrapper is falsy value
    // expect(wrapper).toBeFalsy()
    
})
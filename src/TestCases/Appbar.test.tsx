import { shallow } from 'enzyme';
import Appbar from '../Component/Appbar';


describe('Appbar', () => {

    describe('renders', () => {

        it('loading text', () => {
            const wrapper = shallow(<Appbar appbarMessage="Employee Management App"/>);
            expect(wrapper.contains('Employee Management App')).toBe(true);
        });

        it('custom text', () => {
            const wrapper = shallow(<Appbar appbarMessage="Employee Management App" />);
            expect(wrapper.contains('Employee Management App')).toBe(true);
        });

        it('Login text', () => {
            const wrapper = shallow(<Appbar />);
            expect(wrapper.contains('Login')).toBe(true);
        });
    });
});
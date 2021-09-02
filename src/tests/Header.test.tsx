import { shallow } from 'enzyme';
import Header from '../component/Headers/Headers';


describe('Appbar', () => {

    describe('renders', () => {

        it('loading text', () => {
            const wrapper = shallow(<Header appbarMessage="Employee Management App"/>);
            expect(wrapper.contains('Employee Management App')).toBe(true);
        });

        it('custom text', () => {
            const wrapper = shallow(<Header appbarMessage="Employee Management App" />);
            expect(wrapper.contains('Employee Management App')).toBe(true);
        });

    });
});
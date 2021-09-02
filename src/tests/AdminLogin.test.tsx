
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import AdminLogin from '../containers/AdminLogin/AdminLogin';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
const mockStore = configureMockStore();
const store = mockStore({});


describe('<AdminLogin/>', () => {

    let wrapper: any;     
   
    const props = {
        first_name: "",
        id: "",
        last_name: "",
        email: "",
        avatar: "",
        password: ""
    }

    beforeEach(() => {
        wrapper =  shallow(
                <Provider store={store}>
                    <AdminLogin userInfo={props} />
                </Provider>
            );
    });

    it('should match the snapshot', () => {
        expect(shallowToJson(wrapper)).toMatchSnapshot();
    });


    it('should have an email field', () => {
        expect(wrapper.find('Container').length).toEqual(0);
    });

});
 
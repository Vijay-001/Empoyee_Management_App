import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import AdminLogin from '../containers/userLogin/login';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<AdminLogin/>', () => {
  const props = {
    first_name: '',
    id: '',
    last_name: '',
    email: '',
    avatar: '',
    password: '',
  };

  let wrapper = beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <AdminLogin userInfo={props} />
      </Provider>,
    );
  });

  it('should match the snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should have an email field', () => {
    expect(wrapper.find('Email').length).toEqual(0);
  });

  it('should have a password field', () => {
    expect(wrapper.find('Password').length).toEqual(0);
  });

  it('should have a submit button', () => {
    expect(wrapper.find('Button').length).toEqual(0);
  });
});

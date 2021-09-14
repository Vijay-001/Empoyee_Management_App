import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import AdminLogin from '../containers/AdminLogin/AdminLogin';
import ViewEmployeeDetails from '../containers/View_Employee/ViewEmployee';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<ViewEmployee/>', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <ViewEmployeeDetails />
      </Provider>,
    );
  });

  it('should have a submit button', () => {
    expect(wrapper.find('Button').length).toEqual(0);
  });
});

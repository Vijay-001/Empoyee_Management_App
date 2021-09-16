import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import ViewEmployeeDetails from '../containers/viewUser/view';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<ViewEmployee/>', () => {
  let wrapper = beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <ViewEmployeeDetails />
      </Provider>,
    );
  });

  it('should match the snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('should have a submit button', () => {
    expect(wrapper.find('Button').length).toEqual(0);
  });
});

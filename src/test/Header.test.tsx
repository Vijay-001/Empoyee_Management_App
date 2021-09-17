import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Header from '../component/header/appBar';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<Appbar/>', () => {
  let wrapper = beforeEach(() => {
    wrapper = shallow(
      <Provider store={store}>
        <Header />
      </Provider>,
    );
  });
  it('should match the snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('custom text', () => {
    expect(wrapper.contains('Employee Management App')).toBe(false);
  });

  it('should have a submit button', () => {
    expect(wrapper.find('Button').length).toEqual(0);
  });
});

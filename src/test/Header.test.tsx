import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import { Button, TextField, Typography } from '@material-ui/core';
import Header from '../component/header/appBar';
import '@testing-library/jest-dom/extend-expect';

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

  const Component = (props: any) => (
    <Provider store={store}>
      <Header />
    </Provider>
  );

  it('should match the snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('render <Button /> component with Button', () => {
    const Wrapper = mount(<Component />);
    expect(Wrapper.find(Button)).toHaveLength(0);
  });

  it('render <Typography /> component with Button', () => {
    const Wrapper = mount(<Component />);
    expect(Wrapper.find(Typography)).toHaveLength(1);
  });
});

import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import { TextField } from '@material-ui/core';
import { fireEvent, render } from '@testing-library/react';
import { shallowToJson } from 'enzyme-to-json';
import { Button, Modal } from 'react-bootstrap';
import UserEditModal from '../containers/editUser/edit';

const mockStore = configureMockStore();
const store = mockStore({});

describe('<AdminLogin/>', () => {
  const fieldprops = {
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
        <UserEditModal show onClose={() => false} mode="Edit" userInfo={fieldprops as any} />
      </Provider>,
    );
  });

  const EditComponent = (props: any) => (
    <Provider store={store}>
      <UserEditModal show onClose={() => false} mode="Edit" userInfo={fieldprops as any} />
    </Provider>
  );

  it('should match the snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  it('renders a <TextField/> and <Button /> component', () => {
    const Wrapper = mount(<EditComponent />);
    expect(Wrapper.find(TextField)).toHaveLength(3);
    expect(Wrapper.find(Button)).toHaveLength(2);
  });
});

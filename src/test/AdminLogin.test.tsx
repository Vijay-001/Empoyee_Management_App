import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { mount, shallow } from 'enzyme';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { fireEvent, render } from '@testing-library/react';
import { shallowToJson } from 'enzyme-to-json';
import AdminLogin from '../containers/userLogin/login';

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
        <AdminLogin userInfo={fieldprops} />
      </Provider>,
    );
  });

  it('should match the snapshot', () => {
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });

  const LoginComponent = (props:any) => (
    <Provider store={store}>
      <AdminLogin userInfo={fieldprops} />
    </Provider>
  );

  it('renders a <TextField/> and <Button />component', () => {
    const Wrapper = mount(<LoginComponent />);
    expect(Wrapper.find(TextField)).toHaveLength(2);
    expect(Wrapper.find(Button)).toHaveLength(1);
  });

  it('renders default state values', () => {
    const { getByTestId } = render(<LoginComponent />);
    const password = getByTestId('userAccountPassword') as HTMLInputElement;
    const email = getByTestId('userAccountEmail') as HTMLInputElement;
    const submit = getByTestId('submitUserDetails');
    fireEvent.click(submit);
    expect(password.value).toBe('');
    expect(email.value).toBe('');
    expect(submit).toHaveClass('Mui-disabled');
  });

  it('disabled submit for invalid emailId and password', () => {
    const { getByTestId } = render(<LoginComponent />);
    const email = getByTestId('userAccountEmail');
    const password = getByTestId('userAccountPassword');
    const button = getByTestId('submitUserDetails');
    fireEvent.change(email, { target: { value: 'vk@gmail.com' } });
    fireEvent.change(password, { target: { value: 'data100' } });
    expect(button).not.toHaveClass('Mui-disabled');
  });
});

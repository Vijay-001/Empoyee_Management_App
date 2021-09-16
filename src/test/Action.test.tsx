import ActionCreators from '../store/actions/actions';
import { Types } from '../store/types';

describe('Login_Success actions', () => {
  test('login requested', () => {
    const payload = [{ token: 'QpwL5tke4Pnpja7X4' }];
    const action = ActionCreators.loginSuccess(payload);
    expect(action).toEqual({
      type: Types.Login_Success,
      payload: action.payload,
    });
  });

  test('GET_Employee Success', () => {
    const payload = [{}];
    const action = ActionCreators.loadingEmployeeSuccess(payload);
    expect(action).toEqual({
      type: Types.Loading_Employee_Success,
      payload: action.payload,
    });
  });

  test('Add_Employee Success', () => {
    const payload = [{ email: 'test', firstName: 'test', lastName: 'test@gmail.com' }];
    const action = ActionCreators.AddEmployeeSuccess(payload);
    expect(action).toEqual({
      type: Types.Add_Employee_Sucess,
      payload: action.payload,
    });
  });

  test('Update_Employee_Action', () => {
    const payload = [{
      id: 5, email: 'charles.morris@reqres.in', first_name: 'Charles', last_name: 'Morris',
    }];
    const action = ActionCreators.UpdateEmployeeSuccess(payload);
    expect(action).toEqual({
      type: Types.Update_Employee_Success,
      payload: action.payload,
    });
  });
});

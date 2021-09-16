import reducer from '../store/reducers/reducer';

describe('UserReducer', () => {
  test('login reducer  check with wrong action', () => {
    const payloaddata = {
      user: [{ token: 'QpwL5tke4Pnpja7X4' }],
    };
    const action = { type: 'log', payload: payloaddata };
    const initialState = {
      users: [],
    };
    expect(reducer(undefined, action)).toEqual(initialState);
  });

  test('Add employee reducer check with wrong action', () => {
    const payloaddata = {
      user: [{
        firstName: 'test',
        lastName: 'testdata',
        email: 'test@gmail.com',
      }],
    };
    const action = { type: 'Addempoloyee', payload: payloaddata };
    const initialState = {
      users: [],
    };
    expect(reducer(undefined, action)).toEqual(initialState);
  });
});

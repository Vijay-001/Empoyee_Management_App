import adminLogin from '../common/userApi/userlogin';
import { IUser } from '../common/userInterface/userInterface';

describe('#adminlogin() using async/await', () => {
  it('should load user data', async () => {
    const payload = {
      first_name: '',
      id: '',
      last_name: '',
      email: '',
      avatar: '',
      password: '',
    };
    const data = await adminLogin(payload);
    expect(data).toBeDefined();
    expect(data).toEqual(data);
  });
});

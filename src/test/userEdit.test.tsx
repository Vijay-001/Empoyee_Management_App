import updateUserDetails from '../common/userApi/addUser';

describe('#updagteUserDetails() using async/await', () => {
  it('should load user data', async () => {
    const payload = {
      first_name: '',
      id: '',
      last_name: '',
      email: '',
      avatar: '',
      password: '',
    };
    const data = await updateUserDetails(payload);
    expect(data).toBeDefined();
    expect(data).toEqual(data);
  });
});

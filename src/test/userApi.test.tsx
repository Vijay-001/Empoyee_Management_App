import getUserList from '../common/userApi/viewUser';

describe('#getUser() using async/await', () => {
  it('should load user data', async () => {
    const data = await getUserList;
    expect(data).toBeDefined();
    expect(data).toEqual(data);
  });
});

import axios from "axios";
import { MiddlewareAPI } from "redux";
import addUser from "../common/userApi/addUser";

jest.mock("axios", () => jest.fn());

describe("add user api testing", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("#addUserAPI", () => {
    const userPayload = {
      first_name: "",
      id: "",
      last_name: "",
      email: "",
      avatar: "",
      password: "",
    };
    describe("Unit test", () => {
      it("should dispatch api success action", async () => {
        const store: MiddlewareAPI = {
          dispatch: jest.fn(),
          getState: jest.fn(),
        };
        const mResponse = { name: "user name" };
        (axios as jest.Mocked<any>).mockResolvedValueOnce(mResponse);
        await addUser(userPayload)(store.dispatch, store.getState);
        expect(axios).toBeCalledWith({
          method: "post",
          url: "https://reqres.in/api/users",
          data: userPayload,
        });
        expect(axios).toHaveBeenCalledTimes(1);
      });
    });
  });
});

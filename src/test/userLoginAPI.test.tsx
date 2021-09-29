import axios from "axios";
import { MiddlewareAPI } from "redux";
import adminLogin from "../common/userApi/userlogin";

jest.mock("axios", () => jest.fn());

describe("login user api testing", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("#userLoginAPI", () => {
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
        await adminLogin(userPayload)(store.dispatch);
        expect(axios).toBeCalledWith({
          method: "post",
          url: "https://reqres.in/api/login",
          data: userPayload,
        });
        expect(axios).toHaveBeenCalledTimes(1);
      });
    });
  });
});

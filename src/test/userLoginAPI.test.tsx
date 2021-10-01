import axios from "axios";
import adminLogin from "../common/userApi/userlogin";
import Types from "../store/types";

jest.mock("axios", () => jest.fn());

describe("login user api testing", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("#userLoginAPI", () => {
    const mockApiResponse = {
      type: Types.Login_Success,
      payload: {
        user: [
          {
            token: "QpwL5tke4Pnpja7X4",
          },
        ],
      },
    };

    describe("Unit test", () => {
      const userPayload = {
        first_name: "",
        id: "",
        last_name: "",
        email: "eve.holt@reqres.in",
        avatar: "",
        password: "pistol",
      };
      it("should dispatch api success action", async () => {
        const store = {
          dispatch: jest.fn(),
          getState: jest.fn(),
        };
        const mResponse = { data: { token: "QpwL5tke4Pnpja7X4" } };
        (axios as jest.Mocked<any>).mockResolvedValueOnce(mResponse);
        await adminLogin(userPayload)(store.dispatch);

        expect(axios).toBeCalledWith({
          method: "post",
          url: "https://reqres.in/api/login",
          data: userPayload,
        });
        expect(store.dispatch).toBeCalledWith(mockApiResponse);
        expect(axios).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe("#Login_Failed with wrong or empty payload", () => {
    const mockApiResponse = { type: Types.Login_Failed };

    describe("Login_Failed", () => {
      const userPayload = {
        first_name: "",
        id: "",
        last_name: "",
        email: "evelllll",
        avatar: "",
        password: "pistol",
      };
      it("#Login_Failed with wrong or empty payload", async () => {
        const store = {
          dispatch: jest.fn(),
          getState: jest.fn(),
        };
        const mResponse = {};
        (axios as jest.Mocked<any>).mockResolvedValueOnce(mResponse);
        await adminLogin(userPayload)(store.dispatch);

        expect(axios).toBeCalledWith({
          method: "post",
          url: "https://reqres.in/api/login",
          data: userPayload,
        });
        expect(store.dispatch).toBeCalledWith(mockApiResponse);
        expect(axios).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe("#Login failed due network error or url", () => {
    const mockApiResponse = { type: "Login_Failed" };

    describe("#Login failed due network error or url", () => {
      const userPayload = {
        first_name: "",
        id: "",
        last_name: "",
        email: "evelllll",
        avatar: "",
        password: "pistol",
      };
      it("should dispatch api failed action", async () => {
        const store = {
          dispatch: jest.fn(),
          getState: jest.fn(),
        };
        const mResponse = { userdata: { token: "QpwL5tke4Pnpja7X4" } };
        (axios as jest.Mocked<any>).mockResolvedValueOnce(mResponse);
        await adminLogin(userPayload)(store.dispatch);

        expect(axios).toBeCalledWith({
          method: "post",
          url: "https://reqres.in/api/login",
          data: userPayload,
        });
        expect(store.dispatch).toBeCalledWith(mockApiResponse);
        expect(axios).toHaveBeenCalledTimes(1);
      });
    });
  });
});

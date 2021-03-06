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
      type: "Login_Success",
      payload: {
        user: [
          {
            email: "vijay@gmail.com ",
            password: "abc@100",
          },
        ],
      },
    };

    describe("Unit test", () => {
      const userPayload = {
        first_name: "",
        id: "",
        last_name: "",
        email: "vijay@gmail.com ",
        avatar: "",
        password: "abc@100",
      };
      it("should dispatch api success action", async () => {
        const store = {
          dispatch: jest.fn(),
          getState: jest.fn(),
        };
        const mResponse = {
          data: [
            {
              email: "vijay@gmail.com ",
              password: "abc@100",
            },
          ],
        };
        (axios as jest.Mocked<any>).mockResolvedValueOnce(mResponse);
        await adminLogin(userPayload)(store.dispatch);

        expect(axios).toBeCalledWith({
          url: "http://localhost:5000/login?q=" + userPayload.email,
          method: "get",
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
          url: "http://localhost:5000/login?q=" + userPayload.email,
          method: "get",
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
        const mResponse = {
          userdata: {
            email: "vijay@gmail.com ",
            password: "abc@100",
          },
        };
        (axios as jest.Mocked<any>).mockResolvedValueOnce(mResponse);
        await adminLogin(userPayload)(store.dispatch);

        expect(axios).toBeCalledWith({
          url: "http://localhost:5000/login?q=" + userPayload.email,
          method: "get",
        });
        expect(store.dispatch).toBeCalledWith(mockApiResponse);
        expect(axios).toHaveBeenCalledTimes(1);
      });
    });
  });
});

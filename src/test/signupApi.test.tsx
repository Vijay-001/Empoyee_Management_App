import axios from "axios";
import userSignup from "../common/userApi/userSignup";
import Types from "../store/types";

jest.mock("axios", () => jest.fn());

describe("Signup user api testing", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("#userSignupAPI", () => {
    const mockApiResponse = {
      type: Types.SignUP_Success,
      payload: {
        user: {
          email: "apitest@gmail.com ",
          password: "abc@100",
        },
      },
    };

    describe("Signup Unit test", () => {
      const userPayload = {
        first_name: "",
        id: "",
        last_name: "",
        email: "apitest@gmail.com ",
        avatar: "",
        password: "abc@100",
      };
      it("should dispatch api success action", async () => {
        const store = {
          dispatch: jest.fn(),
          getState: jest.fn(),
        };
        const mResponse = {
          data: {
            email: "apitest@gmail.com ",
            password: "abc@100",
          },
        };
        (axios as jest.Mocked<any>).mockResolvedValueOnce(mResponse);
        await userSignup(userPayload)(store.dispatch);

        expect(axios).toBeCalledWith({
          url: "http://localhost:5000/login",
          method: "post",
          data: {
            email: userPayload.email,
            password: userPayload.password,
          },
        });
        expect(store.dispatch).toBeCalledWith(mockApiResponse);
        expect(axios).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe("#Signup with wrong or empty payload", () => {
    const mockApiResponse = { type: Types.SignUP_Failed };

    describe("Login_Failed", () => {
      const userPayload = {
        first_name: "",
        id: "",
        last_name: "",
        email: "evelllll",
        avatar: "",
        password: "pistol",
      };
      it("#Signup with wrong or empty payload", async () => {
        const store = {
          dispatch: jest.fn(),
          getState: jest.fn(),
        };
        const mResponse = {};
        (axios as jest.Mocked<any>).mockResolvedValueOnce(mResponse);
        await userSignup(userPayload)(store.dispatch);

        expect(axios).toBeCalledWith({
          url: "http://localhost:5000/login",
          method: "post",
          data: {
            email: userPayload.email,
            password: userPayload.password,
          },
        });
        expect(store.dispatch).toBeCalledWith(mockApiResponse);
        expect(axios).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe("#Signup failed due network error or url", () => {
    const mockApiResponse = { type: Types.SignUP_Failed };

    describe("#Signup failed due network error or url", () => {
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
        await userSignup(userPayload)(store.dispatch);

        expect(axios).toBeCalledWith({
          url: "http://localhost:5000/login",
          method: "post",
          data: {
            email: userPayload.email,
            password: userPayload.password,
          },
        });
        expect(store.dispatch).toBeCalledWith(mockApiResponse);
        expect(axios).toHaveBeenCalledTimes(1);
      });
    });
  });
});

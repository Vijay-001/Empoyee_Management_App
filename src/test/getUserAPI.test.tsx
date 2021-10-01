import axios from "axios";
import getUserList from "../common/userApi/viewUser";
import Types from "../store/types";

jest.mock("axios", () => jest.fn());

describe("view user api testing", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("#getUserAPI", () => {
    const mockApiResponse = {
      type: Types.Loading_Employee_Success,
      payload: {
        user: [
          {
            id: 1,
            email: "george.bluth@reqres.in",
            first_name: "George",
            last_name: "Bluth",
            avatar: "https://reqres.in/img/faces/1-image.jpg",
          },
        ],
      },
    };

    describe("Unit test", () => {
      it("should dispatch api success action", async () => {
        const store = {
          dispatch: jest.fn(),
          getState: jest.fn(),
        };
        const mResponse = {
          data: {
            data: [
              {
                id: 1,
                email: "george.bluth@reqres.in",
                first_name: "George",
                last_name: "Bluth",
                avatar: "https://reqres.in/img/faces/1-image.jpg",
              },
            ],
          },
        };
        (axios as jest.Mocked<any>).mockResolvedValueOnce(mResponse);
        await getUserList(store.dispatch);
        expect(axios).toBeCalledWith({
          method: "get",
          url: "https://reqres.in/api/users",
        });
        expect(store.dispatch).toBeCalledWith(mockApiResponse);
        expect(axios).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe("getUser failed action test", () => {
    const mockApiResponse = { type: Types.Loading_Employee_Failed };
    it("should dispatch api getuser failed action", async () => {
      const store = {
        dispatch: jest.fn(),
        getState: jest.fn(),
      };
      const mResponse = {};
      (axios as jest.Mocked<any>).mockResolvedValueOnce(mResponse);
      await getUserList(store.dispatch);
      expect(axios).toBeCalledWith({
        method: "get",
        url: "https://reqres.in/api/users",
      });
      expect(store.dispatch).toBeCalledWith(mockApiResponse);
      expect(axios).toHaveBeenCalledTimes(1);
    });
  });
});

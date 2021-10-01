import axios from "axios";
import addUser from "../common/userApi/addUser";
import Types from "../store/types";

jest.mock("axios", () => jest.fn());

describe("add user api testing", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const mockApiResponse = {
    type: Types.Add_Employee_Sucess,
    payload: {
      user: [
        {
          id: "1",
          email: "george.bluth@reqres.in",
          first_name: "George",
          last_name: "Bluth",
        },
      ],
    },
  };
  describe("#addUserAPI", () => {
    const userPayload = {
      id: "",
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    };
    describe("Unit test", () => {
      it("should dispatch api success action", async () => {
        const store = {
          dispatch: jest.fn(),
          getState: jest.fn(),
        };
        const mResponse = {
          data: [
            {
              id: "1",
              email: "george.bluth@reqres.in",
              first_name: "George",
              last_name: "Bluth",
            },
          ],
        };
        (axios as jest.Mocked<any>).mockResolvedValueOnce(mResponse);
        await addUser(userPayload)(store.dispatch, store.getState);
        expect(axios).toBeCalledWith({
          method: "post",
          url: "https://reqres.in/api/users",
          data: userPayload,
        });
        expect(store.dispatch).toBeCalledWith(mockApiResponse);
        expect(axios).toHaveBeenCalledTimes(1);
      });
    });
  });

  describe("#failed add user", () => {
    const mockFailedResponse = { type: Types.Add_Employee_Failed };
    const userPayload = {
      id: "",
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    };
    describe("failed add user", () => {
      it("should dispatch api success action", async () => {
        const store = {
          dispatch: jest.fn(),
          getState: jest.fn(),
        };
        const mResponse = {
          newdata: [
            {
              id: "1",
              email: "george.bluth@reqres.in",
              first_name: "George",
              last_name: "Bluth",
            },
          ],
        };
        (axios as jest.Mocked<any>).mockResolvedValueOnce(mResponse);
        await addUser(userPayload)(store.dispatch, store.getState);
        expect(axios).toBeCalledWith({
          method: "post",
          url: "https://reqres.in/api/users",
          data: userPayload,
        });
        expect(store.dispatch).toBeCalledWith(mockFailedResponse);
        expect(axios).toHaveBeenCalledTimes(1);
      });
    });
  });
});

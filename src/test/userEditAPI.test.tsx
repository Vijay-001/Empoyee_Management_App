import axios from "axios";
import updateUserDetails from "../common/userApi/userEdit";
import Types from "../store/types";

jest.mock("axios", () => jest.fn());

describe("add user api testing", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const mockApiResponse = {
    type: Types.Update_Employee_Success,
    payload: {
      user: [
        {
          id: "1",
          email: "george.bluth@reqres.in",
          first_name: "George",
          last_name: "Bluth",
          avatar: "https://reqres.in/img/faces/1-image.jpg",
        },
      ],
    },
  };
  describe("#EditUserAPI Success", () => {
    const userPayload = {
      id: "1",
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
      password: "",
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
              avatar: "https://reqres.in/img/faces/1-image.jpg",
            },
          ],
        };
        (axios as jest.Mocked<any>).mockResolvedValueOnce(mResponse);
        await updateUserDetails(userPayload)(store.dispatch, store.getState);
        expect(axios).toBeCalledWith({
          method: "put",
          url: `https://reqres.in/api/users/${userPayload.id}`,
          data: userPayload,
        });
        expect(axios).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toBeCalledWith(mockApiResponse);
      });
    });
  });

  describe("#userEdit failed api action", () => {
    const mockFailedResponse = { type: Types.Update_Employee_Failed };
    const userPayload = {
      id: "1",
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
      password: "",
    };
    describe("Unit test", () => {
      it("should dispatch api failed action", async () => {
        const store = {
          dispatch: jest.fn(),
          getState: jest.fn(),
        };
        const emptyMockResponse: any = {};
        (axios as jest.Mocked<any>).mockResolvedValueOnce(emptyMockResponse);
        await updateUserDetails(userPayload)(store.dispatch, store.getState);
        expect(axios).toBeCalledWith({
          method: "put",
          url: `https://reqres.in/api/users/${userPayload.id}`,
          data: userPayload,
        });
        expect(axios).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toBeCalledWith(mockFailedResponse);
      });
    });
  });
});

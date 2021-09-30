import axios from "axios";
import { MiddlewareAPI } from "redux";
import getUserList from "../common/userApi/viewUser";

jest.mock("axios", () => jest.fn());

describe("view user api testing", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  describe("#getUserAPI", () => {
    describe("Unit test", () => {
      it("should dispatch api success action", async () => {
        const store = {
          dispatch: jest.fn(),
          getState: jest.fn(),
        };
        const mResponse = { name: "user name" };
        (axios as jest.Mocked<any>).mockResolvedValueOnce(mResponse);
        await getUserList(store.dispatch);
        expect(axios).toBeCalledWith({
          method: "get",
          url: "https://reqres.in/api/users",
          data: {},
        });
        expect(axios).toHaveBeenCalledTimes(1);
      });
    });
  });
});

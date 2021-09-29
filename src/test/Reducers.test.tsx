import reducer from "../store/reducers/reducer";
import Types from "../store/types";

describe("user reducer", () => {
  describe("login users reducer", () => {
    it("view users reducer expected state", () => {
      const reqUserData = {
        user: [
          {
            email: "eve.holt@reqres.in",
            password: "pistol",
          },
        ],
      };
      const action = {
        payload: reqUserData,
        type: Types.Login_Success,
      };

      const updatedState = reducer(undefined, action);
      expect(updatedState.users).toHaveLength(1);
      expect(updatedState.users).toEqual(reqUserData.user);
    });
  });

  describe("add users reducer", () => {
    it("add users reducer expected state", () => {
      const reqUserData = {
        user: [
          {
            firstName: "test",
            lastName: "testdata",
            email: "test@gmail.com",
          },
        ],
      };
      const action = {
        payload: reqUserData,
        type: Types.Add_Employee_Sucess,
      };

      const updatedState = reducer(undefined, action);
      expect(updatedState.users).toHaveLength(1);
      expect(updatedState.users).toEqual(reqUserData.user);
    });
  });

  describe("update users reducer", () => {
    it("update users reducer expected state", () => {
      const reqUserData = {
        user: [
          {
            id: 5,
            email: "charles.morris@reqres.in",
            first_name: "Charles",
            last_name: "Morris",
          },
        ],
      };
      const action = {
        payload: reqUserData,
        type: Types.Update_Employee_Success,
      };

      const updatedState = reducer(undefined, action);
      expect(updatedState.users).toHaveLength(1);
      expect(updatedState.users).toEqual(reqUserData.user);
    });
  });

  describe("view users reducer", () => {
    it("view users reducer expected state", () => {
      const reqUserData = {
        user: [
          {
            id: 1,
            email: "george.bluth@reqres.in",
            first_name: "George",
            last_name: "Bluth",
            avatar: "https://reqres.in/img/faces/1-image.jpg",
          },
        ],
      };
      const action = {
        payload: reqUserData,
        type: Types.Loading_Employee_Success,
      };

      const updatedState = reducer(undefined, action);
      expect(updatedState.users).toHaveLength(1);
      expect(updatedState.users).toEqual(reqUserData.user);
    });
  });

  it("add users reducer failed state", () => {
    const failedAction = {
      type: Types.Add_Employee_Failed,
    };
    const updatedState = reducer(undefined, failedAction);
    expect(updatedState).toEqual({});
  });

  it("update users reducer failed state", () => {
    const failedAction = {
      type: Types.Update_Employee_Failed,
    };
    const updatedState = reducer(undefined, failedAction);
    expect(updatedState).toEqual({});
  });

  it("login users reducer failed state", () => {
    const failedAction = {
      type: Types.Login_Failed,
    };
    const updatedState = reducer(undefined, failedAction);
    expect(updatedState).toEqual({});
  });

  it("view users reducer failed state", () => {
    const failedAction = {
      type: Types.Loading_Employee_Failed,
    };
    const updatedState = reducer(undefined, failedAction);
    expect(updatedState).toEqual({});
  });

  test("is correct", () => {
    const action = { type: "dummy_action" };
    const initialState: any = [];
    const updatedState = reducer(undefined, action);
    expect(updatedState.users).toEqual(initialState);
  });
});

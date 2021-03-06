import configureMockStore from "redux-mock-store";
import ActionCreators from "../store/actions/actions";
import Types from "../store/types";

describe("user actions", () => {
  const mockStore = configureMockStore();
  const store = mockStore({});

  beforeEach(() => {
    store.clearActions();
  });

  describe("login user action", () => {
    it("should dispatch the login user action", () => {
      const reqUserData = { email: "eve.holt@reqres.in", password: "pistol" };
      const expectedActions = [
        {
          type: Types.Login_Success,
          payload: {
            user: {
              email: "eve.holt@reqres.in",
              password: "pistol",
            },
          },
        },
      ];
      store.dispatch(ActionCreators.loginSuccess(reqUserData));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("sign-up user action", () => {
    it("should dispatch the sign-up user action", () => {
      const reqUserData = { email: "eve.holt@reqres.in", password: "pistol" };
      const expectedActions = [
        {
          type: Types.SignUP_Success,
          payload: {
            user: {
              email: "eve.holt@reqres.in",
              password: "pistol",
            },
          },
        },
      ];
      store.dispatch(ActionCreators.signUpSuccess(reqUserData));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("add user action", () => {
    it("should dispatch the add user action", () => {
      const reqUserData = {
        email: "test",
        firstName: "test",
        lastName: "test@gmail.com",
      };
      const expectedActions = [
        {
          type: Types.Add_Employee_Sucess,
          payload: {
            user: {
              email: "test",
              firstName: "test",
              lastName: "test@gmail.com",
            },
          },
        },
      ];
      store.dispatch(ActionCreators.AddEmployeeSuccess(reqUserData));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("view user actions", () => {
    it("should dispatch the view user action", () => {
      const reqUserData = [
        {
          id: 1,
          email: "george.bluth@reqres.in",
          first_name: "George",
          last_name: "Bluth",
          avatar: "https://reqres.in/img/faces/1-image.jpg",
        },
      ];

      const expectedActions = [
        {
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
        },
      ];
      store.dispatch(ActionCreators.loadingEmployeeSuccess(reqUserData));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("update user actions", () => {
    it("should dispatch the update user action", () => {
      const reqUserData = {
        id: 5,
        email: "charles.morris@reqres.in",
        first_name: "Charles",
        last_name: "Morris",
      };
      const expectedActions = [
        {
          type: Types.Update_Employee_Success,
          payload: {
            user: {
              id: 5,
              email: "charles.morris@reqres.in",
              first_name: "Charles",
              last_name: "Morris",
            },
          },
        },
      ];
      store.dispatch(ActionCreators.UpdateEmployeeSuccess(reqUserData));
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("login user failed action", () => {
    it("should dispatch the login user failed action", () => {
      const expectedActions = [
        {
          type: Types.Login_Failed,
        },
      ];
      store.dispatch(ActionCreators.loginFailed());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("sign-up user failed action", () => {
    it("should dispatch the sign-up user failed action", () => {
      const expectedActions = [
        {
          type: Types.SignUP_Failed,
        },
      ];
      store.dispatch(ActionCreators.signUpFailed());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("add user failed action", () => {
    it("should dispatch the add user failed action", () => {
      const expectedActions = [
        {
          type: Types.Add_Employee_Failed,
        },
      ];
      store.dispatch(ActionCreators.AddEmployeeFailed());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("view user failed actions", () => {
    it("should dispatch the view user failed action", () => {
      const expectedActions = [
        {
          type: Types.Loading_Employee_Failed,
        },
      ];
      store.dispatch(ActionCreators.loadingEmployeeFailed());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe("update failed user actions", () => {
    it("should dispatch the update failed user action", () => {
      const expectedActions = [
        {
          type: Types.Update_Employee_Failed,
        },
      ];
      store.dispatch(ActionCreators.UpdateEmployeeFailed());
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

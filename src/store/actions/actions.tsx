import Types from "../types";

const ActionCreators = {
  signUpSuccess: (user: any) => ({
    type: Types.SignUP_Success,
    payload: { user },
  }),

  signUpFailed: () => ({
    type: Types.SignUP_Failed,
  }),

  loginSuccess: (user: any) => ({
    type: Types.Login_Success,
    payload: { user },
  }),

  loginFailed: () => ({
    type: Types.Login_Failed,
  }),

  loadingEmployeeSuccess: (user: any) => ({
    type: Types.Loading_Employee_Success,
    payload: { user },
  }),

  loadingEmployeeFailed: () => ({
    type: Types.Loading_Employee_Failed,
  }),

  AddEmployeeSuccess: (user: any) => ({
    type: Types.Add_Employee_Sucess,
    payload: { user },
  }),

  AddEmployeeFailed: () => ({
    type: Types.Add_Employee_Failed,
  }),

  UpdateEmployeeSuccess: (user: any) => ({
    type: Types.Update_Employee_Success,
    payload: { user },
  }),

  UpdateEmployeeFailed: () => ({
    type: Types.Update_Employee_Failed,
  }),
};

export default ActionCreators;

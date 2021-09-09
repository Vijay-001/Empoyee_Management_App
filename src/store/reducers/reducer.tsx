import { Types } from '../types';

const initialState = {
  users: [],
};

const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Types.Login_Success:
      return {
        ...state,
        users: action.payload.user,
      };
    case Types.Login_Failed:
      return {
        ...state,
        users: action.payload,
      };

    case Types.Loading_Employee_Success:
      return {
        ...state,
        users: action.payload.user,
      };
    case Types.Loading_Employee_Failed:
      return {
        ...state,
        users: action.payload.user,
      };

    case Types.Add_Employee_Sucess:
      return {
        ...state,
        users: action.payload.user,
      };
    case Types.Add_Employee_Failed:
      return {
        ...state,
        users: action.payload,
      };

    case Types.Update_Employee_Success:
      return {
        ...state,
        users: action.payload.user,
      };
    case Types.Update_Employee_Failed:
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

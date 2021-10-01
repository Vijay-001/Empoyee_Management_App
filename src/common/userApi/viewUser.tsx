import axios from "axios";
import { Dispatch } from "react";
import ActionCreators from "../../store/actions/actions";

const getUserList = async (dispatch: Dispatch<any>): Promise<void> => {
  await axios({ url: "https://reqres.in/api/users", method: "get" })
    .then((res) => {
      if (!res.data) {
        dispatch(ActionCreators.loadingEmployeeFailed());
      } else {
        dispatch(ActionCreators.loadingEmployeeSuccess(res.data.data));
      }
    })
    .catch(() => {
      dispatch(ActionCreators.loadingEmployeeFailed());
    });
};

export default getUserList;

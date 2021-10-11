import axios from "axios";
import { Dispatch } from "react";
import ActionCreators from "../../store/actions/actions";
import { IUser } from "../userInterface/userInterface";

const adminLogin =
  (values: IUser) =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    await axios({
      url: "http://localhost:5000/login?q=" + values.email,
      method: "get",
    })
      .then((res) => {
        if (!res.data.length) {
          dispatch(ActionCreators.loginFailed());
        } else {
          dispatch(ActionCreators.loginSuccess(res.data));
        }
      })
      .catch(() => {
        dispatch(ActionCreators.loginFailed());
      });
  };

export default adminLogin;

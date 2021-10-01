import axios from "axios";
import { Dispatch } from "react";
import ActionCreators from "../../store/actions/actions";
import { IUser } from "../userInterface/userInterface";

const adminLogin =
  (values: IUser) =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    await axios({
      url: "https://reqres.in/api/login",
      method: "post",
      data: values,
    })
      .then((res) => {
        if (!res.data) {
          dispatch(ActionCreators.loginFailed());
        } else {
          const newselection = [res.data];
          dispatch(ActionCreators.loginSuccess(newselection));
        }
      })
      .catch(() => {
        dispatch(ActionCreators.loginFailed());
      });
  };

export default adminLogin;

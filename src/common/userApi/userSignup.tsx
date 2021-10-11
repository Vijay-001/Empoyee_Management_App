import axios from "axios";
import { Dispatch } from "react";
import ActionCreators from "../../store/actions/actions";
import { IUser } from "../userInterface/userInterface";

const userSignup =
  (values: IUser) =>
  async (dispatch: Dispatch<any>): Promise<void> => {
    await axios({
      url: "http://localhost:5000/login",
      method: "post",
      data: {
        email: values.email,
        password: values.password,
      },
    })
      .then((res) => {
        if (!res.data) {
          dispatch(ActionCreators.signUpFailed());
        } else {
          dispatch(ActionCreators.signUpSuccess(res.data));
        }
      })
      .catch(() => {
        dispatch(ActionCreators.signUpFailed());
      });
  };

export default userSignup;

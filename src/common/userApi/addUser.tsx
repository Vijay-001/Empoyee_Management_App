import axios from "axios";
import { Dispatch } from "react";
import { IStateReduced } from "../../store";
import ActionCreators from "../../store/actions/actions";
import { IUser } from "../userInterface/userInterface";

const addUserDetails =
  (values: IUser) =>
  async (
    dispatch: Dispatch<any>,
    getState: () => IStateReduced
  ): Promise<void> => {
    await axios({
      url: "https://reqres.in/api/users",
      method: "post",
      data: values,
    })
      .then((res) => {
        if (!res.data) {
          dispatch(ActionCreators.AddEmployeeFailed());
        } else {
          const existingdata = getState()?.users?.users;
          const newselection = [...existingdata, res.data];
          dispatch(ActionCreators.AddEmployeeSuccess(newselection));
        }
      })
      .catch((error) => {
        dispatch(ActionCreators.AddEmployeeFailed());
        return error;
      });
  };

export default addUserDetails;

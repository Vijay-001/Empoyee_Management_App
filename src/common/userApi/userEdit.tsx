import axios from "axios";
import { Dispatch } from "react";
import { IStateReduced } from "../../store";
import ActionCreators from "../../store/actions/actions";
import { IUser } from "../userInterface/userInterface";

const updateUserDetails =
  (values: IUser) =>
  async (
    dispatch: Dispatch<any>,
    getState: () => IStateReduced
  ): Promise<void> => {
    await axios({
      url: `https://reqres.in/api/users/${values.id}`,
      method: "put",
      data: values,
    })
      .then((res) => {
        if (!res.data) {
          dispatch(ActionCreators.UpdateEmployeeFailed());
        } else {
          const existingdata = getState()?.users?.users;
          const newselection = existingdata.map((e: any) => {
            if (e.id === values.id) {
              return res.data;
            }
            return e;
          });
          dispatch(ActionCreators.UpdateEmployeeSuccess(newselection));
        }
      })
      .catch((error) => {
        dispatch(ActionCreators.UpdateEmployeeFailed());
        return error;
      });
  };

export default updateUserDetails;

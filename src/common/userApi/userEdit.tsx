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
    const res = await axios({
      url: `https://reqres.in/api/users/${values.id}`,
      method: "put",
      data: values,
    });

    if (!res.data) {
      dispatch(ActionCreators.UpdateEmployeeFailed());
    } else {
      const existingdata = getState()?.users?.users;
      const newselection =
        typeof existingdata !== "undefined"
          ? existingdata.map((e: any) => {
              if (e.id === values.id) {
                return res.data;
              }
              return e;
            })
          : res.data;
      dispatch(ActionCreators.UpdateEmployeeSuccess(newselection));
    }
  };

export default updateUserDetails;

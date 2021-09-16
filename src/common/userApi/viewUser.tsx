import axios from 'axios';
import { Dispatch } from 'react';
import ActionCreators from '../../store/actions/actions';

const getUserList = async (dispatch: Dispatch<any>): Promise<void> => {
  await axios.get('https://reqres.in/api/users')
    .then((res) => {
      if (!res.data) {
        dispatch(ActionCreators.loadingEmployeeFailed());
      } else {
        dispatch(ActionCreators.loadingEmployeeSuccess(res.data.data));
      }
    }).catch((error) => {
      dispatch(ActionCreators.loadingEmployeeFailed());
      return error;
    });
};

export default getUserList;

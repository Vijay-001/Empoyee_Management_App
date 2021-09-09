import { Dispatch } from '@reduxjs/toolkit';
import axios from 'axios';
import { IStateReduced } from '../../store';
import { ActionCreators } from '../../store/actions/actions';
import { IUser } from '../Interface/Interface';

export const adminLogin = (values: IUser) => async (dispatch: Dispatch<any>,
  getState: () => IStateReduced): Promise<void> => {
  await axios.post('https://reqres.in/api/login', values)
    .then((res) => {
      if (!res.data) {
        dispatch(ActionCreators.loginFailed());
      } else {
        const existingdata = getState()?.users?.users;
        const newselection = [...existingdata, res.data];
        console.log('newselection', newselection);
        dispatch(ActionCreators.loginSuccess(newselection));
      }
    }).catch((error) => {
      dispatch(ActionCreators.loginFailed());
    });
};

export const addUserDetails = (values: IUser) => async (dispatch: Dispatch<any>,
  getState: () => IStateReduced): Promise<void> => {
  await axios.post('https://reqres.in/api/users', values)
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
    });
};

export const getUserList = async (dispatch: Dispatch<any>): Promise<void> => {
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

export const updateUserDetails = (values: IUser) => async (dispatch: Dispatch<any>,
  getState: () => IStateReduced): Promise<void> => {
  await axios.put(`https://reqres.in/api/users/${values.id}`, values)
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
    }).catch((error) => {
      dispatch(ActionCreators.UpdateEmployeeFailed());
    });
};

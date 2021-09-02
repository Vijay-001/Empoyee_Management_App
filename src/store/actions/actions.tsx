import { Dispatch } from "@reduxjs/toolkit";
import { IUser } from '../../common/Interface/Interface';
import { setUserList } from '../reducers/reducer';
import { addUserDetails, adminLogin, getUserList, SignupProcess, updateUserDetails } from '../../common/APIUtils/ApiUitls';
import { getApiObject } from "../../common/common_function/commonfunction";
import { IStateReduced } from "../index";




export const LoginUser = (userDetails: IUser) => async (dispatch: Dispatch<any>,
    getState: () => IStateReduced): Promise<void> => {

    try {
        const existingdata = getState()?.users?.users?.data;
        dispatch(setUserList(getApiObject([], false, true)));
        const userResponse = await adminLogin(userDetails);
        const newselection = [...existingdata, userResponse.data]
        dispatch(setUserList(getApiObject(newselection)))

    } catch (error) {
        dispatch(setUserList(getApiObject([], false, false, true, error?.message, error)))
    }

}



// Sign-up process 

export const Signupdata = (userDetails: IUser) => async (dispatch: Dispatch<any>,
    getState: () => IStateReduced): Promise<void> => {

    try {
        const existingdata = getState()?.users?.users?.data;
        dispatch(setUserList(getApiObject([], false, true)));
        const userResponse = await SignupProcess(userDetails);
        const newselection = [...existingdata, userResponse.data]
        dispatch(setUserList(getApiObject(newselection)))

    } catch (error) {
        dispatch(setUserList(getApiObject([], false, false, true, error?.message, error)))
    }

}



// fetch user data process


export const fetchUsers = async (dispatch: Dispatch<any>): Promise<void> => {

    try {
        dispatch(setUserList(getApiObject([], true)));
        const userResponse = await getUserList();
        dispatch(setUserList(getApiObject(userResponse.data.data)))
    } catch (error) {
        dispatch(setUserList(getApiObject([], false, false, true, error?.message, error)))
    }

}

// Update user data  process.

export const updateUser = (userDetails: IUser) => async (dispatch: Dispatch<any>,
    getState: () => IStateReduced): Promise<void> => {

    try {
        const existingdata = getState()?.users?.users?.data;
        dispatch(setUserList(getApiObject([], false, true)));
        const userResponse = await updateUserDetails(userDetails);
        const newselection = existingdata.map(e => {

            if (e.id === userDetails.id) {
                return userResponse.data;
            } else {
                return e;
            }
        })
        dispatch(setUserList(getApiObject(newselection)))
    } catch (error) {
        dispatch(setUserList(getApiObject([], false, false, true, error?.message, error)))
    }

}


// Add New user data process.

export const AddNewUser = (userDetails: IUser) => async (dispatch: Dispatch<any>,
    getState: () => IStateReduced): Promise<void> => {

    try {
        const existingdata = getState()?.users?.users?.data;
        dispatch(setUserList(getApiObject([], false, true)));
        const userResponse = await addUserDetails(userDetails);
        const newselection = [...existingdata, userResponse.data]
        dispatch(setUserList(getApiObject(newselection)))
    } catch (error) {
        dispatch(setUserList(getApiObject([], false, false, true, error?.message, error)))
    }

}

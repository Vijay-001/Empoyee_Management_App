
import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { IApiObject } from '../models/apiUtils';
import { addUserDetails, getApiObject, getUserList, SignupProcess, updateUserDetails, validateLogin } from '../Services/apiUtils';
import { IStateReduced } from '../Store/store';




export interface IUser {
    first_name: string;
    id: string;
    last_name: string;
    email: string;
    avatar: string;
    password?:string
}


export interface IUserListState {
    users: IApiObject<IUser[]>;

}

export const defaultState: IUserListState = {
    users: getApiObject([])
}

export const usersReducer = createSlice({

    name: 'userList',
    initialState: defaultState,
    reducers: {
        setUserList: (state, action: PayloadAction<IApiObject<IUser[]>>) => {
            state.users = action.payload
        },
    },
});


// set action data in set UserList

export const { setUserList } = usersReducer.actions;


// Login process

export const LoginUser = (userDetails: IUser) => async (dispatch: Dispatch<any>,
    getState: () => IStateReduced): Promise<void> => {

    try {
        const existingdata = getState()?.users?.users?.data;
        dispatch(setUserList(getApiObject([], false, true)));
        const userResponse = await validateLogin(userDetails);
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
        dispatch(setUserList(getApiObject([], false,false, true, error?.message, error)))
    }
     
}

// Update user data  process.

export const updateUser = (userDetails: IUser) => async (dispatch: Dispatch<any>,
    getState: () => IStateReduced): Promise<void> => {

    try {
        const existingdata = getState()?.users?.users?.data;
        dispatch(setUserList(getApiObject([], false, true)));
        const userResponse = await updateUserDetails(userDetails);
         const newselection = existingdata.map(e=> {
    
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


export default usersReducer.reducer;
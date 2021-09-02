
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultState } from '../../common/common_function/commonfunction';
import { IApiObject, IUser } from '../../common/Interface/Interface';




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


export default usersReducer.reducer;

/*
import { createSlice, Dispatch, PayloadAction } from '@reduxjs/toolkit';
import { Add_Employee, Admin_Login, Admin_Signup, Update_Employee } from '../actions/types';
import { Action, IUser } from '../interfaces/Interfaces';
import { addUserDetails, getApiObject, getUserList, SignupProcess, updateUserDetails, validateLogin } from '../services/apiUtils';
import { IStateReduced } from '../store/store';


const initialState: any = [];

export const usersReducer = (state: IUser = initialState, action: Action) => {
    switch (action.type) {
        case Admin_Login:
            return {
                ...state,
                ...action.payload.user
            }
        case Admin_Signup:
            return {
                ...state,
                ...action.payload.user
            }
        case Add_Employee:
            return {
                ...state,
                ...action.payload.user
            }
        case Update_Employee:
            return {
                ...state,
                ...action.payload.user
            }
        default:
            return state;
    }
}



export default usersReducer;


*/  

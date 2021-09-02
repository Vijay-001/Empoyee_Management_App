
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


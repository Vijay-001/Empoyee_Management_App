


import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from './userReducer';




const rootReducer = combineReducers({

    users: usersReducer
});


export default rootReducer;


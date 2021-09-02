import { combineReducers } from '@reduxjs/toolkit';
import usersReducer from './reducer';


const rootReducer = combineReducers({

    users: usersReducer
});

export default rootReducer;
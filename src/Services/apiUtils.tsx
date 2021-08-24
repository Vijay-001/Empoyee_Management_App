import { IApiObject } from "../models/apiUtils";
import axios from 'axios'
import { IUser } from "../Reducer/userReducer";


let value: any;
let Error:any = null;



export function getApiObject<T>(

    data: T = value,
    isFetching = false,
    isUpdating = false,
    isError = false,
    errorMessage = "",
    error: Error = Error
):
    IApiObject<T> {
    return { data, isFetching: false, isUpdating:false, isError: false, errorMessage: '', error };
}




/* validate login details. */

export async function validateLogin(user: IUser) {
    const userResponse = await axios.post("https://reqres.in/api/login",user);
    return userResponse;
}


export async function SignupProcess(user: IUser) {
    const userResponse = await axios.post("https://reqres.in/api/register", user);
    return userResponse;
}


/*  get details */

export async function getUserList() {

    const userResponse = await axios.get("https://reqres.in/api/users");
    return userResponse;
}


/*  update details */

export async function updateUserDetails(user:IUser) {
    const userResponse = await axios.put(`https://reqres.in/api/users/${user.id}`,user);
    return userResponse;
}

/*  add user details */

export async function addUserDetails(user: IUser) {
    const userResponse = await axios.post(`https://reqres.in/api/users`, user);
    return userResponse;
}


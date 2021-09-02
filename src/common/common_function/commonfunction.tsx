import { IApiObject, IUserListState } from "../Interface/Interface";

let value: any;
let Error: any = null;

export function getApiObject<T>(

    data: T = value,
    isFetching = false,
    isUpdating = false,
    isError = false,
    errorMessage = "",
    error: Error = Error
):
    IApiObject<T> {
    return { data, isFetching: false, isUpdating: false, isError: false, errorMessage: '', error };
}



export const defaultState: IUserListState = {
    users: getApiObject([])
}
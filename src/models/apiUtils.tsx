export interface IApiObject<T> {
    data:T,
    isFetching: false,
    isUpdating: boolean,
    isError:false,
    errorMessage : "",
    error: Error
}
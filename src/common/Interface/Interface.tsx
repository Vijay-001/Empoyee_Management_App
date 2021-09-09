/*  Interfaces */

export interface IUser {
    firstName: string;
    id: string;
    lastName: string;
    email: string;
    avatar: string;
    password?: string
}

export interface FormValues {
    email: string;
    password: string;
}

export interface OtherProps {
    title?: string;
    userInfo: IUser
}

export interface MyFormProps {
    initialEmail?: string;
    initialPassword?: string;
    userInfo: IUser
}

export interface IProps {
    show: boolean,
    onClose: () => void;
    onSave?: () => void;
    userInfo: IUser,
    mode: string
}

export interface IUserListState {
    users: IApiObject<IUser[]>;
}

export interface IApiObject<T> {
    data: T,
    isFetching: false,
    isUpdating: boolean,
    isError: false,
    errorMessage: '',
    error: Error
}

export const Mode = {
  NEW: 'Add Employee',
  EDIT: 'Edit Employee',
};

export interface Myprops {
    appbarMessage?: string,
    LoginText?: string
}

export interface Action {
    type: string,
    payload?: any
}

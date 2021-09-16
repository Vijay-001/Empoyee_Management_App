/*  Interfaces */

export interface IUser {
    first_name: string;
    id: string;
    last_name: string;
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

export const Mode = {
  NEW: 'Add Employee',
  EDIT: 'Edit Employee',
};

export interface Myprops {
    appbarMessage?: 'Employee Management App',
    LoginText?: string
}

export interface Action {
    type: string,
    payload?: any
}

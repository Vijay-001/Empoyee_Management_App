
import { IUser } from '../Reducer/userReducer';



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
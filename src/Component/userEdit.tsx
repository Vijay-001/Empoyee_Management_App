import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { AddNewUser, IUser, updateUser } from "../Reducer/userReducer";
import { Mode } from "./ViewEmployeeDetails";

import '../App.scss';



interface IProps {
    show: boolean,
    onClose: () => void;
    onSave?: () => void;
    userInfo: IUser,
    mode : string

}

export const UserEditModal: React.FC<IProps> = (props) => {

    const { show, onClose, mode, userInfo } = props;
  
    const [userInfoState, setUserInfoState] = useState(userInfo);

    const dispatch = useDispatch();

    const onSaveModal = () => {
        if (mode === Mode.EDIT) {
            dispatch(updateUser(userInfoState));
        } else {
            dispatch(AddNewUser(userInfoState));
        }
        onClose();
    }

    useEffect(() => {
        if (userInfo === null || typeof userInfo === 'undefined') {
            setUserInfoState(null as any);
        } else {
            setUserInfoState({
                ...userInfoState,
                ...userInfo
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userInfo])
    


    const onChangevalue = (fieldName: string, value: string) => {
        
        setUserInfoState({
            ...userInfoState,
            [fieldName]: value
        })
    }


    return (

        <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{ mode } Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Group className="mb-3" controlId="firstName">
                    <Form.Label>FirstName</Form.Label>
                        <Form.Control value={userInfoState?.first_name} type="text"
                            onChange={(event) => {onChangevalue('first_name', event.target.value)}} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="lastName">
                    <Form.Label>LastName</Form.Label>
                        <Form.Control type="text" value={userInfoState?.last_name}
                            onChange={(event) => { onChangevalue('last_name', event.target.value) }} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                        <Form.Control type="text" value={userInfoState?.email}
                            onChange={(event) => { onChangevalue('email', event.target.value) }} />
                </Form.Group>
              </Form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
                Close
          </Button>
            <Button variant="primary" onClick={onSaveModal}>
                Save Changes
          </Button>
        </Modal.Footer>
    </Modal>
    )
  
}


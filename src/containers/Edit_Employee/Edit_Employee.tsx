import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Modal } from 'react-bootstrap';
import { IProps, Mode } from '../../common/Interface/Interface';
import '../../App.scss';
import { addUserDetails, updateUserDetails } from '../../common/Api/Api';

const UserEditModal: React.FC<IProps> = (props) => {
  const {
    show,
    onClose,
    mode,
    userInfo,
  } = props;
  const [userInfoState, setUserInfoState] = useState(userInfo);
  const dispatch = useDispatch();

  const onSaveModal = () => {
    if (mode === Mode.EDIT) {
      dispatch(updateUserDetails(userInfoState));
    } else {
      dispatch(addUserDetails(userInfoState));
    }
    onClose();
  };

  useEffect(() => {
    if (userInfo === null || typeof userInfo === 'undefined') {
      setUserInfoState(null as any);
    } else {
      setUserInfoState({
        ...userInfoState,
        ...userInfo,
      });
    }
  }, [userInfo]);

  const onChangevalue = (fieldName: string, value: string) => {
    setUserInfoState({
      ...userInfoState,
      [fieldName]: value,
    });
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {mode}
          {' '}
          Modal
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="firstName">
            <Form.Label>FirstName</Form.Label>
            <Form.Control
              value={userInfoState?.firstName}
              type="text"
              onChange={(event) => { onChangevalue('first_name', event.target.value); }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="lastName">
            <Form.Label>LastName</Form.Label>
            <Form.Control
              type="text"
              value={userInfoState?.lastName}
              onChange={(event) => { onChangevalue('last_name', event.target.value); }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              value={userInfoState?.email}
              onChange={(event) => { onChangevalue('email', event.target.value); }}
            />
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
  );
};

export default UserEditModal;

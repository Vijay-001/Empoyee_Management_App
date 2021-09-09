import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Modal } from 'react-bootstrap';
import { TextField } from '@material-ui/core';
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

  const onSaveModal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      <form onSubmit={onSaveModal}>
        <Modal.Body>
          <TextField
            required
            variant="outlined"
            name="firstName"
            label="firstName"
            size="small"
            margin="normal"
            onChange={(event: any) => { onChangevalue('first_name', event.target.value); }}
            value={userInfoState?.first_name}
            fullWidth
          />

          <TextField
            required
            variant="outlined"
            name="last_name"
            label="last_name"
            size="small"
            margin="normal"
            onChange={(event: any) => { onChangevalue('last_name', event.target.value); }}
            value={userInfoState?.last_name}
            fullWidth
          />

          <TextField
            required
            variant="outlined"
            name="email"
            label="email"
            size="small"
            margin="normal"
            onChange={(event: any) => { onChangevalue('email', event.target.value); }}
            value={userInfoState?.email}
            fullWidth
          />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </form>

    </Modal>
  );
};

export default UserEditModal;

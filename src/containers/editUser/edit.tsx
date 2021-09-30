import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import { TextField, Container } from "@material-ui/core";
import "../../App.scss";
import { IProps, Mode } from "../../common/userInterface/userInterface";
import updateUserDetails from "../../common/userApi/userEdit";
import addUserDetails from "../../common/userApi/addUser";

const UserEditModal: React.FC<IProps> = (props) => {
  const { show, onClose, mode, userInfo } = props;
  const dispatch = useDispatch();
  const [userInfoState, setUserInfoState] = useState(userInfo);
  const onSaveModal = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (mode === Mode.EDIT) {
      dispatch(updateUserDetails(userInfoState));
    } else if (mode === Mode.NEW) {
      dispatch(addUserDetails(userInfoState));
    }
    onClose();
  };

  useEffect(() => {
    if (userInfo === null || typeof userInfo === "undefined") {
      setUserInfoState(null as any);
    } else {
      setUserInfoState({
        ...userInfoState,
        ...userInfo,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  const setUserDetails = (fieldName: string, value: string) => {
    setUserInfoState({
      ...userInfoState,
      [fieldName]: value,
    });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Modal show={show} onHide={onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{mode} Modal</Modal.Title>
        </Modal.Header>
        <form onSubmit={onSaveModal}>
          <Modal.Body>
            <TextField
              required
              variant="outlined"
              name="firstName"
              placeholder="FirstName"
              size="small"
              margin="normal"
              onChange={(event: any) => {
                setUserDetails("first_name", event.target.value);
              }}
              value={userInfoState?.first_name}
              inputProps={{ "data-testid": "firstname" }}
              fullWidth
            />

            <TextField
              required
              variant="outlined"
              name="last_name"
              placeholder="LastName"
              size="small"
              margin="normal"
              onChange={(event: any) => {
                setUserDetails("last_name", event.target.value);
              }}
              value={userInfoState?.last_name}
              inputProps={{ "data-testid": "lastname" }}
              fullWidth
            />

            <TextField
              required
              variant="outlined"
              name="email"
              type="email"
              placeholder="Email Address"
              size="small"
              margin="normal"
              onChange={(event: any) => {
                setUserDetails("email", event.target.value);
              }}
              value={userInfoState?.email}
              inputProps={{ "data-testid": "email" }}
              fullWidth
            />
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={onClose}
              data-testid="closeButton"
            >
              Close
            </Button>
            <Button variant="primary" type="submit" data-testid="saveButton">
              Save Changes
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </Container>
  );
};

export default UserEditModal;

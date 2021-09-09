import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Container } from '@material-ui/core';
import { Mode } from '../../common/Interface/Interface';
import UserEditModal from '../Edit_Employee/Edit_Employee';
import '../../App.scss';
import { getUserList } from '../../common/Api/Api';
import { useAppSelector } from '../../store/reducers/reducerHooks';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ViewEmployeeDetails() {
  const dispatch = useDispatch();

  const data = useAppSelector((state) => state.users.users);

  const [mode, setMode] = useState(Mode.EDIT);

  const [showModal, setShowModal] = useState(false);

  const [userData, setUserData] = useState(null);

  const onClose = () => { setShowModal(false); };

  useEffect(() => {
    dispatch(getUserList);
  }, []);

  const Updatemodel = (updata:any) => {
    setMode(Mode.EDIT);
    setUserData(updata);
    setShowModal(true);
  };

  const onNewModel = (newdata:any) => {
    setMode(Mode.NEW);
    setUserData(null);
    setShowModal(true);
  };

  const classes = useStyles();

  return (
    <Container>
      <p />
      <p />
      <p />
      <p />
      <p />
      <Box>
        <Button
          type="button"
          variant="contained"
          className="buttonPrimary"
          onClick={() => onNewModel(data)}
        >
          Add Employee
        </Button>
      </Box>
      <p />
      <p />
      <p />
      <p />
      <p />

      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> ID</TableCell>
            <TableCell> firstName</TableCell>
            <TableCell> LastName</TableCell>
            <TableCell> Email</TableCell>
            <TableCell> Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row:any) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.first_name}</TableCell>
              <TableCell>{row.last_name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>
                {' '}
                <Button
                  type="button"
                  variant="contained"
                  className="button"
                  onClick={() => Updatemodel(row)}
                >
                  Update
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <UserEditModal show={showModal} onClose={onClose} mode={mode} userInfo={userData as any} />
    </Container>

  );
}

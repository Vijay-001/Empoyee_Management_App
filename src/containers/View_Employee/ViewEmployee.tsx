import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Container } from "@material-ui/core";
import { Mode } from "../../common/Interface/Interface";
import { useAppSelector } from "../../store/reducers/reducerHooks";
import { UserEditModal } from "../Edit_Employee/Edit_Employee"
import '../../App.scss'
import { fetchUsers } from '../../store/actions/actions';


const useStyles = makeStyles({
    table: {
        minWidth: 650,
    }
});


const ViewEmployeeDetails: React.FC<{}> = props => {

    const dispatch = useDispatch();

    const { data } = useAppSelector((state) => state.users.users);

    const [mode, setMode] = useState(Mode.EDIT);

    const [showModal, setShowModal] = useState(false);

    const [userData, setUserData] = useState(null);

    const onClose = () => { setShowModal(false) }

    const Updatemodel = (data:any) => {
        setMode(Mode.EDIT);
        setUserData(data);
        setShowModal(true);
    }

    const onNewModel = (data:any) => {
        setMode(Mode.NEW);
        setUserData(null);
        setShowModal(true);
    }

    useEffect(() => {
        dispatch(fetchUsers);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const classes = useStyles();

    return (
        <Container>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>

            <Box>
                <Button
                    type="button"
                    variant="contained"
                    className="buttonPrimary"
                    onClick={() => onNewModel(data)}
                >Add Employee</Button>
            </Box>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        
        <TableContainer component={Paper}>         
              
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell> ID</TableCell>
                            <TableCell> firstName</TableCell>
                            <TableCell> LastName</TableCell>
                            <TableCell> Email</TableCell>
                            <TableCell  > Action</TableCell>                          
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell >{row.first_name}</TableCell>
                                <TableCell >{row.last_name}</TableCell>
                                <TableCell >{row.email}</TableCell>
                                <TableCell> <Button
                                type="button"
                                 variant="contained"
                                 className ="button"
                                onClick={() => Updatemodel(row)}>Update</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>    
            </TableContainer>     
            <UserEditModal show={showModal} onClose={onClose} mode={mode} userInfo={userData as any} />
        </Container>
           
    );
}


export default ViewEmployeeDetails;

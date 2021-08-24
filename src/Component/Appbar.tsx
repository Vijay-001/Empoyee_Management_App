import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';




interface Myprops {
    appbarMessage?: string,
    LoginText?:string

}


const ButtonAppBar: React.FC<Myprops> = (props: Myprops) => {

    const appbarMessage = (props.appbarMessage) ? props.appbarMessage : " Employee Management App";
    const LoginText = (props.LoginText) ? props.LoginText : "Login";

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        {appbarMessage}
          </Typography>                 
                                       
                    <Button color="inherit" href="/adminlogin">{ LoginText }</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));


export default ButtonAppBar
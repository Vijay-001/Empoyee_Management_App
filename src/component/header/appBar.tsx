import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { IStateReduced } from "../../store";
import { connect } from "react-redux";

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

const Header = (userState: any) => {
  const classes = useStyles();
  const chckk = JSON.parse(sessionStorage.getItem("userName") || "{}");
  console.log("ddd", chckk);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Employee Management App
          </Typography>

          {Array.isArray(userState.userState) && userState.userState.length ? (
            <Typography variant="h6">{`Hello ${JSON.parse(
              sessionStorage.getItem("userName") || "{}"
            )}`}</Typography>
          ) : (
            ""
          )}
          {Array.isArray(userState.userState) && userState.userState.length ? (
            <Button
              href="/adminlogin"
              onClick={() => sessionStorage.removeItem("userName")}
            >
              Logout
            </Button>
          ) : (
            ""
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

const mapStateToProps = (state: IStateReduced) => ({
  userState: state?.users?.users,
});

export default connect(mapStateToProps)(Header);

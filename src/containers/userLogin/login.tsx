import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { useDispatch } from "react-redux";
import { FormikProps } from "formik";
import { TextField } from "@material-ui/core";
import {
  FormValues,
  OtherProps,
} from "../../common/userInterface/userInterface";
import adminLogin from "../../common/userApi/userlogin";
import { loginValidation } from "../../common/formikValidations/userValidation";
import useAppSelector from "../../store/reducers/reducerHooks";
import { Redirect } from "react-router-dom";
import { useEffect } from "react";
import Link from "@material-ui/core/Link";
import { ToastContainer, toast } from "react-toastify";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const AdminLoginForm = (props: OtherProps & FormikProps<FormValues>) => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    userInfo,
  } = props;

  const [userInfoState, setUserInfoState] = useState(userInfo);

  const [loginflag, setLoginFlag] = useState("false");

  const dispatch = useDispatch();

  const setUserDetails = (fieldName: string, value: string) => {
    setUserInfoState({
      ...userInfoState,
      [fieldName]: value,
    });
  };

  useEffect(() => {
    setLoginFlag("true");
  }, []);

  const notify = () => toast.error("Login credential does not exist");
  const userLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit();
    if (
      typeof userInfoState !== "undefined" &&
      "email" in userInfoState &&
      "password" in userInfoState
    ) {
      await dispatch(adminLogin(userInfoState));
      notify();
    }
  };

  const data = useAppSelector((state) => state?.users?.users);
  if (data !== "undefined") {
    if (Array.isArray(data) && data.length) {
      sessionStorage.setItem(
        "userName",
        JSON.stringify(data[0].email.match(/^([^@]*)@/)[1])
      );
      return <Redirect push to="/ViewEmployee" />;
    }
  }

  return (
    <form onSubmit={userLogin}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <p />
        <p />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
        </Box>
        <p />
        <p />
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              name="email"
              placeholder="Email Address"
              size="small"
              margin="normal"
              onKeyUp={(event: any) => {
                setUserDetails("email", event.target.value);
              }}
              onBlur={handleBlur}
              value={values?.email}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
              onChange={handleChange}
              InputLabelProps={{ shrink: true }}
              inputProps={{ "data-testid": "userAccountEmail" }}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              name="password"
              placeholder="Password"
              margin="normal"
              size="small"
              type="password"
              onKeyUp={(event: any) => {
                setUserDetails("password", event.target.value);
              }}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.password}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              InputLabelProps={{ shrink: true }}
              inputProps={{ "data-testid": "userAccountPassword" }}
              fullWidth
            />
          </Grid>
        </Grid>
        <p />
        <p />
        <p />
        {loginflag === "true" && !Array.isArray(data) && !data ? (
          <ToastContainer />
        ) : (
          ""
        )}
        <p />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          data-testid="submitUserDetails"
          disabled={
            isSubmitting ||
            !!(errors.email && touched.email) ||
            !!(errors.password && touched.password)
          }
        >
          {" "}
          Sign In
        </Button>
        <p></p>
        <p></p>
        <Grid container>
          <p></p>
          <p></p>
          <Grid item>
            <Link href="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};

export default loginValidation(AdminLoginForm);

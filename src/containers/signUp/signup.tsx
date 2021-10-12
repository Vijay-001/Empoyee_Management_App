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
import { loginValidation } from "../../common/formikValidations/userValidation";
import useAppSelector from "../../store/reducers/reducerHooks";
import userSignup from "../../common/userApi/userSignup";
import Link from "@material-ui/core/Link";
import { ToastContainer, toast } from "react-toastify";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const UserSignUp = (props: OtherProps & FormikProps<FormValues>) => {
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

  const dispatch = useDispatch();

  const setUserDetails = (fieldName: string, value: string) => {
    setUserInfoState({
      ...userInfoState,
      [fieldName]: value,
    });
  };

  const notify = () => toast.success("User details registered successfully!");

  const userLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit();
    if (
      typeof userInfoState !== "undefined" &&
      "email" in userInfoState &&
      "password" in userInfoState
    ) {
      await dispatch(userSignup(userInfoState));
      notify();
    }
  };

  const data = useAppSelector((state) => state?.users?.users);

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
            Sign up
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
        {!Array.isArray(data) && data ? <ToastContainer /> : ""}
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
          SignUp
        </Button>
        <p></p>
        <p></p>
        <Grid container>
          <p></p>
          <p></p>
          <Grid item>
            <Link href="/adminlogin" variant="body2">
              {"Already have an account? Sign in"}
            </Link>
          </Grid>
        </Grid>
      </Container>
    </form>
  );
};

export default loginValidation(UserSignUp);

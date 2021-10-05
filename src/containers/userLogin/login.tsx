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

  const userLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit();
    if (
      typeof userInfoState !== "undefined" &&
      "email" in userInfoState &&
      "password" in userInfoState
    ) {
      await dispatch(adminLogin(userInfoState));
      setLoginFlag("true");
    }
  };

  const data = useAppSelector((state) => state?.users?.users);

  if (data !== "undefined") {
    if (Array.isArray(data) && data.length) {
      return <Redirect push to="/ViewEmployee" />;
    }
  }

  return (
    <form onSubmit={userLogin}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <p />
        <p />
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
        {loginflag === "true" ? (
          <label style={{ color: "red" }}>{"invalid login details"}</label>
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
      </Container>
    </form>
  );
};

export default loginValidation(AdminLoginForm);

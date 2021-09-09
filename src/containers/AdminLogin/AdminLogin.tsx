import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FormikProps } from 'formik';
import { TextField } from '@material-ui/core';
import { adminLogin } from '../../common/Api/Api';
import { FormValues, OtherProps } from '../../common/Interface/Interface';
import { useAppSelector } from '../../store/reducers/reducerHooks';
import { FormValidation } from '../../common/Formik/Formik';

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

  const dispatch = useDispatch();
  const history = useHistory();

  const onChangesValues = (fieldName: string, value: string) => {
    setUserInfoState({
      ...userInfoState,
      [fieldName]: value,
    });
  };
  const data = useAppSelector((state) => state.users.users);

  const CheckLogindetails = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    handleSubmit();
    if (typeof userInfoState !== 'undefined'
          && ('email' in userInfoState)
        && ('password' in userInfoState)) {
      await dispatch(adminLogin(userInfoState));
      console.log('data', data);
      history.push('/ViewEmployee');
    }
  };

  return (
    <form onSubmit={CheckLogindetails}>
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
              label="Email Address"
              size="small"
              margin="normal"
              onKeyUp={(event: any) => { onChangesValues('email', event.target.value); }}
              onBlur={handleBlur}
              value={values?.email}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
              onChange={handleChange}
              fullWidth
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              name="password"
              placeholder="password"
              margin="normal"
              size="small"
              type="password"
              onKeyUp={(event: any) => { onChangesValues('password', event.target.value); }}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values?.password}
              error={Boolean(touched.password && errors.password)}
              helperText={touched.password && errors.password}
              fullWidth
            />
          </Grid>
        </Grid>
        <p />
        <p />
        <p />
        <p />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          disabled={
                        isSubmitting
                        || !!(errors.email && touched.email)
                        || !!(errors.password && touched.password)
                    }
        >
          Sign In
        </Button>
      </Container>
    </form>
  );
};

export default (FormValidation)(AdminLoginForm);

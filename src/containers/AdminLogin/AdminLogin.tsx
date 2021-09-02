import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { FormikProps, withFormik } from "formik";
import * as Yup from "yup";
import { TextField } from '@material-ui/core';
import { FormValues, MyFormProps, OtherProps } from '../../common/Interface/Interface';
import { LoginUser } from '../../store/actions/actions';
import { useAppSelector } from '../../store/reducers/reducerHooks';




const AdminLoginForm = (props: OtherProps & FormikProps<FormValues>) => {

    const {
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        userInfo
    } = props;


    const [userInfoState, setUserInfoState] = useState(userInfo);

    const dispatch = useDispatch();


    const onChangesValues = (fieldName: string, value: string) => {
        setUserInfoState({
            ...userInfoState,
            [fieldName]: value
        })
    }

    const CheckLogindetails = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit();
        dispatch(LoginUser(userInfoState));  
            
     }

    // getting data from  reducer custom hooks

    const { data } = useAppSelector((state) => state.users.users);
    if (data[0] && typeof userInfoState !== 'undefined' && userInfoState !== null) {
        return <Redirect to='/ViewEmployeeDetails' />
    } 



    return (
        <form onSubmit={CheckLogindetails}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant="outlined"
                            name="email"
                            label="Email Address"
                            size="small"
                            margin="normal"
                            onKeyUp={(event: any) => { onChangesValues('email', event.target.value) }}
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
                            label="Password"
                            margin="normal"
                            size="small"
                            type="password"
                            onKeyUp={(event: any) => { onChangesValues('password', event.target.value) }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values?.password}
                            error={Boolean(touched.password && errors.password)}                            
                            helperText={touched.password && errors.password}
                            fullWidth
                        />
                    </Grid>
                </Grid>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    disabled={
                        isSubmitting ||
                        !!(errors.email && touched.email) ||
                        !!(errors.password && touched.password)
                    }
                >
                    Sign In
               </Button>
                <p></p>
                <p></p>
                <Grid container>
                    <Grid item xs>
                        <Link href="#" variant="body2">
                            Forgot password?
              </Link>
                    </Grid>
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
        
      )
 }



const AdminLogin = withFormik<MyFormProps, FormValues>({

    mapPropsToValues: props => ({
        email: props.initialEmail || "",
        password: props.initialPassword || ""
    }),

    validationSchema: Yup.object().shape({
        email: Yup.string().email("Email not valid").required("Email is required"),
        password: Yup.string().required("Password is required")
    }),

    handleSubmit(
        { email, password }: FormValues,
        { props, setSubmitting, setErrors }
    ) {
        setSubmitting(false);
        console.log(email, password);
    }

})(AdminLoginForm);

export default AdminLogin;


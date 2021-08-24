import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';


import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { IUser, Signupdata } from '../Reducer/userReducer';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../Reducer/reducerHooks';
import { Redirect } from 'react-router-dom';
import { Formik, FormikHelpers, FormikProps, Form, Field } from "formik";
import { FormTextField } from "./FormTextField";
import * as yup from "yup";





  interface IProps {
     
         userInfo : IUser
     }



interface FormValues {
    email: string;
    password: string;
}


// the Formik component supports yup validation out-of-the-box via the `validationSchema` prop
const validationSchema = yup.object().shape({
    email: yup.string().required("Required"),
    password: yup.string().required("Required")
});


const SignUp: React.FC <IProps> = props => {


    const { userInfo } = props;

    const [userInfoState, setuserInfoState] = useState(userInfo);

    const dispatch = useDispatch();


    const getOnchangeValues = (fieldName: string, value: string) => {
         setuserInfoState({
            ...userInfoState,
            [fieldName]: value
        })
    }

    const RegisteredEmployee = () => {
        if (typeof userInfoState !== 'undefined' && userInfoState !== null) {
            dispatch(Signupdata(userInfoState));
        } else {
            alert("Invalid sign-up details")
        }        
      }


    // getting data from  reducer custom hooks    
    const { data } = useAppSelector((state) => state.users.users);
    if (data[0]) {
        return <Redirect to='/adminlogin' />
    } 
   

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(
                        values: FormValues,
                        formikHelpers: FormikHelpers<FormValues>
                    ) => {
                        formikHelpers.setSubmitting(false);
                    }}
                >
                    {(formikProps: FormikProps<FormValues>) => (
                        <Form noValidate autoComplete="off">

                                                    
                <Grid container spacing={2}>
                     <Grid item xs={12}>
                    <Field
                        name="email"
                        label="Email"
                        size="small"
                        value={userInfoState?.email}
                        component={FormTextField}
                        onKeyUp={(event: any) => { getOnchangeValues('email', event.target.value) }}
                    />
                     
                     
                    </Grid>
                    <Grid item xs={12}>
                        <Field
                            name="password"
                            label="Password"
                            size="small"
                            value={userInfoState?.password}
                            component={FormTextField}
                            onKeyUp={(event: any) => { getOnchangeValues('password', event.target.value) }}
                        />
                       
                    </Grid>
                </Grid>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={RegisteredEmployee}
                >
                    Sign Up
                        </Button>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Link href="/adminlogin" variant="body2">
                            Already have an account? Sign in
                                 </Link>
                    </Grid>
                </Grid>
                     </Form>
                    )}
                </Formik>
            </Container>
        )
    }



export default SignUp;

import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { IUser, LoginUser } from '../Reducer/userReducer';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../Reducer/reducerHooks';
import { Redirect } from 'react-router-dom';
import { FormikProps, withFormik } from "formik";
import * as Yup from "yup";
import { TextField } from '@material-ui/core';




interface FormValues {
    email: string;
    password: string;
}

interface OtherProps {
    title?: string;
    userInfo: IUser
}

interface MyFormProps {
    initialEmail?: string;
    initialPassword?: string;
    userInfo: IUser
}




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




/*
interface loginData {

    userInfo: IUser
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


const AdminLogin: React.FC<loginData> = props => {

     const { userInfo } = props;

    const [userInfoState, setUserInfoState] = useState(userInfo);

    const dispatch = useDispatch();

     
    const onChangesValues = (fieldName: string, value: string) => {
        setUserInfoState({
            ...userInfoState,
            [fieldName]:value
        })
    }


    const CheckLogindetails = () => {
        if (typeof userInfoState !== 'undefined' && userInfoState !== null) {        
            dispatch(LoginUser(userInfoState));
          }         
      }

   // getting data from  reducer custom hooks

    const { data } = useAppSelector((state) => state.users.users);
    if (data[0]) {
        return <Redirect to='/ViewEmployeeDetails' />
    }

             
         return (
             <Container component="main" maxWidth="xs">
                 <CssBaseline />
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
                                         label="Email Address"
                                         size="small"
                                         component={FormTextField}
                                         onKeyUp={(event: any) => { onChangesValues('email', event.target.value) }}
                                     />


                                 </Grid>
                                 <Grid item xs={12}>
                                     <Field
                                         name="password"
                                         label="Password"
                                         size="small"
                                         component={FormTextField}
                                         onKeyUp={(event: any) => { onChangesValues('password', event.target.value) }}
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
                     onClick={CheckLogindetails}
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
                         </Form>
                     )}
                 </Formik>
             </Container>
         )
}

*/
/*export default AdminLogin; */

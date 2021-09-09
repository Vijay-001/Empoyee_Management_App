import { withFormik } from 'formik';
import * as Yup from 'yup';
import { FormValues, MyFormProps } from '../Interface/Interface';

export const FormValidation = withFormik<MyFormProps, FormValues>({

  mapPropsToValues: (props) => ({
    email: props.initialEmail || '',
    password: props.initialPassword || '',
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string().required('Password is required'),
  }),

  handleSubmit(
    { email, password }: FormValues,
    { props, setSubmitting, setErrors },
  ) {
    setSubmitting(false);
    console.log(email, password);
  },

});

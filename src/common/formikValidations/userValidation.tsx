import { withFormik } from "formik";
import * as Yup from "yup";
import { FormValues, MyFormProps } from "../userInterface/userInterface";

export const loginValidation = withFormik<MyFormProps, FormValues>({
  mapPropsToValues: (props) => ({
    email: props.initialEmail || "",
    password: props.initialPassword || "",
  }),

  validationSchema: Yup.object().shape({
    email: Yup.string().email("Email not valid").required("Email is required"),
    password: Yup.string().required("Password is required"),
  }),

  handleSubmit({}: FormValues, { setSubmitting }) {
    setSubmitting(false);
  },
});

import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';

function FormikFormWithYep() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      console.log(values)
      // submit form
    },
    validationSchema: yup.object({
      email: yup.string().email().required('This field is required.'),
      password: yup.string()
        .min(6, 'Password is too short.')
        .max(12, 'Password is too long.')
        .required('This field is required.')
    })
  })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label>
          Enter User Email
          <input type="text" id="email"
            onChange={formik.handleChange}
            value={formik.values.email} />

          {/* To show warning messages */}
          {formik.errors.email ?
            <div className="error">{formik.errors.email}</div>
            : ""}

        </label>
        <br />
        <br />

        <label>
          Enter User Password
          <input type="password" id="password"
            onChange={formik.handleChange}
            value={formik.values.password} />

          {/* To show warning messages */}
          {formik.errors.password ?
            <div className="error">{formik.errors.password}</div>
            : ""
          }

        </label>
        <br />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default FormikFormWithYep;

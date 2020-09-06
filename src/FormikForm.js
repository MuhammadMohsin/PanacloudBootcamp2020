import React from 'react';
import { useFormik } from 'formik';

function FormikForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    onSubmit: (values) => {
      console.log(values)
      // submit form
    },
    validate: (values) => {
      let error = {};

      if (!values.email)
        error.email = "Email is required"
      if (!values.password)
        error.password = "Password is required"
      return error;
    }
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

export default FormikForm;

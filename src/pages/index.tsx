import React from 'react';
import { Formik } from 'formik';

export default function Home() {
    return <div>
        <h1>Anywhere in your app!</h1>
        <Formik
            initialValues={{ message: '' }}
            validate={values => {
                const errors = {};
                if (!values.message) {
                    errors.message = 'Required';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                console.log(values);
                fetch(`/.netlify/functions/add_message`, {
                    method: 'post',
                    body: JSON.stringify(values)
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);

                    });
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="message"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                        />
                        {errors.message && touched.message && errors.message}
                        <button type="submit" disabled={isSubmitting}>
                            Add Message
                        </button>
                    </form>
                )}
        </Formik>
    </div>
}
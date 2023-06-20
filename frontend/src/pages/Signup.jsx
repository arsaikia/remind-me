import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "../actions/actions";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate();

    // Get states using useSelector ( state -> reducerName )
    const isSignedUp = useSelector(state => state.auth.isSignedUp);

    // Dispatch actions ( action -> Saga Watcher )
    const dispatch = useDispatch();
    const signupUser = (values) => dispatch(userSignup(values));

    /*********************************************************************
     * HANDLER FUNCTIONS
     *********************************************************************/
    const handleSubmit = (values, { setSubmitting }) => {
        // console.log(JSON.stringify(values, null, 2));
        signupUser(values);
        setSubmitting(false);

        if (isSignedUp) {
            navigate('/login');
        } else {
            console.error('Sign up failed.')
        }
    }


    /*********************************************************************
     * RETURNS JSX FROM HERE
     *********************************************************************/
    return (
        <div>
            <h1>Sign up</h1>
            <Formik
                initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
                validate={values => {
                    const errors = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <label>
                            First Name: <Field type="text" name="firstName" />
                            <ErrorMessage name="firstName" component="div" />
                        </label>

                        <label>
                            Last Name: <Field type="text" name="lastName" />
                            <ErrorMessage name="lastName" component="div" />
                        </label>

                        <label>
                            Email:   <Field type="email" name="email" />
                            <ErrorMessage name="email" component="div" />
                        </label>
                        <label>
                            Password:  <Field type="password" name="password" />
                            <ErrorMessage name="password" component="div" />
                        </label>

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </Form>
                )}
        </Formik>
    </div>)
};


export default Signup;
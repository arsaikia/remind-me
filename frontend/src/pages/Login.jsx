import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { CenteredFlex, Container, Flex } from "../styles";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../actions/actions";

const loginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required")
});

const Login = (props) => {

    const navigate = useNavigate();

    // Fire actions using dispatch -> fires action -> Watcher saga handles rest
    const dispatch = useDispatch();
    const logUserIn = (values) => dispatch(userLogin(values));

    /*********************************************************************
     * HANDLER FUNCTIONS
     *********************************************************************/
    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400)

        logUserIn(values);
    
        // navigate('/');
    }
    
    return (
        <CenteredFlex height="60vh">
            <Container width="auto" border="1px solid grey" padding="20px">
                <h1>Login</h1>
                <Formik
                initialValues={{ email: "", password: "" }}
                validationSchema={loginSchema}
                onSubmit={handleSubmit}
                >
                {({ isSubmitting }) => {
                    return (
                    <Form style={{display: "flex", flexDirection: 'column', gap: '10px'}}>
                            <Container>
                                 <label>
                                Email:   <Field type="email" name="email" />
                                <ErrorMessage name="email" component="div" />
                                </label>
                            </Container>
                            <Container>
                                <label>
                                Password:   <Field type="password" name="password" />
                                <ErrorMessage name="password" component="div" />
                                </label>
                            </Container>
                            <button type="submit" disabled={isSubmitting}>
                            Submit
                            </button>
                    </Form>
                    );
                }}
                </Formik>

            </Container>
        
        </CenteredFlex>
    );
}

export default Login;

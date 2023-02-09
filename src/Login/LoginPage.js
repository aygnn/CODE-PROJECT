import React from 'react'
import { Container, Form } from 'react-bootstrap';
import './LoginPage.scss';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import { Field, Formik } from 'formik';

const Login = Yup.object().shape({
    email_username: Yup.string().required("Please entered email or username").matches(/^(?:[A-Z\d][A-Z\d_-]{5,10}|[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4})$/,"Please entered correct email or username"),
    password:Yup.string().required("Please entered the Correct password!").matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,"Please entered the Correct password!"),

  })

export default function LoginPage() {
  return (
    <div className="login">
      <div className="top">
        <Container>
          <div className="text">
            <Link to={"/"}>
              <FaHome /> Home
            </Link>
            <span>Login</span>
          </div>
        </Container>
      </div>

      <div className="login-section">
        <Container>
          <div className="login-form">
            <h2>Login</h2>

            <Formik
              initialValues={{
                email_username: "",
                password: "",
              }}
              validationSchema={Login}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ errors, touched }) => (
                <Form>
                  <div className="input">
                    <label >Username or email address *</label>
                    <Field className="username" name="email_username" />
                  </div>
                  {errors.email_username && touched.email_username && (
                    <div
                      style={
                        errors.email_username &&
                        touched.email_username && {
                          fontSize: 12,
                          color: "red",
                          marginTop: "-20px",
                        }
                      }
                    >
                      {errors.email_username}
                    </div>
                  )}

                  <div className="input">
                    <label>Password *</label>
                    <Field className="password" name="password" />
                  </div>
                  {errors.password && touched.password && (
                    <div
                      style={
                        errors.password &&
                        touched.password && {
                          fontSize: 12,
                          color: "red",
                          marginTop: "-20px",
                        }
                      }
                    >
                      {errors.password}
                    </div>
                  )}
                  <button type="submit">Sign In</button>
                </Form>
              )}
            </Formik>
            <div className="switch-login">
              <a href="#">
                Or Create An Account
              </a>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

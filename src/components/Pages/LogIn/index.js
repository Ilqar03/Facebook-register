import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./index.scss"
import { Link } from 'react-router-dom';

function LogIn() {
  return (
    <div className='login_page'>
      <div className='facebook_item'>
        <h1>facebook</h1>
        <p>Connect with friends and the world around you on Facebook.</p>
      </div>
      <div className='login'>
        <div className='form'>
          <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={Yup.object({

              email: Yup.string().required('Required'),

              password: Yup.string()
                .required('Required')
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            <Form>
              <label htmlFor="email"></label>
              <Field name="email" type="email number" placeholder='Email or phone number' className='field'/>
              <ErrorMessage name="email" />

              <label htmlFor="password" ></label>
              <Field name="password" type="password" placeholder='Password' className='field'/>
              <ErrorMessage name="pasword" />
              <button className='login' type="login">Log In</button>
              <a className='forgot' href='!#'>Forgot password?</a>
              <hr />
              <Link className='link' to='/createaccount'><button className='create' type="sign in">Create New Account</button></Link>
            </Form>
          </Formik>
        </div>
        <p>Create a Page for a celebrity, brand or business.</p>
      </div>
    </div>
  )
}

export default LogIn
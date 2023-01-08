import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import "./index.scss"
function CreateAccount() {
  return (
    <main>
      <div className='create_account'>
        <h2>Sign Up</h2>
        <p className='quick'>It’s quick and easy.</p>
        <hr></hr>
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', password: '' }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              ,
            lastName: Yup.string()
              ,
            email: Yup.string().email('Invalid email address').required('Required'),
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form>
            <div className='name'>
              <label htmlFor="firstName"></label>
              <Field name="firstName" type="text" placeholder='First name' className='name_field' />
              <ErrorMessage name="firstName" />

              <label htmlFor="lastName"></label>
              <Field name="lastName" type="text" placeholder='Last name' className='name_field' />
              <ErrorMessage name="lastName" />
            </div>

            <label htmlFor="email"></label>
            <Field name="email" type="email" placeholder='Mobile number or email' className='field_i' />
            <ErrorMessage name="email" />

            <label htmlFor="password" ></label>
            <Field name="password" type="password" placeholder='New password' className='field_i' />
            <ErrorMessage name="pasword" />

            <div className='brithday'>
              <p className='tag'>Brithday</p>
              <div className='date_div'>
                <select aria-label="Month" name="birthday_month" id="month" title="Month" className="date" aria-describedby="js_146">
                  <option value="1" selected="1">Jan</option>
                  <option value="2">Feb</option>
                  <option value="3">Mar</option>
                  <option value="4">Apr</option>
                  <option value="5">May</option>
                  <option value="6">Jun</option>
                  <option value="7">Jul</option>
                  <option value="8">Aug</option>
                  <option value="9">Sep</option>
                  <option value="10">Oct</option>
                  <option value="11">Nov</option>
                  <option value="12">Dec</option>
                </select>

                <select aria-label="Day" name="birthday_day" id="day" title="Day" className="date">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </select>

                <select aria-label="Year" name="birthday_year" id="year" title="Year" className="date"><option value="2023" selected="1">2023</option>
                  <option value="2022">2022</option>
                  <option value="2021">2021</option>
                  <option value="2020">2020</option>
                  <option value="2019">2019</option>
                  <option value="2018">2018</option>
                  <option value="2017">2017</option>
                  <option value="2016">2016</option>
                  <option value="2015">2015</option>
                  <option value="2014">2014</option>
                  <option value="2013">2013</option>
                  <option value="2012">2012</option>
                  <option value="2011">2011</option>
                  <option value="2010">2010</option>
                  <option value="2009">2009</option>
                  <option value="2008">2008</option>
                  <option value="2007">2007</option>
                  <option value="2006">2006</option>
                  <option value="2005">2005</option>
                  <option value="2004">2004</option>
                  <option value="2003">2003</option>
                  <option value="2002">2002</option>
                  <option value="2001">2001</option>
                  <option value="2000">2000</option>
                  <option value="1999">1999</option>
                  <option value="1998">1998</option>
                  <option value="1997">1997</option>
                  <option value="1996">1996</option>
                  <option value="1995">1995</option>
                  <option value="1994">1994</option>
                  <option value="1993">1993</option>
                  <option value="1992">1992</option>
                  <option value="1991">1991</option>
                  <option value="1990">1990</option>
                </select>
              </div>
            </div>

            <div className='gender' >
              <p className='tag'>Gender</p>
              <label htmlFor="female">female</label>
              <Field name="female" type="radio"className='gender_radio' />
              <ErrorMessage name="female" />

              <label htmlFor="male">male</label>
              <Field name="male" type="radio" className='gender_radio' />
              <ErrorMessage name="male" />

              <label htmlFor="custom">custom</label>
              <Field name="custom" type="radio" className='gender_radio' />
              <ErrorMessage name="custom" />

            </div>

            <p className='write'>People who use our service may have uploaded your contact information to Facebook. Learn more.</p>
            <p className='write'>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy. You may receive SMS Notifications from us and can opt out any time.</p>
            <button className='signup' type="submit">Sign Up</button>
          </Form>
        </Formik>
      </div>
    </main>
  )
}

export default CreateAccount
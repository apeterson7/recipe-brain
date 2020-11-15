import React, { Component } from 'react';
import { Formik } from 'formik';
import axios from 'axios';

export default class SignUp extends Component {
    constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  sanitizePhoneNumber(number){
    return number.replace(/\D/g,'');
  }

  render() {
    return (
    <div>
      <Formik
       initialValues={{ username: '', email: '', password: '' , phoneNumber: '' }}
       validate={values => {
         const errors = {};
         //TODO get username
          // axios.get("api/users/"+values.username)
          // .then(res => {
          //     console.log(res.data)
          //     console.log(+res.data !== 0)

          //     if(+res.data !== 0){
          //       errors.username = "Username taken"
          //     }
          //   })
          // .catch(err => console.log(err));
         
         //username
         if (!values.username) {
           errors.username = 'Required';
         } 
         //Email
         if (!values.email) {
           errors.email = 'Required';
         } else if (
           !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
         ) {
           errors.email = 'Invalid email address';
         }

         //Phone
         if(!values.phoneNumber){
           errors.phoneNumber = "Required"
         } else if (
           this.sanitizePhoneNumber(values.phoneNumber).length > 10
         ){
           errors.phoneNumber = "Too Long"
         }

         return errors;
       }}
       onSubmit={(values) => {

         let user = {...values};
         user.countryCode=1
         console.log(user)

          axios.post('/api/users', user)
          .then(res => {
              console.log(res.data)
              window.location = '/';
            })
          .catch(err => console.log(err));
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
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Username: </label>
            <input  
                type="text" 
                name="username"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
            />
            {errors.username && touched.username && errors.username}
          </div>
          <div className="form-group"> 
            <label>Email: </label>
            <input
              type="email"
              name="email"
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && errors.email}
          </div>
          <div className="form-group"> 
            <label>Password: </label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}
          </div>
          <div className="form-group"> 
            <label>Phone Number (USA Only): </label>
            <input  
                type="text" 
                name="phoneNumber"
                className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.phone}
            />
            {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
          </div>
          <div className="form-group">
            <button className="btn btn-primary" type="submit" onClick={handleSubmit} disabled={isSubmitting }>
              Submit
            </button>
          </div>
        </form>
        )}
      </Formik>
      </div>
    )
  }
}
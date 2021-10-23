import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout';
import Banner from '../../components/UI/Banner';
import Input from '../../components/UI/Input';
import validator from 'validator';
import './style.css';
import { isUserLoggedIn, login, signup } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

/**
* @author
* @function Signup
**/

export const Signup = (props) => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [hash_password, setHash_Password] = useState('');

  // VALIDATION CODE START STATE START
  const [nameError, setNameError] = useState({});
  const [mobileError, setMobileError] = useState({});
  const [emailError, setEmailError] = useState({});
  const [passwordError, setPasswordError] = useState({});
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [error, setError] = useState('');


  // SIGNUP FUNCTION CODE START
  const signupForm = (e) => {
    e.preventDefault();
    const error = '';

    const isValid = formValidate();
    if (isValid) {
      const user ={
        name,
        email,
        mobile,
        hash_password
      }
      dispatch(signup(user));
      setName('');
      setEmail('');
      setHash_Password('');
      setMobile('');
    }

  }

  // SIGNUP FUNCTION CODE START

  // FORM VALIDATION FUNCTION CODE START
  const formValidate = () => {
    const emailError = {}
    const passwordError = {}
    const mobileError = {}
    const nameError = {}
    let isValid = true;

    // if (hash_password.trim().length < 8) {
    //   passwordError.passwordShort = "Password must be at least 8 characters and must";
    //   isValid = false;
    // }
    // PASSWORD VALIDATION
    if (!validator.isStrongPassword(hash_password, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      passwordError.passwordShort = "Password must contain 1 minimum letter and 1 upper letter and 1 number and 1 special character and must be at least 8 characters";
      isValid = false;
    }

    // EMAIL VALIDATION
    if (!validator.isEmail(email)) {
      emailError.validemail = "Enter valid Email!";
      isValid = false;
    }

    // mobile validation
    if (!validator.isMobilePhone(mobile)) {
      mobileError.mobilewrong = "Mobile Number is Invalid";
      isValid = false;
    }
    // name validation code start
    if(name ==='' || name === undefined || name === null){
      nameError.blankname ="User name can not empty";
      isValid =false;
    }
    setEmailError(emailError);
    setPasswordError(passwordError);
    setMobileError(mobileError);
    setNameError(nameError);
    return isValid;

  }
  // FORM VALIDATION FUNCTION CODE STOP

  return (
    <Layout>
      <div className="login pt-5 mt-5 mb-3">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="col-12 my-auto">
              </div>
            </div>
            <div className="col-md-8 right left shadow">
              <h3 className="mb-2 mt-3 text-center">Admin Signup</h3>
              <p className="text-center mb-0">
                <img src="assets/images/di.jpg" className="img-fluid" alt="" title="" />
              </p>
              <form style={{ padding: '40px' }} onSubmit={signupForm}>
                <div className="row">

                  <div className="col-sm-12">
                  {auth.error ? <span style={{ color: 'red', fontSize: '12px' }}>{auth.message}</span> : null }
                  {auth.successerror ? <span style={{ color: 'green', fontSize: '12px' }}>{auth.successmessage}</span> : null }
                  
                  </div>
                    <Input
                      type="text"
                      value={name}
                      name="name"
                      placeholder={`Enter your name`}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control"
                      col={`col-md-6 mb-2`}
                      error={nameError}
                    />
                

                    <Input
                      type="text"
                      value={mobile}
                      name="mobile"
                      placeholder={`Enter your mobile`}
                      onChange={(e) => setMobile(e.target.value)}
                      className="form-control"
                      col={`col-md-6 mb-2`}
                      error={mobileError}
                    />
                   
                 
                    <Input
                      type="email"
                      value={email}
                      name="email"
                      placeholder={`Enter your email`}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                      col={`col-md-12 mb-2`}
                      error={emailError}
                    />
                   
                  
                    <Input
                      type="password"
                      name="hash_password"
                      placeholder={`Enter your password`}
                      value={hash_password}
                      onChange={(e) => setHash_Password(e.target.value)}
                      className="form-control"
                      col={`col-md-12 mb-2`}
                      error={passwordError}
                    />
                    
                  
                  <div className="col-12">
                    <button type="submit" className="btn btn-md form-control">Sign up</button>
                    <p className="text-center mb-0 pt-2 pb-2 font-weight-bold">Or</p>
                    <Link to="/Signin" className="btn btn-md form-control">Login</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </Layout>
  )

}
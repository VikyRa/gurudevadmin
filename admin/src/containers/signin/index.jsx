import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout';
import Banner from '../../components/UI/Banner';
import Input from '../../components/UI/Input';
import validator from 'validator';
import './style.css';
import { isUserLoggedIn, login } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';
/**
* @author
* @function Signup
**/

export const Signin = (props) => {
  const [email, setEmail] = useState('');
  const [hash_password, setHash_Password] = useState('');
  const [emailError, setEmailError] = useState({});
  const [passwordError, setPasswordError] = useState({});
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [error, setError] = useState('');
  
  // login function start
  const loginForm = (e) => {
    e.preventDefault();
    const error = '';
    
    const isValid = formValidate();
    if (isValid) {
      const user = {
        email, hash_password
      }
      dispatch(login(user));
    }
  }



  // FORM VALIDATION FUNCTION CODE START
  const formValidate = () => {
    const emailError = {}
    const passwordError = {}
    let isValid = true;

    if (hash_password.trim().length < 8) {
      passwordError.passwordShort = "Password must be at least 8 characters and must";
      isValid = false;
    }
    // 
    if (!validator.isStrongPassword(hash_password, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      passwordError.passwordShort = "Password must contain 1 minimum letter and 1 upper letter and 1 number and 1 special character";
      isValid = false;
    }


    if (!validator.isEmail(email)) {
      emailError.validemail = "Enter valid Email!";
      isValid = false;
    }
    setEmailError(emailError);
    setPasswordError(passwordError);
    return isValid;

  }
  // FORM VALIDATION FUNCTION CODE STOP

  if (auth.authenticate) {
    return <Redirect to={`/`} />
  }
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
              <h3 className="mb-2 mt-3 text-center">Admin Login</h3>
              <p className="text-center mb-0">
                <img src="assets/images/di.jpg" className="img-fluid" alt="" title="" />
              </p>
              <form style={{ padding: '40px' }} onSubmit={loginForm}>
                <div className="row">
               
                    {auth.error ? <span style={{ color: 'red', fontSize: '12px' }}>{auth.message}</span> : null }

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
                      onChange={(e) => setHash_Password(e.target.value)}
                      className="form-control"
                      col={`col-md-12 mb-2`}
                      error={passwordError}
                    />
                   
                  <div className="col-12">
                    <button type="submit" className="btn btn-md form-control">Login</button>
                    <p className="text-center mb-0 pt-2 pb-2 font-weight-bold">Or</p>
                    <Link to="/Signup" className="btn btn-md form-control">Sign Up</Link>
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
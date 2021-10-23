import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import validator from 'validator';
import { createAstrologer } from '../../actions';
/**
* @author
* @function AddUser
**/

export const AddAstrologer = (props) => {
    const dispatch = useDispatch();
    const { user, error,success ,message } = useSelector((state) => state.castrologer);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpssword] = useState('');
    const [gender, setGender] = useState('');
    const [userError, setUserError] = useState({});

    const adduserForm = (e) => {
        e.preventDefault();
        
        // return true;
        const isValid = formValidate();
        if (isValid) {
            
            const submitdata ={
                astro_first_name:firstname,
                astro_last_name:lastname,
                astro_email:email,
                astro_mobile:mobile,
                astro_password:password,
                astro_gender:gender
            }
            dispatch(createAstrologer(submitdata));
           
            // if(error){
            //     setErrors(message);
            // }

        }
    }

     // GET EDIT DATA CODE START
  useEffect(() => {
    if(success){
        setFirstname('');
        setLastname('');
        setEmail('');
        setMobile('');
        setPassword('');
        setCpssword('');
    }
  }, [dispatch, success]);


    

    // FORM VALIDATION FUNCTION CODE START
    const formValidate = () => {
        const userError = {}
        let isValid = true;


        // name validation code start
        if (firstname === '' || firstname === undefined || firstname === null) {
            userError.firsterr = "First Name can not empty";
            isValid = false;
        }
        if (lastname === '' || lastname === undefined || lastname === null) {
            userError.lasterr = "Last Name can not empty";
            isValid = false;
        }

        // if (!validator.isStrongPassword(password, {
        //     minLength: 8
        // })) {
        //     userError.passwordShort = "Password must contain at least 8 characters";
        //     isValid = false;
        // }

        if(password.length < 8){
            userError.passwordShort = "Password must contain at least 8 characters";
              isValid = false; 
        }

        // EMAIL VALIDATION
        if (!validator.isEmail(email)) {
            userError.email = "Enter valid Email!";
            isValid = false;
        }

        // mobile validation
        if (!validator.isMobilePhone(mobile)) {
            userError.mobile = "Mobile Number is Invalid";
            isValid = false;
        }

        if (password !== cpassword) {
            userError.confirm = "Password doesn't match";
            isValid = false;
        }

        setUserError(userError);
        return isValid;

    }
    return (
        <Layout>
            <div className="kundli pb-5 mt-5">
                <div className="container">
                    <div className="row main">
                        <div className="col-md-8">
                            {error ? <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                {message}</div> : null }
                            {success ? <div className="alert alert-success alert-dismissible fade show" role="alert">
                                {message}</div> : null }
                        </div>
                        <div className="col-md-8">
                            <h3 className="mb-3 shadow text-success">ADD ASTROLOGER</h3>
                            <form className="shadow" method="post" onSubmit={adduserForm} style={{ padding: '55px', borderRadius: '20px' }}>
                                <div className="row">
                                    <Input
                                        type="text"
                                        value={firstname}
                                        name="firstname"
                                        placeholder={`Enter First Name`}
                                        onChange={(e) => setFirstname(e.target.value)}
                                        className="form-control"
                                        col={`col-md-6 mb-2`}
                                        error={userError.firsterr}
                                    />
                                    <Input
                                        type="text"
                                        value={lastname}
                                        name="lastname"
                                        placeholder={`Enter Last Name`}
                                        onChange={(e) => setLastname(e.target.value)}
                                        className="form-control"
                                        col={`col-md-6 mb-2`}
                                        error={userError.lasterr}
                                    />
                                    <Input
                                        type="text"
                                        value={email}
                                        name="email"
                                        placeholder={`Enter Email`}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-control"
                                        col={`col-md-6 mb-2`}
                                        error={userError.email}
                                    />
                                    <Input
                                        type="text"
                                        value={mobile}
                                        name="mobile"
                                        placeholder={`Enter Mobile`}
                                        onChange={(e) => setMobile(e.target.value)}
                                        className="form-control"
                                        col={`col-md-6 mb-2`}
                                        error={userError.mobile}
                                    />
                                    <Input
                                        type="password"
                                        value={password}
                                        name="password"
                                        placeholder={`Enter Password`}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="form-control"
                                        col={`col-md-6 mb-2`}
                                        error={userError.passwordShort}
                                    />
                                    <Input
                                        type="password"
                                        value={cpassword}
                                        name="cpassword"
                                        placeholder={`Enter Password`}
                                        onChange={(e) => setCpssword(e.target.value)}
                                        className="form-control"
                                        col={`col-md-6 mb-2`}
                                        error={userError.confirm}
                                    />
                                    <Input
                                        type="text"
                                        value={gender}
                                        name="gender"
                                        placeholder={`Enter Gender`}
                                        onChange={(e) => setGender(e.target.value)}
                                        className="form-control"
                                        col={`col-md-12 mb-2`}
                                        error={userError.confirm}
                                    />

                                    <div className="col-12">
                                        <button type="submit" className="btn btn-md btn-primary form-control">ADD NEW ASTROLOGER</button>
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

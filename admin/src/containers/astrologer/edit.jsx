import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import validator from 'validator';
import { getSingleuser, clearErrors, updateuseraction, getSingleAstrologer, updateastrologeraction } from '../../actions';

/**
* @author
* @function EditUser
**/

export const EditAstrologer = (props) => {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.sastrologer);
  // const user = users.user;

  const {
    loading,
    error,
    isUpdated,
    userdata
  } = useSelector((state) => state.uastrologer);
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpssword] = useState('');
  const [gender, setGender] = useState('');

  // error validation
  const [userError, setUserError] = useState({});

  const userId = props.match.params.id;

  // GET EDIT DATA CODE START
  useEffect(() => {
    if (user && user._id !== userId) {
      dispatch(getSingleAstrologer(userId))
    } else {
      setFirstname(user.astrofirst_name);
      setLastname(user.astrolast_name);
      setEmail(user.astro_email);
      setMobile(user.astro_mobile);
      setGender(user.astro_gender);
    }
    if(isUpdated){
      setFirstname(userdata.astrofirst_name);
      setLastname(userdata.astrolast_name);
      setEmail(userdata.astro_email);
      setMobile(userdata.astro_mobile);
      setGender(userdata.astro_gender);
    }
  }, [dispatch, loading,
    error,
    isUpdated,
    user,
    userId
  ]);

   


  const updateuserForm = (e) => {
    e.preventDefault();
    // return true;
    const isValid = formValidate();
    if (isValid) {
      const submitdata ={
        astrofirst_name:firstname,
        astrolast_name:lastname,
        astro_email:email,
        astro_mobile:mobile,
        astro_gender:gender
    }
    dispatch(updateastrologeraction(userId,submitdata));
    }

  }


  // FORM VALIDATION FUNCTION CODE START
  const formValidate = () => {
    const userError = {}
    let isValid = true;


    // name validation code start
    if (validator.isEmpty(firstname)) {
      userError.firsterr = "First Name can not empty";
      isValid = false;
    }
    if (validator.isEmpty(lastname)) {
      // alert(lastname);
      userError.lasterr = "Last Name can not empty";
      isValid = false;
    }



    // EMAIL VALIDATION
    // if (!validator.isEmail(email)) {
    //     userError.email = "Enter valid Email!";
    //     isValid = false;
    // }

    // // mobile validation
    // if (!validator.isMobilePhone(mobile)) {
    //     userError.mobile = "Mobile Number is Invalid";
    //     isValid = false;
    // }
    console.log(userError);
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
                        {error}</div> : null }
                    {isUpdated ? <div className="alert alert-success alert-dismissible fade show" role="alert">
                        {isUpdated}</div> : null }
            </div>
            <div className="col-md-8">
              <h3 className="mb-3 shadow text-success">UPDATE USER</h3>
              <form className="shadow" method="post" onSubmit={updateuserForm} style={{ padding: '55px', borderRadius: '20px' }}>
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
                    error={userError}

                  />
                  <Input
                    type="email"
                    value={email}
                    name="email"
                    placeholder={`Enter Email`}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    col={`col-md-6 mb-2`}
                    error={userError.email}
                    required
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
                    required
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
                    required
                  />

                  <div className="col-12">
                    <button type="submit" className="btn btn-md btn-primary form-control">UPDATE USER</button>
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

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, NavLink, Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import { signout } from '../../actions/auth.actions';
import Banner from '../UI/Banner';
import './style.css';

// import 'react-owl-carousel2/style.css'; //Allows for server-side rendering.
// import '../../css/style.css';
// import '../../css/responsive.css';

/**
* @author
* @function Header
**/




export const Header = (props) => {


  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  // logout function
  const logout = () => {
    dispatch(signout());
  }


  // check user login or not
  const randerLoggedInLinks = () => {

    return (
      <ul>

        <li className="active"><Link to="/">Dashboard</Link></li>
        {/* <li><Link to="/role">Role</Link></li> */}
        <li><Link to="/user">Customer</Link></li>
        <li><Link to="/astrologer" className="nav-link" >ASTROLOGER</Link></li>
        <li><Link to="/service" className="nav-link" >SERVICE</Link></li>
        <li><Link to="/banner" className="nav-link" >BANNER</Link></li>
        <li><NavLink to="" className="nav-link ">Blog</NavLink>
            <ul>
                <li><NavLink to="/blog-category" >Blog Category</NavLink></li>
                <li><NavLink to="/blog" >Blog</NavLink></li>
            </ul>
        </li>
        <li><NavLink to="" className="nav-link ">Product</NavLink>
            <ul>
              <li><NavLink to="/product-category" >Category</NavLink></li>
              <li><NavLink to="/product" >Pruduct</NavLink></li>
            </ul>
        </li>
        
        {/* <li><NavLink to="#" className="nav-link" >Chat</NavLink></li>
        <li><NavLink to="#" className="nav-link"  >Order</NavLink></li> */}
        <li >
          <a href="#" className="nav-link" onClick={logout}>Signout</a>
        </li>
      </ul>
    );
  }

  const randerNonLoggedInLinks = () => {
    return (
      <ul>
        <li>
          <NavLink to="/signin" className="nav-link" >Signin</NavLink>
        </li>
        <li >
          <NavLink to="/signup" className="nav-link">Signup</NavLink>
        </li>
      </ul>
    );
  }

  return (
    <>
      <header className="pt-1 pb-1" >
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-2 col-sm-6">
              <a href="#">
                <img src='assets/images/logo.png' alt="" className="logo" title="" />
              </a>
            </div>
            <div className="col-lg-10 col-md-10 col-sm-6 my-auto main text-center mx-auto">
              <span className="respnav"><i className="fa fa-bars" aria-hidden="true"></i></span>
              <nav>
                {auth.authenticate ? randerLoggedInLinks() : randerNonLoggedInLinks()}
              </nav>
            </div>

          </div>
        </div>
      </header>
      {auth.authenticate ? <Banner /> : null }
    </>
  )

}
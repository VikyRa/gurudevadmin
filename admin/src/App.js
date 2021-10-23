import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Signin } from './containers/signin/index';
import { Signup } from './containers/signup';
import { useDispatch, useSelector } from 'react-redux';
import PrivateRoute from './components/HOC/PrivateRoute';
import { isUserLoggedIn, getAllCategories, getInitialData } from './actions';
import Dashboard from './containers/Dashboard';
import './App.css';
// import { Rolelist } from './containers/adminrole/Rolelist';
// import { Addrole } from './containers/adminrole/add';
// import { EditRole } from './containers/adminrole/edit';
import { UserList } from './containers/user/list';
import { AddUser } from './containers/user/add';
import { EditUser } from './containers/user/edit';
import { AstrologerList } from './containers/astrologer/list';
import { AddAstrologer } from './containers/astrologer/add';
import { EditAstrologer } from './containers/astrologer/edit';
import { ViewUser } from './containers/user/view';
import { ServiceList } from './containers/service/list';
import { AddService } from './containers/service/add';
import { BannerList } from './containers/banner/list';
import { AddBanner } from './containers/banner/add';
import { EditService } from './containers/service/edit';
import { ViewService } from './containers/service/view';
import { BlogCateList } from './containers/blogcategory/list';
import { AddBlogCate } from './containers/blogcategory/add';
import { EditBlogCat } from './containers/blogcategory/edit';
import { BlogList } from './containers/blog/list';
import { AddBlog } from './containers/blog/add';
import { EditBlog } from './containers/blog/edit';
import { ViewBlog } from './containers/blog/view';
import { CategoryList } from './containers/category/list';
import { AddCategory } from './containers/category/add';
import { EditCategory } from './containers/category/edit';
import { ProductList } from './containers/product/list';
import { AddProduct } from './containers/product/add';
import { EditProduct } from './containers/product/edit';
import { ViewProduct } from './containers/product/view';

function App() {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    // if(auth.authenticate){
    //   dispatch(getInitialData());
    // }

  }, [auth.authenticate]);


  return (

    <Switch>
      <PrivateRoute path="/" exact component={Dashboard} />
      {/* <PrivateRoute path="/role" exact component={Rolelist} />
      <PrivateRoute path="/admin/addrole" exact component={Addrole} />
      <PrivateRoute path="/admin/editrole/:id" exact component={EditRole} /> */}

      {/* USER ROUTE START */}
      <PrivateRoute path="/user" exact component={UserList} />
      <PrivateRoute path="/user/add" exact component={AddUser} />
      <PrivateRoute path="/user/edit/:id" exact component={EditUser} />
      <PrivateRoute path="/user/view/:id" exact component={ViewUser} />

      {/* ASTROLOGER ROUTE START */}
      <PrivateRoute path="/astrologer" exact component={AstrologerList} />
      <PrivateRoute path="/astrologer/add" exact component={AddAstrologer} />
      <PrivateRoute path="/astrologer/edit/:id" exact component={EditAstrologer} />


      {/* SERVICE ROUTE START */}
      <PrivateRoute path='/service' exact component={ServiceList} />
      <PrivateRoute path='/service/add' exact component={AddService} />
      <PrivateRoute path='/service/edit/:id' exact component={EditService} />
      <PrivateRoute path='/service/view/:id' exact component={ViewService} />
      {/* SERVICE ROUTE STOP */}


      {/* BANNER ROUTE STAT */}
      <PrivateRoute path='/banner' exact component={BannerList} />
      <PrivateRoute path='/banner/add' exact component={AddBanner} />
      {/* BANNER ROUTE STOP */}

      {/* BLOG CATEGORY ROUTE START */}
      <PrivateRoute path="/blog-category" exact component={BlogCateList} />
      <PrivateRoute path="/blog-category/add" exact component={AddBlogCate} />
      <PrivateRoute path='/blog-category/edit/:id' exact component={EditBlogCat} />
      {/* BLOG CATEGORY ROUTE STOP */}

      {/* BLOG ROUTE START */}
      <PrivateRoute path="/blog" exact component={BlogList} />
      <PrivateRoute path="/blog/add" exact component={AddBlog} />
      <PrivateRoute path="/blog/edit/:id" exact component={EditBlog} />
      <PrivateRoute path="/blog/view/:id" exact component={ViewBlog} />
      {/* BLOG ROUTE STOP */}

      {/* PRODUCT CATEGORY ROUTE START */}
      <PrivateRoute path="/product-category" exact component={CategoryList} />
      <PrivateRoute path="/product-category/add" exact component={AddCategory} />
      <PrivateRoute path="/product-category/edit/:id" exact component={EditCategory} />
      {/* PRODUCT CATEGORY ROUTE STOP */}


      {/* PRODUCT ROUTE START */}
      <PrivateRoute path="/product" exact component={ProductList} />
      <PrivateRoute path="/product/add" exact component={AddProduct} />
      <PrivateRoute path="/product/edit/:id" exact component={EditProduct} />
      <PrivateRoute path="/product/view/:id" exact component={ViewProduct} />
      {/* PRODUCT ROUTE STOP */}


      {/* <PrivateRoute path="/page" exact component={NewPage} />
        <PrivateRoute path="/products" exact component={Products} />
        <PrivateRoute path="/orders" exact component={Orders} />
        <PrivateRoute path="/Categories" exact component={Categories} /> */}
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
    </Switch>

  );
}

export default App;

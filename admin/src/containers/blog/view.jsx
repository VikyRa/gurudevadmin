import React, { useEffect, useState, useRef } from 'react';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { DataGrid } from "@material-ui/data-grid";
import {  getSingleblog, listblogCategory, updateblogaction } from '../../actions';
import { gernateImages } from '../../urlConfig';
import Input from '../../components/UI/Input';
import JoditEditor from "jodit-react";

/**
* @author
* @function EditBlog
**/

export const ViewBlog = (props) => {

    const dispatch = useDispatch();

    const { category } = useSelector((state) => state.blogcategory);
    const { blog } = useSelector((state) => state.getblog);

    
    // GET EDIT DATA CODE START
    const blogId = props.match.params.id;



    useEffect(() => {
        if (blog && blog._id !== blogId) {
            dispatch(getSingleblog(blogId));
        }
        dispatch(listblogCategory());

    }, [dispatch ,blogId, blog,]);

    console.log(blog);

    return (
        <Layout>
            <div className="recent mb-2">
                <div className="container">
                    <div className="row main mt-3">
 
                        <div className="col-md-8">
                            <img className="productListImg" src={gernateImages(blog.thumbnail)} alt="" style={{height:'350px',width:'100%'}}/>
                            <br/>
                            <h3>{blog.title}</h3>
                            <small>Category</small>
                            <h5>{blog.category.name}</h5>
                            <small>Shrot Description</small>
                            <p>{blog.short_content}</p>
                            <small>Long Description</small>
                            <p>{blog.description}</p>

                            <small>Status</small>
                            <p>
                            { blog.status == 1 ? <button className="btn btn-sm btn-success">Active</button> : <button className="btn btn-sm btn-danger">Inactive</button>}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

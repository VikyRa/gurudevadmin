import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import validator from 'validator';
import { getSingleblogCategory, updateblogCategoryaction } from '../../actions';

/**
* @author
* @function EditBlogCat
**/

export const EditBlogCat = (props) => {
    const dispatch = useDispatch();
    const {category} = useSelector((state) => state.getblogcat);
    // const blogcat = getblogcat.category;
    const [name, setName] = useState("");
    const [status, setStatus] = useState('');

    const {
        loading,
        error,
        isUpdated,
        upcategory,
        message
      } = useSelector((state) => state.updatesgetblogcat);
    const catBlogId = props.match.params.id;
    

    // GET EDIT DATA CODE START
    useEffect(() => {
        if (category && category._id !== catBlogId) {
            dispatch(getSingleblogCategory(catBlogId));
        } else {
            setName(category.name);
            setStatus(category.status);
        }
        if(isUpdated){
            setName(upcategory.name);
            setStatus(upcategory.status);
        }
    }, [dispatch,
        category,
        loading,
        error,
        isUpdated,
        catBlogId
    ]);

    const updateblogcatForm = (e) =>{
        e.preventDefault();
        const objectform={
            cat_name:name,
            status:status
        }
        dispatch(updateblogCategoryaction(catBlogId,objectform));
    }

    return (
        <Layout>
            <div className="recent mb-2">
                <div className="container">
                    <div className="row main">
                        <div className="col-md-8">
                            {error ? <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                {message}</div> : null}
                            {isUpdated ? <div className="alert alert-success alert-dismissible fade show" role="alert">
                                {message}</div> : null}
                        </div>
                        <div className="col-md-8">
                            <h3 className="mb-3 shadow text-success">UPDATE BLOG CATEGORY</h3>
                            <form className="shadow" encType="multipart/form-data" method="post" onSubmit={updateblogcatForm} style={{ padding: '55px', borderRadius: '20px' }}>
                                <div className="row">
                                    <Input
                                        type="text"
                                        value={name}
                                        name="catName"
                                        placeholder={`Enter Blog Category Name`}
                                        onChange={(e) => setName(e.target.value)}
                                        className="form-control"
                                        col={`col-md-6 mb-2`}
                                        required
                                    />

                                    <div className="col-sm-6 mb-2">
                                        <select name="status" required value={status} className="form-control" onChange={(e) => setStatus(e.target.value)}>
                                            <option value="">Please select</option>
                                            <option value="1">Active</option>
                                            <option value="2">In-active</option>
                                        </select>

                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-md btn-primary form-control">UPDATE BLOG CATEGORY</button>
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

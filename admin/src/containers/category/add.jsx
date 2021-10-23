import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { DataGrid } from "@material-ui/data-grid";
import { createblogCategory, createCategory, createService, getAllsevice } from '../../actions';
import { gernateImages } from '../../urlConfig';
import Input from '../../components/UI/Input';

/**
* @author
* @function AddService
**/

export const AddCategory = (props) => {
    const dispatch = useDispatch();
    const [catName, setCatName] = useState('');
    const { loading, success, message, error } = useSelector((state) => state.addcategory);

    // handl image 

    const addserviceForm = (e) => {
        e.preventDefault();
        const objectform={
            name:catName
        }
        dispatch(createCategory(objectform));
    }
    // GET EDIT DATA CODE START
    useEffect(() => {
        if (success) {
            setCatName('');
        }
    }, [success,loading]);


    return (
        <Layout>
            <div className="recent mb-2">
                <div className="container">
                    <div className="row main">
                        <div className="col-md-8">
                            {error ? <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                {message}</div> : null}
                            {success ? <div className="alert alert-success alert-dismissible fade show" role="alert">
                                {message}</div> : null}
                        </div>
                        <div className="col-md-8">
                            <h3 className="mb-3 shadow text-success">ADD NEW  CATEGORY</h3>
                            <form className="shadow" encType="multipart/form-data" method="post" onSubmit={addserviceForm} style={{ padding: '55px', borderRadius: '20px' }}>
                                <div className="row">
                                    <Input
                                        type="text"
                                        value={catName}
                                        name="catName"
                                        placeholder={`Enter Category Name`}
                                        onChange={(e) => setCatName(e.target.value)}
                                        className="form-control"
                                        col={`col-md-12 mb-2`}
                                        required
                                    />
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-md btn-primary form-control">ADD NEW  CATEGORY</button>
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

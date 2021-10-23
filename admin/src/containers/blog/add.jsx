import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { DataGrid } from "@material-ui/data-grid";
import { createblog, listblogCategory } from '../../actions';
import { gernateImages } from '../../urlConfig';
import Input from '../../components/UI/Input';

/**
* @author
* @function AddBlog
**/

export const AddBlog = (props) => {

    const dispatch = useDispatch();
    const [servicePictures, setServicePictures] = useState('');
    const [serviceName, setServiceName] = useState('');
    const [Shortdescription, setShortdescription] = useState('');
    const [longdescription, setLongdescription] = useState('');
    const [status, setStatus] = useState('');
    const [blogCate, setBlogCat] = useState('');
    const { category } = useSelector((state) => state.blogcategory);

    const { loading, success, message, error } = useSelector((state) => state.addblog);

    // handl image 

    const onChangeFile = e => {
        setServicePictures(e.target.files[0]);
    }


    const addserviceForm = (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('title', serviceName);
        form.append('short_content', Shortdescription);
        form.append('description', longdescription);
        form.append('status', status);
        form.append('thumbnail', servicePictures);
        form.append('category', blogCate);

        dispatch(createblog(form));
    }
    // GET EDIT DATA CODE START
    useEffect(() => {
        dispatch(listblogCategory())
        if (success) {
            setServicePictures('');
            setServiceName('');
            setShortdescription('');
            setLongdescription('');
            setStatus('');
        }
    }, [success]);

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
                            <h3 className="mb-3 shadow text-success">ADD BLOG</h3>
                            <form className="shadow" encType="multipart/form-data" method="post" onSubmit={addserviceForm} style={{ padding: '55px', borderRadius: '20px' }}>
                                <div className="row">
                                    <Input
                                        type="text"
                                        value={serviceName}
                                        name="serviceName"
                                        placeholder={`Enter Blog Name`}
                                        onChange={(e) => setServiceName(e.target.value)}
                                        className="form-control"
                                        col={`col-md-6 mb-2`}
                                        required
                                    />
                                    <Input
                                        type="file"
                                        name="servicePictures"
                                        onChange={onChangeFile}
                                        className="form-control"
                                        col={`col-md-6 mb-2`}
                                        required
                                    />
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="category">Category</label>

                                            <select name="status" required className="form-control" onChange={(e) => setBlogCat(e.target.value)}>
                                                <option value="">Please select</option>
                                                {
                                                    category && category.map((cat) => (
                                                        <option value={cat._id} key={cat.name}>{cat.name}</option>
                                                    ))
                                                }

                                            </select>

                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="short">Short Description</label>
                                            <textarea required className="form-control" onChange={(e) => (setShortdescription(e.target.value))} value={Shortdescription}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="short">Long Description</label>
                                            <textarea required className="form-control" onChange={(e) => (setLongdescription(e.target.value))} value={longdescription}></textarea>
                                        </div>
                                    </div>
                                    <div className="col-sm-12 mb-2">
                                        <div className="form-group">
                                            <label htmlFor="short">Status</label>
                                            <select name="status" required className="form-control" onChange={(e) => setStatus(e.target.value)}>
                                                <option value="">Please select</option>
                                                <option value="1">Active</option>
                                                <option value="2">In-active</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-md btn-primary form-control">ADD NEW BLOG</button>
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

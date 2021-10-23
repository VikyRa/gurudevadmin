import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { DataGrid } from "@material-ui/data-grid";
import { createblog, createproduct, listblogCategory, listCategory } from '../../actions';
import { gernateImages } from '../../urlConfig';
import Input from '../../components/UI/Input';

/**
* @author
* @function AddBlog
**/

export const AddProduct = (props) => {

    const dispatch = useDispatch();
    const [productPictures, setProductPictures] = useState('');
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [longdescription, setLongdescription] = useState('');
    const [status, setStatus] = useState('');
    const [price, setPrice] = useState('');
    const [procategory, setProcategory] = useState('');
    const { category } = useSelector((state) => state.listcategory);

    const { loading, success, message, error } = useSelector((state) => state.addproduct);

    // handl image 

    const onChangeFile = e => {
        setProductPictures(e.target.files[0]);
    }


    const addserviceForm = (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', productName);
        form.append('quantity', quantity);
        form.append('price', price);
        form.append('description', longdescription);
        form.append('status', status);
        form.append('productPictures', productPictures);
        form.append('category', procategory);

        dispatch(createproduct(form));
    }
    // GET EDIT DATA CODE START
    useEffect(() => {
        dispatch(listCategory());
        if (success) {
            setProductPictures('');
            setProductName('');
            setQuantity('');
            setProcategory('');
            setLongdescription('');
            setStatus('');
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
                            <h3 className="mb-3 shadow text-success">ADD PRODUCT</h3>
                            <form className="shadow" encType="multipart/form-data" method="post" onSubmit={addserviceForm} style={{ padding: '55px', borderRadius: '20px' }}>
                                <div className="row">
                                    <Input
                                        type="text"
                                        value={productName}
                                        name="productName"
                                        placeholder={`Enter Product Name`}
                                        onChange={(e) => setProductName(e.target.value)}
                                        className="form-control"
                                        col={`col-md-6 mb-2`}
                                        required
                                    />
                                    <Input
                                        type="text"
                                        value={quantity}
                                        name="productName"
                                        placeholder={`Enter quantity`}
                                        onChange={(e) => setQuantity(e.target.value)}
                                        className="form-control"
                                        col={`col-md-6 mb-2`}
                                        required
                                    />
                                    <Input
                                        type="text"
                                        value={price}
                                        name="productName"
                                        placeholder={`Enter Price`}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className="form-control"
                                        col={`col-md-6 mb-2`}
                                        required
                                    />
                                    <Input
                                        type="file"
                                        name="productPictures"
                                        onChange={onChangeFile}
                                        className="form-control"
                                        col={`col-md-6 mb-2`}
                                        required
                                    />
                                    <div className="col-sm-12">
                                        <div className="form-group">
                                            <label htmlFor="category">Category</label>

                                            <select name="status" required className="form-control" onChange={(e) => setProcategory(e.target.value)}>
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
                                        <button type="submit" className="btn btn-md btn-primary form-control">ADD NEW PRODUCT</button>
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

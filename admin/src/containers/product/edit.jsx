import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { DataGrid } from "@material-ui/data-grid";
import { createblog, createproduct, getSingleproduct, listCategory, updateproductaction } from '../../actions';
import { gernateImages } from '../../urlConfig';
import Input from '../../components/UI/Input';

/**
* @author
* @function EditProduct
**/

export const EditProduct = (props) => {
    const dispatch = useDispatch();
    const [productPictures, setProductPictures] = useState('');
    const [productName, setProductName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [longdescription, setLongdescription] = useState('');
    const [status, setStatus] = useState('');
    const [price, setPrice] = useState('');
    const [oldprice, setOldPrice] = useState('');
    const [youtubeurl, setYoutubeurl] = useState('');
    const [procategory, setProcategory] = useState('');
    const { category } = useSelector((state) => state.listcategory);
    const { product } = useSelector((state)=>state.getproduct);

    const { loading,isUpdated, success, message, error ,upproduct } = useSelector((state) => state.updateproduct);

       // handl image 

       const productId = props.match.params.id;
       const onChangeFile = e => {
        setProductPictures(e.target.files[0]);
    }



    const addserviceForm = (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('name', productName);
        form.append('quantity', quantity);
        form.append('oldprice', oldprice);
        form.append('youtubeurl', youtubeurl);
        form.append('price', price);
        form.append('description', longdescription);
        form.append('status', status);
        form.append('productPictures', productPictures);
        form.append('category', procategory);
        dispatch(updateproductaction(productId,form));
    }
    // GET EDIT DATA CODE START
    useEffect(() => {
        if(product && product._id!== productId){
            dispatch(getSingleproduct(productId));
        }else{
            setOldPrice(product.oldprice)
            setPrice(product.price)
            setProductName(product.name);
            setQuantity(product.quantity);
            setProcategory(product.category._id);
            setLongdescription(product.description);
            setStatus(product.status);
            setYoutubeurl(product.youtubeurl)
        }
        dispatch(listCategory());
        if(isUpdated){
            setOldPrice(upproduct.oldprice);
            setProductName(upproduct.name);
            setQuantity(upproduct.quantity);
            setProcategory(upproduct.category);
            setLongdescription(upproduct.description);
            setStatus(upproduct.status);
            setYoutubeurl(upproduct.youtubeurl);
        }
    }, [loading,success,product,isUpdated,upproduct]);

  return(
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
                    <h3 className="mb-3 shadow text-success">UPDATE PRODUCT</h3>
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
                                type="text"
                                value={oldprice}
                                name="productName"
                                placeholder={`Enter Old Price`}
                                onChange={(e) => setOldPrice(e.target.value)}
                                className="form-control"
                                col={`col-md-6 mb-2`}
                                
                            />
                            <Input
                                type="text"
                                value={youtubeurl}
                                name="productName"
                                placeholder={`Enter youtube url`}
                                onChange={(e) => setYoutubeurl(e.target.value)}
                                className="form-control"
                                col={`col-md-6 mb-2`}
                                
                            />
                            <Input
                                type="file"
                                name="productPictures"
                                onChange={onChangeFile}
                                className="form-control"
                                col={`col-md-6 mb-2`}
                                
                                
                            />
                            <div className="col-sm-12">
                                <div className="form-group">
                                    <label htmlFor="category">Category</label>

                                    <select name="status" required value={procategory} className="form-control" onChange={(e) => setProcategory(e.target.value)}>
                                        <option value="">Please select</option>
                                        {
                                            category && category.map((cat) => (
                                                <option value={cat._id} key={cat._id}>{cat.name}</option>
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
                                    <select name="status" value={status} required className="form-control" onChange={(e) => setStatus(e.target.value)}>
                                        <option value="">Please select</option>
                                        <option value="1">Active</option>
                                        <option value="2">In-active</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-md btn-primary form-control">UPDATE PRODUCT</button>
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

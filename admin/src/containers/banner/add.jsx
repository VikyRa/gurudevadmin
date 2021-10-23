import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { DataGrid } from "@material-ui/data-grid";
import { createBanner } from '../../actions';
import { gernateImages } from '../../urlConfig';
import Input from '../../components/UI/Input';

/**
* @author
* @function AddService
**/

export const AddBanner= (props) => {
    const dispatch = useDispatch();
    const [bannerPictures, setBannerPictures] = useState('');
    const [bannerName, setBannerName] = useState('');
    const { loading, success, message, error } = useSelector((state) => state.addbanner);

  // handl image 

  const onChangeFile = e =>{
    setBannerPictures(e.target.files[0]);
  }


    const addserviceForm = (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('banner_link', bannerName);
        form.append('banner_image', bannerPictures);
        // form.append('productPictures', productPictures);

        dispatch(createBanner(form));
    }
  // GET EDIT DATA CODE START
  useEffect(() => {
    if(success){
        setBannerPictures('');
        setBannerName('');
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
                            <h3 className="mb-3 shadow text-success">ADD BANNER</h3>
                            <form className="shadow"  encType="multipart/form-data" method="post" onSubmit={addserviceForm} style={{ padding: '55px', borderRadius: '20px' }}>
                                <div className="row">
                                    <Input
                                        type="text"
                                        value={bannerName}
                                        name="bannerName"
                                        placeholder={`Enter Link`}
                                        onChange={(e) => setBannerName(e.target.value)}
                                        className="form-control"
                                        col={`col-md-6 mb-2`}

                                    />
                                    <Input
                                        type="file"
                                        name="servicePictures"
                                        onChange={onChangeFile}
                                        className="form-control"
                                        col={`col-md-6 mb-2`}
                                        required
                                    />
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-md btn-primary form-control">ADD NEW BANNER</button>
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

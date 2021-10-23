import React, { useEffect, useState, useRef } from 'react';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { DataGrid } from "@material-ui/data-grid";
import { createService, getSingleService, updateServiceaction } from '../../actions';
import { gernateImages } from '../../urlConfig';
import Input from '../../components/UI/Input';
import JoditEditor from "jodit-react";

/**
* @author
* @function AddService
**/

export const EditService = (props) => {
    const dispatch = useDispatch();

    const editor = useRef(null)

    const config = {
        readonly: false // all options from https://xdsoft.net/jodit/doc/
    }
    const {service} = useSelector((state) => state.getservice);
    const [servicePictures, setServicePictures] = useState('');
    const [serviceName, setServiceName] = useState('');
    const [Shortdescription, setShortdescription] = useState('');
    const [longdescription, setLongdescription] = useState('');
    const [status, setStatus] = useState('');


    const { loading, success, message, error,upservice } = useSelector((state) => state.updateservice);

    // handl image 

    const onChangeFile = e => {
        setServicePictures(e.target.files[0]);
    }



    // GET EDIT DATA CODE START
    const serviceId = props.match.params.id;

    const addserviceForm = (e) => {
        e.preventDefault();
        const form = new FormData();
        form.append('service_name', serviceName);
        form.append('short_description', Shortdescription);
        form.append('long_description', longdescription);
        form.append('status', status);
        form.append('service_image', servicePictures);
        // form.append('productPictures', productPictures);

        dispatch(updateServiceaction(serviceId,form));
    }


    useEffect(() => {
        if (service && service._id !== serviceId) {
            dispatch(getSingleService(serviceId));
        } else {
            setServiceName(service.service_name);
            setShortdescription(service.short_description);
            setLongdescription(service.long_description);
            setStatus(service.status);
        }
        if(success){
            setServiceName(upservice.service_name);
            setShortdescription(upservice.short_description);
            setLongdescription(upservice.long_description);
            setStatus(upservice.status);
        }

    }, [dispatch, success, error,serviceId, service, loading, message]);



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
                            <h3 className="mb-3 shadow text-success">UPDATE SERVIEC</h3>
                            <form className="shadow" encType="multipart/form-data" method="post" onSubmit={addserviceForm} style={{ padding: '55px', borderRadius: '20px' }}>
                                <div className="row">
                                    <Input
                                        type="text"
                                        value={serviceName}
                                        name="serviceName"
                                        placeholder={`Enter Service Name`}
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
                                        

                                    />

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
                                        <select name="status" required className="form-control" value={status} onChange={(e) => setStatus(e.target.value)}>
                                            <option value="">Please select</option>
                                            <option value="1">Active</option>
                                            <option value="2">In-active</option>
                                        </select>

                                    </div>
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-md btn-primary form-control">UPDATE NEW SERVICE</button>
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

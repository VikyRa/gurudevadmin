import React, { useEffect, useState, useRef } from 'react';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { DataGrid } from "@material-ui/data-grid";
import { createService, getSingleService, updateServiceaction } from '../../actions';
import { gernateImages } from '../../urlConfig';

/**
* @author
* @function AddService
**/

export const ViewService = (props) => {
    const dispatch = useDispatch();

    const services = useSelector((state) => state.getservice);
    const service = services.service;


    // handl image 


    // GET EDIT DATA CODE START
    const serviceId = props.match.params.id;




    useEffect(() => {
        dispatch(getSingleService(serviceId));
    }, [dispatch]);




    return (
        <Layout>
            <div className="recent mb-2">
                <div className="container">
                    <div className="row main">
                        <div className="col-md-10 mt-2">
                            <img className="productListImg" src={gernateImages(service.service_image)} alt="" style={{height:'350px',width:'100%'}}/>
                            <br/>
                            <h3>{service.service_name}</h3>
                            <small>Short Description</small>
                            <p style={{textAlign:'justify'}}>{service.short_description}</p>
                            <small>Long Description</small>
                            <p style={{textAlign:'justify'}}>{service.long_description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

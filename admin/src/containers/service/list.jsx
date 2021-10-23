import React , { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { DataGrid } from "@material-ui/data-grid";
import { deleteServiceById, getAllsevice } from '../../actions';
import { gernateImages } from '../../urlConfig';
/**
* @author
* @function ServiceList
**/

export const ServiceList = (props) => {
    const dispatch = useDispatch();
    const services = useSelector((state)=>state.service);
    const service = services.service;
    const { success,error,loading,message } = useSelector((state)=>state.deleteservice);


    // for delete record function start
    const deleteserviceHandler =(id)=>{
        dispatch(deleteServiceById(id));
    }
    useEffect(() => {
        dispatch(getAllsevice());
        
    }, [dispatch,success,error,loading,message]);



    // get all data
    const columns = [
        { field: "sr", headerName: "Sr. No", minWidth: 180, flex: 0.8 },
        {
            field: "img",
            headerName: "Image",
            minWidth: 150,
            renderCell: (params) => {
                return (
                  <div className="productListItem">
                    <img className="productListImg" src={gernateImages(params.row.img)} alt="" />
                    {params.row.title}
                  </div>
                );
              },

        },
        {
            field: "name",
            headerName: "Name",
            minWidth: 100,
            flex: 0.5,
        },
        {
            field: "actions",
            flex: 0.5,
            headerName: "Actions",
            minWidth: 150,
            type: "number",
            sortable: false,
            renderCell: (params) => {
                return (
                    <>
                        <Link to={`/service/view/${params.getValue(params.id, "id")}`} className="btn btn-outline-success">
                            View
                        </Link>
                        <Link to={`/service/edit/${params.getValue(params.id, "id")}`} className="btn btn-outline-success">
                            Edit
                        </Link>

                        <button className="btn btn-outline-primary"
                            onClick={() =>
                                deleteserviceHandler(params.id)
                            }
                        >
                            Delete
                        </button>
                    </>
                );
            },
        },
    ];

    const rows = [];

    service && service.map((item,index) => {
            rows.push({
                sr: 1 + index,
                id: item._id,
                name: item.service_name.toUpperCase(),
                img:item.service_image,
            });
        });

  return(
    <Layout>
         <div className="recent mb-2">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                            {error ? <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                {message}</div> : null}
                            {success ? <div className="alert alert-success alert-dismissible fade show" role="alert">
                                {message}</div> : null}
                        </div>
                        <div className="col-md-12">
                            <div className="shadow p-3">
                                <Link to="/service/add" className="btn btn-md btn-primary mb-2" >Add Service</Link>

                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    pageSize={10}
                                    disableSelectionOnClick
                                    className="productListTable"
                                    autoHeight
                                    
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </Layout>
   )
  }

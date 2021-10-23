import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { DataGrid } from "@material-ui/data-grid";
import {  deleteproductById, listproduct } from '../../actions';
import { gernateImages } from '../../urlConfig';
/**
* @author
* @function BlogList
**/

export const ProductList = (props) => {

    const dispatch = useDispatch();
    const { product } = useSelector((state)=>state.listproduct);
    const { success,error,loading,message } = useSelector((state)=>state.deleteproduct);


    // for delete record function start
    const deleteserviceHandler =(id)=>{
        dispatch(deleteproductById(id))
    }
    useEffect(() => {
        dispatch(listproduct());
        
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
            field: "cat",
            headerName: "Category Name",
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
                        <Link to={`/product/view/${params.getValue(params.id, "id")}`} className="btn btn-outline-success">
                            View
                        </Link>
                        <Link to={`/product/edit/${params.getValue(params.id, "id")}`} className="btn btn-outline-success">
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

    product && product.map((item,index) => {
            rows.push({
                sr: 1 + index,
                id: item._id,
                name: item.name,
                cat:item.category.name,
                img:item.productPictures,
            });
        });
    return (
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
                                <Link to="/product/add" className="btn btn-md btn-primary mb-2" >Add Product</Link>

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

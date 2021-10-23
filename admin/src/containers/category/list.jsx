import React , { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { DataGrid } from "@material-ui/data-grid";
import {  deleteCategoryById, listCategory } from '../../actions';
import { gernateImages } from '../../urlConfig';

/**
* @author
* @function CategoryList
**/

export const CategoryList = (props) => {
    const dispatch = useDispatch();
    const {category} = useSelector((state)=>state.listcategory);
    const { success,error,loading,message } = useSelector((state)=>state.deletecat);


    // for delete record function start
    const deletecategoryHandler =(id)=>{
        dispatch(deleteCategoryById(id));
    }
    useEffect(() => {
        dispatch(listCategory());
    }, [dispatch]);



    // get all data
    const columns = [
        { field: "sr", headerName: "Sr. No", minWidth:50, flex: 0.3 },
        
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
                        <Link to={`/product-category/edit/${params.id}`} className="btn btn-outline-success">
                            Edit
                        </Link>

                        <button className="btn btn-outline-primary"
                            onClick={() =>
                                deletecategoryHandler(params.id)
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

    category && category.map((item,index) => {
            rows.push({
                sr: 1 + index,
                id: item._id,
                name: item.name,
            });
        });

  return(
    <Layout>
         <div className="recent mb-2">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12 mt-5">
                            {error ? <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                {message}</div> : null}
                            {success ? <div className="alert alert-success alert-dismissible fade show" role="alert">
                                {message}</div> : null}
                        </div>
                        <div className="col-md-12">
                            <div className="shadow p-3">
                                <Link to="/product-category/add" className="btn btn-md btn-primary mb-2" >Add Category</Link>

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

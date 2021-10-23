import React , { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { DataGrid } from "@material-ui/data-grid";
import {  deleteblogCategoryById, listblogCategory } from '../../actions';
import { gernateImages } from '../../urlConfig';
/**
* @author
* @function ServiceList
**/

export const BlogCateList = (props) => {
    const dispatch = useDispatch();
    const blogcategory = useSelector((state)=>state.blogcategory);
    const category = blogcategory.category;
    const { success,error,loading,message } = useSelector((state)=>state.deleteservice);


    // for delete record function start
    const deleteserviceHandler =(id)=>{
        dispatch(deleteblogCategoryById(id));
    }
    useEffect(() => {
        dispatch(listblogCategory());
        
    }, [dispatch]);



    // get all data
    const columns = [
        { field: "sr", headerName: "Sr. No", minWidth: 180, flex: 0.8 },
        
        {
            field: "name",
            headerName: "Name",
            minWidth: 100,
            flex: 0.5,
        },
        {
            field: "slug",
            headerName: "Slug",
            minWidth: 100,
            flex: 0.5,
        },
        {
            field: "status",
            headerName: "Status",
            minWidth: 150,
            renderCell: (params) => {
                if(params.row.status===1){
                    return (
                        <button className="btn btn-success btn-sm">Active</button>
                    );
                }else{
                    return (
                        <button className="btn btn-danger btn-sm">In-active</button>
                    );
                }
               
              },

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
                        <Link to={`/blog-category/edit/${params.id}`} className="btn btn-outline-success">
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

    category && category.map((item,index) => {
            rows.push({
                sr: 1 + index,
                id: item._id,
                name: item.name,
                slug:item.slug,
                status:item.status,
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
                                <Link to="/blog-category/add" className="btn btn-md btn-primary mb-2" >Add Blog Category</Link>

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

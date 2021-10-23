import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { getAllUser,deleteuserById } from '../../actions/';
import { DataGrid } from "@material-ui/data-grid";


/**
* @author
* @function UserList
**/

export const UserList = (props) => {
    const dispatch = useDispatch();

    const users = useSelector((state) => state.user);
    const user = users.user;
    const {
        loading,
        error,
        isDeleted,
        userdata
      } = useSelector((state) => state.userupdate);
    useEffect(() => {
        dispatch(getAllUser());
        
    }, [dispatch,isDeleted]);

    
    const deleteUserHandler = (id) => {
        dispatch(deleteuserById(id));
        
    };

    const columns = [
        { field: "sr", headerName: "Sr. No", minWidth: 180, flex: 0.8 },
        {
            field: "name",
            headerName: "Name",
            minWidth: 100,
            flex: 0.5,
        },
        {
            field: "mobile",
            headerName: "Mobile",
            minWidth: 150,

        },
        {
            field: "email",
            headerName: "Email",
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
                        <Link to={`/user/view/${params.getValue(params.id, "id")}`} className="btn btn-outline-success">
                            View
                        </Link>
                        <Link to={`/user/edit/${params.getValue(params.id, "id")}`} className="btn btn-outline-success">
                            Edit
                        </Link>

                        <button className="btn btn-outline-primary"
                            onClick={() =>
                                deleteUserHandler(params.id)
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

    user && user.map((item,index) => {
            rows.push({
                sr: 1 + index,
                id: item._id,
                mobile: item.mobile,
                email: item.email,
                name: item.first_name + ' ' + item.last_name,
            });
        });

    return (
        <Layout>
            <div className="recent mb-2">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                        {error ? <div className="alert alert-danger alert-dismissible fade show" role="alert">
                        {error}</div> : null }
                    {isDeleted ? <div className="alert alert-success alert-dismissible fade show" role="alert">
                        {isDeleted}</div> : null }

                        </div>
                        <div className="col-md-12">
                            <div className="shadow p-3">
                                <Link to="/user/add" className="btn btn-md btn-primary mb-2" >Add User</Link>

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

        </Layout >
    )
}

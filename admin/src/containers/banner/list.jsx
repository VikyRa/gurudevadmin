import React , { useEffect, useState } from 'react';
import Layout from '../../components/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import { DataGrid } from "@material-ui/data-grid";
import { deletebannerById, getAllBanner } from '../../actions';
import { gernateImages } from '../../urlConfig';
/**
* @author
* @function ServiceList
**/

export const BannerList = (props) => {
    const dispatch = useDispatch();
    const banners = useSelector((state)=>state.banner);
    const {success,loading,error,message}=useSelector((state)=>state.deleteBanner);
    const banner = banners.banner;
    const deleteBannerHandler = (id) => {
        dispatch(deletebannerById(id));
    };
    useEffect(() => {
        dispatch(getAllBanner());
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
                       
                        <button className="btn btn-outline-primary"
                             onClick={() =>
                                deleteBannerHandler(params.id)
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

    banner && banner.map((item,index) => {
            rows.push({
                sr: 1 + index,
                id: item._id,
                name: item.banner_link,
                img:item.banner_image,
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
                                <Link to="/banner/add" className="btn btn-md btn-primary mb-2" >Add Banner</Link>

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

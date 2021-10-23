import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import validator from 'validator';
import { getSingleCategory, updateCategoryaction } from '../../actions';

/**
* @author
* @function EditBlogCat
**/

export const EditCategory = (props) => {
    const dispatch = useDispatch();
    const {category} = useSelector((state) => state.getcategory);
    // const blogcat = getblogcat.category;
    const [name, setName] = useState("");
    const {
        loading,
        error,
        isUpdated,
        upcategory,
        message
      } = useSelector((state) => state.updatecat);
    const catId = props.match.params.id;
    

    // GET EDIT DATA CODE START
    useEffect(() => {
        if (category && category._id !== catId) {
            dispatch(getSingleCategory(catId));
        } else {
            setName(category.name);
        }
        if(isUpdated){
            setName(upcategory.name);
        }
    }, [dispatch,
        category,
        loading,
        error,
        isUpdated,
        catId
    ]);

    const updateblogcatForm = (e) =>{
        e.preventDefault();
        const objectform={
            name:name
        }
        dispatch(updateCategoryaction(catId,objectform));
    }

    return (
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
                            <h3 className="mb-3 shadow text-success">UPDATE CATEGORY</h3>
                            <form className="shadow" encType="multipart/form-data" method="post" onSubmit={updateblogcatForm} style={{ padding: '55px', borderRadius: '20px' }}>
                                <div className="row">
                                    <Input
                                        type="text"
                                        value={name}
                                        name="catName"
                                        placeholder={`Enter Category Name`}
                                        onChange={(e) => setName(e.target.value)}
                                        className="form-control"
                                        col={`col-md-12 mb-2`}
                                        required
                                    />
                                    <div className="col-12">
                                        <button type="submit" className="btn btn-md btn-primary form-control">UPDATE CATEGORY</button>
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

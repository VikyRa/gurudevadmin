import axiosIntance from "../helpers/axios";
import { CLEAR_ERRORS, blogContant } from "./constants";


export const listblog = () => {
    return async (dispatch) => {
        dispatch({ type: blogContant.ALL_BLOG_REQUEST });
        await axiosIntance.get('admin/blog/')
            .then((res) => {
                dispatch({
                    type: blogContant.ALL_BLOG_SUCCESS,
                    payload: {
                        blog:res.data.blog
                    }
                });
            }).catch((err) => {
                dispatch({
                    type: blogContant.ALL_BLOG_FAIL,
                    payload: {
                        error: err
                    }
                });
            });
    };
}

export const createblog = (blogcat) => {
    return async (dispatch) => {
        try {
            dispatch({ type: blogContant.CREATE_BLOG_REQUEST });
            const res = await axiosIntance.post(`/admin/blog/create`, blogcat).then((res) => {
                dispatch({
                    type: blogContant.CREATE_BLOG_SUCCESS,
                    payload: { message: 'Blog added successfully' }
                });
            }).catch((err) => {
                dispatch({
                    type: blogContant.CREATE_BLOG_FAIL,
                    payload: { error: err.response.data.message }
                });
            });
        } catch (errs) {
            console.log(errs);
            dispatch({
                type: blogContant.CREATE_BLOG_FAIL,
                payload: { error: errs.response }
            });

        }
    }

}

// delete service

//   // new action
export const deleteblogById = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: blogContant.DELETE_BLOG_REQUEST });
             await axiosIntance.delete(`/admin/blog/delete/${id}`)
            .then((res) => {
                dispatch({
                    type: blogContant.DELETE_BLOG_SUCCESS,
                    payload: {
                        message: 'Blog deleted successfully',
                    },
                });
            }).catch((err) => {
                dispatch({
                    type: blogContant.DELETE_BLOG_FAILURE,
                    payload: {
                        error: err,
                    },
                });
            });

        } catch (error) {
            dispatch({
                type: blogContant.DELETE_BLOG_FAILURE,
                payload: {
                    error: error,
                },
            });
        }
    };
};







// // GET SINGLE RECORDS
export const getSingleblog = (id) => {

    return async (dispatch) => {
        try {
            dispatch({ type: blogContant.GET_SINGLE_BLOG_REQUEST });

            await axiosIntance.get(`/admin/blog/${id}`).then((res) => {
                dispatch({
                    type: blogContant.GET_SINGLE_BLOG_SUCCESS,
                    payload: {
                        blog:res.data.blog
                    }
                });
            }).catch((err) => {
                dispatch({
                    type: blogContant.GET_SINGLE_BLOG_FAILURE,
                    payload: {
                        error: err
                    }
                });
            });
        } catch (error) {
            dispatch({
                type: blogContant.GET_SINGLE_BLOG_FAILURE,
                payload: {
                    error: error
                }
            });
        }
    };
}



// // update function action start
export const updateblogaction = (_id, form) => {

    return async (dispatch) => {
        dispatch({ type: blogContant.UPDATE_BLOG_REQUEST });
        // call api here
        await axiosIntance.put(`/admin/blog/update/${_id}`, form)
        .then((res) => {
            // check status
            const { blog } = res.data;
            dispatch({
                type: blogContant.UPDATE_BLOG_SUCCESS,
                payload: {
                    blog
                }
            })
        }).catch((err) => {
            dispatch({
                type: blogContant.UPDATE_BLOG_FAILURE,
                payload: {
                    error: err.response.data.message
                }
            });
        });
    }
}


import axiosIntance from "../helpers/axios";
import { CLEAR_ERRORS, categoryContant } from "./constants";


export const listCategory = () => {
    return async (dispatch) => {
        dispatch({ type: categoryContant.ALL_CATEGORY_REQUEST });
        await axiosIntance.get('admin/product-category/').
        then((res) => {
            const { category } = res.data;
            dispatch({
                type: categoryContant.ALL_CATEGORY_SUCCESS,
                payload: {
                    category
                }
            });
        }).catch((err) => {
            dispatch({
                type: categoryContant.ALL_CATEGORY_FAIL,
                payload: {
                    error: err.data.error
                }
            });
        });

    };
}

export const createCategory = (cat) => {
    return async (dispatch) => {
        try {
            dispatch({ type: categoryContant.CREATE_CATEGORY_REQUEST });
             await axiosIntance.post(`/admin/product-category/create`, cat).then((res) => {
                dispatch({
                    type: categoryContant.CREATE_CATEGORY_SUCCESS,
                    payload: { message: 'Category added successfully' }
                });
            }).catch((err) => {
                dispatch({
                    type: categoryContant.CREATE_CATEGORY_FAIL,
                    payload: { error: err.response.data.message }
                });
            });
        } catch (errs) {
            console.log(errs);
            dispatch({
                type: categoryContant.CREATE_CATEGORY_FAIL,
                payload: { error: errs.response }
            });

        }
    }

}

// delete service

//   // new action
export const deleteCategoryById = (id) => {
    return async (dispatch) => {
        try {
            dispatch({ type: categoryContant.DELETE_CATEGORY_REQUEST });
            await axiosIntance.delete(`/admin/product-category/delete/${id}`).then((res) => {
                dispatch({
                    type: categoryContant.DELETE_CATEGORY_SUCCESS,
                    payload: {
                        message: 'Category deleted successfully',
                    },
                });
            }).catch((err) => {
                dispatch({
                    type: categoryContant.DELETE_CATEGORY_FAILURE,
                    payload: {
                        error: err,
                    },
                });
            });

        } catch (error) {
            dispatch({
                type: categoryContant.DELETE_CATEGORY_FAILURE,
                payload: {
                    error: error,
                },
            });
        }
    };
};







// // GET SINGLE RECORDS
export const getSingleCategory = (id) => {

    return async (dispatch) => {
        try {
            dispatch({ type: categoryContant.GET_SINGLE_CATEGORY_REQUEST });

             await axiosIntance.get(`/admin/product-category/${id}`)
             .then((res) => {
                const { cat } = res.data;
                dispatch({
                    type: categoryContant.GET_SINGLE_CATEGORY_SUCCESS,
                    payload: {
                        cat
                    }
                });
            }).catch((err) => {
                dispatch({
                    type: categoryContant.GET_SINGLE_CATEGORY_FAILURE,
                    payload: {
                        error: err
                    }
                });
            });
        } catch (error) {
            dispatch({
                type: categoryContant.GET_SINGLE_CATEGORY_FAILURE,
                payload: {
                    error: error
                }
            });
        }
    };
}



// // update function action start
export const updateCategoryaction = (_id, form) => {

    return async (dispatch) => {
        dispatch({ type: categoryContant.UPDATE_CATEGORY_REQUEST });
        // call api here
        await axiosIntance.put(`/admin/product-category/update/${_id}`, form)
        .then((res) => {
            // check status
            const { category } = res.data;
            dispatch({
                type: categoryContant.UPDATE_CATEGORY_SUCCESS,
                payload: {
                    category
                }
            })
        }).catch((err) => {
            dispatch({
                type: categoryContant.UPDATE_CATEGORY_FAILURE,
                payload: {
                    error: err.response.data.message
                }
            });
        });
    }
}


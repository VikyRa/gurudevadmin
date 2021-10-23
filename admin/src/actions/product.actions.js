import axiosIntance from "../helpers/axios";
import { CLEAR_ERRORS, productContant } from "./constants";


export const listproduct = () => {
    return async (dispatch) => {
        dispatch({ type: productContant.ALL_PRODUCT_REQUEST });
        await axiosIntance.get('admin/product/')
            .then((res) => {
                dispatch({
                    type: productContant.ALL_PRODUCT_SUCCESS,
                    payload: {
                        product:res.data.products
                    }
                });
            }).catch((err) => {
                dispatch({
                    type: productContant.ALL_PRODUCT_FAIL,
                    payload: {
                        error: err.response.data.err
                    }
                });
            });
    };
}

export const createproduct = (product) => {
    return async (dispatch) => {

            dispatch({ type: productContant.CREATE_PRODUCT_REQUEST });
            await axiosIntance.post(`/admin/product/create`, product).then((res) => {
                dispatch({
                    type: productContant.CREATE_PRODUCT_SUCCESS,
                    payload: { message: 'Product added successfully' }
                });
            }).catch((err) => {
                dispatch({
                    type: productContant.CREATE_PRODUCT_FAIL,
                    payload: { error: err.response.data.message }
                });
            });
    }

}

// delete service

//   // new action
export const deleteproductById = (id) => {
    return async (dispatch) => {
            dispatch({ type: productContant.DELETE_PRODUCT_REQUEST });
             await axiosIntance.delete(`/admin/product/delete/${id}`)
            .then((res) => {
                dispatch({
                    type: productContant.DELETE_PRODUCT_SUCCESS,
                    payload: {
                        message: 'Product deleted successfully',
                    },
                });
            }).catch((err) => {
                dispatch({
                    type: productContant.DELETE_PRODUCT_FAILURE,
                    payload: {
                        error: err.response.data.error
                    },
                });
            });
    };
};







// // GET SINGLE RECORDS
export const getSingleproduct = (id) => {
    return async (dispatch) => {
            dispatch({ type: productContant.GET_SINGLE_PRODUCT_REQUEST });

            await axiosIntance.get(`/admin/product/${id}`).then((res) => {
                dispatch({
                    type: productContant.GET_SINGLE_PRODUCT_SUCCESS,
                    payload: {
                        product:res.data.product
                    }
                });
            }).catch((err) => {
                dispatch({
                    type: productContant.GET_SINGLE_PRODUCT_FAILURE,
                    payload: {
                        error: err.response.data.err
                    }
                });
            });
    };
}



// // update function action start
export const updateproductaction = (_id, form) => {
    return async (dispatch) => {
        dispatch({ type: productContant.UPDATE_PRODUCT_REQUEST });
        // call api here
        await axiosIntance.put(`/admin/product/update/${_id}`, form)
        .then((res) => {
            // check status
            const { product } = res.data;
            
            dispatch({
                type: productContant.UPDATE_PRODUCT_SUCCESS,
                payload: {
                    product
                }
            })
        }).catch((err) => {
            dispatch({
                type: productContant.UPDATE_PRODUCT_FAILURE,
                payload: {
                    error: err.response.data.message
                }
            });
        });
    }
}


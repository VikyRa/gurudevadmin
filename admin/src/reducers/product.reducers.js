import { CLEAR_ERRORS, productContant } from "../actions/constants";

const initState = {
    product:[],
    loading: false,
    message: '',
    error: false,
    success: false,
    isUpdated:false
}


// for getalllist service code start

export const productlistReducer = (state = initState, action) => {
    switch (action.type) {
        case productContant.ALL_PRODUCT_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case productContant.ALL_PRODUCT_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                product:action.payload.product
            }
        break;
        case productContant.ALL_PRODUCT_FAIL:
            state = {
                ...state,
                loading: true,
                success:false,
                error:false,

            }
        break;
    }
    return state;
}



// get single data 
export const getProductReducer = (state = initState, action) => {
    switch (action.type) {
        case productContant.GET_SINGLE_PRODUCT_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case productContant.GET_SINGLE_PRODUCT_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                product:action.payload.product
            }
        break;
        case productContant.GET_SINGLE_PRODUCT_FAILURE:
            state = {
                ...state,
                loading: true,
                success:false,
                error:false,

            }
        break;
    }
    return state;
}



// for add service code start
export const addProductReducer = (state = initState, action) => {
    switch (action.type) {
        case productContant.CREATE_PRODUCT_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case productContant.CREATE_PRODUCT_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                error:false,
                message:action.payload.message
            }
        break;
        case productContant.CREATE_PRODUCT_FAIL:
            state = {
                ...state,
                loading: true,
                success:false,
                error:true,
                message:action.payload.error

            }
        break;
    }
    return state;
}


// for delete service code start
export const deleteProductReducer = (state = initState, action) => {
    switch (action.type) {
        case productContant.DELETE_PRODUCT_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case productContant.DELETE_PRODUCT_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                error:false,
                message:action.payload.message
            }
        break;
        case productContant.DELETE_PRODUCT_FAILURE:
            state = {
                ...state,
                loading: true,
                success:false,
                error:true,
                message:action.payload.error

            }
        break;
    }
    return state;
}


// UPDATE SERVER CODE START
export const updateProductReducer = (state = initState, action) => {
    switch (action.type) {
        case productContant.UPDATE_PRODUCT_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case productContant.UPDATE_PRODUCT_SUCCESS:
            state = {
                ...state,
                loading: false,
                isUpdated:true,
                error:false,
                message:'Product updated successfully',
                upproduct:action.payload.product
            }
        break;
        case productContant.UPDATE_PRODUCT_FAILURE:
            state = {
                ...state,
                loading: true,
                isUpdated:false,
                error:true,
                message:action.payload.error

            }
        break;
    }
    return state;
}
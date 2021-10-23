import { CLEAR_ERRORS, categoryContant } from "../actions/constants";

const initState = {
    category:[],
    loading: false,
    message: '',
    error: false,
    success: false
}


// for getalllist service code start

export const listCategoryReducer = (state = initState, action) => {
    switch (action.type) {
        case categoryContant.ALL_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case categoryContant.ALL_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                category:action.payload.category
            }
        break;
        case categoryContant.ALL_CATEGORY_FAIL:
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
export const getCategoryReducer = (state = initState, action) => {
    switch (action.type) {
        case categoryContant.GET_SINGLE_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case categoryContant.GET_SINGLE_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                category:action.payload.cat
            }
        break;
        case categoryContant.GET_SINGLE_CATEGORY_FAILURE:
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
export const addcatReducer = (state = initState, action) => {
    switch (action.type) {
        case categoryContant.CREATE_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case categoryContant.CREATE_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                error:false,
                message:action.payload.message
            }
        break;
        case categoryContant.CREATE_CATEGORY_FAIL:
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
export const deleteCategoryReducer = (state = initState, action) => {
    switch (action.type) {
        case categoryContant.DELETE_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case categoryContant.DELETE_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                error:false,
                message:action.payload.message
            }
        break;
        case categoryContant.DELETE_CATEGORY_FAILURE:
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
export const updateCategoryReducer = (state = initState, action) => {
    switch (action.type) {
        case categoryContant.UPDATE_CATEGORY_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case categoryContant.UPDATE_CATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
                isUpdated:true,
                error:false,
                message:'Category updated successfully',
                upcategory:action.payload.category
            }
        break;
        case categoryContant.UPDATE_CATEGORY_FAILURE:
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
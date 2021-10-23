import { CLEAR_ERRORS, blogCategoryContant } from "../actions/constants";

const initState = {
    category:[],
    loading: false,
    message: '',
    error: false,
    success: false
}


// for getalllist service code start

export const blogCategoryReducer = (state = initState, action) => {
    switch (action.type) {
        case blogCategoryContant.ALL_BLOGCATEGORY_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case blogCategoryContant.ALL_BLOGCATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                category:action.payload.category
            }
        break;
        case blogCategoryContant.ALL_BLOGCATEGORY_FAIL:
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
export const getblogCategoryReducer = (state = initState, action) => {
    switch (action.type) {
        case blogCategoryContant.GET_SINGLE_BLOGCATEGORY_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case blogCategoryContant.GET_SINGLE_BLOGCATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                category:action.payload.blogCat
            }
        break;
        case blogCategoryContant.GET_SINGLE_BLOGCATEGORY_FAILURE:
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
export const addgetblogcatReducer = (state = initState, action) => {
    switch (action.type) {
        case blogCategoryContant.CREATE_BLOGCATEGORY_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case blogCategoryContant.CREATE_BLOGCATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                error:false,
                message:action.payload.message
            }
        break;
        case blogCategoryContant.CREATE_BLOGCATEGORY_FAIL:
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
export const deleteblogCategoryReducer = (state = initState, action) => {
    switch (action.type) {
        case blogCategoryContant.DELETE_BLOGCATEGORY_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case blogCategoryContant.DELETE_BLOGCATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                error:false,
                message:action.payload.message
            }
        break;
        case blogCategoryContant.DELETE_BLOGCATEGORY_FAILURE:
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
export const updateblogCategoryReducer = (state = initState, action) => {
    switch (action.type) {
        case blogCategoryContant.UPDATE_BLOGCATEGORY_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case blogCategoryContant.UPDATE_BLOGCATEGORY_SUCCESS:
            state = {
                ...state,
                loading: false,
                isUpdated:true,
                error:false,
                message:'Blog category updated successfully',
                upcategory:action.payload.category
            }
        break;
        case blogCategoryContant.UPDATE_BLOGCATEGORY_FAILURE:
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
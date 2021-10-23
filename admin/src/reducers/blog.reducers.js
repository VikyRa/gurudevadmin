import { CLEAR_ERRORS, blogContant } from "../actions/constants";

const initState = {
    blog:[],
    loading: false,
    message: '',
    error: false,
    success: false
}


// for getalllist service code start

export const blogReducer = (state = initState, action) => {
    switch (action.type) {
        case blogContant.ALL_BLOG_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case blogContant.ALL_BLOG_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                blog:action.payload.blog
            }
        break;
        case blogContant.ALL_BLOG_FAIL:
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
export const getblogReducer = (state = initState, action) => {
    switch (action.type) {
        case blogContant.GET_SINGLE_BLOG_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case blogContant.GET_SINGLE_BLOG_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                blog:action.payload.blog
            }
        break;
        case blogContant.GET_SINGLE_BLOG_FAILURE:
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
export const addgetblogReducer = (state = initState, action) => {
    switch (action.type) {
        case blogContant.CREATE_BLOG_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case blogContant.CREATE_BLOG_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                error:false,
                message:action.payload.message
            }
        break;
        case blogContant.CREATE_BLOG_FAIL:
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
export const deleteblogReducer = (state = initState, action) => {
    switch (action.type) {
        case blogContant.DELETE_BLOG_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case blogContant.DELETE_BLOG_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                error:false,
                message:action.payload.message
            }
        break;
        case blogContant.DELETE_BLOG_FAILURE:
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
export const updateblogReducer = (state = initState, action) => {
    switch (action.type) {
        case blogContant.UPDATE_BLOG_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case blogContant.UPDATE_BLOG_SUCCESS:
            state = {
                ...state,
                loading: false,
                isUpdated:true,
                error:false,
                message:'Blog updated successfully',
                upblog:action.payload.blog
            }
        break;
        case blogContant.UPDATE_BLOG_FAILURE:
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
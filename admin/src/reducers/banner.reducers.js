import { CLEAR_ERRORS, bannerContant } from "../actions/constants";

const initState = {
    service:[],
    loading: false,
    message: '',
    error: false,
    success: false
}

export const BannerReducer = (state = initState, action) => {
    switch (action.type) {
        case bannerContant.ALL_BANNER_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case bannerContant.ALL_BANNER_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                banner:action.payload.banner
            }
        break;
        case bannerContant.ALL_BANNER_FAIL:
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


export const addBannerReducer = (state = initState, action) => {
    switch (action.type) {
        case bannerContant.CREATE_BANNER_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case bannerContant.CREATE_BANNER_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                error:false,
                message:action.payload.message
            }
        break;
        case bannerContant.CREATE_BANNER_FAIL:
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


export const deleteBannerReducer = (state = initState, action) => {
    switch (action.type) {
        case bannerContant.DELETE_BANNER_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case bannerContant.DELETE_BANNER_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                error:false,
                message:action.payload.message
            }
        break;
        case bannerContant.DELETE_BANNER_FAILURE:
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
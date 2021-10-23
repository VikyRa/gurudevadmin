import { CLEAR_ERRORS, serviceContant } from "../actions/constants";

const initState = {
    service:[],
    loading: false,
    message: '',
    error: false,
    success: false
}


// for getalllist service code start

export const serviceReducer = (state = initState, action) => {
    switch (action.type) {
        case serviceContant.ALL_SERVICE_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case serviceContant.ALL_SERVICE_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                service:action.payload.service
            }
        break;
        case serviceContant.ALL_SERVICE_FAIL:
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
export const getServiceReducer = (state = initState, action) => {
    switch (action.type) {
        case serviceContant.GET_SINGLE_SERVICE_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case serviceContant.GET_SINGLE_SERVICE_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                service:action.payload.service
            }
        break;
        case serviceContant.GET_SINGLE_SERVICE_FAILURE:
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
export const addserviceReducer = (state = initState, action) => {
    switch (action.type) {
        case serviceContant.CREATE_SERVICE_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case serviceContant.CREATE_SERVICE_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                error:false,
                message:action.payload.message
            }
        break;
        case serviceContant.CREATE_SERVICE_FAIL:
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
export const deleteserviceReducer = (state = initState, action) => {
    switch (action.type) {
        case serviceContant.DELETE_SERVICE_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case serviceContant.DELETE_SERVICE_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                error:false,
                message:action.payload.message
            }
        break;
        case serviceContant.DELETE_SERVICE_FAILURE:
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
export const updateServiceReducer = (state = initState, action) => {
    switch (action.type) {
        case serviceContant.UPDATE_SERVICE_REQUEST:
            state = {
                ...state,
                loading: true,
            }
        break;
        case serviceContant.UPDATE_SERVICE_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                error:false,
                message:'Service updated successfully',
                upservice:action.payload.service
            }
        break;
        case serviceContant.UPDATE_SERVICE_FAILURE:
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
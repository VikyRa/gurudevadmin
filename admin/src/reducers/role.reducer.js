import { CLEAR_ERRORS, roleContants } from "../actions/constants";

const initState = {
    role: [],
    loading: false,
    message: '',
    successmessage: '',
    error: false,
    successerror: false
}

export const updateRoleReducer = (state = initState, action) => {
    switch (action.type) {
        // UPDATE RECORD CASE START
        case roleContants.DELETE_ROLE_REQUEST:
        case roleContants.UPDATE_ROLE_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case roleContants.DELETE_ROLE_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            };
        case roleContants.UPDATE_ROLE_SUCCESS:
            state = {
                ...state,
                loading: false,
                isUpdated: action.payload.message,
                roledata: action.payload.role
            }
            break;
        case roleContants.DELETE_ROLE_FAILURE:
        case roleContants.UPDATE_ROLE_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload,
            }
            break;
        case roleContants.DELETE_ROLE_RESET:
            return {
                ...state,
                isDeleted: false,
            };
            break;
        case roleContants.UPDATE_ROLE_RESET:
            return {
                ...state,
                isUpdated: false,
            };
        break;
        case CLEAR_ERRORS:
            return {
              ...state,
              error: null,
            };
        break;

    }
    return state;

}

// GET ALL ROLE 
export const AllAdminRoleReducer = (state = { role: {} }, action) => {
    switch (action.type) {
        case roleContants.GET_ALL_ROLE_REQUEST:
            state = {
                ...state
            }
            break;
        case roleContants.GET_ALL_ROLE_SUCCESS:
            state = {
                ...state,
                role: action.payload.role,
            }
            break;
        case roleContants.GET_ALL_ROLE_FAILURE:
            state = {
                ...state,
                message: action.payload.error,
            }
            break;
    }
    return state;
}


// ADD ROLE CASE
export const AddRoleReducer = (state = initState, action) => {
    switch (action.type) {
        // ADD NEW ROLE CASE START
        case roleContants.ADD_NEW_ROLE_REQUEST:
            state = {
                ...state,
                loading: true
            }
            break;
        case roleContants.ADD_NEW_ROLE_SUCCESS:
            state = {
                ...state,
                loading: false,
                successmessage: action.payload.message,
                successerror: true
            }
            break;
        case roleContants.ADD_NEW_ROLE_FAILURE:
            state = {
                ...state,
                loading: false,
                message: action.payload.error,
                error: true
            }
            break;
    }
    return state;
}


// GET SINGLE RECORDS
export const AdminRoleReducer = (state = { role: {} }, action) => {
    switch (action.type) {
        case roleContants.GET_SINGLE_ROLE_REQUEST:
            state = {
                ...state
            }
            break;
        case roleContants.GET_SINGLE_ROLE_SUCCESS:
            state = {
                ...state,
                role: action.payload.role,
            }
            break;
        case roleContants.GET_SINGLE_ROLE_FAILURE:
            state = {
                ...state,
                message: action.payload.error,
            }
            break;
    }
    return state;
}
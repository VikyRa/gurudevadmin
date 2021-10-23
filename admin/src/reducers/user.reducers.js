import { CLEAR_ERRORS, userContant,dashboardContant } from '../actions/constants';

const initState = {
    user: [],
    loading: false,
    message: '',
    error: false,
    success: false
}

// GET ALL USER REDUCER CODE START

export const getUserReducer = (state = initState, action) => {

    switch (action.type) {
        case userContant.ALL_USERS_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case userContant.ALL_USERS_SUCCESS:
            state = {
                ...state,
                loading: false,
                user: action.payload.user,
            }
            break;
        case userContant.ALL_USERS_FAIL:
            state = {
                ...state,
                error: true,
                message: action.payload.error,
            }
            break;
        case CLEAR_ERRORS:
            state = {
                ...state,
                error: null,
            };

    }
    return state;
}
// GET ALL USER REDUCER CODE STOP


export const createUsers = (state = initState, action) => {
    switch (action.type) {
        case userContant.CREATE_USER_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case userContant.CREATE_USER_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                error:false,
                message: action.payload.message,
            }
            break;
        case userContant.CREATE_USER_FAIL:
            state = {
                ...state,
                loading: false,
                error: true,
                success:false,
                message: action.payload.error,
            }
            break;
        case CLEAR_ERRORS:
            state = {
                ...state,
                error: false,
            };

    }
    return state;
}



// GET SINGLE RECORDS
export const singleuserReducer = (state = {user:{}}, action) => {
    switch (action.type) {

        case userContant.GET_SINGLE_USER_REQUEST:
            state = {
                ...state
            }
            break;
        case  userContant.GET_SINGLE_USER_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
            }
            break;
        case userContant.GET_SINGLE_USER_FAILURE:
            state = {
                ...state,
                message: action.payload.error,
            }
            break;
    }
    return state;
}




export const updateuserReducer = (state = initState, action) => {
    switch (action.type) {
        // UPDATE RECORD CASE START
        case userContant.DELETE_USER_REQUEST:
        case userContant.UPDATE_USER_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case userContant.DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            };
        case userContant.UPDATE_USER_SUCCESS:
            state = {
                ...state,
                loading: false,
                isUpdated: action.payload.message,
                userdata: action.payload.user
            }
            break;
        case userContant.DELETE_USER_FAILURE:
        case userContant.UPDATE_USER_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload,
            }
            break;
        case userContant.DELETE_USER_RESET:
            return {
                ...state,
                isDeleted: false,
            };
            break;
        case userContant.UPDATE_USER_RESET:
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




// get call history
export const getcallhistoryReducer = (state = initState, action) => {
    switch (action.type) {

        case userContant.GET_CALL_HISTORY_REQUEST:
            state = {
                ...state
            }
            break;
        case  userContant.GET_CALL_HISTORY_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
            }
            break;
        case userContant.GET_CALL_HISTORY_FAIL:
            state = {
                ...state,
                message: action.payload.error,
            }
            break;
    }
    return state;

}


export const getuserChartReducer = (state = initState, action) => {
    switch (action.type) {
        case dashboardContant.ALL_USERCHART_REQUEST:
            state = {
                ...state
            }
            break;
        case  dashboardContant.ALL_USERCHART_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
            }
            break;
        case dashboardContant.ALL_USERCHART_FAIL:
            state = {
                ...state,
                message: action.payload.error,
            }
            break;
    }
    return state;

}
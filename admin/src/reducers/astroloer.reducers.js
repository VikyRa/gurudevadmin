import { CLEAR_ERRORS, astroloerContant } from '../actions/constants';

const initState = {
    user: [],
    loading: false,
    message: '',
    error: false,
    success: false
}

// GET ALL USER REDUCER CODE START

export const getAstrologerReducer = (state = initState, action) => {

    switch (action.type) {
        case astroloerContant.ALL_ASTROLOGER_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case astroloerContant.ALL_ASTROLOGER_SUCCESS:
            state = {
                ...state,
                loading: false,
                user: action.payload.user,
            }
            break;
        case astroloerContant.ALL_ASTROLOGER_FAIL:
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
 

export const createAstrologerReducer = (state = initState, action) => {
    switch (action.type) {
        case astroloerContant.CREATE_ASTROLOGER_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case astroloerContant.CREATE_ASTROLOGER_SUCCESS:
            state = {
                ...state,
                loading: false,
                success:true,
                error:false,
                message: action.payload.message,
            }
            break;
        case astroloerContant.CREATE_ASTROLOGER_FAIL:
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
export const singleAstrologerReducer = (state = {user:{}}, action) => {
    switch (action.type) {

        case astroloerContant.GET_SINGLE_ASTROLOGER_REQUEST:
            state = {
                ...state
            }
            break;
        case  astroloerContant.GET_SINGLE_ASTROLOGER_SUCCESS:
            state = {
                ...state,
                user: action.payload.user,
            }
            break;
        case astroloerContant.GET_SINGLE_ASTROLOGER_FAILURE:
            state = {
                ...state,
                message: action.payload.error,
            }
            break;
    }
    return state;
}




export const updateAstrologerReducer = (state = initState, action) => {
    switch (action.type) {
        // UPDATE RECORD CASE START
        case astroloerContant.DELETE_ASTROLOGER_REQUEST:
        case astroloerContant.UPDATE_ASTROLOGER_REQUEST:
            state = {
                ...state,
                loading: true,
            }
            break;
        case astroloerContant.DELETE_ASTROLOGER_SUCCESS:
            return {
                ...state,
                loading: false,
                isDeleted: action.payload,
            };
        case astroloerContant.UPDATE_ASTROLOGER_SUCCESS:
            state = {
                ...state,
                loading: false,
                isUpdated: action.payload.message,
                userdata: action.payload.user
            }
            break;
        case astroloerContant.DELETE_ASTROLOGER_FAILURE:
        case astroloerContant.UPDATE_ASTROLOGER_FAILURE:
            state = {
                ...state,
                loading: false,
                error: action.payload,
            }
            break;
        case astroloerContant.DELETE_ASTROLOGER_RESET:
            return {
                ...state,
                isDeleted: false,
            };
            break;
        case astroloerContant.UPDATE_ASTROLOGER_RESET:
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
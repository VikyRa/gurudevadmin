import { authConstants,adminContants } from "../actions/constants"

const initState ={
    token : '',
    user : {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        role: '',
        mobile: '',
        fullName: '',
        picture:''
    },
    authenticate:false,
    authenticating:false,
    loading:false,
    message:'',
    successmessage:'',
    error:false,
    successerror:false
}

export default (state = initState,action)=>{
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            state = {
                ...state,
                authenticating:true
            }
            break;
        case authConstants.LOGIN_SUCCESS:
            state={
                ...state,
                user:action.payload.userdata,
                token:action.payload.token,
                authenticate:true,
                authenticating:false
            }
            break;
        case authConstants.LOGIN_FAILURE_STATUS:
                state={
                    ...state,
                    message:action.payload.error,
                    error:true,
                }
                break;

        // logout case start
        case authConstants.LOGOUT_REQUEST:
            state={
                ...state,
                loading:true,
            }
            break;

        case authConstants.LOGOUT_SUCCESS:
            state={
                ...initState
            }
            break;
        case authConstants.LOGOUT_FAILURE:
            state={
                ...state,
                error:action.payload.error,
                loading:false,
            }
            break;

        // signup case start
        case adminContants.USER_REGISTER_REQUEST:
            state = {
                ...state,
                loading:true
            }
            break;
        case adminContants.USER_REGISTER_SUCCESS:
            state={
                ...state,
                loading:false,
                successmessage:action.payload.message,
                error:true
            }
            break;
        case adminContants.USER_REGISTER_FAILURE:
            state={
                ...state,
                loading:false,
                message:action.payload.error,
                error:true
            }
            break;
            
    }

    return state;

}
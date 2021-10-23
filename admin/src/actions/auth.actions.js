import axiosIntance from "../helpers/axios";
import { authConstants, adminContants } from "./constants";


// login auth action
export const login = (user) => {
    return async (dispatch) => {
        try {
            dispatch({ type: authConstants.LOGIN_REQUEST });
            // call api here
            const res = await axiosIntance.post('/admin/signin', user);
            if(res.status === 200){
                const { token, userdata } = res.data;
                localStorage.setItem('token', token);
                localStorage.setItem('user', JSON.stringify(userdata));
                dispatch({
                    type: authConstants.LOGIN_SUCCESS,
                    payload: {
                        token, userdata
                    }
                })
            }else{
                dispatch({
                    type: authConstants.LOGIN_FAILURE_STATUS,
                    payload: {
                        error: res.response.data.message
                    }
                })
            }
        } catch (err) {
            dispatch({
                type: authConstants.LOGIN_FAILURE_STATUS,
                payload: {
                    error: 'Something went worng'
                }
            })
        }

    }
}

// check user login or not
export const isUserLoggedIn = () => {
    return async dispatch => {
        const token = localStorage.getItem('token');
        if (token) {
            const user = JSON.parse(localStorage.getItem('user'));
            dispatch({
                type: authConstants.LOGIN_SUCCESS,
                payload: {
                    token, user
                }
            })
        } else {
            dispatch({
                type: authConstants.LOGIN_FAILURE,
                payload: {
                    error: 'Failed to login'
                }
            });
        }
    }
}

// signout function action
export const signout = () => {
    return async dispatch => {
        dispatch({ type: authConstants.LOGIN_REQUEST });
        const res = await axiosIntance.post('/admin/signout');
        // check status
        if (res.status === 200) {
            localStorage.clear();
            dispatch({
                type: authConstants.LOGOUT_SUCCESS
            })
        } else {
            dispatch({
                type: authConstants.LOGOUT_FAILURE,
                payload: {
                    error: res.data.message
                }
            })
        }
    }
}




// signup function action start
export const signup = (user) => {

    return async (dispatch) => {
        dispatch({ type: adminContants.USER_REGISTER_REQUEST });
        // call api here
        const res = await axiosIntance.post('/admin/signup', {
            ...user
        }).then((res) => {
            // check status
            if (res.status === 201) {
                const { message } = res.data;
                dispatch({
                    type: adminContants.USER_REGISTER_SUCCESS,
                    payload: {
                        message: message
                    }
                })
            }
        }).catch((err) => {

            if (err.response.status === 400) {
                dispatch({
                    type: adminContants.USER_REGISTER_FAILURE,
                    payload: {
                        error: err.response.data.message
                    }
                })
            } else {
                dispatch({
                    type: adminContants.USER_REGISTER_FAILURE,
                    payload: {
                        error: err.response.data.message
                    }
                })
            }

        });
    }
}
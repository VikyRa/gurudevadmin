import axiosIntance from "../helpers/axios";
import { CLEAR_ERRORS, dashboardContant } from "./constants";


export const chartuser = () => {
    return async (dispatch) => {
        dispatch({ type: dashboardContant.ALL_USERCHART_REQUEST });
        const res = await axiosIntance.get('/admin/userstate').
        then((res) => {
            const { user } = res.data;
            dispatch({
                type: dashboardContant.ALL_USERCHART_SUCCESS,
                payload: {
                    user
                }
            });
        }).catch((err) => {
            dispatch({
                type: dashboardContant.ALL_USERCHART_FAIL,
                payload: {
                    error:  err.response.data.error
                }
            });
        });

    };
}
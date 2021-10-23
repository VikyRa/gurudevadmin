import axiosIntance from "../helpers/axios";
import { CLEAR_ERRORS, bannerContant } from "./constants";


export const getAllBanner = () => {
    return async (dispatch) => {
      try {
        dispatch({ type: bannerContant.ALL_BANNER_REQUEST });
        const res = await axiosIntance.get('admin/banner/');
        if (res.status === 200) {
          const { banner } = res.data;
          dispatch({
            type: bannerContant.ALL_BANNER_SUCCESS,
            payload: {
                banner
            }
          });
        } else {
          dispatch({
            type: bannerContant.ALL_BANNER_FAIL,
            payload: {
              error: res.data.error
            }
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
  }
  
  export const createBanner = (banners) => {
      return async (dispatch) => {
        try{
        dispatch({ type: bannerContant.CREATE_BANNER_REQUEST });
        const res = await axiosIntance.post(`/admin/banner/create`,banners).then((res) => {
          dispatch({
            type: bannerContant.CREATE_BANNER_SUCCESS,
            payload: { message:'Banner added successfully' }
          });
        }).catch((err) => {
          dispatch({
            type: bannerContant.CREATE_BANNER_FAIL,
            payload: { error: err.response.data.message }
          });
        });
      }catch(errs){
        console.log(errs);
        dispatch({
          type: bannerContant.CREATE_BANNER_FAIL,
          payload: { error: errs.response }
        });
     
      }
  
       
      }
    // } catch (err) {
    //   dispatch({
    //     type: bannerContant.CREATE_BANNER_FAIL,
    //     payload: { error: err }
    //   });
    // }
  }
  
  

  
  
  //   // new action
    export const deletebannerById = (id) => {
      return async (dispatch) => {
        try {
          dispatch({ type: bannerContant.DELETE_BANNER_REQUEST });
          const res = await axiosIntance.delete(`/admin/banner/delete/${id}`).then((res) => {
            dispatch({
                type: bannerContant.DELETE_BANNER_SUCCESS,
                payload: {
                  message:'Banner deleted successfully',
                },
              });
          }).catch((err) => {
            dispatch({
              type: bannerContant.DELETE_BANNER_FAILURE,
              payload: {
                error:err,
              },
            });
        });

        } catch (error) {
            dispatch({
                type: bannerContant.DELETE_BANNER_FAILURE,
                payload: {
                  error:error,
                },
              });
        }
      };
    };
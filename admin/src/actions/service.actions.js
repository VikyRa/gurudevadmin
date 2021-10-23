import axiosIntance from "../helpers/axios";
import { CLEAR_ERRORS, serviceContant } from "./constants";


export const getAllsevice = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: serviceContant.ALL_SERVICE_REQUEST });
      const res = await axiosIntance.get('admin/service/');
      if (res.status === 200) {
        const { service } = res.data;
        dispatch({
          type: serviceContant.ALL_SERVICE_SUCCESS,
          payload: {
            service
          }
        });
      } else {
        dispatch({
          type: serviceContant.ALL_SERVICE_FAIL,
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

export const createService = (service) => {
  return async (dispatch) => {
    try {
      dispatch({ type: serviceContant.CREATE_SERVICE_REQUEST });
      const res = await axiosIntance.post(`/admin/service/create`, service).then((res) => {
        dispatch({
          type: serviceContant.CREATE_SERVICE_SUCCESS,
          payload: { message: 'Service added successfully' }
        });
      }).catch((err) => {
        dispatch({
          type: serviceContant.CREATE_SERVICE_FAIL,
          payload: { error: err.response.data.message }
        });
      });
    } catch (errs) {
      console.log(errs);
      dispatch({
        type: serviceContant.CREATE_SERVICE_FAIL,
        payload: { error: errs.response }
      });

    }
  }

}

// delete service

//   // new action
export const deleteServiceById = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: serviceContant.DELETE_SERVICE_REQUEST });
      const res = await axiosIntance.delete(`/admin/service/delete/${id}`).then((res) => {
        dispatch({
          type: serviceContant.DELETE_SERVICE_SUCCESS,
          payload: {
            message: 'Service deleted successfully',
          },
        });
      }).catch((err) => {
        dispatch({
          type: serviceContant.DELETE_SERVICE_FAILURE,
          payload: {
            error: err,
          },
        });
      });

    } catch (error) {
      dispatch({
        type: serviceContant.DELETE_SERVICE_FAILURE,
        payload: {
          error: error,
        },
      });
    }
  };
};







// // GET SINGLE RECORDS
export const getSingleService = (id) => {

  return async (dispatch) => {
    try {
      dispatch({ type: serviceContant.GET_SINGLE_SERVICE_REQUEST });

      const res = await axiosIntance.get(`/admin/service/${id}`).then((res) => {
        const {service }=res.data;
        dispatch({
          type: serviceContant.GET_SINGLE_SERVICE_SUCCESS,
          payload: {
            service
          }
        });
      }).catch((err) => {
        dispatch({
          type: serviceContant.GET_SINGLE_SERVICE_FAILURE,
          payload: {
            error: err
          }
        });
      });
    } catch (error) {
      dispatch({
        type: serviceContant.GET_SINGLE_SERVICE_FAILURE,
        payload: {
          error: error
        }
      });
    }
  };
}



  // // update function action start
  export const updateServiceaction = (_id,form) => {
   
    return async (dispatch) => {
        dispatch({ type: serviceContant.UPDATE_SERVICE_REQUEST });
        // call api here
        const res = await axiosIntance.put(`/admin/service/update/${_id}`,form).then((res) => {
            // check status
                const {  updatedservices } = res.data;
                dispatch({
                    type: serviceContant.UPDATE_SERVICE_SUCCESS,
                    payload: {
                        service:updatedservices
                    }
                })
        }).catch((err) => {
                dispatch({
                    type:serviceContant.UPDATE_SERVICE_FAILURE,
                    payload:{
                        error: err.response.data.message
                    }
                });
        });
    }
  }





  //   // new action
  //   export const deleteuserById = (id) => {
  //     return async (dispatch) => {
  //       try {

  //         dispatch({ type: serviceContant.DELETE_SERVICE_REQUEST });
  //         const res = await axiosIntance.delete(`/admin/user/delete/${id}`);

  //         if (res.status === 200) {
  //           console.log(res);
  //           dispatch({
  //             type: serviceContant.DELETE_SERVICE_SUCCESS,
  //             payload: {
  //               message:res.data.message,
  //             },
  //           });
  //         } else {
  //           const { error } = res.data;
  //           dispatch({
  //             type: serviceContant.DELETE_SERVICE_FAILURE,
  //             payload: {
  //               error,
  //             },
  //           });
  //         }
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //   };
import axiosIntance from "../helpers/axios";
import { CLEAR_ERRORS, roleContants } from "./constants";

export  const getAllRole = () => {
    return async (dispatch) => {
        try {
          dispatch({ type: roleContants.GET_ALL_ROLE_REQUEST });
          const res = await axiosIntance.get('/admin/get-role');
          if (res.status === 200) {
            const { role } = res.data;
            dispatch({
                type: roleContants.GET_ALL_ROLE_SUCCESS,
                payload: { 
                    role
                }
            });
          } else {
            dispatch({  type: roleContants.GET_ALL_ROLE_FAILURE,
                payload: {
                     error: res.data.message
                } });
          }
        } catch (error) {
          console.log(error);
        }
      };
}


// signup function action start
export const addrole = (form) => {
  return async (dispatch) => {
      dispatch({ type: roleContants.ADD_NEW_ROLE_REQUEST });
      // call api here
      const res = await axiosIntance.post('/admin/create-role', {
          ...form
      }).then((res) => {
          // check status
          if (res.status === 201) {
              const { message } = res.data;
              
              dispatch({
                  type: roleContants.ADD_NEW_ROLE_SUCCESS,
                  payload: {
                      message:message  
                  }
              })
          } else {
              if (res.status === 400) {
                  dispatch({
                      type: roleContants.ADD_NEW_ROLE_FAILURE,
                      payload: {
                          error: res.data.message
                      }
                  })
              }
          }
      }).catch((err) => {
       
        if(err.response.status === 400){
              dispatch({
                  type:roleContants.ADD_NEW_ROLE_FAILURE,
                  payload:{
                      error: err.response.data.message
                  }
              })
          }
      
      });
  }
}


// GET SINGLE RECORDS
export const getSingleRole = (id)=>{
    
    return async (dispatch) => {
        try {
          dispatch({ type: roleContants.GET_SINGLE_ROLE_REQUEST });
          
          const res = await axiosIntance.get(`/admin/single-role/${id}`);
          if (res.status === 200) {
            dispatch({
                type: roleContants.GET_SINGLE_ROLE_SUCCESS,
                payload: { 
                    role:res.data
                }
            });
          } else {
            dispatch({  type: roleContants.GET_SINGLE_ROLE_FAILURE,
                payload: {
                     error: res.data.message
                } });
          }
        } catch (error) {
          console.log(error);
        }
      };
}


// UPDATE RECORDS 
// signup function action start
export const updaterole = (_id,form) => {
    return async (dispatch) => {
        dispatch({ type: roleContants.UPDATE_ROLE_REQUEST });
        // call api here
        const res = await axiosIntance.put(`/admin/role-update/${_id}`, {
            ...form
        }).then((res) => {
            // check status
            // if (res.status === 201) {
                const { message , updaterole } = res.data;
                dispatch({
                    type: roleContants.UPDATE_ROLE_SUCCESS,
                    payload: {
                        message:message,
                        role:updaterole
                    }
                })
            // } else {
            //     if (res.status === 400) {
            //         dispatch({
            //             type: roleContants.UPDATE_ROLE_FAILURE,
            //             payload: {
            //                 error: res.data.message
            //             }
            //         })
            //     }
            // }
        }).catch((err) => {
                dispatch({
                    type:roleContants.UPDATE_ROLE_FAILURE,
                    payload:{
                        error: err.response.data.message
                    }
                });
        });
    }
  }


  // new action
export const deleteRoleById = (id) => {
    return async (dispatch) => {
      try {
        const res = await axiosIntance.delete(`/admin/role-delete/${id}`);
        dispatch({ type: roleContants.DELETE_ROLE_REQUEST });
        if (res.status === 200) {
          dispatch({
            type: roleContants.DELETE_ROLE_SUCCESS,
            payload: {
              message:res.data.message,
            },
          });
        } else {
          const { error } = res.data;
          dispatch({
            type: roleContants.DELETE_ROLE_FAILURE,
            payload: {
              error,
            },
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
  };
  // Clearing Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS });
  };
  
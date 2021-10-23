import axiosIntance from "../helpers/axios";
import { CLEAR_ERRORS, userContant } from "./constants";

export const getAllUser = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: userContant.ALL_USERS_REQUEST });
      const res = await axiosIntance.get('/admin/user/list');
      if (res.status === 200) {
        const { user } = res.data;
        dispatch({
          type: userContant.ALL_USERS_SUCCESS,
          payload: {
            user:user
          }
        });
      } else {
        dispatch({
          type: userContant.ALL_USERS_FAIL,
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

export const createUser = (user) => {
    return async (dispatch) => {
      try{
      dispatch({ type: userContant.CREATE_USER_REQUEST });
      const res = await axiosIntance.post(`/admin/user/create`, {
        ...user
      }).then((res) => {
        dispatch({
          type: userContant.CREATE_USER_SUCCESS,
          payload: { message:'User added successfully' }
        });
      }).catch((err) => {
        dispatch({
          type: userContant.CREATE_USER_FAIL,
          payload: { error: err.response.data.message }
        });
      });
    }catch(errs){
      console.log(errs);
      dispatch({
        type: userContant.CREATE_USER_FAIL,
        payload: { error: errs.response }
      });
   
    }

     
    }
  // } catch (err) {
  //   dispatch({
  //     type: userContant.CREATE_USER_FAIL,
  //     payload: { error: err }
  //   });
  // }
}


// GET SINGLE RECORDS
export const getSingleuser = (id)=>{
    
  return async (dispatch) => {
      try {
        dispatch({ type: userContant.GET_SINGLE_USER_REQUEST });
        
        const res = await axiosIntance.get(`/admin/user/getdetail/${id}`);
        if (res.status === 200) {
          dispatch({
              type: userContant.GET_SINGLE_USER_SUCCESS,
              payload: { 
                  user:res.data
              }
          });
        } else {
          dispatch({  type: userContant.GET_SINGLE_USER_FAILURE,
              payload: {
                   error: res.data.message
              } });
        }
      } catch (error) {
        console.log(error);
      }
    };
}



// update function action start
export const updateuseraction = (_id,form) => {
  return async (dispatch) => {
      dispatch({ type: userContant.UPDATE_USER_REQUEST });
      // call api here
      const res = await axiosIntance.put(`/admin/user/update/${_id}`, {
          ...form
      }).then((res) => {
          // check status
          // if (res.status === 201) {
              const { message , updateuser } = res.data;
              dispatch({
                  type: userContant.UPDATE_USER_SUCCESS,
                  payload: {
                      message:message,
                      user:updateuser
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
                  type:userContant.UPDATE_USER_FAILURE,
                  payload:{
                      error: err.response.data.message
                  }
              });
      });
  }
}





  // new action
  export const deleteuserById = (id) => {
    return async (dispatch) => {
      try {

        dispatch({ type: userContant.DELETE_USER_REQUEST });
        const res = await axiosIntance.delete(`/admin/user/delete/${id}`);
        
        if (res.status === 200) {
          console.log(res);
          dispatch({
            type: userContant.DELETE_USER_SUCCESS,
            payload: {
              message:res.data.message,
            },
          });
        } else {
          const { error } = res.data;
          dispatch({
            type: userContant.DELETE_USER_FAILURE,
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


export const getcallhistory =(id)=>{
    return async (dispatch) => {
      try {
        dispatch({ type: userContant.GET_CALL_HISTORY_REQUEST });
        
        const res = await axiosIntance.get(`/admin/user/callhistory/${id}`);
        if (res.status === 200) {
          dispatch({
              type: userContant.GET_CALL_HISTORY_SUCCESS,
              payload: { 
                  user:res.data
              }
          });
        } else {
          dispatch({  type: userContant.GET_CALL_HISTORY_FAIL,
              payload: {
                   error: res.data.message
              } });
        }
      } catch (error) {
        console.log(error);
      }
    };
  }
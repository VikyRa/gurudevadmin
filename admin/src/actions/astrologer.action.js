import axios from "axios";
import axiosIntance from "../helpers/axios";
import { CLEAR_ERRORS, astroloerContant } from "./constants";

export const getAllAstrologer = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: astroloerContant.ALL_ASTROLOGER_REQUEST });
      const res = await axiosIntance.get('/admin/atrologer/list');
      if (res.status === 200) {
        const { user } = res.data;
        dispatch({
          type: astroloerContant.ALL_ASTROLOGER_SUCCESS,
          payload: {
            user:user
          }
        });
      } else {
        dispatch({
          type: astroloerContant.ALL_ASTROLOGER_FAIL,
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

export const createAstrologer = (user) => {
    return async (dispatch) => {
      try{
      dispatch({ type: astroloerContant.CREATE_ASTROLOGER_REQUEST });
      const res = await axiosIntance.post(`/admin/atrologer/create`, {
        ...user
      }).then((res) => {
        dispatch({
          type: astroloerContant.CREATE_ASTROLOGER_SUCCESS,
          payload: { message:'Astrologer added successfully' }
        });
      }).catch((err) => {
        console.log('1');
        console.log(err);
        dispatch({
          type: astroloerContant.CREATE_ASTROLOGER_FAIL,
          payload: { error: err.response.data.message }
        });
      });
    }catch(errs){
      console.log('2');
      console.log(errs);
      dispatch({
        type: astroloerContant.CREATE_ASTROLOGER_FAIL,
        payload: { error: errs.response }
      });
   
    }

     
    }
  // } catch (err) {
  //   dispatch({
  //     type: astroloerContant.CREATE_ASTROLOGER_FAIL,
  //     payload: { error: err }
  //   });
  // }
}


// GET SINGLE RECORDS
export const getSingleAstrologer = (id)=>{
    
  return async (dispatch) => {
      try {
        dispatch({ type: astroloerContant.GET_SINGLE_ASTROLOGER_REQUEST });
        
        const res = await axiosIntance.get(`/admin/atrologer/getdetail/${id}`);
        if (res.status === 200) {
          dispatch({
              type: astroloerContant.GET_SINGLE_ASTROLOGER_SUCCESS,
              payload: { 
                  user:res.data
              }
          });
        } else {
          dispatch({  type: astroloerContant.GET_SINGLE_ASTROLOGER_FAILURE,
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
export const updateastrologeraction = (_id,form) => {
  return async (dispatch) => {
      dispatch({ type: astroloerContant.UPDATE_ASTROLOGER_REQUEST });
      // call api here
      const res = await axiosIntance.put(`/admin/atrologer/update/${_id}`, {
          ...form
      }).then((res) => {
          // check status
          // if (res.status === 201) {
              const { message , updateuser } = res.data;
              dispatch({
                  type: astroloerContant.UPDATE_ASTROLOGER_SUCCESS,
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
                  type:astroloerContant.UPDATE_ASTROLOGER_FAILURE,
                  payload:{
                      error: err.response.data.message
                  }
              });
      });
  }
}





  // new action
  export const deleteastrologerById = (id) => {
    return async (dispatch) => {
      try {

        dispatch({ type: astroloerContant.DELETE_ASTROLOGER_REQUEST });
        const res = await axiosIntance.delete(`/admin/atrologer/delete/${id}`);
        
        if (res.status === 200) {
          console.log(res);
          dispatch({
            type: astroloerContant.DELETE_ASTROLOGER_SUCCESS,
            payload: {
              message:res.data.message,
            },
          });
        } else {
          const { error } = res.data;
          dispatch({
            type: astroloerContant.DELETE_ASTROLOGER_FAILURE,
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
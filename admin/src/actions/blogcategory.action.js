import axiosIntance from "../helpers/axios";
import { CLEAR_ERRORS, blogCategoryContant } from "./constants";


export const listblogCategory = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: blogCategoryContant.ALL_BLOGCATEGORY_REQUEST });
      const res = await axiosIntance.get('admin/blog-category/');
      if (res.status === 200) {
        const { category } = res.data;
        dispatch({
          type: blogCategoryContant.ALL_BLOGCATEGORY_SUCCESS,
          payload: {
            category
          }
        });
      } else {
        dispatch({
          type: blogCategoryContant.ALL_BLOGCATEGORY_FAIL,
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

export const createblogCategory = (blogcat) => {
  return async (dispatch) => {
    try {
      dispatch({ type: blogCategoryContant.CREATE_BLOGCATEGORY_REQUEST });
      const res = await axiosIntance.post(`/admin/blog-category/create`, blogcat).then((res) => {
        dispatch({
          type: blogCategoryContant.CREATE_BLOGCATEGORY_SUCCESS,
          payload: { message: 'Blog Category added successfully' }
        });
      }).catch((err) => {
        dispatch({
          type: blogCategoryContant.CREATE_BLOGCATEGORY_FAIL,
          payload: { error: err.response.data.message }
        });
      });
    } catch (errs) {
      console.log(errs);
      dispatch({
        type: blogCategoryContant.CREATE_BLOGCATEGORY_FAIL,
        payload: { error: errs.response }
      });

    }
  }

}

// delete service

//   // new action
export const deleteblogCategoryById = (id) => {
  return async (dispatch) => {
    try {
      dispatch({ type: blogCategoryContant.DELETE_BLOGCATEGORY_REQUEST });
      const res = await axiosIntance.delete(`/admin/blog-category/delete/${id}`).then((res) => {
        dispatch({
          type: blogCategoryContant.DELETE_BLOGCATEGORY_SUCCESS,
          payload: {
            message: 'Blog Category deleted successfully',
          },
        });
      }).catch((err) => {
        dispatch({
          type: blogCategoryContant.DELETE_BLOGCATEGORY_FAILURE,
          payload: {
            error: err,
          },
        });
      });

    } catch (error) {
      dispatch({
        type: blogCategoryContant.DELETE_BLOGCATEGORY_FAILURE,
        payload: {
          error: error,
        },
      });
    }
  };
};







// // GET SINGLE RECORDS
export const getSingleblogCategory = (id) => {

  return async (dispatch) => {
    try {
      dispatch({ type: blogCategoryContant.GET_SINGLE_BLOGCATEGORY_REQUEST });

      const res = await axiosIntance.get(`/admin/blog-category/${id}`).then((res) => {
        const {blogCat }=res.data;
        dispatch({
          type: blogCategoryContant.GET_SINGLE_BLOGCATEGORY_SUCCESS,
          payload: {
            blogCat
          }
        });
      }).catch((err) => {
        dispatch({
          type: blogCategoryContant.GET_SINGLE_BLOGCATEGORY_FAILURE,
          payload: {
            error: err
          }
        });
      });
    } catch (error) {
      dispatch({
        type: blogCategoryContant.GET_SINGLE_BLOGCATEGORY_FAILURE,
        payload: {
          error: error
        }
      });
    }
  };
}



  // // update function action start
  export const updateblogCategoryaction = (_id,form) => {
   
    return async (dispatch) => {
        dispatch({ type: blogCategoryContant.UPDATE_BLOGCATEGORY_REQUEST });
        // call api here
        const res = await axiosIntance.put(`/admin/blog-category/update/${_id}`,form).then((res) => {
            // check status
                const {  category } = res.data;
                dispatch({
                    type: blogCategoryContant.UPDATE_BLOGCATEGORY_SUCCESS,
                    payload: {
                        category
                    }
                })
        }).catch((err) => {
                dispatch({
                    type:blogCategoryContant.UPDATE_BLOGCATEGORY_FAILURE,
                    payload:{
                        error: err.response.data.message
                    }
                });
        });
    }
  }


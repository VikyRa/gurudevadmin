import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout'
import Input from '../../components/UI/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import { useAlert } from "react-alert";
import validator from 'validator';
import { getSingleuser, clearErrors, updateuseraction, getcallhistory } from '../../actions';
import { DataGrid } from "@material-ui/data-grid";

/**
* @author
* @function EditUser
**/

export const ViewUser = (props) => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.suser);
  const user = users.user;
  const callhisty = useSelector((state) => state.getcallh);
console.log(user);
  const {
    loading,
    error,
    isUpdated,
    userdata
  } = useSelector((state) => state.userupdate);


  // error validation
  const [userError, setUserError] = useState({});

  const userId = props.match.params.id;

  // GET EDIT DATA CODE START
  useEffect(() => {
    if (user && user._id !== userId) {
      dispatch(getSingleuser(userId));
      dispatch(getcallhistory(userId));
    }

  }, [dispatch, user, loading,
    error,
    isUpdated,]);




  const columns = [
    { field: "id", headerName: "Call Id", minWidth: 180, flex: 0.8 },
    {
      field: "astrologer",
      headerName: "Astrologer Name",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "date",
      headerName: "Date",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "start_time",
      headerName: "Start Time",
      minWidth: 150,

    },
    {
      field: "end_time",
      headerName: "End Time",
      minWidth: 100,
      flex: 0.5,
    },
    {
      field: "total_time",
      headerName: "Time",
      minWidth: 100,
      flex: 0.5,
    },

  ];

  const rows = [];

  callhisty.user && callhisty.user.map((item) => {
    rows.push({
      id: item._id,
      astrologer: item.astronomerId.astrofirst_name + ' ' + item.astronomerId.astrolast_name,
      date: item.date,
      start_time: item.start_time,
      end_time: item.end_time,
      total_time: item.total_time,
    });
  });

  return (
    <Layout>
      <div class="detailed pb-5 pt-5">
        <div class="container">
          <div class="row main pt-5">
            <div class="col-md-5">
              <div class="shadow p-2 mb-2">
                <img src="images/profile.png" class="img-fluid" />
                <p>Name - {`${user.first_name} ${user.last_name}`}</p>
                <p>Email ID - {user.email}</p>
                <p>Mob.No.- {user.mobile}</p>
                <p class="text-center"><button type="submit" class="btn btn-md">More Info</button></p>
              </div>
            </div>
            <div class="col-md-7">
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={10}
                disableSelectionOnClick
                autoHeight

              />
            </div>
          </div>
        </div>
      </div>

    </Layout>

  )
}

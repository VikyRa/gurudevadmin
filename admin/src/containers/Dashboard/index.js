import React,{ useEffect, useMemo, useState } from 'react'
import Layout from '../../components/Layout';
import Banner from '../../components/UI/Banner';
import Chart from '../../components/chart/Chart';
import { useDispatch, useSelector } from 'react-redux';
import { chartuser } from '../../actions/dashbord.action';
import axiosIntance from '../../helpers/axios';
/**
* @author
* @function Dashboard
**/

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);
  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axiosIntance.get("/admin/userstate");
        const statsList = res.data.user.sort(function (a, b) {
          return a._id - b._id;
        });
        statsList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };
    getStats();
  }, [MONTHS]);
  // console.log(userStats);
  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Chart data={userStats} title="User Analytics" grid dataKey="Active User"/>
          </div>
        </div>
      </div>
    </Layout>
  )

}

export default Dashboard
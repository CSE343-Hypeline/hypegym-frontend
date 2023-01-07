import React, { useContext, useEffect, useState } from "react";
import { getOnlines, getUser } from "../../../API";
import BarChart from "../../../Charts/BarChart";
import DonutChart from "../../../Charts/DonutChart";
import AuthContext from "../../../Contexts/AuthContext";
import Widget from "../Widgets/Widget";
import "./dashboard.css";

function DashboardPage() {
  const { gymId } = useContext(AuthContext);
  const [onlines, setOnlines] = useState();
  const [onlineMembers, setOnlineMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getActivities = async () => {
      await getOnlines(gymId).then((res) =>
        setOnlines(res.data.online_user_ids)
      );
      console.log(onlines);

      {
        onlines &&
          onlines.map((memberID) => {
            getUser(memberID).then((res) => {
              console.log("Here");
              setOnlineMembers([...onlineMembers, res.data]);
            });
          });
      }
    };

    getActivities().then(setLoading(false));
  }, []);

  if (!loading && onlineMembers !== 0) {
    console.log(onlineMembers);
    return (
      <div id="main_dashboard">
        <div className="dashboard_graphs">
          <div className="widgets">
            <Widget />
          </div>
          <div className="dashboard_barcharts_group">
            <div className="dashboard_barchart">
              <BarChart />
            </div>
            <div className="main_div">
              <div className="dashboard_donutchart">
                <DonutChart />
              </div>
              <div className="active_table_ingym">
                <h2>Activities</h2>
                {onlineMembers.map((onlineMember) => (
                  <span>{onlineMember.email}</span>
                ))}
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }
}
export default DashboardPage;

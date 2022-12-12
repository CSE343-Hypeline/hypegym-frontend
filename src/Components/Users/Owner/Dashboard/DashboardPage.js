import React from "react";
import BarChart from "../../../Charts/BarChart";
import DonutChart from "../../../Charts/DonutChart";
import SideBar from "../../../Utils/SideBar";
import Widget from "../../../Widgets/Widget";
import "./dashboard.css";

function DashboardPage() {
  return (
    <div id="main_dashboard">
      <SideBar />
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
            <div className="active_table_ingym">Activities</div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
export default DashboardPage;

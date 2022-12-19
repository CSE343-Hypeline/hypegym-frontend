import React from "react";
import BarChart from "../../../Charts/BarChart";
import DonutChart from "../../../Charts/DonutChart";
import Widget from "../../Member/Widgets/Widget";
import "./dashboard.css";

function DashboardPage() {
  return (
    <div id="main_dashboard">
      <div className="dashboard_graphs">
        <div className="widgets">
          <Widget />
        </div>
      </div>
    </div>
  );
}
export default DashboardPage;

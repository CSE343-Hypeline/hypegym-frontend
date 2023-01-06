import React from "react";
import BarChart from "../../../Charts/BarChart";
import DonutChart from "../../../Charts/DonutChart";
import Exercises from "../Exercises/Exercises"
import "./dashboard.css";
import MemberNavbar from "./MemberNavbar";
import Measurement from "../Measurements/Measurement";
import CardDemo from "./CardDemo"
function DashboardPage() {
  return (
    <div id="main_dashboard">
      <MemberNavbar />
      {/* <div className="dashboard_graphs">
        <div className="widgets">
          <div className="first">  <Exercises /></div>
          <div className="second"> <Measurement /></div>
          <div className="activity"> Your Activities So Far</div>
        </div>
      </div>
       */}
      <CardDemo />

    </div>
  );
}
export default DashboardPage;

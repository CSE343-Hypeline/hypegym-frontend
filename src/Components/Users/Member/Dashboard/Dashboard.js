import React from "react";
import BarChart from "../../../Charts/BarChart";
import DonutChart from "../../../Charts/DonutChart";
import Exercises from "../Exercises/Exercises"
import "./dashboard.css";
import MemberNavbar from "./MemberNavbar";
import Measurement from "../Measurements/Measurement";

function DashboardPage() {
  return (
    <div id="main_dashboard">
      <MemberNavbar />
      <div className="dashboard_graphs">
        <div className="widgets">
          <div className="first">  <Exercises /></div>
          <div className="second"> <Measurement /></div>
        </div>
      </div>
    </div>
  );
}
export default DashboardPage;

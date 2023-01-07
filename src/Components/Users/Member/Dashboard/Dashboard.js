import React from "react";
import BarChart from "../../../Charts/BarChart";
import DonutChart from "../../../Charts/DonutChart";
import Exercises from "../Exercises/Exercises"
import "./dashboard.css";
import NavbarDashboard from "../NavbarDashboard/NavbarDashboard";
import Measurement from "../Measurements/Measurement";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';



function DashboardPage() {
  const header = (
    <img alt="Card" src="images/usercard.png" onError={(e) => e.target.src = 'https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png'} />
  );

  return (
    <div id="main_dashboard">
      <div className="dashboard_graphs">
        <NavbarDashboard />
        <div className="widgets">
          <div className="first">
            <Card title="Your Exercises" subTitle="Subtitle" style={{ width: '20em' }} >
              <p className="m-1" ><Exercises /></p>
            </Card>
          </div>
          <div className="second">
            <Card title="Your Measurements" subTitle="Subtitle" style={{ width: '20em' }} >
              <p className="m-1" ><Measurement /></p>
            </Card>
          </div>
        </div>
        <div className="third">
          <Card title="Your Activities So Far" subTitle="Subtitle" style={{ width: '20em' }} >
            <p className="m-1" > Your Activities So Far</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default DashboardPage;

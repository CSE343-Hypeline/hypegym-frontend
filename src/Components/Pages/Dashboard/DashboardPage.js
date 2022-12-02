import React from 'react'
import { Lightning } from 'react-bootstrap-icons'
import SideBar from '../../../utils/sidebars/SideBar'
import BarChart from '../../Charts/BarChart'
import DonutChart from '../../Charts/DonutChart'
import LoginNavbar from '../../Login Navbar/LoginNavbar'
import Widget from '../../widget/Widget'
import './dashboard.css'

function DashboardPage() {
    return (

        < div id='main_dashboard'>

            <SideBar />

            <div className='dashboard_graphs'>
                {/* <LoginNavbar /> */}
                <div className='widgets'>
                    <Widget />


                </div>
                <div className='dashboard_barcharts_group'>
                    <div className='dashboard_barchart'>
                        <BarChart />

                    </div>

                    <div className='dashboard_donutchart'>
                        <DonutChart />

                    </div>
                </div>
            </div>

        </div>
    )
}
export default DashboardPage
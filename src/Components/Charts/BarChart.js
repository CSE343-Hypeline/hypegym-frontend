import { title } from 'process';
import React from 'react'
import Chart from 'react-apexcharts';


function BarChart() {
    return (
        <React.Fragment>

            <Chart type='bar'
                width={500}
                height={400}
                series={
                    [
                        {
                            name: "male",
                            data: [100, 70, 150, 50, 50, 100, 60, 30, 40, 40, 70, 70],
                        },
                        {
                            name: "female",
                            data: [70, 80, 50, 40, 70, 20, 30, 60, 20, 60, 80, 50],
                        },
                    ]
                }
                options={{
                    title: {
                        text: "Numbers of Members by Month",
                        style: { fontSize: 18, color: "#f7c02c" }
                    },
                    subtitle: {
                        text: "Number of Members by Month",
                        style: { fontSize: 10, color: "#f7c02c" }
                    },
                    color: ['#f90000'],
                    theme: { mode: 'dark' },

                    xaxis: {
                        // tickPlacement: "on",
                        categories: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
                        title: {
                            // text: "social media",
                            // style: { color: "", fontSize: 8 }
                        }

                    },

                    yaxis: {
                        labels: {
                            formatter: (val) => { return `${val}` },
                            style: {
                                fontSize: '15',
                                colors: ["#f7c02c"]
                            }
                        },
                        title: {
                            text: "Numbers",
                            style: { color: "#f7c02c", fontSize: 15 }
                        }
                    },
                    toolbar: {
                        show: false,
                    },

                    legend: {
                        show: true,
                        position: "right"
                    },

                    dataLabels: {
                        formatter: (val) => { return `${val}` },
                        style: {
                            colors: ["white"],
                            fontSize: 10
                        }
                    }

                }
                } ></Chart>
        </React.Fragment >
    )
}

export default BarChart;
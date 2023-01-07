import React from "react";
import Chart from "react-apexcharts";

function DonutChart() {
  /*VERİLERİ URL OLARAK ALDIGIMIZDA EKLENİLECEK */

  // const [contryname, setCountryname]= useState([]);
  // const [medal, setMedal]= useState([]);

  // useEffect( ()=>{
  //  const getdata= async()=>{
  //       const countryname=[];
  //       const getmedal=[];

  //     const reqData= await fetch("http://localhost/reactgraphtutorial/medals");
  //     const resData= await reqData.json();
  //     for(let i=0; i<resData.length; i++)
  //     {
  //         countryname.push(resData[i].country);
  //         getmedal.push(parseInt(resData[i].medals));
  //     }
  //     setCountryname(countryname);
  //     setMedal(getmedal);

  //  }
  //  getdata();
  // },[]);

  return (
    <React.Fragment>
      <div className="container-fluid mt-3 mb-3">
        <Chart
          type="donut"
          width={300}
          height={200}
          series={[45, 67]}
          options={{
            // theme: { mode: 'white' },
            labels: ["Number of Joined", "Others"],
            title: {
              text: "Rates of Members",
            },

            theme: { mode: "light" },
            color: ["#f90000"],
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    total: {
                      fontSize: 500,
                      color: "red",
                    },
                  },
                },
              },
            },

            dataLabels: {
              enabled: true,
            },
          }}
        />
      </div>
    </React.Fragment>
  );
}
export default DonutChart;

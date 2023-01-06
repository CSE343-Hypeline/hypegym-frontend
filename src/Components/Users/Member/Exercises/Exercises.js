// import React, { useState } from "react";
// import "./exercises.css";

// function Widget() {
//   const [trainProgram, setTrainProgram] = useState();

//   return (
//     <div className="widget">
//       <div>
//         <h1 className="title">Your Exercises</h1>
//         <hr />
//         <div className="exercises">
//           <span>SQUAT</span>
//           <span>BENCH PRESS</span>
//           <span>UPRIGHT ROW</span>
//           <span>DEADLIFT</span>
//         </div>
//       </div>
//       <div className="sets">
//         <h1 className="title">Reps</h1>
//         <hr />
//         <div className="exercises">
//           <span>5x12</span>
//           <span>1x22</span>
//           <span>2x55</span>
//           <span>5x18</span>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default Widget;

import React from "react";
import { useState } from "react";
import "./exercises.css";
import img1 from "../../../../../src/assets/img/img1.jpg";

const exercisearray = [
  { exercise: "squat", reps: "5x12" },
  { exercise: "bench", reps: "1x22" },
];

const Row = (props) => {
  const { exercise, reps } = props;
  return (
    <tr>
      <td>{exercise}</td>
      <td>{reps}</td>
    </tr>
  );
};

const Table = (props) => {
  const { data } = props;
  return (
    <table>
      <tbody>
        {data.map((row, index) => (
          <Row key={`key-${index}`} exercise={row.exercise} reps={row.reps} />
        ))}
      </tbody>
    </table>
  );
};

function Exercises() {
  const [rows, setRows] = useState(exercisearray);
  return (
    <div className="widget">
      <div className="product-card">
        <h1 className="titlem">Table Exercises</h1>
        {/* <img  src='../../../../../src/assets/img/img1.jpg' /> */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />
        <Table data={rows} />
      </div>
    </div>
  );
}
export default Exercises;

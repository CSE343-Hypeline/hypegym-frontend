import React, { useState } from "react";
import "./widget.css";

function Widget() {
  const [trainProgram, setTrainProgram] = useState();

  return (
    <div className="widget">
      <div>
        <h1 className="title">Your Exercises</h1>
        <hr />
        <div className="exercises">
          <span>SQUAT</span>
          <span>BENCH PRESS</span>
          <span>UPRIGHT ROW</span>
          <span>DEADLIFT</span>
        </div>
      </div>
      <div className="sets">
        <h1 className="title">Reps</h1>
        <hr />
        <div className="exercises">
          <span>5x12</span>
          <span>1x22</span>
          <span>2x55</span>
          <span>5x18</span>
        </div>
      </div>
    </div>
  );
}
export default Widget;

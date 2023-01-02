import React from "react";
import "./gymmember.css";
import TableP from "./TableP";
import MemberTable from "./MemberTable";

function GymMemberPage(gym_id) {
  return (
    <div id="main_gymmember">
      <div className="gymmember_background">
        <MemberTable gym_id={gym_id} />
      </div>
    </div>
  );
}
export default GymMemberPage;

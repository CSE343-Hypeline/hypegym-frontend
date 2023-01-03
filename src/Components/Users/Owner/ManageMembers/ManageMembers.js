import React from "react";
import "./gymmember.css";
import TableP from "./TableP";
import { Button } from "primereact/button";

function GymMemberPage(gym_id) {
  return (
    <div className="manage-member">
      <div>
        <Button label="ADD MEMBER" icon="pi pi-plus" />
      </div>

      <div>
        <TableP />
      </div>
    </div>
  );
}
export default GymMemberPage;

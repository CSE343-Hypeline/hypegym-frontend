import $ from "jquery";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import { getMembers } from "../../../API";

function MemberTable(gym_id) {
  const [members, setMembers] = useState();

  useEffect(() => {
    $(document).ready(function () {
      $("#dataTable").DataTable();
    });

    // getMembers(gym_id).then((res) => {
    //   setMembers(res.data);
    // });
  }, []);

  if (members) {
    console.log(members);
    return (
      <div className="table">
        <table id="table" className="display">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Address</th>
              <th>Gender</th>
            </tr>
          </thead>
          <tbody>
            {/* {console.log(members)}
            {members.map((member, i) => (
              <tr key={i}>
                <td>{member.name}</td>
                <td>{member.phone_number}</td>
                <td>{member.email}</td>
                <td>{member.address}</td>
                <td>{member.gender}</td>
              </tr>
            ))} */}
            <tr>
              <td>Tiger Nixon</td>
              <td>System Architect</td>
              <td>Edinburgh</td>
              <td>61</td>
              <td>2011/04/25</td>
              <td>$320,800</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Address</th>
              <th>Gender</th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  } else return <h1>Loading...</h1>;
}

export default MemberTable;

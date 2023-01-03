import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { getMembers } from "../../../API";

function MemberTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getMembers(1).then((res) => setProducts(res.data));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  console.log(products);
  return (
    <div className="card">
      <DataTable value={products}>
        <Column field="name" header="Name"></Column>
        <Column field="email" header="Email"></Column>
        <Column field="phone_number" header="Phone Number"></Column>
        <Column field="address" header="Address"></Column>
      </DataTable>
    </div>
  );
}
export default MemberTable;

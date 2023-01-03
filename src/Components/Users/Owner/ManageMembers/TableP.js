import "./TableP.css";
import { addMember, apiMe, deleteMember, getMembers } from "../../../API";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./gymmember.css";
import { Button } from "primereact/button";
import AddMember from "./AddMember";

const initialMember = {
  name: "",
  phone_number: "",
  email: "",
  password: "",
  address: "",
  gym_id: "",
  role: "",
  gender: "",
};

const TableP = () => {
  const [contacts, setContacts] = useState();
  const [isSubmit, setIsSubmit] = useState(0);
  const [newMember, setNewMember] = useState(initialMember);
  // const [selectedProduct, setSelectedProduct] = useState(null);
  const [gymId, setGymId] = useState(0);

  useEffect(() => {
    apiMe().then((response) => {
      setGymId(response.data.gym_id);

      setNewMember({
        gym_id: response.data.gym_id,
      });

      getMembers(response.data.gym_id).then((response) => {
        setContacts(response.data);
        console.log(response.data);
      });
    });
  }, []);

  useEffect(() => {
    if (isSubmit === 200 || isSubmit === 201) {
      getMembers(gymId).then((response) => {
        setContacts(response.data);
        setIsSubmit(0);
      });
    }
  }, [isSubmit]);

  const deleteButtonBody = (rowData) => {
    return (
      <>
        <Button
          onClick={() => {
            deleteMember(rowData.ID)
              .then((response) => {
                setIsSubmit(response.status);
              })
              .catch((e) => alert(e));
          }}
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger p-button-outlined"
        />
        <Button
          onClick={() => {
            deleteMember(rowData.ID)
              .then((response) => {
                setIsSubmit(response.status);
              })
              .catch((e) => alert(e));
          }}
          icon="pi pi-pencil"
          className="p-button-rounded p-button-success mr-2"
        />
      </>
    );
  };

  return (
    <div className="manage-member">
      <div>
        <AddMember gym_id={gymId} setIsSubmit={setIsSubmit} />
      </div>

      <div className="app-container">
        <div className="card">
          <DataTable
            value={contacts}
            // selection={selectedProduct}
            // onSelectionChange={(e) => setSelectedProduct(e.value)}
          >
            <Column field="name" header="Name"></Column>
            <Column field="email" header="Email"></Column>
            <Column field="phone_number" header="Phone Number"></Column>
            <Column field="address" header="Address"></Column>
            <Column header="Delete" body={deleteButtonBody}></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
};

export default TableP;

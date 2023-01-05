import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { ProgressSpinner } from "primereact/progressspinner";
import AddMember from "./AddMember";
import "./Style.css";
import { apiMe, deleteMember, getMembers } from "../../../API";

const ManageMembers = () => {
  const [members, setMembers] = useState();
  const [isSubmit, setIsSubmit] = useState(0);
  const [gymId, setGymId] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    apiMe().then((response) => {
      setGymId(response.data.gym_id);
      getMembers(response.data.gym_id).then((response) => {
        setMembers(response.data);

        setLoading(false);

        console.log(response.data);
      });
    });
  }, []);

  useEffect(() => {
    if (isSubmit === 200 || isSubmit === 201) {
      getMembers(gymId).then((response) => {
        setMembers(response.data);
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
      </>
    );
  };

  if (loading) {
    return (
      <div className="spinner">
        <ProgressSpinner />
      </div>
    );
  } else {
    return (
      <div className="manage-member">
        <div>
          <AddMember gym_id={gymId} setIsSubmit={setIsSubmit} />
        </div>

        <div className="app-container">
          <div className="card">
            <DataTable value={members}>
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
  }
};

export default ManageMembers;

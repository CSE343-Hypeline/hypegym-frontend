import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import AddTrainers from "./AddTrainers";
import "./Style.css";
import { apiMe, deleteMember, getTrainers } from "../../../API";

const ManageTrainers = () => {
  const [trainers, setTrainers] = useState();
  const [isSubmit, setIsSubmit] = useState(0);
  const [gymId, setGymId] = useState(0);

  useEffect(() => {
    apiMe().then((response) => {
      setGymId(response.data.gym_id);
      getTrainers(response.data.gym_id).then((response) => {
        setTrainers(response.data);
        console.log(response.data);
      });
    });
  }, []);

  useEffect(() => {
    if (isSubmit === 200 || isSubmit === 201) {
      getTrainers(gymId).then((response) => {
        setTrainers(response.data);
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

  return (
    <div className="manage-member">
      <div>
        <AddTrainers gym_id={gymId} setIsSubmit={setIsSubmit} />
      </div>

      <div className="app-container">
        <div className="card">
          <DataTable value={trainers}>
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

export default ManageTrainers;

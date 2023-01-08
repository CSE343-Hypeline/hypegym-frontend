import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import "primeflex/primeflex.css";
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { MultiSelect } from 'primereact/multiselect';
import { ProgressSpinner } from "primereact/progressspinner";
import { FilterMatchMode, FilterOperator } from "primereact/api";

import AddMember from "./AddMeasurementExercise";
import "./styleManage.css";
// import { apiMe, deleteMember, getMembers } from "../../../API";


// const members = [
//   { exercise: "squat", reps: "4x12" },
//   { exercise: "bench press", reps: "4x12" },
//   { exercise: "Upright Row", reps: "4x12" },
//   { exercise: "Seated Overhead Press", reps: "4x12" },
//   { exercise: "Pull Ups", reps: "4x12" },
// ];

const exercise = [
  { label: "squat", value: 355 },
  { label: "bench press", value: 54 },
  { label: "Upright Row", value: 43 },
  { label: "Seated Overhead Pres", value: 61 },
  { label: "Pull Ups", value: 965 },

];

const cities = [
  { name: 'New York', code: 'NY' },
  { name: 'Rome', code: 'RM' },
  { name: 'London', code: 'LDN' },
  { name: 'Istanbul', code: 'IST' },
  { name: 'Paris', code: 'PRS' }
];

const ManageMembersPT = () => {
  // const [members, setMembers] = useState([]);
  const [isSubmit, setIsSubmit] = useState(0);
  const [gymId, setGymId] = useState(0);
  const [loading, setLoading] = useState(true);
  const [globalFilterValue1, setGlobalFilterValue1] = useState("");
  const [filters1, setFilters1] = useState(null);
  const [selectedexercises, setselectedexercises] = useState(null);
  // useEffect(() => {
  //   apiMe().then((response) => {
  //     setGymId(response.data.gym_id);
  //     getMembers(response.data.gym_id).then((response) => {
  //       setMembers(response.data);

  //       setLoading(false);
  //     });
  //     initFilters1();
  //   });
  // }, []);

  // useEffect(() => {
  //   if (isSubmit === 200 || isSubmit === 201) {
  //     getMembers(gymId).then((response) => {
  //       setMembers(response.data);
  //       setIsSubmit(0);
  //     });
  //   }
  // }, [isSubmit]);

  const deleteButtonBody = (rowData) => {
    return (
      <>
        {/* <Button
          options={exercise}
          icon="pi pi-trash"
          className="p-button-rounded p-button-danger p-button-outlined"
        /> */}


        <MultiSelect value={selectedexercises} options={cities} onChange={(e) => setselectedexercises(e.value)} optionLabel="name" placeholder="Select exercises" maxSelectedLabels={3} />


      </>
    );
  };

  const renderHeader1 = () => {
    return (
      <div className="flex justify-content-between">
        <Button
          type="button"
          icon="pi pi-filter-slash"
          label="Clear"
          className="p-button-outlined"
          onClick={clearFilter1}
        />
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue1}
            onChange={onGlobalFilterChange1}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    );
  };
  const onGlobalFilterChange1 = (e) => {
    const value = e.target.value;
    let _filters1 = { ...filters1 };
    _filters1["global"].value = value;

    setFilters1(_filters1);
    setGlobalFilterValue1(value);
  };
  const clearFilter1 = () => {
    initFilters1();
  };

  const initFilters1 = () => {
    setFilters1({
      global: { value: null, matchMode: FilterMatchMode.CONTAINS },
      name: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      email: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.STARTS_WITH }],
      },
      phone_number: { value: null, matchMode: FilterMatchMode.IN },
      address: {
        operator: FilterOperator.AND,
        constraints: [{ value: null, matchMode: FilterMatchMode.CONTAINS }],
      },
    });
    setGlobalFilterValue1("");
  };

  // if () {
  //   return (
  //     <div className="spinner">
  //       <ProgressSpinner />
  //     </div>
  //   );
  // } else {
  return (
    <div className="manage-member">
      <div>
        {/* <AddMember gym_id={gymId} setIsSubmit={setIsSubmit} /> */}
      </div>

      <div className="app-container">
        <div className="card">
          <DataTable
            value={exercise}
            responsiveLayout="scroll"
            filters={filters1}
            filterDisplay="menu"
            globalFilterFields={["name", "email", "phone_number", "address"]}
            header={renderHeader1}
            emptyMessage="No members found."
            style={{ width: "50vw" }}
          >
            <Column
              field="name"
              header="Name"
              filterField="name"
              sortable
            ></Column>
            <Column field="email" header="Email" sortable></Column>
            <Column
              field="exercise"
              header="Exercises"
              sortable
            ></Column>
            <Column field="reps" header="Measurements" sortable></Column>
            {/* <Column <AddMember gym_id={gymId} setIsSubmit={setIsSubmit} />/> */}
            <Column header="Add Exercises" body={deleteButtonBody}></Column>

          </DataTable>
        </div>
      </div>
    </div>
  );

};

export default ManageMembersPT;

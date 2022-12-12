import React, { useState, Fragment, useEffect } from "react";
import "./TableP.css";
import data from "./mock-data.json";
import ReadOnlyRow from "./ReadOnlyRow";
import { addMember, getMembers } from "../../../API";

const initialMember = {
  email: "",
  password: "",
  role: "MEMBER",
  gym_id: 1,
};

const TableP = () => {
  const [contacts, setContacts] = useState(data);
  const [isSubmit, setIsSubmit] = useState(0);
  const [newMember, setNewMember] = useState(initialMember);

  useEffect(() => {
    getMembers().then((response) => {
      setContacts(response.data);
    });
  }, []);

  useEffect(() => {
    if (isSubmit === 201) {
      getMembers().then((response) => {
        setContacts(response.data);
        setIsSubmit(0);
      });
    }
  }, [isSubmit]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewMember((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
    console.log(newMember);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addMember(newMember).then((response) => setIsSubmit(response.status));
    setNewMember(initialMember);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>Gym Member Name</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts &&
              contacts.map((contact) => (
                <Fragment>
                  <ReadOnlyRow
                    contact={contact}
                    handleDeleteClick={handleDeleteClick}
                  />
                </Fragment>
              ))}
          </tbody>
        </table>
      </form>

      <h2>Add New Gym Member</h2>
      <form onSubmit={handleSubmit}>
        {/* <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Fullname"
          onChange={handleChange}
        /> */}

        {/* <input
          type="number"
          name="phoneNumber"
          required="required"
          placeholder="Phone Number"
          onChange={handleChange}
        /> */}
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          required="required"
          placeholder="Password"
          onChange={handleChange}
        />
        <button className="button_add" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default TableP;

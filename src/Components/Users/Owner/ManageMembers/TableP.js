import React, { useState, Fragment, useEffect } from "react";
import "./TableP.css";
import ReadOnlyRow from "./ReadOnlyRow";
import { addMember, apiMe, deleteMember, getMembers } from "../../../API";

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

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNewMember((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submit: ");

    addMember(newMember).then((response) => setIsSubmit(response.status));
    setNewMember(initialMember);
  };

  const handleDeleteClick = (contactId) => {
    deleteMember(contactId)
      .then((response) => {
        setIsSubmit(response.status);
      })
      .catch((e) => alert(e));
  };

  return (
    <div className="app-container">
      <form onSubmit={handleSubmit}>
        <table>
          <thead>
            <tr>
              <th>Adress</th>
              <th>Phone Number</th>
              <th>Email</th>
              <th>Delete</th>

              {/* <th>Email</th>
              <th>Password</th>
              <th>Actions</th> */}
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

        <input
          name="name"
          required="required"
          placeholder="Name"
          onChange={handleChange}
          value={newMember.name}
        />

        <input
          name="address"
          required="required"
          placeholder="Address"
          onChange={handleChange}
          value={newMember.address}
        />
        <input
          name="phone_number"
          required="required"
          placeholder="Phone number"
          onChange={handleChange}
          value={newMember.phone_number}
        />
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Email"
          onChange={handleChange}
          value={newMember.email}
        />
        <input
          type="text"
          name="password"
          required="required"
          placeholder="Password"
          onChange={handleChange}
          value={newMember.password}
        />
        <button className="button_add" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};

export default TableP;

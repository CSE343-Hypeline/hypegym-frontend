import React, { useState, Fragment, useEffect } from "react";
import "./TableP.css";
import ReadOnlyRow from "./ReadOnlyRow";
import { addMember, apiMe, deleteMember, getMembers } from "../../../API";

const initialMember = {
  name: "",
  email: "",
  password: "",
  address: "",
  role: "MEMBER",
  phone_number: "",
  gym_id: 0,
};

const TableP = () => {
  const [contacts, setContacts] = useState();
  const [isSubmit, setIsSubmit] = useState(0);
  const [newMember, setNewMember] = useState();
  const [gymId, setGymId] = useState();

  useEffect(() => {
    setNewMember(initialMember);
    apiMe()
      .then((response) => {
        setGymId(response.data.gym_id);
        console.log(response.data.gym_id);
      })
      .then(() =>
        getMembers(gymId).then((response) => {
          setContacts(response.data);
          console.log(response.data);
        })
      );
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

    setNewMember((prevState) => {
      return {
        ...prevState,
        gymId: 1,
      };
    });

    console.log(newMember);
    addMember(newMember).then((response) => setIsSubmit(response.status));
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
        />

        <input
          name="address"
          required="required"
          placeholder="Address"
          onChange={handleChange}
        />
        <input
          name="phone_number"
          required="required"
          placeholder="Phone number"
          onChange={handleChange}
        />
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

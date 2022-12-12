import React from "react";
import "./row.css";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      {/* <td>{contact.fullName}</td> */}
      {/* <td>{contact.phoneNumber}</td> */}
      <td>{contact.email}</td>
      {/* <td>{contact.password}</td> */}

      <td>
        <button
          type="button"
          className="button_edit"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button
          type="button"
          className="button_delete"
          onClick={() => handleDeleteClick(contact.id)}
        >
          X
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;

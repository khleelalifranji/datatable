import React, { useState } from "react";

const Addform = ({ onCreate }) => {
  const [state, setState] = useState({
    id: "",
    FirstName: "",
    LastName: "",
    email: ""
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(state);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          ID:{" "}
          <input
            type="text"
            name="id"
            value={state.id}
            onChange={handleChange}
          />
        </label>

        <label>
          First Name:{" "}
          <input
            type="text"
            name="FirstName"
            value={state.FirstName}
            onChange={handleChange}
          />
        </label>

        <label>
          Last name:{" "}
          <input
            type="text"
            name="LastName"
            value={state.LastName}
            onChange={handleChange}
          />
        </label>

        <label>
          Eamil:{" "}
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
          />
        </label>
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Addform;

import React from "react";

const Table = ({ data, updatedData }) => {
  /* delete function: we pass our data array, catch the id of
  person which we want to delete it from our list
  and then we will filter this list with other persons using array.filter method
   */
  /* updatedData: it basically is a function which it can get the filteredArray
  result and put it in our setState in parent component */
  const deletedata = (id) => {
    const filteredArray = data.filter((data) => data.id !== id);
    updatedData(filteredArray);
  };

  /* the body of our component(table) make it using jsx */
  return (
    <div>
      <table className="table table-striped table-dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full name</th>
            <th>Avater</th>
            <th>email</th>
            <th>delete data</th>
          </tr>
        </thead>
        <tbody>
          {/* map method to make loop in all object inside our array
          so we dont need make all table row */}
          {data.map((person) => (
            <tr key={person?.id}>
              <td>{person?.id}</td>
              <td>
                {person?.first_name} {person?.last_name}
              </td>
              <td>
                <img src={person?.avatar} alt="avater"></img>
              </td>
              <td>{person?.email}</td>
              <td>
                <button
                  className="btn btn-danger"
                  /*event when we click it pass the person id which one 
                  we want to delete it to deletedata function */
                  onClick={() => deletedata(person?.id)}
                >
                  Delete
                </button>
                <button className="btn btn-primary"> Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

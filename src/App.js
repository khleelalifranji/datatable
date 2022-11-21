import React, { useState, useEffect } from "react";
import Table from "./Table";
import Addform from "./Addform";
import { Button, Modal } from "antd";

const App = () => {
  //in data: it stores the information that is received and it is an array
  /* setData: enqueues changes to the component 
  state and tells React that this component 
  and its children need to be re-rendered 
  with the updated state. */
  const [data, setData] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = (event, newItem) => {
    setData((prev) => [...prev, newItem]);
    setIsModalOpen(false);
  };

  console.log("data", data);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  /* call the data from an endpointAPI using fetch */
  /* setData:  the current state value that lets you update it */
  /* we use *user.data* because we have a object inside object in our api  */
  useEffect(() => {
    fetch("https://reqres.in/api/users?page=1")
      .then((respo) => respo.json())
      .then((user) => setData(user.data));
  }, []);

  /* it receive data from child component to pass it to our setState */
  const updatedData = (newData) => {
    setData(newData);
  };

  // const onSave = (state) => {
  //   console.log("state", state)
  //   setData(state);
  // };

  /* call childen component in parent *app* */
  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add new person
      </Button>

      <Modal
        title="Add new person"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Addform onCreate={handleOk} />
      </Modal>
      <Table data={data} updatedData={updatedData} />
    </div>
  );
};

export default App;

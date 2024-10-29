import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";


import EditTask from "../modals/EditTask";

const Cards = ({ taskObj, index, deleteTask, updateListArray }) => {
  const [show, setShow] = useState(false);

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };
  return (
   <>
      <div className="card-wrapper mr-5">
        <div
          className="card-top"
          style={{ "background-color": colors[index % 5].primaryColor }}
        ></div>
        <div className="task-holder">
          <span
            className="card-header"
            style={{
              "background-color": colors[index % 5].secondaryColor,
              "border-radius": "10px",
            }}
          >
            {taskObj.Name}
          </span>
          <p className="mt-3">{taskObj.Descripcion}</p>

          <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
            <ButtonGroup aria-label="Basic example">
              <Button variant="secondary" onClick={handleShow}>Editar</Button>
              <Button variant="secondary" onClick={handleDelete}>Eliminar</Button>
              
            </ButtonGroup>
          </div>
        </div>
        
      
    </div>
    <EditTask show={show} handleClose={handleClose} updateTask={updateTask} taskObj={taskObj}></EditTask>
    </>
  );
};

export default Cards;

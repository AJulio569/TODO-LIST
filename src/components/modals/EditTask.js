import React, { useState ,useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const EditTask = ({show, handleClose, updateTask, taskObj}) => {
    const [taskName, setTaskName] = useState("");
    const [descripcion, setDescripcion] = useState("");

    const handleChange =(e) =>{
        const {name, value} = e.target;

        if(name === "taskName"){
            setTaskName(value);

        }else{
            setDescripcion(value);
        }
    }
        useEffect(() => {
            setTaskName(taskObj.Name)
            setDescripcion(taskObj.Descripcion)
        },[])

        const handleUpdate = (e) => {
            e.preventDefault();
            let tempObj = {}
            tempObj['Name'] = taskName
            tempObj['Descripcion'] = descripcion
            updateTask(tempObj)
        }
    

    return (
         
      <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar Tarea</Modal.Title>
      </Modal.Header>
      <Modal.Body>

        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Usuario</Form.Label>
            <Form.Control
              value={taskName}
              onChange={handleChange}
              name='taskName'
              type="email"
              placeholder="name@example.com"
              autoFocus
            />
          </Form.Group>
          <Form.Group
            className="mb-3"
            controlId="exampleForm.ControlTextarea1"
          >
            <Form.Label>Descripción de tarea</Form.Label>
            <Form.Control value={descripcion} onChange={handleChange} name='descripcion' as="textarea" rows={3} />
          </Form.Group>
        </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleUpdate}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    );
}


export default EditTask;

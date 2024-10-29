import React, { useEffect, useState } from 'react';
import CreateTask from '../modals/CreateTask';
import Cards from './Cards';
import './Cards.css'


const TodoList = () => {

    const [show, setShow] = useState(false);
    const [taskList, setTaskList] = useState([]);

  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(()=>{
        let arr = localStorage.getItem("taskList");
        
        if (arr) {
            let obj = JSON.parse(arr);
            
            setTaskList(obj)
            
        }

    },[])

    const saveTask=(taskObj)=>{
        let templist = taskList;
        templist.push(taskObj);
        localStorage.setItem("taskList", JSON.stringify(templist));
        setTaskList(templist);
        setShow(false)
    }

    const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    




    return (
       <>
         <div className='header text-center'>
        <h3>Tareas</h3>
        <button   className='btn btn-primary mt-2' onClick={handleShow}>Crear Tarea</button>

        </div>

        <div className='task-container'>
        {taskList && taskList.map((obj,index) => <Cards taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray}></Cards>)}
        </div>
        

        <CreateTask show={show}  handleClose={handleClose} save={saveTask}></CreateTask>
       </>
    );
}

export default TodoList;

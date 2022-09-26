
// // //Example:-1 //Adding To-Do
import React, { useState } from "react";
import "./ToDoList.css"
export const ToDoList = () => {
  const [toDo, settoDo] = useState([]);
  const [toDos, setToDoss] = useState("");

  const addItem = () => {
    if(toDos === ""){
       alert("please enter ToDo")
    }else{
       settoDo([...toDo, toDos]);
    setToDoss("");
    }
   
  };

  // function handleEditInputChange(e) {
  //   settoDo({ ...settoDo, text: e.target.value });
  //   console.log(toDo);
  // }

  // const editTodo = (id) => {
  //   // let newTodo = settoDo([...toDo, toDos]);
  //   // setToDoss("");
  //   // let newTodo = prompt("Edit your todo here")
  //   const newTodos = [...toDo]
  //   newTodos[id] = newTodo;
  //   settoDo(newTodo);
  // }
 


  return (
    <div className="toDosMain">
    <h1>To-Do List</h1>
      <input
        type="text"
        value={toDos}
        placeholder={"Add To-Do"}
        onChange={(e) => setToDoss(e.target.value)}
      />
      <button onClick={addItem} className="AddBtn">Add ToDo</button>
      {toDo.map((item) => (
        <div className="ToDos-Area">
          <p type="text" id={item} className="input_field" >{item}</p>
          <button className="EditBtn" >Edit ToDo</button>
          {/* <button id="editBtn" onClick={editTodo}>Edit</button> */}
          <button className="DeleteBtn"
            onClick={() => {
              let filteredtoDo = toDo.filter((value) => value !== item);
              settoDo([...filteredtoDo]);
            }}
          >
            delete
          </button> 
          </div>
      ))}
    </div>
  );
};


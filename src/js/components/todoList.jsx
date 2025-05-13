import React, { useState } from "react";

export const TodoList = () =>{
    const [inputvalue, setinputvalue] = useState("")
    const [todos, setTodos] = useState([])
    const handleOnChange =(e) =>{
        setinputvalue(e.target.value)
    }

    const handleOnClick =() =>{
        setTodos([...todos, inputvalue])
    }

    const handleDelete = (index) =>{
        const updateTodos = todos.filter((todos,i)=> i !== index)
        setTodos(updateTodos)
    }

    return(
        <div className="container">
            <h2>todolist</h2>
            <div className="container__input">
                <input type="text" value={inputvalue} onChange={handleOnChange}/>
                <button className="btn-Add" onClick={handleOnClick}>Add</button>
            </div>
            <ul className="lista">
                {
                    todos.length > 0 ? todos.map((todos,index) =>{
                        return (
                            <li key={index}>{todos}lista de tareas<button className="btn-Delete" onClick={()=> handleDelete(index)}>Delete</button></li>
                        )
                    })
                    :
                    <p className="mt-3">No Hay Tareas Aun</p>
                }
            </ul>
        </div>
    )
}


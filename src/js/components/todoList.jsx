import React, { useState } from "react";

export const TodoList = () =>{
    const [inputvalue, setinputvalue] = useState("")
    const [todos, setTodos] = useState([])
    const handleOnChange =(e) =>{
        setinputvalue(e.target.value)
    }

    const handelOnSubmit =(e) =>{
        e.preventDefault();
        setTodos([...todos, inputvalue])
    }

    const handleDelete = (index) =>{
        const updateTodos = todos.filter((todos,i)=> i !== index)
        setTodos(updateTodos)
    }

    return(
        <div className="container">
            <h3>ToDoList</h3>
            <form onSubmit={handelOnSubmit}>
            <div>
                <input type="text" value={inputvalue} onChange={handleOnChange}/>
            </div>
            </form>
            <ul className="lista">
                {
                    todos.length > 0 ? todos.map((todos,index) =>{
                        return (
                            <li className="list" key={index}>{todos}<button className="btn-Delete" onClick={()=> handleDelete(index)}><i class="fa-solid fa-x"></i></button></li>
                        )
                    })
                    :
                    <p>no tasks, add tasks</p>
                }
            </ul>
        </div>
    )
}


import { useState } from "react"
import {v4 as uuidv4} from "uuid";
import "./TodoList.css"

export default function TodoList() {
    let [todos, setTodos] = useState([{task:"sample task", id:uuidv4(), isDone:false}]);   
    let [newTodo , setNewTodo] = useState("")

    let addNewTask = () =>{
        newTodo = newTodo.trim()
        if(newTodo !== ''){
            setTodos((prevTodos)=>{
                return [...prevTodos, {task:newTodo,  id:uuidv4(), isDone:false}];
            });
            setNewTodo("");
        }
        
    };

    let updateTodoValue = (event) =>{
        setNewTodo(event.target.value);
    }

    let deleteTodo = (id) =>{
        setTodos((prevTodos) => prevTodos.filter((prevTodo) => prevTodo.id != id));
    }

    // let upperCaseAll = ()=>{
    //     setTodos((prevTodos)=>prevTodos.map((todo)=>{
    //         return {...todo,task:todo.task.toUpperCase(),}
    //     }));
    // }

    let markAsDoneAll = ()=>{
        setTodos((prevTodos)=>prevTodos.map((todo)=>{
            return {...todo,isDone:true}
        }));
    }

    // let upperCaseOne = (id)=>{
    //     setTodos((prevTodos)=>prevTodos.map((todo)=>{
    //         if(todo.id === id){
    //             return {...todo,task:todo.task.toUpperCase(),}
    //         }else{
    //             return todo;
    //         }
    //     }));
    // }
    let markAsDone = (id)=>{
        setTodos((prevTodos)=>prevTodos.map((todo)=>{
            if(todo.id === id){
                return {...todo, isDone:true}
            }else{
                return todo;
            }
        }));
    }
    let obj = {
        "padding" : "3px",
        "text-color" : "white",
        
    }
  return (
    <div>
        <input type="text" placeholder="Add a task" value={newTodo} onChange={updateTodoValue} /><br /><br />
        <button onClick={addNewTask}>Add Task</button>
        <br /><br /><br /><br /><br />
        <hr />
        <h4>todos Todo</h4>
        <ul style={obj} className="list">
            {todos.map(todo =>(
                <li key={todo.id}>
                    <span style={todo.isDone ? {textDecorationLine:"line-through"} : {}}>{todo.task}</span>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    <button onClick={()=>deleteTodo(todo.id)}>delete</button>
                    &nbsp; &nbsp; &nbsp; &nbsp;
                    {/* <button onClick={()=>markAsDone(todo.id)}>UpperCase One</button> */}
                    <button onClick={()=>markAsDone(todo.id)}>Mark As Done</button>
                </li>
            ))}
        </ul>
        <br /><br />
        {/* <button onClick={markAsDoneAll}>UpperCase All</button> */}
        <button onClick={markAsDoneAll}>Mark All As Done</button>
    </div>
  )
}


import React, {useState} from "react";
import up_arrow from './assets/up-arrow.png'
import down_arrow from './assets/down-arrow.png'

function TodoList(){
    const [Tasks, setTasks] = useState([])
    const [NewTask, setNewTask] = useState()

    function HandleNewTask(event){
        setNewTask(event.target.value)
    }
    function Add_Task(){
        if(NewTask.trim() != ''){
            setTasks(T => [...T, NewTask])
            setNewTask("")
        }
    }
    function Rem_Task(index){
        setTasks(Tasks.filter((_, i ) => i != index))
    }

    function move_Up(index){
        if(index > 0){
            const updatedArrey = [...Tasks];

            [updatedArrey[index], updatedArrey[index - 1]] 
                             = 
            [updatedArrey[index - 1], updatedArrey[index]]

            setTasks(updatedArrey);
        }
    }
    function move_down(index){
        if(index < Tasks.length - 1 ){
            const updatedArrey = [...Tasks];
            
            [updatedArrey[index], updatedArrey[index + 1]] 
                             = 
            [updatedArrey[index + 1], updatedArrey[index]]

            setTasks(updatedArrey);
        }
    }

    return(
        <div className="Todo_App">
            <h1>To Do List App</h1>
            <div className="inputs">
                <input type="text" placeholder="Add Task......" onChange={HandleNewTask} value={NewTask}/>
                <button onClick={Add_Task}>Add Task</button>
            </div>
            <div className="Tasks">
            {Tasks.map((Task, index)=>
                <div className="task" key={index}>
                    <p>{Task}</p>
                    <div className="buttons">
                        <button onClick={()=>Rem_Task(index)} >Delete</button>
                        <button ><img onClick={()=>move_Up(index)} src={up_arrow} alt=""/></button>
                        <button onClick={()=>move_down(index)} ><img src={down_arrow} alt=""/></button>
                    </div>
               </div>
            )}
                
            </div>
        </div>
    )
}

export default TodoList
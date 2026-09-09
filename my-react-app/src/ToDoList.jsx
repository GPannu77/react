import React, {useState} from 'react'

function ToDoList(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask(){

    }

    function deleteTask(index){

    }

    function moveTaskUp(index){

    }



    return(<div className="to-do-list">
        <h1>To-Do-List</h1>

        <div>
            <input type="text" 
                   placeholder="Enter a task..." 
                   value={newTask}
                   onChange={handleInputChange}></input>
            
            <button className="add-Button"
                    onChange={addTask}>Add</button>
        </div>

        <ol>
            {tasks.map((task, index) => 
            <li key={index}>
                <span className="text">{task}</span>
            </li>)}
        </ol>
    </div>)
}

export default ToDoList
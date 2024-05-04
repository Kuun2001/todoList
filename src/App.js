import React, {useState} from "react";
import "./App.css";
import Header from "./components/Header";
import TaskLList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
function App() {
    const [tasks, setTasks] = useState([
        {id: "task 1", title: "Learn JS", status: 0},
        {id: "task 2",title: "Code a Todo List", status: 0}
    ])
    const [showIncomplete, setShowIncomplete] = useState(false);
    const [newTask, setNewTask]= useState("")
    const handleSumbit = (e) => {
        e.preventDefault();
        if (newTask){
            const task ={ 
                id: Date.now(),
                title: newTask,
                status: 0,
            };
            setTasks([...tasks, task]);
            setNewTask("");
        }
        };
        const handleInputChange = (e) =>{
            setNewTask(e.target.value);
        }
        const setTaskStatus = (taskID, status) =>{
            setTasks(tasks.map(task => {
                if(task.id === taskID){
                    return {...task, status: status ? 1 : 0}
                }
                return task;
            }))
        };
        const removeTask = (taskID) => {
            setTasks(tasks.filter(task => task.id !== taskID));
        }
        return(
            <div className="container">
            <Header title="Todo List" subTitle="Get things done"/>
            <TaskLList  
                tasks={tasks} 
                showIncomplete={showIncomplete} 
                setTaskStatus={setTaskStatus} 
                removeTask={removeTask} 
                setShowIncomplete={setShowIncomplete}
             />
            <AddTaskForm   
                newTask={newTask} 
                handleSumbit={handleSumbit} 
                handleInputChange={handleInputChange}
             />
           </div>
        );
    }

export default App;
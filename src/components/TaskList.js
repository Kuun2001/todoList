import React from 'react'
import Tasksitems from './Tasksitems';
function TaskLList({tasks, showIncomplete, setTaskStatus, removeTask, setShowIncomplete}) {
  return (
    <>
    <ul className="task-list">
            {tasks
            .filter(task => showIncomplete ? task.status !== 1 : true )
            .map(task => (
              <Tasksitems
              ey = {task.id} 
              task = {task} 
              setTaskStatus={setTaskStatus} 
              removeTask={removeTask}
              />

            ))}
            </ul>
            <div className="filter-wrapper">
            <label htmlFor="filter" className="filter-label">Show incompleted task only</label>
            <input type="checkbox" id="filter" checked={showIncomplete} onChange={(e) =>setShowIncomplete(e.target.checked)}/>
          </div>
          </>
  )
}

export default TaskLList

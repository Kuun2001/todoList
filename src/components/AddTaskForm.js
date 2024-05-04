import React from 'react'

function AddTaskForm({newTask, handleSumbit, handleInputChange}) {
  return (
    <form onSubmit= {handleSumbit} className="form">
              <label htmlFor="newitem">Add to the List</label>
              <input type="'text'" id="newitem" value={newTask} onChange={handleInputChange}/>
              <button type="submit">Add Item</button>
            </form>
  )
}

export default AddTaskForm

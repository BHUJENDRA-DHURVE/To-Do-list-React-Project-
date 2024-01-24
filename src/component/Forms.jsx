import React, { useState } from 'react';

const Forms = () => {
  const [title, setTitle] = useState("");
  const [selectedPriority, setSelectedPriority] = useState('Low Priority');
  const [lowPriorityTasks, setLowPriorityTasks] = useState([]);
  const [mediumPriorityTasks, setMediumPriorityTasks] = useState([]);
  const [highPriorityTasks, setHighPriorityTasks] = useState([]);

  const addTask = () => {
    if (title.trim() !== "") {
      const newTask = { title, priority: selectedPriority };
      switch (selectedPriority) {
        case 'Low Priority':
          setLowPriorityTasks([...lowPriorityTasks, newTask]);
          break;
        case 'Medium Priority':
          setMediumPriorityTasks([...mediumPriorityTasks, newTask]);
          break;
        case 'High Priority':
          setHighPriorityTasks([...highPriorityTasks, newTask]);
          break;
        default:
          break;
      }
      setTitle(""); 
    }
  };

  const deleteTask = (priority, index) => {
    switch (priority) {
      case 'Low Priority':
        setLowPriorityTasks(lowPriorityTasks.filter((_, i) => i !== index));
        break;
      case 'Medium Priority':
        setMediumPriorityTasks(mediumPriorityTasks.filter((_, i) => i !== index));
        break;
      case 'High Priority':
        setHighPriorityTasks(highPriorityTasks.filter((_, i) => i !== index));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Priority To-Do List App Style Guide</h1>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <input
                className="form-control"
                type="text"
                placeholder="Add a new Task"
                aria-label="default input example"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </div>
            <div className="col-md-auto col">
              <div className="dropdown">
                <button
                  className="btn btn-light dropdown-toggle border"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {selectedPriority}
                </button>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#" onClick={() => setSelectedPriority('Low Priority')}>Low Priority</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => setSelectedPriority('Medium Priority')}>Medium Priority</a></li>
                  <li><a className="dropdown-item" href="#" onClick={() => setSelectedPriority('High Priority')}>High Priority</a></li>
                </ul>
              </div>
            </div>
            <div className="col">
              <div className="col col-lg-2">
                <button type="button" className="btn btn-primary" onClick={addTask}>
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container text-start">
          <div className="row align-items-start">
            <div className="col">
              <h4>Low Priority List</h4>
              <ul className="list-group mt-3">
                {lowPriorityTasks.map((task, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    {task.title}
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteTask('Low Priority', index)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col">
              <h4>Medium Priority List</h4>
              <ul className="list-group mt-3">
                {mediumPriorityTasks.map((task, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    {task.title}
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteTask('Medium Priority', index)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col">
              <h4>High Priority List</h4>
              <ul className="list-group mt-3">
                {highPriorityTasks.map((task, index) => (
                  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                    {task.title}
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => deleteTask('High Priority', index)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forms;

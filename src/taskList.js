import {React, useContext} from 'react'
import { TaskContext } from './taskContext'

const TaskList = (props) => {
  const {state, dispatch} = useContext(TaskContext);
  const {tasks} = state;
    return (
    <div>
      <ul>
        {tasks.length === 0 ?(
            <p>No Tasks</p>
        ):(
            tasks.map((task, index) => {
            return(
                <li key={index} style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
                  <input type="checkbox" checked={task.completed} onChange={() => dispatch({type: 'TOGGLE_TASK', payload: index}) }/>
                  {task.text}
                  <button onClick={() => dispatch({type: 'REMOVE_TASK', payload: index})}>Delete</button>
                </li>
             )
            })
        )}
      </ul>
    </div>
  )
}

export default TaskList;

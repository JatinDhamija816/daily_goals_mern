import React from 'react'

const Tasks = ({ title, desc, deleteTask, id }) => {
    return (
        <div className='tasks'>
            <div className='task'>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <button onClick={() => { deleteTask() }} className='delete'>-</button>
        </div>
    )
}

export default Tasks

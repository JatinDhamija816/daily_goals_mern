import React from 'react'

const Tasks = ({ title, desc }) => {
    return (
        <div className='tasks'>
            <div className='task'>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <button className='delete'>-</button>
        </div>
    )
}

export default Tasks

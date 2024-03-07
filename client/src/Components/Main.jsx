import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Main = () => {
    const [tasks, setTask] = useState([])
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    console.log(tasks)
    const Submit = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/createTodo', { title, desc })
            .then((response) => {
                setTask([...tasks, response.data])
                window.location.reload()
            })
            .catch(err => console.log(err))
        setTitle('')
        setDesc('')
    }
    const deleteTask = async (id) => {
        await axios.delete(`http://localhost:5000/delete/${id}`)
            .then(res => {
                window.location.reload()
            })
    }
    useEffect(() => {
        axios.get('http://localhost:5000/getTodo')
            .then((response) => {
                setTask(response.data)
            })
    }, []);

    return (
        <div className='main'>
            <h1>TODO App</h1>
            <form onSubmit={Submit} >
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Enter Title' />
                <textarea
                    placeholder='Enter Description'
                    value={desc}
                    onChange={(e) => setDesc(e.target.value)}></textarea>
                <button className='submit'>Submit</button>
            </form>
            {
                tasks.map((item, index) => (
                    <div key={index} className='tasks'>
                        <div className='task'>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </div>
                        <button onClick={(e) => deleteTask(item._id)} className='delete'>-</button>
                    </div>
                ))
            }
        </div >
    )
}

export default Main

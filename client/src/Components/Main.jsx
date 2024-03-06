import React, { useEffect, useState } from 'react'
import Tasks from './Tasks'
import axios from 'axios'
const Main = () => {

    const [tasks, setTask] = useState([])
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')

    const Submit = async (e) => {
        e.preventDefault()
        await axios.post('/createTodo', { title, desc })
            .then((response) => {
                setTask(response.data)
            })
        setTitle('')
        setDesc('')
    }
    useEffect(() => {
        axios.get('/getTodo')
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
                <button type='submit' className='submit'>Submit</button>
            </form>
            {
                tasks.map((item, index) => (
                    <Tasks
                        key={index}
                        title={item.title}
                        desc={item.desc}
                    />
                ))
            }
        </div>
    )
}

export default Main

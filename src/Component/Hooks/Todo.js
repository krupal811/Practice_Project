import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Todo = () => {


    const [todoName, setTodoName] = useState("")
    const [todolist, setTodoList] = useState([])

    const todohandle = (e) => {
        setTodoName(e.target.value)

    }

    const handleClick = () => {
        setTodoList(todolist.concat(todoName))
        // axios.post("https://jsonplaceholder.typicode.com/posts")
        //     .then(res => {
        //         console.log("res===>", res);
        //     })
        //     .catch(arr => {
        //         console.log("arr===>", arr);
        //     })
    }
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(response => {
                console.log("response==>", response)
            })
            .catch(arr => {
                console.log("arr===>", arr);
            })
    }, [])
    const handleMouseMove = (event) => {
        console.log(event.clientX, event.clientY);
    }
    useEffect(() => {
        document.addEventListener('click', handleMouseMove)
        return () => {
            document.removeEventListener('click', handleMouseMove)
        }
    }, [])
    return (
        <>
            <input type="text" placeholder='Type' value={todoName} onChange={todohandle} />
            <button onClick={handleClick}>Clicked Me!!</button>
            <ul>
                {
                    todolist.map(todo => (
                        <li key={todo} >{todo}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default Todo;


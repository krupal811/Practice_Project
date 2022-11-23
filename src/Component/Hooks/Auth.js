// import React from 'react'
// import { useState } from 'react'
// import { useContext } from 'react'
// import Authcontxt from './auth-contxt'

// const Auth = () => {
//     const auth = useContext(Authcontxt)

//     return (
//         <div>
//             <button onClick={auth.login}>Log in!!</button>
//             {/* <Authcontxt.Consumer>
//             {(btn)=>{
//                 return(
//                     <button onClick={btn.login}>Log in!!</button>
//                 )
//             }}
//         </Authcontxt.Consumer> */}

//         </div>
//     )
// }

// export default Auth;


import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useReducer } from 'react'

// const initialvalue = 0;

const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === "INCREMENT") {
        return state + 1
    }
    if (action.type === "DECREMENT") {
        return state - 1
    }
    return state;
}

const Auth = () => {
    const [todoName, setTodoName] = useState("")
    const [todolist, setTodoList] = useState([])

    const todohandle = (e) => {
        setTodoName(e.target.value)

    }
    const handleClick = () => {
        setTodoList(todolist.concat(todoName))
    }

    const [state, dispatch] = useReducer(reducer, 0)// initialvalue)
    const [width, setWidth] = useState(window.screen.width)

    const actualWidth = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {  
        window.addEventListener("resize", actualWidth)
        return () => {
            window.removeEventListener("resize", actualWidth)
        }
    })


    return (
        <div>
            <p>{state}</p>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>INC</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>DEC</button>
            <input type="text" placeholder='Type' value={todoName} onChange={todohandle} />
            <button onClick={handleClick}>Clicked Me!!</button>
            <h1>{width}</h1>
            <ul>
                {
                    todolist.map(todo => (
                        <li key={todo.id}  >{todo}</li>
                    ))
                }
            </ul>

        </div>
    )
}

export default Auth;

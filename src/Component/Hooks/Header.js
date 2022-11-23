import React, { useContext } from 'react'
import Authcontxt from './auth-contxt'

const Header = (props) => {
    const auth = useContext(Authcontxt)


    return (
        <>
            <div>
                {auth.status ? <button onClick={props.onLoadTodos}>Todo List</button> : null}
                <button onClick={props.onLoadAuth}>Auth</button>
            </div>
        </>
    )
}

export default Header


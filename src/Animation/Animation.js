import React from 'react'
import { useState } from 'react'
import { Transition } from "react-transition-group";

const Animation = () => {
    const [toggle, setToggle] = useState(false)
    const onClick = () => {
        setToggle(!toggle)
    }
    return (
        <div>
            <div className="App">
                <button onClick={onClick}>BUTTON</button>
                <Transition in={toggle} timeout={5000} mountOnEnter appear>
                    {toggle => <div className={`item item--${toggle}`} />}
                </Transition>
            </div>
        </div>
    )
}

export default Animation
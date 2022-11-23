import React from 'react'
import './input.css'

const Input = () => {
    return (
        <div className='body'>
            <div className="form">
                <input type="text" id="email" className="form__input" autocomplete="off" placeholder=" " />
                <label htmlFor="email" className="form__label">Email</label>
            </div>
        </div>
    )
}

export default Input
import React from 'react'

const Plan = ({ value, handleDeleteClick, id }) => {
    return (
        <div>
            <ul style={{ fontSize: '25px', color: 'white', fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}>
                <li>{value}</li>
                {value && <button className='cancle_btn' onClick={() => handleDeleteClick(id)}>X</button>}
            </ul>
        </div>

    )
}

export default Plan
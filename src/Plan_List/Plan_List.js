import React from 'react'
import { useState } from 'react'
import Plan from './Plan'
import './Plan_List.css'

const Plan_List = () => {
    const [items, setItems] = useState([])
    const [text, setText] = useState('')

    var min = 11111;
    var max = 99999;
    var groupid = min + (Math.random() * (max - min));
    const handleAddClick = () => {
        if (text !== '') {
            setItems([...items, text])
            setText('')
            console.log(' groupid()', groupid);
        } else {
            alert('Please Enter Your Plan')
        }
    }
    const handleDeleteClick = (id) => {
        // const Olditems = [...items]
        // const item = Olditems.filter((element, i) => {
        //     return i !== id
        // })
        // setItems(item)
        setItems([...items].filter((element, index) => index !== id))
        // console.log('id', id);
    }
    return (
        <div className='plan_list_body'>
            <div className='plan_list_content'>
                <div style={{ width: "100%" }}>
                    <h1 className='plan_txt'>Today's Plan</h1>
                    <input type="text" className='txt_input' value={text} onChange={(e) => setText(e.target.value)} />
                    <button className='add_btn' onClick={handleAddClick}>Add</button>
                    {
                        items.map((value, ind) => {
                            return (
                                <Plan value={value} key={ind} id={ind} handleDeleteClick={handleDeleteClick} />
                            )
                        })
                    }
                    <Plan />
                </div>
            </div>
        </div>
    )
}

export default Plan_List
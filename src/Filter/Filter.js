import moment from 'moment'
import React, { useEffect, useState } from 'react'

import './filter.css'

const Filter = () => {
    const [items, setItems] = useState('')
    const [allItems, setAllItems] = useState([])

    const fruitsOptions = [
        {
            key: 'Apple',
            text: 'Apple',
            value: 'Apple'

        },
        {
            key: 'Banana',
            text: 'Banana',
            value: 'Banana'
        },

        {
            key: 'Orange',
            text: 'Orange',
            value: 'Orange'
        },
        {
            key: 'Pinaple',
            text: 'Pinaple',
            value: 'Pinaple'
        },
        {
            key: 'Grapes',
            text: 'Grapes',
            value: 'Grapes'
        },
        {
            key: 'Mango',
            text: 'Mango',
            value: 'Mango'
        },

    ]

    const handleClick = (updateValue) => {
        console.log('Click', updateValue);
        setItems(updateValue)
        setAllItems([])
    }

    const handleChange = (e) => {
        setItems(e.target.value)
        const { value } = e.target
        setAllItems(fruitsOptions.filter((item) => item.value.toLocaleLowerCase().includes(value.toLocaleLowerCase())))
    }
    const userData = [
        { name: "Jeevan" },
        { name: "Manish" },
        { name: "Prince" },
        { name: "Arti" },
        { name: "rahul" }
    ];

    const [users, setUsers] = useState([]);

    useEffect(() => {
        setUsers(userData);
    }, []);

    const handleChange2 = (e) => {
        const { name, checked } = e.target;
        console.log('checked', checked);
        if (name === "allSelect") {
            let tempUser = users.map((user) => {
                console.log('user====>', user)
                return { ...user, isChecked: checked };
            });
            setUsers(tempUser);
        } else {
            let tempUser = users.map((user) =>
                user.name === name ? { ...user, isChecked: checked } : user
            );
            setUsers(tempUser);
        }
    };

    return (
        <div className='filter_body'>
            <div className='resultss_body'>
                {
                    allItems?.map((result, ind) => {
                        return (
                            <div className='resultss' key={ind} onClick={() => handleClick(result.value)}>{result.value}</div>
                        )
                    })
                }
            </div>
            <div className="form-input">
                <input type="text" id="email" className="form__input" autocomplete="off" placeholder=" "  value={items}
                onChange={(e) => handleChange(e)}/>
                <label htmlFor="email" className="form__label">Email</label>
            </div>
            <div className="container my-4" style={{ width: "500px" }}>
                <form className="form w-100">
                    <h3>Select Users</h3>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            name="allSelect"
                            checked={
                                users.filter((user) => user?.isChecked !== true).length < 1
                            }
                            // checked={!users.some((user) => user?.isChecked !== true)}
                            onChange={handleChange2}
                        />
                        <label className="form-check-label ms-2">All Select</label>
                    </div>
                   { console.log(moment('2022-10-12T00:00:00.000Z').utc().format('MM/DD/YYYY'))}
                    {users.map((user, index) => (
                        <div className="form-check" key={index}>
                            <input
                                type="checkbox"
                                className="form-check-input"
                                name={user.name}
                                checked={user?.isChecked || false}
                                onChange={handleChange2}
                            />
                            <label className="form-check-label ms-2">{user.name}</label>
                        </div>
                    ))}
                </form>
            </div>
        </div>
    )
}

export default Filter
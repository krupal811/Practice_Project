import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './UseEffect.css'

const UseEffectProject = () => {
    const [user, setUser] = useState([])
    const [order, setOrder] = useState("ASC")
    let arr = []

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
            console.log('response==>', response);
            // setUser(response.data)
            response.data.map((user) => {
                arr.push({ "name": user.name, "email": user.email, "street": user.address.street, "companyName": user.company.name })
            })
            setUser(arr)
            console.log('arr=>', arr);
        })
    }, [])

    const sorting = (col) => {
        console.log('col', col);
        if (order === "ASC") {
            const sorted = [...user].sort((a, b) =>
                a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
            )
            setUser(sorted)
            setOrder("DSC")
        }
        if (order === "DSC") {
            const sorted = [...user].sort((a, b) =>
                a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
            )
            setUser(sorted)
            setOrder("ASC")
        }

    }
    return (
        <>
            <div className='app-container '>
                <table className='table table-bordered'>
                    <button className='heading_content' onClick={() => sorting("name")} >Name</button>
                    <button className='heading_content' onClick={() => sorting("email")}>E-mail</button>
                    <button className='heading_content' onClick={() => sorting('street')}>Street</button>
                    <button className='heading_content' onClick={() => sorting("companyName")}>Company-Name</button>

                    {
                        user.map((curElem) => {
                            return (
                                <div key={curElem.id}>
                                    {/* <table className="table"> */}
                                    {/* <tbody> */}
                                    <tr className="table">
                                        <td className='table_content'>{curElem.name}</td>
                                        <td className='table_content'>{curElem.email}</td>
                                        <td className='table_content'>{curElem.street}</td>
                                        <td className='table_content'>{curElem.companyName}</td>
                                    </tr>
                                    {/* </tbody> */}
                                    {/* </table> */}
                                </div>
                            )
                        })
                    }
                </table>
            </div>
        </>
    )
}

export default UseEffectProject;
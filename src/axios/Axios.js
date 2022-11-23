import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Axios = () => {

    const [data, setData] = useState([])
    const [user, setUser] = useState([])

    useEffect(() => {
        getData()
        getUser()
    }, [])
    const getData = () => {
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
            console.log('res', res.data);
            setData(res.data)
        }).catch((err) => {
            console.log('err', err);
        })
    }
    const getUser = () => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            console.log('res', res.data);
            setUser(res.data)
        }).catch((err) => {
            console.log('err', err);
        })
    }

    return (
        <>
            {
                data.slice(0, 3).map((data) => {
                    return (
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{data.body}</h5>
                                <p className="card-text">{data.title}</p>
                            </div>
                        </div>
                    )
                })
            }
            {
                user.slice(0, 3).map((data) => {
                    return (
                        <div className="card" style={{ width: "18rem" }}>
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{data.email}</h5>
                                <p className="card-text">{data.name}</p>
                                <p className="card-text">{data.username}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Axios
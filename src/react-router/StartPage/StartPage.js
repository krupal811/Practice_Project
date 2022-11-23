import React, { useEffect, useState } from 'react'

import { Route, Routes } from 'react-router'
import NavBar from '../NavBar/NavBar'
import Home from '../Home/Home'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Services from '../Services/Services'

const StartPage = () => {
    const location = new URL(window.location.href).pathname
    const pageName = location.slice(1)
    console.log('pageName', pageName);
    const [page, setPage] = useState('')
    useEffect(() => {
        setPage(pageName)
    }, [])
    return (
        <>
            <header><h1 className='header'>Welcome to Our Page</h1></header>
            <NavBar />
            <Routes>
                <Route exat path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/service' element={<Services />} />
            </Routes>
            <footer
                style={{
                    color: "#fff",
                    textAlign: "center",
                    backgroundColor: "#333",
                    position: "fixed",
                    padding: 20,
                    bottom: 0,
                    width: "100%",
                    opacity: 0.8
                }}
            >@ Copyright 2019-2022. All rightd reserved. Powered By the <strong style={{ cursor: "pointer" }}>Rainmaker Platform</strong>
            </footer>

        </>
    )
}

export default StartPage;
import React, { useState } from 'react'
import {
    Button,
    Grid,
    Icon,
    Menu
} from 'semantic-ui-react'

import './navBar.css'
import { Link, useNavigate } from 'react-router-dom'


import { useLocation } from 'react-router-dom'

const NavBar = () => {
    const [isMobile, setIsMobile] = useState(false)
    const [isActive, setIsActive] = useState(0)

    const location = useLocation();
    console.log("location==>", location.pathname);
    const handleBtnClick = (btn) => {
        setIsActive(btn)
    }
    return (
        <>
            <div>
                <header className='header'>
                    <nav>
                        <ul className={isMobile ? 'nav_link_monbile' : 'nav_links'} >
                            <li onClick={() => {
                                handleBtnClick(0)
                                setIsMobile(!isMobile)
                            }
                            }
                            >
                                <Link to='/'>
                                    <Button style={{ marginLeft: 10, color: (isActive === 0 ? "white" : 'black'), backgroundColor: (isActive === 0 && "black") }}>Home</Button>
                                </Link>
                            </li>
                            <li onClick={() => {
                                handleBtnClick(1)
                                setIsMobile(!isMobile)
                            }}>
                                <Link to='/about'>
                                    <Button style={{ marginLeft: 10, color: (isActive === 1 ? "white" : 'black'), backgroundColor: (isActive === 1 && "black") }}>about</Button>
                                </Link>
                            </li>
                            <li onClick={() => {
                                handleBtnClick(2)
                                setIsMobile(!isMobile)
                            }}>
                                <Link to='/contact'>
                                    <Button style={{ marginLeft: 10, color: (isActive === 2 ? "white" : 'black'), backgroundColor: (isActive === 2 && "black") }}>contact</Button>
                                </Link>
                            </li>
                            <li onClick={() => {
                                handleBtnClick(3)
                                setIsMobile(!isMobile)
                            }}>
                                <Link to='/service'>
                                    <Button style={{ marginLeft: 10, color: (isActive === 3 ? "white" : 'black'), backgroundColor: (isActive === 3 && "black") }}>service</Button>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <div className="mobile-menu-icon">
                    <Button
                        onClick={() => setIsMobile(!isMobile)}
                        className='iconss'
                        icon={isMobile ? 'bars' : 'cancel'}
                    >
                    </Button>
                </div>

                {location.pathname === '/' ?
                    <h4 style={{
                        position: "absolute",
                        right: 10,
                        top: 0,
                        border: "1px solid black",
                        borderRadius: 15,
                        padding: 6,
                        cursor: "pointer",
                        color: "blue"
                    }}>login</h4> : null}


                {location.pathname === '/about' ?
                    <h4 style={{
                        position: "absolute",
                        right: 10,
                        top: 0,
                        border: "1px solid black",
                        borderRadius: 15,
                        padding: 6,
                        cursor: "pointer",
                        color: "blue"
                    }}>logout</h4> : null}

            </div>
        </>
    )
}

export default NavBar


